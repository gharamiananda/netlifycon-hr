import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  EyeIcon,
  MoreHorizontal,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PayslipFileUploadDialog from "@/features/payslip/components/PayslipFileUploadDialog";
import { useDebounce } from "@/hooks/useDebounce";
import axiosInstance from "@/lib/axios-instance";
import type { TResponse } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { offerLetterStatus, type IOfferLetter } from "../service/store";
import { PDFPreviewDialog } from "./PDFPreviewDialog";
import { Card } from "@/components/ui/card";

export function TableSkeleton({
  rows = 5,
  columns = 5,
}: {
  rows?: number;
  columns?: number;
}) {
  return (
    <div className="w-full space-y-2 p-4">
      {[...Array(rows)].map((_, rowIndex) => (
        <div key={rowIndex} className="flex w-full gap-2">
          {[...Array(columns)].map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-6 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const getOfferLetterColumns = (
  setSelectedOffer: (offer: IOfferLetter) => void,
  setDetailsOpen: (open: boolean) => void
): ColumnDef<IOfferLetter>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "employeeName",
    header: "Employee Name",
    cell: ({ row }) => <div>{row.getValue("employeeName")}</div>,
  },
  {
    accessorKey: "employeeEmail",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("employeeEmail")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "employeeDesignation",
    header: "Designation",
  },
  {
    accessorKey: "netPay",
    header: "Net Payble",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const offer = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              disabled
              className="cursor-pointer"
              onClick={() => {
                setSelectedOffer(offer);
                setDetailsOpen(true);
              }}
            >
              View Details <EyeIcon />
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              Resend Email
              <Send />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

type FetchSentEmailsParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  month: string;
  year: number;
  status: offerLetterStatus;
};

async function fetchSentEmails({
  page = 1,
  limit = 5,
  searchTerm = "",
  month,
  year,
  status = offerLetterStatus.ALL,
}: FetchSentEmailsParams): Promise<TResponse<IOfferLetter[]> | undefined> {
  try {
    const params: Record<string, string | number> = {
      page,
      limit,
      ...(searchTerm && { searchTerm }),
      month,
      year,
    };
    if (status !== offerLetterStatus.ALL) {
      params.status = status;
    }
    const response = await axiosInstance.get<TResponse<IOfferLetter[]>>(
      "/payslip",
      { params }
    );
    return response.data;
  } catch (error: unknown) {
    const errMsg =
      error instanceof Error ? error.message : "Something went wrong!";
    toast.error(errMsg);
  }
}
const currentYear = new Date().getFullYear();
const lastFiveYears = Array.from({ length: 5 }, (_, i) => currentYear - i);
const currentMonth = new Date().getMonth() + 1; // JS months are 0-based, so +1 for 1-12

export function SalaryList() {
  const [sentEmails, setSentEmails] = useState<IOfferLetter[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOffer, setSelectedOffer] = useState<IOfferLetter | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [yearFilter, setYearFilter] = useState<number>(currentYear);
  const [statusFilter, setStatusFilter] = useState<offerLetterStatus>(
    offerLetterStatus.ALL
  );
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [monthFilter, setMonthFilter] = useState((currentMonth - 1).toString());

  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(1);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });
  const columns = useMemo(
    () => getOfferLetterColumns(setSelectedOffer, setDetailsOpen),
    []
  );
  const table = useReactTable({
    data: sentEmails ?? [],
    columns,
    pageCount: totalPages,
    manualPagination: true,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
  });
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const res = await fetchSentEmails({
        page: pagination.pageIndex + 1,
        limit: pagination.pageSize,
        searchTerm: debouncedSearchTerm,
        month: monthFilter,
        year: yearFilter,
        status: statusFilter,
      });
      if (res) {
        if (res.data) {
          setSentEmails(res.data);
        }
        if (res.meta && res.meta.totalPage) {
          setTotalPages(res.meta.totalPage);
        }
      }
      setLoading(false);
    };

    loadData();
  }, [
    pagination.pageIndex,
    pagination.pageSize,
    debouncedSearchTerm,
    monthFilter,
    yearFilter,
    statusFilter,
  ]);
  const isMonthDisabled = (monthValue: number) => {
    if (!yearFilter) return false; // no year selected, enable all months
    if (yearFilter > currentYear) return true; // future year: disable all months
    if (yearFilter === currentYear && monthValue >= currentMonth) return true; // current year: disable future months
    return false; // past year: enable all
  };
  return (
    <>
      <Card className="w-full mt-6 p-3 dark:bg-[#212946] rounded-sm">
        <div className="flex items-center py-4 justify-between">
          <h1 className="text-2xl font-bold text-[#673ab7]">Salary Slip</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Import csv</Button>
            </DialogTrigger>
            <PayslipFileUploadDialog />
          </Dialog>
        </div>
        <div className="flex items-center py-4 justify-between">
          <Input
            placeholder="Search employee name/email/designation..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />

          <div className="flex gap-3">
            <div className="flex gap-3">
              <Select
                value={statusFilter}
                onValueChange={(value: offerLetterStatus) =>
                  setStatusFilter(value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={offerLetterStatus.ALL}>All</SelectItem>
                  <SelectItem value={offerLetterStatus.SENT}>Sent</SelectItem>
                  <SelectItem value={offerLetterStatus.DRAFT}>Draft</SelectItem>
                  <SelectItem value={offerLetterStatus.FAILED}>
                    Failed
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Select
              value={yearFilter?.toString() || ""}
              onValueChange={(value) => {
                setYearFilter(Number(value));
              }}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                {lastFiveYears.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={monthFilter}
              onValueChange={(value) => setMonthFilter(value)}
              disabled={!yearFilter} // disable month select if year not selected
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Month" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((monthName, index) => {
                  const monthValue = index + 1;
                  return (
                    <SelectItem
                      key={monthValue}
                      value={monthValue.toString()}
                      disabled={isMonthDisabled(monthValue)}
                    >
                      {monthName}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="">
          <div className="rounded-md border">
            {loading ? (
              <TableSkeleton rows={4} columns={6} />
            ) : (
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                          </TableHead>
                        );
                      })}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={columns.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            )}
          </div>

          <div className="flex items-center justify-between px-4 pt-3">
            <div className="text-muted-foreground hidden flex-1 text-sm lg:flex">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="flex w-full items-center gap-8 lg:w-fit">
              <div className="hidden items-center gap-2 lg:flex">
                <Label htmlFor="rows-per-page" className="text-sm font-medium">
                  Rows per page
                </Label>
                <Select
                  value={`${table.getState().pagination.pageSize}`}
                  onValueChange={(value) => {
                    table.setPageSize(Number(value));
                  }}
                >
                  <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                    <SelectValue
                      placeholder={table.getState().pagination.pageSize}
                    />
                  </SelectTrigger>
                  <SelectContent side="top">
                    {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                      <SelectItem key={pageSize} value={`${pageSize}`}>
                        {pageSize}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-fit items-center justify-center text-sm font-medium">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </div>
              <div className="ml-auto flex items-center gap-2 lg:ml-0">
                <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className="sr-only">Go to first page</span>
                  {/* <IconChevronsLeft />  */}
                  <ChevronsLeft />
                </Button>
                <Button
                  variant="outline"
                  className="size-8"
                  size="icon"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className="sr-only">Go to previous page</span>
                  <ChevronLeft />
                </Button>
                <Button
                  variant="outline"
                  className="size-8"
                  size="icon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <span className="sr-only">Go to next page</span>
                  <ChevronRight />
                </Button>
                <Button
                  variant="outline"
                  className="hidden size-8 lg:flex"
                  size="icon"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <span className="sr-only">Go to last page</span>
                  {/* <IconChevronsRight /> */}
                  <ChevronsRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogTrigger asChild></DialogTrigger>
        <PDFPreviewDialog offerLetterId={selectedOffer?._id} />
      </Dialog>
    </>
  );
}

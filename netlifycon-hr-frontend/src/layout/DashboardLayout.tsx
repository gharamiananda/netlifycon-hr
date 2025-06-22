// import { AppSidebar } from "@/components/AppSidebar";
// import { ModeToggle } from "@/components/mode-toggle";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
// import {
//   SidebarInset,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";
// import { useAuth } from "@/context/AuthContext";
// import { useEffect } from "react";
// import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

// export default function DashboardLayout() {
//   const navigate = useNavigate();

//   const { loading, isAuthenticated } = useAuth();

//   useEffect(() => {
//     if (!loading && !isAuthenticated) {
//       navigate("/");
//     }
//   }, [loading]);

//   const { pathname } = useLocation();
//   const isActiveItem =
//     pathname.includes("dashboard/sent-email") ||
//     pathname.includes("dashboard/draft-email");
//   return (
//     <SidebarProvider
//       style={
//         {
//           "--sidebar-width": "350px",
//         } as React.CSSProperties
//       }
//     >
//       <AppSidebar />
//       <SidebarInset>
//         <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
//           {isActiveItem && (
//             <>
//               <SidebarTrigger className="-ml-1" />

//               <Separator
//                 orientation="vertical"
//                 className="mr-2 data-[orientation=vertical]:h-4"
//               />

//               <Breadcrumb>
//                 <BreadcrumbList>
//                   <BreadcrumbItem className="hidden md:block">
//                     <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
//                   </BreadcrumbItem>
//                   <BreadcrumbSeparator className="hidden md:block" />
//                   <BreadcrumbItem>
//                     <BreadcrumbPage>
//                       {pathname.includes("dashboard/sent-email")
//                         ? "Sent"
//                         : "Draft"}
//                     </BreadcrumbPage>
//                   </BreadcrumbItem>
//                 </BreadcrumbList>
//               </Breadcrumb>
//             </>
//           )}
//           <div className="ml-auto flex gap-2 items-center">
//             <ModeToggle />
//             <Link to={"/dashboard/employee"}>
//               <Button>Generate Offer Letter</Button>
//             </Link>
//           </div>
//         </header>
//         <div className="flex flex-1 flex-col gap-4 p-4 pb-0">
//           <Outlet />
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   );
// }

import { AppSidebar } from "@/components/AppSidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Card } from "@/components/ui/card";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full ">
            <SidebarTrigger className="-ml-1" />
            <div className="ms-auto">
              <ModeToggle />
            </div>
          </div>
        </header>
        <Card className="flex flex-1 flex-col gap-4 me-4 p-6 pt-0 bg-[#eef2f6] dark:bg-[#1a223f] rounded-sm">
          <Outlet />
        </Card>
      </SidebarInset>
    </SidebarProvider>
  );
}

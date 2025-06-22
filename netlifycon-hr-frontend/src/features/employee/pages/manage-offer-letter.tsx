// /* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable react-refresh/only-export-components */
// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { format, isValid } from "date-fns";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { useSidebar } from "@/components/ui/sidebar";
// import { cn } from "@/lib/utils";
// import logo from "../../../assets/logo.png";

// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import { Textarea } from "@/components/ui/textarea";
// import axiosInstance from "@/lib/axios-instance";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { OfferLetterStatus } from "../types/offer-letter.type";

// // Step enum

// export const OnboardingStep = {
//   EmployeeInfo: 1,
//   CompanyInfo: 2,
//   BenefitsAndRequirements: 3,
// } as const;
// const steps = [
//   { step: OnboardingStep.EmployeeInfo, label: "Personal Info" },
//   { step: OnboardingStep.CompanyInfo, label: "Account Info" },
//   { step: OnboardingStep.BenefitsAndRequirements, label: "Review" },
// ];

// // Full Zod schema
// export const offerLetterSchema = z.object({
//   employeeName: z.string().min(2),
//   employeeEmail: z.string().email(),
//   employeeAddress: z.string().min(5),
//   employeeDesignation: z.string().min(2),
//   employeeDateOfJoin: z.string().min(1), // ISO string date
//   employeeCtc: z.string().min(1),
//   companyLogo: z.string().url().min(5),
//   companyName: z.string().min(2),
//   companyAddress: z.string().min(5),
//   offerLetterDate: z.string().min(1),
//   companyContactName: z.string().min(2),
//   companyPersonTitle: z.string().min(2),
//   companyContactNumber: z.string().min(5),
//   companyPersonalEmail: z.string().email(),
//   emailSubject: z.string().min(3),
//   emailMessage: z.string().min(5),
//   status: z.enum([OfferLetterStatus.DRAFT, OfferLetterStatus.SENT]),
// });

// const step1Schema = z.object({
//   employeeName: z.string().min(2),
//   employeeEmail: z.string().email(),
//   employeeAddress: z.string().min(5),
//   employeeDesignation: z.string().min(2),
//   employeeDateOfJoin: z.string().min(1),
//   employeeCtc: z.string().min(1),
// });

// const step2Schema = z.object({
//   companyLogo: z.string().url().min(5),
//   companyName: z.string().min(2),
//   companyAddress: z.string().min(5),
//   offerLetterDate: z.string().min(1),
//   companyContactName: z.string().min(2),
//   companyPersonTitle: z.string().min(2),
//   companyContactNumber: z.string().min(5),
//   companyPersonalEmail: z.string().email(),
// });

// const step3Schema = z.object({
//   emailSubject: z.string().min(3),
//   emailMessage: z.string().min(5),
//   status: z.enum([OfferLetterStatus.DRAFT, OfferLetterStatus.SENT]),
// });
// const schemaByStep = {
//   [OnboardingStep.EmployeeInfo]: step1Schema,
//   [OnboardingStep.CompanyInfo]: step2Schema,
//   [OnboardingStep.BenefitsAndRequirements]: step3Schema,
// };

// export type OnboardingStep =
//   (typeof OnboardingStep)[keyof typeof OnboardingStep];

// type EmployeeFormValues = z.infer<typeof offerLetterSchema>;

// export const Component = () => {
//   const [step, setStep] = useState<OnboardingStep>(OnboardingStep.EmployeeInfo);

//   const form = useForm<EmployeeFormValues>({
//     resolver: zodResolver(offerLetterSchema),

//     defaultValues: {
//       employeeName: "",
//       employeeEmail: "",
//       employeeAddress: "",
//       employeeDesignation: "",
//       employeeDateOfJoin: new Date().toISOString(),
//       employeeCtc: "",
//       companyLogo: "https://example.com/logo.png", // Replace with a real default
//       companyName: "",
//       companyAddress: "",
//       offerLetterDate: new Date().toISOString(),
//       companyContactName: "",
//       companyPersonTitle: "",
//       companyContactNumber: "",
//       companyPersonalEmail: "",
//       emailSubject: "",
//       emailMessage: "",
//       status: OfferLetterStatus.DRAFT,
//     },
//   });
//   const navigate = useNavigate();

//   async function onSubmit(data: EmployeeFormValues) {
//     if (step === OnboardingStep.BenefitsAndRequirements) {
//       try {
//         await axiosInstance.post("/offer-letter", data);
//         toast.success("Offer letter saved successfully!");
//         navigate("/dashboard/sent-email");
//       } catch (error: unknown) {
//         const errMsg =
//           error instanceof Error ? error.message : "Something went wrong!";
//         toast.error(errMsg);
//       }
//     } else {
//       setStep((prev) => (prev + 1) as OnboardingStep);
//     }
//   }

//   const { setOpen } = useSidebar();

//   useEffect(() => {
//     setOpen(false);
//   }, [setOpen]);
//   const {
//     employeeName: name = "",
//     employeeDesignation: designation,
//     employeeDateOfJoin: joiningDate,
//     employeeCtc: ctc,
//   } = form.watch();
//   const [showLabel, setShowLabel] = useState(true);

//   return (
//     <ResizablePanelGroup
//       direction="horizontal"
//       onLayout={(sizes) => {
//         const leftPanelSize = sizes[0]; // index 0 is first panel
//         setShowLabel(leftPanelSize > 25); // Hide label if panel < 25% of width
//       }}
//     >
//       <ResizablePanel
//         defaultSize={30}
//         minSize={20}
//         maxSize={40}
//         className="overflow-hidden"
//       >
//         {" "}
//         <div className="col-span-6 md:col-span-2 px-3 h-full overflow-hidden">
//           <div className="mb-4">
//             {/* <h2 className="text-2xl font-semibold">{stepTitles[step]}</h2> */}
//             <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-xs dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
//               {steps.map((item, index) => (
//                 <li
//                   key={item.step}
//                   className={`flex items-center ${
//                     step === item.step ? "text-blue-600 dark:text-blue-500" : ""
//                   }`}
//                 >
//                   <span
//                     className={`flex items-center justify-center w-5 h-5 me-2 text-xs border rounded-full shrink-0 ${
//                       step === item.step
//                         ? "border-blue-600 dark:border-blue-500"
//                         : "border-gray-500 dark:border-gray-400"
//                     }`}
//                   >
//                     {index + 1}
//                   </span>
//                   {showLabel && item.label}
//                   {index !== steps.length - 1 && (
//                     <svg
//                       className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 12 10"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="m7 9 4-4-4-4M1 9l4-4-4-4"
//                       />
//                     </svg>
//                   )}
//                 </li>
//               ))}
//             </ol>
//           </div>

//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               {step === OnboardingStep.EmployeeInfo && (
//                 <>
//                   <FormField
//                     control={form.control}
//                     name="employeeName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Employee Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="John Doe" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="employeeEmail"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Employee Email</FormLabel>
//                         <FormControl>
//                           <Input placeholder="John Doe" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="employeeAddress"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Address</FormLabel>
//                         <FormControl>
//                           <Input placeholder="123 Main Street" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="employeeDesignation"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Designation</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Software Engineer" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="employeeDateOfJoin"
//                     render={({ field }) => {
//                       const parsedDate =
//                         field.value && isValid(new Date(field.value))
//                           ? new Date(field.value)
//                           : undefined;

//                       return (
//                         <FormItem>
//                           <FormLabel>Offer Letter Date</FormLabel>
//                           <Popover>
//                             <PopoverTrigger asChild>
//                               <FormControl>
//                                 <Button
//                                   variant={"outline"}
//                                   className={cn(
//                                     "w-full text-left font-normal",
//                                     !field.value && "text-muted-foreground"
//                                   )}
//                                 >
//                                   {parsedDate
//                                     ? format(parsedDate, "PPP")
//                                     : "Select date"}
//                                 </Button>
//                               </FormControl>
//                             </PopoverTrigger>
//                             <PopoverContent className="w-auto p-0">
//                               <Calendar
//                                 mode="single"
//                                 selected={parsedDate}
//                                 onSelect={(date: Date) => {
//                                   // Optional: convert back to string (ISO) if your schema expects string
//                                   field.onChange(
//                                     date ? date.toISOString() : ""
//                                   );
//                                 }}
//                                 initialFocus
//                               />
//                             </PopoverContent>
//                           </Popover>
//                           <FormMessage />
//                         </FormItem>
//                       );
//                     }}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="employeeCtc"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>CTC</FormLabel>
//                         <FormControl>
//                           <Input placeholder="₹600000" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </>
//               )}

//               {step === OnboardingStep.CompanyInfo && (
//                 <>
//                   <FormField
//                     control={form.control}
//                     name="companyName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Company Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="TechWes Pvt Ltd" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="companyAddress"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Company Address</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="456 Business Ave, Kolkata"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="offerLetterDate"
//                     render={({ field }) => {
//                       const parsedDate =
//                         field.value && isValid(new Date(field.value))
//                           ? new Date(field.value)
//                           : undefined;

//                       return (
//                         <FormItem>
//                           <FormLabel>Offer Letter Date</FormLabel>
//                           <Popover>
//                             <PopoverTrigger asChild>
//                               <FormControl>
//                                 <Button
//                                   variant={"outline"}
//                                   className={cn(
//                                     "w-full text-left font-normal",
//                                     !field.value && "text-muted-foreground"
//                                   )}
//                                 >
//                                   {parsedDate
//                                     ? format(parsedDate, "PPP")
//                                     : "Select date"}
//                                 </Button>
//                               </FormControl>
//                             </PopoverTrigger>
//                             <PopoverContent className="w-auto p-0">
//                               <Calendar
//                                 mode="single"
//                                 selected={parsedDate}
//                                 onSelect={(date: Date) => {
//                                   // Optional: convert back to string (ISO) if your schema expects string
//                                   field.onChange(
//                                     date ? date.toISOString() : ""
//                                   );
//                                 }}
//                                 initialFocus
//                               />
//                             </PopoverContent>
//                           </Popover>
//                           <FormMessage />
//                         </FormItem>
//                       );
//                     }}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="companyContactName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Contact Person Name</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Mr. Rajesh Kumar" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="companyPersonTitle"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Contact Person Title</FormLabel>
//                         <FormControl>
//                           <Input placeholder="HR Manager" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="companyContactNumber"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Contact Number</FormLabel>
//                         <FormControl>
//                           <Input placeholder="+91 9876543210" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="companyPersonalEmail"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Contact Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             placeholder="rajesh.hr@techwes.com"
//                             type="email"
//                             {...field}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </>
//               )}

//               {step === OnboardingStep.BenefitsAndRequirements && (
//                 <>
//                   <FormField
//                     control={form.control}
//                     name="companyName"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Name</FormLabel>
//                         <FormControl>
//                           <Input {...field} disabled placeholder="John Doe" />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="companyPersonalEmail"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Email</FormLabel>
//                         <FormControl>
//                           <Input
//                             {...field}
//                             disabled
//                             placeholder="john@example.com"
//                             type="email"
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="emailSubject"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Subject</FormLabel>
//                         <FormControl>
//                           <Input {...field} placeholder="Subject line..." />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="emailMessage"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Message</FormLabel>
//                         <FormControl>
//                           <Textarea
//                             rows={4}
//                             {...field}
//                             placeholder="Write your message here..."
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </>
//               )}

//               <div className="flex justify-between ">
//                 {step > OnboardingStep.EmployeeInfo && (
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() =>
//                       setStep((prev) => (prev - 1) as OnboardingStep)
//                     }
//                   >
//                     Back
//                   </Button>
//                 )}
//                 <div className="flex gap-2">
//                   {step === OnboardingStep.BenefitsAndRequirements && (
//                     <Button
//                       type="button"
//                       onClick={() =>
//                         onSubmit({
//                           ...form.getValues(),
//                           status: OfferLetterStatus.DRAFT,
//                         })
//                       }
//                     >
//                       Save as Drft
//                     </Button>
//                   )}
//                   <Button
//                     onClick={async () => {
//                       if (step !== OnboardingStep.BenefitsAndRequirements) {
//                         // Validate current step before proceeding
//                         const currentValues = form.getValues();
//                         const currentSchema = schemaByStep[step];

//                         const result = currentSchema.safeParse(currentValues);

//                         if (result.success) {
//                           setStep((prev) => (prev + 1) as OnboardingStep);
//                         } else {
//                           // Set field-level errors manually if needed
//                           result.error.issues.forEach((issue) => {
//                             form.setError(issue.path[0] as any, {
//                               message: issue.message,
//                             });
//                           });
//                         }
//                       }
//                     }}
//                     type={
//                       step === OnboardingStep.BenefitsAndRequirements
//                         ? "submit"
//                         : "button"
//                     }
//                   >
//                     {step === OnboardingStep.BenefitsAndRequirements
//                       ? "Send Email"
//                       : "Next"}
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </ResizablePanel>
//       <ResizableHandle withHandle />
//       <ResizablePanel className="overflow-y-auto">
//         <div className="text-black dark:text-white col-span-6 md:col-span-4 bg-muted px-3 rounded-xl  h-full overflow-y-auto ">
//           <h2 className="text-xl font-semibold mb-2"> Preview</h2>
//           <div className=" text-gray-800  font-sans">
//             <div className="max-w-3xl mx-auto  rounded-md">
//               <h1 className="text-2xl font-bold text-center mb-6 uppercase text-black dark:text-white">
//                 WOODROCK INFOTECH
//               </h1>

//               <div className="flex  justify-between">
//                 <img src={logo} alt="" className="w-24 h-24 object-fill" />
//                 <div className="">
//                   <div className="text-sm mb-6 text-black dark:text-white">
//                     <p className="text-black dark:text-white">
//                       Fitway Enclave, DN 12, Street 18, Salt Lake Sector 5,
//                       Kolkata- 700091, West Bengal
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-4 text-black dark:text-white">
//                 <p>
//                   <strong>Emp Id:</strong> WRGJ6067
//                 </p>
//                 <p>
//                   <strong>Employee Name (as per Aadhar Card):</strong>{" "}
//                   {name || "Gangesh Kumar Jha"}
//                 </p>

//                 <p>
//                   <strong>Date:</strong>
//                   {format(joiningDate, "dd MMM yyyy")}
//                 </p>
//               </div>

//               <h2 className="text-lg font-semibold mb-4 underline text-black dark:text-white">
//                 Subject – Offer cum Appointment Letter
//               </h2>

//               <p className="mb-4 text-black dark:text-white">
//                 Dear {name?.split(" ")?.[0]},
//               </p>

//               <p className="mb-4 text-black dark:text-white">
//                 It is our pleasure to welcome you to WOODROCK INFOTECH PRIVATE
//                 LIMITED.
//               </p>

//               <ol className="list-decimal pl-6 space-y-3 mb-6 text-black dark:text-white">
//                 <li>
//                   With reference to our discussions, we are pleased to offer you
//                   the position of{" "}
//                   <strong>
//                     {designation || "CUSTOMER SUPPORT EXECUTIVE (CSE)"}
//                   </strong>{" "}
//                   at <strong>KOLKATA</strong> with effect from{" "}
//                   <strong>
//                     {joiningDate
//                       ? format(joiningDate, "dd MMM yyyy")
//                       : "20 June 2024"}
//                   </strong>
//                   .
//                 </li>
//                 <li>
//                   Your annual Total Compensation will be{" "}
//                   <strong>₹{ctc || "192000.00"}</strong>. Please refer
//                   Annexure-A for details on the compensation and statutory
//                   deductions.
//                 </li>
//                 <li>
//                   Your remuneration package is strictly confidential between you
//                   and hereafter, referred to as The Company, and should not be
//                   discussed with anyone nor divulged in any manner whatsoever.
//                 </li>
//                 <li>
//                   Your employment with us will be governed by terms and
//                   conditions as specified in Annexure-B.
//                 </li>
//                 <li>
//                   The term of your employment shall commence with effect from
//                   your date of joining which shall be on{" "}
//                   <strong>20 June 2024</strong>. The Offer stands withdrawn
//                   thereafter, unless the date is extended and communicated to
//                   you in writing.
//                 </li>
//                 <li>
//                   Please note that this Offer is subject to your being given a
//                   clear background check either at the time of reporting/joining
//                   or thereafter depending upon our receipt of the background
//                   check report from the agency.
//                 </li>
//               </ol>

//               <p className="mt-8 text-black dark:text-white">Sincerely,</p>
//               <p className="text-black dark:text-white pb-3">
//                 <strong>WOODROCK INFOTECH PRIVATE LIMITED</strong>
//               </p>
//               <div className="text-sm mb-6 text-black dark:text-white">
//                 <p className="text-black dark:text-white">
//                   <strong>Office Address:</strong> Fitway Enclave, DN 12, Street
//                   18, Salt Lake Sector 5, Kolkata- 700091, West Bengal
//                 </p>
//                 <p>
//                   <strong>Branch:</strong> Poddar Court, Gate No: 4. 18,
//                   Rabindra Sarani, Kolkata- 700001, West Bengal
//                 </p>
//                 <p>
//                   <strong>Branch:</strong> 8th Floor, Bhavya Corporate Tower,
//                   Gomti Nagar, Lucknow. UP-226010
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </ResizablePanel>
//     </ResizablePanelGroup>
//   );
// };

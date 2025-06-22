// "use client";
// import { useEffect, useState } from "react";
// import { ChevronDown } from "lucide-react";
// import FeaturesSection from "../components/FeatureSection";
// import FeatureHighlightSection from "../components/FeatureHighlightSection";
// import PricingSection from "../components/PricingSection";
// import Footer from "../components/Footer";
// import NewsUpdateSection from "../components/NewsUpdateSection";
// import CallToActionSection from "../components/CallToActionSection";
// import BlogSection from "../components/BlogSection";
// import SupportSection from "../components/SupportSection";
// import ClientSection from "../components/ClientSection";
// import UserSection from "../components/UserSection";
// import logo from "../../../assets/NETLICON_HRMS.png";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [stickyMenu, setStickyMenu] = useState(false);
//   const [navigationOpen, setNavigationOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setStickyMenu(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 w-full z-[9999] transition duration-200 ${
//           stickyMenu
//             ? "bg-black/70 backdrop-blur-lg shadow py-4 lg:py-0"
//             : "py-7 lg:py-0"
//         }`}
//       >
//         <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative">
//           {/* Logo + Hamburger */}
//           <div className="w-full lg:w-1/4 flex items-center justify-between">
//             <a href="/">
//               <img src={logo} alt="Logo" className="h-28 w-28" />
//             </a>

//             {/* Hamburger */}
//             <button
//               className="lg:hidden block"
//               onClick={() => setNavigationOpen(!navigationOpen)}
//             >
//               <span className="relative w-6 h-6 block">
//                 <span className="absolute top-1.5 w-full h-0.5 bg-white rounded-sm transition-all" />
//                 <span className="absolute top-3 w-full h-0.5 bg-white rounded-sm transition-all" />
//                 <span className="absolute top-4.5 w-full h-0.5 bg-white rounded-sm transition-all" />
//               </span>
//             </button>
//           </div>

//           {/* Nav Menu */}
//           <div
//             className={`w-full lg:w-3/4 transition-all duration-300 ease-in-out ${
//               navigationOpen
//                 ? "visible max-h-[400px] overflow-y-scroll bg-black rounded-md mt-4 p-7.5 shadow-lg"
//                 : "invisible lg:visible lg:h-auto h-0"
//             } lg:flex items-center justify-between`}
//           >
//             <nav>
//               <ul className="flex flex-col lg:flex-row gap-5 lg:gap-2">
//                 {["Home", "Features", "Pricing"].map((item) => (
//                   <li
//                     key={item}
//                     className={`nav__menu lg:py-7 ${
//                       stickyMenu ? "lg:!py-4" : ""
//                     }`}
//                   >
//                     <a
//                       href={`/#${item.toLowerCase()}`}
//                       className="text-white/80 hover:text-white text-sm py-1.5 px-4 hover:bg-white/10 rounded transition"
//                     >
//                       {item}
//                     </a>
//                   </li>
//                 ))}

//                 {/* Pages Dropdown */}
//                 <li
//                   className={`relative lg:py-7 ${stickyMenu ? "lg:!py-4" : ""}`}
//                 >
//                   <button
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                     className="text-white/80 hover:text-white text-sm py-1.5 px-4 rounded flex items-center gap-2"
//                   >
//                     Pages <ChevronDown className="w-4 h-4" />
//                   </button>

//                   {dropdownOpen && (
//                     <ul className="absolute bg-black border border-white/10 mt-2 rounded-md shadow-lg w-48 p-2 z-50">
//                       {[
//                         { label: "About Us", href: "/about" },
//                         { label: "Pricing Table", href: "/pricing" },
//                         { label: "Blog Grid", href: "/blog-grid" },
//                         { label: "Blog Single", href: "/blog-single" },
//                         { label: "Sign In", href: "/signin" },
//                         { label: "Sign Up", href: "/signup" },
//                         { label: "404", href: "/404" },
//                       ].map((item) => (
//                         <li key={item.href}>
//                           <a
//                             href={item.href}
//                             className="block text-white/70 hover:text-white py-2 px-4 text-sm hover:bg-white/5 rounded-md"
//                           >
//                             {item.label}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>

//                 <li
//                   className={`nav__menu lg:py-7 ${
//                     stickyMenu ? "lg:!py-4" : ""
//                   }`}
//                 >
//                   <a
//                     href="/#support"
//                     className="text-white/80 hover:text-white text-sm py-1.5 px-4 hover:bg-white/10 rounded transition"
//                   >
//                     Support
//                   </a>
//                 </li>
//               </ul>
//             </nav>

//             {/* Right CTA Buttons */}
//             <div className="flex items-center gap-6 mt-6 lg:mt-0">
//               {/* <a href="/signin" className="text-white text-sm hover:opacity-75">
//                 Sign in
//               </a> */}

//               <Link
//                 to="/login"
//                 className=" button-border-gradient relative text-white text-sm py-2 px-4 rounded-lg  hover:opacity-90 flex items-center gap-1.5 shadow-button hover:button-gradient-hover hover:shadow-none"
//               >
//                 Sign in
//                 <svg
//                   className="w-4 h-4 mt-0.5"
//                   fill="white"
//                   viewBox="0 0 16 16"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M14.4 7.6L9.225 2.35a.6.6 0 0 0-.85 0 .6.6 0 0 0 0 .85L12.625 7.425H2a.6.6 0 0 0 0 1.125h10.675L8.375 12.875a.6.6 0 0 0 0 .85.6.6 0 0 0 .85 0l5.175-5.25a.6.6 0 0 0 0-.875Z" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </header>
//       <main>
//         <section
//           id="home"
//           className="relative overflow-hidden z-10 pt-[140px] md:pt-[160px] xl:pt-[180px]"
//         >
//           {/* Background Shapes */}
//           <div className="max-w-7xl mx-auto">
//             <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden -mx-28">
//               <div className="absolute -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 w-full h-[1282px] max-w-[1282px] rounded-full hero-circle-gradient -z-10" />
//               <div className="absolute -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 w-full h-[1046px] max-w-[1046px] rounded-full hero-circle-gradient -z-10" />
//               <img
//                 src="https://ai-tool-tailwind.preview.uideck.com/images//blur-02.svg"
//                 alt="blur"
//                 className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 max-w-none"
//               />
//               <img
//                 src="https://ai-tool-tailwind.preview.uideck.com/images//blur-01.svg"
//                 alt="blur"
//                 className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 max-w-none"
//               />
//             </div>
//           </div>

//           {/* Hero Content */}
//           <div className="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-10 text-center">
//             <a
//               href="#"
//               className="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full"
//             >
//               <img
//                 src="https://ai-tool-tailwind.preview.uideck.com/images//icon-title.svg"
//                 alt="icon"
//               />
//               <span className="hero-subtitle-text">
//                 Your Ultimate Creative Companion!
//               </span>
//             </a>

//             <h1 className="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-6xl">
//               Elevate Your Content with Our AI-Powered Writing Tool
//             </h1>
//             <p className="max-w-[500px] mx-auto mb-9 font-medium text-base md:text-lg text-white/80">
//               Highly customizable Tailwind CSS template for AI - Tool, Startup,
//               Software, App and Product Sites. Comes with everything you need -
//               pages, features, sections, components and more that you can easily
//               customize.
//             </p>

//             <a
//               href="#"
//               className="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium transition-opacity duration-300 hover:opacity-80"
//             >
//               Start Your Free Trial
//             </a>
//           </div>

//           {/* Hero Illustration */}
//           <div className="mt-16">
//             <img
//               className="mx-auto"
//               src="https://ai-tool-tailwind.preview.uideck.com/images//hero.svg"
//               alt="hero"
//             />
//           </div>
//         </section>

//         <FeaturesSection />
//         <FeatureHighlightSection />
//         <PricingSection />

//         <UserSection />
//         <ClientSection />
//         <SupportSection />
//         <BlogSection />
//         <CallToActionSection />
//         <NewsUpdateSection />
//       </main>
//       <Footer />
//     </>
//   );
// };

// export default Header;

export default function HomePgae() {
  return <div>HomePgae</div>;
}

// const blogs = [
//   {
//     image: "https://ai-tool-tailwind.preview.uideck.com/images//blog-01.png",
//     categories: ["Design", "Engineering"],
//     title: "Revolution in Content Creation and Communication",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
//     author: "Alex Demo",
//     date: "25 Mar, 2025",
//   },
//   {
//     image: "https://ai-tool-tailwind.preview.uideck.com/images//blog-02.png",
//     categories: ["Development", "Security"],
//     title: "How AI Writing Tools Empower Writers to Speed up there Writing",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
//     author: "Hendary Jonson",
//     date: "12 Feb, 2025",
//   },
//   {
//     image: "https://ai-tool-tailwind.preview.uideck.com/images//blog-03.png",
//     categories: ["Products", "Blog and articles"],
//     title: "Revolution in Content Creation and Communication",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipisc elit sed do eiusmod tempor incididunt ut labore et dolore magna oliumosd aliqua...",
//     author: "Piter Mecraow",
//     date: "10 Jan, 2025",
//   },
// ];

// const BlogCard = ({ blog }) => (
//   <div className="wow fadeInUp group">
//     <div className="mb-6 overflow-hidden rounded-xl">
//       <img
//         src={blog.image}
//         alt="blog"
//         className="ease-linear w-full duration-500 scale-100 group-hover:scale-125"
//       />
//     </div>
//     <div className="flex flex-wrap gap-2.5 items-center mb-4.5">
//       {blog.categories.map((cat, idx) => (
//         <span
//           key={idx}
//           className="font-medium text-xs hover:text-white cursor-pointer py-[3px] px-2.5 rounded-full bg-white/[0.07] border border-white/10 hover:border-white/25 ease-out duration-300"
//         >
//           {cat}
//         </span>
//       ))}
//     </div>
//     <h4>
//       <a
//         href="/blog-single.html"
//         className="text-white font-semibold text-xl ease-in duration-300 hover:opacity-80"
//       >
//         {blog.title}
//       </a>
//     </h4>
//     <p className="font-medium mt-4">{blog.description}</p>
//     <div className="flex items-center gap-4.5 flex-wrap mt-6">
//       <AuthorInfo icon="user" text={blog.author} />
//       <AuthorInfo icon="calendar" text={blog.date} />
//     </div>
//   </div>
// );

// const AuthorInfo = ({ icon, text }) => (
//   <div className="flex items-center gap-2 flex-wrap cursor-pointer ease-in duration-300 hover:text-white">
//     {/* You can replace these with an actual Icon component */}
//     <svg className="fill-current" width="20" height="20" viewBox="0 0 20 20">
//       <circle cx="10" cy="10" r="10" fill="" />
//     </svg>
//     <span className="text-sm font-medium">{text}</span>
//   </div>
// );

// const BlogSection = () => {
//   return (
//     <section className="py-20 lg:py-25">
//       <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
//         <div className="wow fadeInUp mb-16 text-center">
//           <span className="hero-subtitle-gradient relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full">
//             <img
//               src="https://ai-tool-tailwind.preview.uideck.com/images//icon-title.svg"
//               alt="icon"
//             />
//             <span className="hero-subtitle-text"> Read Our Latest Blogs </span>
//           </span>
//           <h2 className="text-white mb-4.5 text-2xl font-extrabold sm:text-4xl xl:text-heading-2">
//             Latest Blogs &amp; News
//           </h2>
//           <p className="max-w-[714px] mx-auto font-medium">
//             Our AI writing tool is designed to empower you with exceptional
//             writing capabilities, making the writing process more efficient,
//             accurate, and enjoyable.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
//           {blogs.map((blog, index) => (
//             <BlogCard key={index} blog={blog} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BlogSection;

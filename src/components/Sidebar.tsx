// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const menuItems = [
//     {
//       name: "Dashboard",
//       icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
//     },
//     {
//       name: "Projects",
//       icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
//     },
//     {
//       name: "Tasks",
//       icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
//     },
//     {
//       name: "Team",
//       icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
//     },
//     {
//       name: "Analytics",
//       icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
//     },
//     {
//       name: "Settings",
//       icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
//     },
//   ];

//   return (
//     <>
//       {/* Overlay for mobile/tablet when sidebar is open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-[60] lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar - Higher z-index to appear above navbar */}
//       <aside
//         className={`
//           fixed
//           top-0 left-0
//           h-full
//           w-64
//           bg-orange-500
//           shadow-lg
//           transform transition-transform duration-300 ease-in-out
//           z-[70]
//           flex flex-col
//           ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//         `}
//       >
//         <div className="flex-1 overflow-y-auto p-6">
//           {/* Close button - visible only on mobile/tablet */}
//           <div className="lg:hidden flex justify-end mb-4">
//             <button
//               onClick={toggleSidebar}
//               className="text-black hover:text-orange-100 focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6 text-black"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           <nav className="space-y-2">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-orange-600 rounded-lg transition-colors duration-200"
//                 onClick={() => {
//                   // Close sidebar on mobile when menu item is clicked
//                   if (window.innerWidth < 1024) {
//                     toggleSidebar();
//                   }
//                 }}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d={item.icon}
//                   />
//                 </svg>
//                 <span className="font-medium">{item.name}</span>
//               </a>
//             ))}
//           </nav>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;

// const Sidebar = ({ isOpen, toggleSidebar }) => {
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    {
      name: "Overview",
      // icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    },
    {
      name: "Vehicles",
      // icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    },
    // {
    //   name: "Tasks",
    //   icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
    // },
    // {
    //   name: "Team",
    //   icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
    // },
    // {
    //   name: "Analytics",
    //   icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    // },
    // {
    //   name: "Settings",
    //   icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    // },
  ];

  return (
    <>
      {/* Overlay for mobile/tablet when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar - Only visible on lg (1024px) and above */}
      <aside
        className={`
          fixed
          top-0 left-0
          h-full
          w-42  
          bg-[#EF9716]
          shadow-lg
          transform transition-transform duration-300 ease-in-out
          z-[70]
          flex-col
          hidden lg:flex
         
        `}
      >
        <div className="flex-1 overflow-y-auto flex justify-center items-center">
          <nav className="space-y-2 flex-col items-center justify-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-black rounded-lg transition-colors duration-200"
              >
                {/* <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg> */}
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

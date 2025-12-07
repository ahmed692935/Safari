// interface SidebarProps {
//   isOpen: boolean;
//   toggleSidebar: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
//   const menuItems = [
//     {
//       name: "Overview",
//       href: "#overview",
//     },
//     {
//       name: "Vehicles",
//       href: "#vehicles",
//     },
//     {
//       name: "Map",
//       href: "#map",
//     },
//     {
//       name: "Contact",
//       href: "#contact",
//     },
//   ];

//   return (
//     <>
//       {/* Overlay for mobile/tablet when sidebar is open */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-[60] lg:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Sidebar - Only visible on lg (1024px) and above */}
//       <aside
//         className={`
//           fixed
//           top-0 left-0
//           h-full
//           w-42
//           bg-[#EF9716]
//           shadow-lg
//           transform transition-transform duration-300 ease-in-out
//           z-[70]
//           flex-col
//           hidden lg:flex

//         `}
//       >
//         <div className="flex-1 overflow-y-auto flex justify-center items-center">
//           <nav className="space-y-2 flex-col items-center justify-center">
//             {menuItems.map((item, index) => (
//               <a
//                 key={index}
//                 href="#"
//                 className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-black rounded-lg transition-colors duration-200"
//               >
//                 {/* <svg
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
//                 </svg> */}
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

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    {
      name: "Overview",
      href: "#overview",
    },
    {
      name: "Vehicles",
      href: "#vehicles",
    },
    // {
    //   name: "Map",
    //   href: "#map",
    // },
    // {
    //   name: "Contact",
    //   href: "#contact",
    // },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

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
          <nav className="space-y-2 flex flex-col items-center justify-center">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="flex items-center space-x-3 px-4 py-3 text-white hover:bg-[#044F44] rounded-lg transition-colors duration-200 cursor-pointer"
              >
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

// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// const Layout = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex flex-col h-screen overflow-hidden">
//       <Navbar toggleSidebar={toggleSidebar} />
//       <div className="flex flex-1 overflow-hidden">
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <main className="flex-1 overflow-y-auto bg-gray-100 p-4 md:p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sidebar will overlay everything including navbar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Navbar - no margin, will be full width, fixed and transparent */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main content area with left margin for sidebar on large screens */}
      {/* No padding-top so content flows behind transparent navbar */}
      <div className="flex-1 lg:ml-42">
        <main className="overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;

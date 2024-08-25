import { useState, useEffect } from 'react';
import Sidebar from '../utils/sideBar';
import TopNav from '../utils/topnav';
import DashboardBody from '../utils/dashboardBody';
import '../styles/dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsSidebarOpen(true); w
      } else {
        setIsSidebarOpen(false); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dash-main flex h-screen bg-gray-100 w-screen" style={{ width: '100vw' }}>
      <div className="w-full h-full flex bg-white bg-opacity-10" id='dash-inner'>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col" id='dashtop'>
          <TopNav toggleSidebar={toggleSidebar} />
          <div className="h-[82.67vh] w-full">
            <DashboardBody/>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

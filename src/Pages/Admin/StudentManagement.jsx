import React from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar';
import MainContent from '../../Components/Admin/MainContent';

const StudentManagement = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display">
      <div className="flex min-h-screen">
        <AdminSidebar />
        <MainContent />
      </div>
    </div>
  );
};
export default StudentManagement


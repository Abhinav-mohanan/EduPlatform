import React, { useState } from 'react'
import AdminSidebar from '../../Components/Admin/AdminSidebar';
import TopNav from '../../Components/Admin/TopNav';
import VerificationHeader from '../../Components/Admin/VerificationHeader';
import Filters from '../../Components/Admin/Filters';
import VerificationTable from '../../Components/Admin/VerificationTable';
import EmptyState from '../../Components/Admin/EmptyState';
import DetailsModal from '../../Components/Admin/DetailsModal';

const VerificationPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen w-fullbg-white dark:bg-slate-900 font-display">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <TopNav />
        <div className="p-10 flex-1">
          <VerificationHeader />
          <Filters />
          <VerificationTable onReviewClick={() => setIsModalOpen(true)} />
          <EmptyState />
        </div>
      </div>
      {isModalOpen && <DetailsModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default VerificationPage
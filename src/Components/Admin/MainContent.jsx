import React from "react";
import PageHeader from "./PageHeader";
import Toolbar from "./Toolbar";
import StudentTable from "./StudentTable";
import Pagination from "./Pagination";
const MainContent = () => {
  return (
    <main className="flex-1 bg-white dark:bg-slate-900 p-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6">
        <PageHeader />
        <Toolbar />
        <StudentTable />
        <Pagination />
      </div>
    </main>
  );
};
export default MainContent
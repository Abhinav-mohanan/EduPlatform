import DashboardContent from "../../../Components/Users/Teachers/DashboardContent";
import Sidebar from "../../../Components/Users/Teachers/Sidebar";

const TeacherDashboard = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f6f8] dark:bg-[#101622]">
      <div className="flex h-full w-full">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};
export default TeacherDashboard
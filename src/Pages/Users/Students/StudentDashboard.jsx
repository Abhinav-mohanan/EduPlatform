import StudentDashboardContent from "../../../Components/Users/Students/StudentDashboardContent";
import StudentSidebar from "../../../Components/Users/Students/StudentSidebar";

const StudentDashboard = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-[#F9F9F7] dark:bg-[#151C2A] text-[#0D121B] dark:text-[#E5E7EB]">
      <StudentSidebar />
      <main className="flex-1 ml-64 p-8">
        <StudentDashboardContent />
      </main>
    </div>
  );
};

export default StudentDashboard;
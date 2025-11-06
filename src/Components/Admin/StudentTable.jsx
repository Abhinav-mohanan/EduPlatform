import { Ban, CheckCircle, Edit } from 'lucide-react';
import React from 'react'

// Student Table Component
const StudentTable = () => {
  const [students, setStudents] = React.useState([
    {
      id: 'STU-001',
      name: 'Olivia Martin',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU66NvdjYrlr9--wfsz07qay_NMxt7xgW8CbnpcUJphZ5PlkXjHNWTGkuFbIUEr7PAYjKaJcsXw1gy3SpbupoNWPHFPHiIcb4YgBD5W0F9Oggw_Hfxx8Ba823kYrB7gzoMsdXE8NlZZJ0-gHwV88OD3hIB-A6BHzllUx-GmdUQr1BQUDwrcJQm9_B7_ZPPgfW1VapFDAnt0XXXE2WvsNgpijg6C31m0icggQBjF94wu1FtszAvPFlCkEn2xoETIdjiQL9uv6OjQGc',
      email: 'olivia.martin@example.com',
      date: '2023-08-15',
      status: 'Active',
      statusColor: 'green'
    },
    {
      id: 'STU-002',
      name: 'Liam Garcia',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVoIz6oTmpt_6FPk4KA9crF7y9Kh1dWXQPtS6QnyW1vJYEWzzmqk5CeAkTFhBkw8aZeiEcy_JK_a-By6J6BJs4J7Edqoyfe1YX97BmRPRmg18UB8KdbVTt5X2j4y-Je_uJ67jfj9Y1kIOjF2X6ytGTGeGNXX4IwdWSLq_hOYPkDCaXcmFGIyxV6dtfnPKbBMzNGjXT4NvwYXvKAX8pKQ1qHSosGD-5TrrOK2Z2VJTApPVlxRK8kZTPsMrolPaKQGCkmW1tfDraEdY',
      email: 'liam.garcia@example.com',
      date: '2023-08-14',
      status: 'Active',
      statusColor: 'green'
    },
    {
      id: 'STU-003',
      name: 'Ava Rodriguez',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADtNe8BV4ncRsdSgIC-CvgZrkwdj4EdJCn_oDpXWTybEAyJ9T9o2QvlBSg0WcS17H-JE_pILYkf6s4tf9bNU5mfxymWCr2w8R1jA45jNwzMP_IUqyo1oq6rD8EaKiFP86WaVHpTOZt5jWkBcJwNcSiays8oJH0nIjercfTkBQ-PSoQpkg-W7VBHaTHowRBdmzg30dUSlv4HNI8xk8eWB7NzysUE-cAo5tmtZ_7Ty-to9Khvdkl2gfJYOsEbY2BhBwEZiBDxZLWfJo',
      email: 'ava.rodriguez@example.com',
      date: '2023-08-13',
      status: 'Blocked',
      statusColor: 'red'
    },
    {
      id: 'STU-004',
      name: 'Noah Martinez',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSueFMl2UOnBaPNpdfvfRm4KitsnHJiteuIydJxNpUZJajk4uK1r6lWmTXh8Lnm2cVrrua9J9HNt4osVP52l4VUvMPOAar7sjYHJPR6MQDBQ7zvXpjAND4-jLQEF4ufa0tSIvx6_MeGd94JZHj21PtbNwzxLXxFPbYsZESAUeZlvYboTVneQbIY19GU4vQdhj64MhRveBgMo5T699c92MyrwsnyP4bh8UlH81YLLEasnWDxEufGKH5GzT5Ll8o28Ajn5cupj-_uXU',
      email: 'noah.martinez@example.com',
      date: '2023-08-12',
      status: 'Active',
      statusColor: 'green'
    },
    {
      id: 'STU-005',
      name: 'Isabella Lee',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKdxxj4jkV77Le7iRZzcYJAA-GujP7DXx7VxhUQEHPYQyUQerh3aGyFhAm9JlCxbdJMCObhOrpgLzfx4Qz2-ctJG9Gm_I8s1pCwqzI00nvK3tqO3g0mqKzoLu7Rxn3mULW8pe7ndAcglbXFAgB1Tq-6woTr0QXX4r0POL12fP5rllhI3FOd7iDKe72bHLBG9YaD44qVebFUA4VJ0y0nq2Nohe_TMxNpsmBR6zv4yshFa5_ojYS0AJxz_Bkf0LG7TDT8Ie0dKMl8g8',
      email: 'isabella.lee@example.com',
      date: '2023-08-11',
      status: 'Active',
      statusColor: 'green'
    }
  ]);

  const getStatusBadgeClass = (color) => {
    const base = 'px-2 py-1 text-xs font-medium rounded-full';
    switch (color) {
      case 'green':
        return `${base} bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300`;
      case 'red':
        return `${base} bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300`;
      default:
        return base;
    }
  };

  const toggleStatus = (studentId) => {
    setStudents(prevStudents =>
      prevStudents.map(student =>
        student.id === studentId
          ? {
              ...student,
              status: student.status === 'Active' ? 'Blocked' : 'Active',
              statusColor: student.status === 'Active' ? 'red' : 'green'
            }
          : student
      )
    );
  };

  const getToggleButton = (statusColor, status, studentId) => {
    if (statusColor === 'green') {
      return (
        <button
          onClick={() => toggleStatus(studentId)}
          className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded hover:bg-red-200 dark:text-red-400 dark:bg-red-900/50"
        >
          <Ban className="h-3 w-3" />
          Block
        </button>
      );
    }
    return (
      <button
        onClick={() => toggleStatus(studentId)}
        className="flex items-center gap-2 px-3 py-1 text-xs font-medium text-green-600 bg-green-100 rounded hover:bg-green-200 dark:text-green-400 dark:bg-green-900/50"
      >
        <CheckCircle className="h-3 w-3" />
        Unblock
      </button>
    );
  };

  return (
    <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
        <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-800">
          <tr>
            
            <th className="px-6 py-3" scope="col">Student</th>
            <th className="px-6 py-3" scope="col">Student ID</th>
            <th className="px-6 py-3" scope="col">Email</th>
            <th className="px-6 py-3" scope="col">Date Registered</th>
            <th className="px-6 py-3 text-center" scope="col">Status</th>
            <th className="px-6 py-3 text-right" scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr 
              key={student.id} 
              className={`bg-white dark:bg-slate-900 border-b dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 ${index === students.length - 1 ? '' : ''}`}
            >

              <th className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap flex items-center gap-3" scope="row">
                <img 
                  className="w-10 h-10 rounded-full" 
                  alt={`User avatar for ${student.name}`} 
                  src={student.avatar}
                />
                {student.name}
              </th>
              <td className="px-6 py-4">{student.id}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4">{student.date}</td>
              <td className="px-6 py-4 text-center">
                <span className={getStatusBadgeClass(student.statusColor)}>{student.status}</span>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex gap-2 justify-end">
                  {getToggleButton(student.statusColor, student.status, student.id)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable
import React from 'react'

const VerificationTable = ({ onReviewClick }) => {
  const applicants = [
    {
      id: 1,
      name: 'Olivia Chen',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDoDbCDOYnrF_D2ORrYEnelv9vp8hVKGcSVrwMj2Z5oJXPGCckNPG_GT2zGjgq0os-EVgu1dczd9sMsvLS8gvG-AiLLPn-GnbdPJEWanbXBCLMP1Z0663LuNjXHWmTxRrn8-DyFvR-Foqa_bDzFYYLMbhMgYgbUa1eMG4RxOK5q5OcYMKH9wpBp8kEkAJoT7IpZWDflpx-lH4iTlagQcyQ6x0I7pbIVls2VrTXT79sOurKJ1-GEv6fEq3MI88OEZuj7iwltdOh0YEI',
      university: 'Stanford University',
      date: '2023-10-26',
      status: 'Pending',
      statusColor: 'yellow'
    },
    {
      id: 2,
      name: 'Benjamin Carter',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYDbvuUKTj56_tlHD5RGLoY1PCgEo3nQHaw7RNfD8iHRsP6e5fKx-hsn5KP2j8_P1gN1U6N-_WNKLDf1V6W0zXQHr3fogDKORU4u8vOehs80yKB8HTKFU20E4ZNX96CaDFY_pmAPP5HVb-Fr2CkcUPpAOrrr1adNsqLokLq7-D71KRRCvN1eZ2Ls8INogzEktSqzN2FM_cTFm1-HQd9wisVGB_ypwKLMPhi6a7gtICkzEu5ju3c4ytQ66LN2Uyp_2dnLURanoHP-o',
      university: 'MIT',
      date: '2023-10-25',
      status: 'Pending',
      statusColor: 'yellow'
    },
    {
      id: 3,
      name: 'Sophia Rodriguez',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgLw96GU27I6PJI-pYuBLpOuHCTAZ01JtYsQfMYKQM9PAUQF4M_st53nR8IJxZtllv93OWcF95yWAR8uJRkZuS1QpSsvdBeI5Ahlj07uJGuBjDO7lZZDkBgxFZvCtcghZRMHUR-k3nCq2DW0Tv_RfqSB7K14GNVeYXq4Tu-TEnbAzhnCka2OsO-89R6k_h-cgkPv4dS8axWHJ3aaVJTnCrGDuKtkyXfvJSW7yNuHDT8v9BLVbFgfV43NSRkUvx4R37uXMDhzIt3Qo',
      university: 'Harvard University',
      date: '2023-10-22',
      status: 'Pending',
      statusColor: 'yellow'
    }
  ];

  const getStatusBadgeClass = (color) => {
    const base = 'inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full';
    switch (color) {
      case 'yellow':
        return `${base} bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300`;
      default:
        return base;
    }
  };

  return (
    <div className="bg-white dark:bg-[#181f2b] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
          <thead className="text-xs text-slate-700 dark:text-slate-300 uppercase bg-slate-50 dark:bg-slate-800">
            <tr>
              <th className="px-6 py-4 font-semibold" scope="col">Applicant Name</th>
              <th className="px-6 py-4 font-semibold" scope="col">University</th>
              <th className="px-6 py-4 font-semibold" scope="col">Submission Date</th>
              <th className="px-6 py-4 font-semibold text-center" scope="col">Status</th>
              <th className="px-6 py-4 font-semibold" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="bg-white dark:bg-[#181f2b] border-b dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                <th className="px-6 py-4 font-medium text-slate-900 dark:text-white whitespace-nowrap" scope="row">
                  <div className="flex items-center gap-3">
                    <img 
                      className="w-10 h-10 rounded-full object-cover" 
                      alt={`Profile picture of ${applicant.name}`} 
                      src={applicant.avatar} 
                    />
                    <span>{applicant.name}</span>
                  </div>
                </th>
                <td className="px-6 py-4">{applicant.university}</td>
                <td className="px-6 py-4">{applicant.date}</td>
                <td className="px-6 py-4 text-center">
                  <span className={getStatusBadgeClass(applicant.statusColor)}>{applicant.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <a className="font-medium text-primary dark:text-primary/90 hover:underline cursor-pointer" onClick={onReviewClick} href="#">Review</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerificationTable
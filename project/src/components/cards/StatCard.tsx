// import React from 'react';

// export default function StatCard({ value, label, color, visible }) {
//   return (
//     <div
//       className={`text-center transform transition-all duration-700 ${
//         visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
//       }`}
//     >
//       <div className={`text-3xl md:text-4xl font-bold ${color} mb-2 transition-all duration-300 hover:scale-110`}>
//         {value}
//       </div>
//       <div className="text-gray-600">{label}</div>
//     </div>
//   );
// }

import React from 'react';

export default function StatCard({ value, label, color, visible }) {
  return (
    <div
      className={`text-center transform transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
    >
      <div className={`text-3xl md:text-4xl font-bold mb-2 transition-all duration-300 hover:scale-110 ${color} drop-shadow-[0_0_20px_currentColor]`}>

        {value}
      </div>
      <div className="text-white">{label}</div>
    </div>
  );
}

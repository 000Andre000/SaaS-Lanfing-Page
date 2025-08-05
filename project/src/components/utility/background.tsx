import React from 'react';

export default function BackgroundGlow() {
  return (
    <>
      <style>{`
        @keyframes shake {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(2px, -2px) rotate(-1deg); }
          50% { transform: translate(-2px, 2px) rotate(1deg); }
          75% { transform: translate(1px, -1px) rotate(0.5deg); }
          100% { transform: translate(0, 0) rotate(-1deg); }
        }
        .shake {
          animation: shake 3s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        .blink {
          animation: blink 3s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-56 left-10 blink">
          <div className="w-40 h-40 bg-teal-500 blur-lg rounded-full" />
        </div>
        <div className="absolute top-1/4 right-16 blink">
          <div className="w-32 h-32 bg-amber-500 blur-lg rounded-full" />
        </div>
        <div className="absolute top-1/2 left-1/3 blink">
          <div className="w-40 h-40 bg-cyan-400 blur-lg rounded-full" />
        </div>
        <div className="absolute bottom-10 right-1/4 blink">
          <div className="w-48 h-48 bg-amber-400 blur-lg rounded-full" />
        </div>
        <div className="absolute bottom-10 left-20 blink">
          <div className="w-24 h-24 bg-cyan-200 blur-md rounded-full" />
        </div>
        <div className="absolute top-[60%] right-16 blink">
          <div className="w-36 h-36 bg-teal-500 blur-lg rounded-full" />
        </div>
      </div>
    </>
  );
}

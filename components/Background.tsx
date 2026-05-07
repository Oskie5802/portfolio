import React from 'react';

export const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#0c0c0c]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(255,255,255,0.025),transparent)]" />
    </div>
  );
};

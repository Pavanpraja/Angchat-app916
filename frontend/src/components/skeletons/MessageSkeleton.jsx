import React from 'react';

const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full mb-8">
      <div className="flex gap-4 items-center">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shrink-0 bg-slate-600 animate-pulse"></div>
        <div className="flex flex-col gap-2">
          <div className="h-3 md:h-4 w-20 md:w-24 bg-slate-600 rounded animate-pulse"></div>
          <div className="h-3 md:h-4 w-24 md:w-32 bg-slate-600 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="h-24 md:h-32 w-full max-w-xs md:max-w-2xl bg-slate-600 rounded-lg animate-pulse"></div>
    </div>
  );
};

export default MessageSkeleton;
const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-52">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-16 h-16 rounded-full shrink-0 bg-black"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-20 bg-black"></div>
          <div className="skeleton h-4 w-28 bg-black"></div>
        </div>
      </div>
      <div className="skeleton h-32 w-full bg-black mb-3"></div>
    </div>
  );
};

export default MessageSkeleton;
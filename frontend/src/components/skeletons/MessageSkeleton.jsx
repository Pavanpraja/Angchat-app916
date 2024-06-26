const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap-[4rem] w-[52rem] mb-[2rem]">
      <div className="flex gap-4 items-center">
        <div className="skeleton w-[8rem] h-[8rem] rounded-full shrink-0 bg-black"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-[2rem] w-[20rem] bg-black"></div>
          <div className="skeleton h-[2rem] w-[28rem] bg-black"></div>
        </div>
      </div>
      <div className="skeleton h-32 w-full bg-black mb-3"></div>
    </div>
  );
};

export default MessageSkeleton;

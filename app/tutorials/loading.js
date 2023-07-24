import React from "react";

const Loading = () => {
  return (
      <div class='flex items-center justify-center space-x-2'>
        <div class='w-4 h-4 rounded-full animate-pulse dark:bg-violet-400'></div>
        <div class='w-4 h-4 rounded-full animate-pulse dark:bg-violet-400'></div>
        <div class='w-4 h-4 rounded-full animate-pulse dark:bg-violet-400'></div>
    </div>
  );
};

export default Loading;

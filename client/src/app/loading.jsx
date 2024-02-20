import Shimmer from "@/components/shimmer/shimmer";
import React from "react";

const loading = () => {
  return (
 <div className="grid grid-cols-3 gap-4 mb-10 w-full">
     <Shimmer />
     <Shimmer />
     <Shimmer />
     <Shimmer />
     <Shimmer />
     <Shimmer />
 </div>
  );
};

export default loading;

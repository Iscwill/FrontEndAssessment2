import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = ({ rows = 5, columns = 4 }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="border-b border-gray-300">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <td key={colIndex} className="p-2">
              <Skeleton height={20} width="75%" />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default SkeletonLoader;

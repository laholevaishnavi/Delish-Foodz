import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="shimmer-card rounded-lg p-4 m-4 w-60 bg-white shadow-md">
      <div className="shimmer-image rounded-md mb-4 bg-gray-300 h-36 w-full animate-shimmer"></div>
      <div className="shimmer-line rounded-md mb-2 bg-gray-300 h-6 w-3/4 animate-shimmer"></div>
      <div className="shimmer-line rounded-md mb-2 bg-gray-300 h-4 w-full animate-shimmer"></div>
      <div className="shimmer-line rounded-md mb-2 bg-gray-300 h-4 w-full animate-shimmer"></div>
      <div className="shimmer-line rounded-md bg-gray-300 h-4 w-5/6 animate-shimmer"></div>
    </div>
  );
};

const Shimmer = () => {
  const shimmerCards = Array(10).fill(0);
  return (
    <div className="shimmer-envelop flex flex-wrap justify-center items-center">
      {shimmerCards.map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;

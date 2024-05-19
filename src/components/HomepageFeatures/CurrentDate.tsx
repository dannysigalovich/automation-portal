import React from "react";

const CurrentDate: React.FC = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString();

  return <span>{dateString}</span>;
};

export default CurrentDate;

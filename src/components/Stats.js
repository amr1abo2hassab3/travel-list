import React from "react";

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  }
  const lengthOfData = items.length;
  const donePacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((donePacked / lengthOfData) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything? Ready to go ✈"
          : ` 💼 You have ${lengthOfData} items on your list , and you already packed
        ${donePacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;

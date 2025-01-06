import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { InterestCalculator } from "./IntrestCalculator";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.component} // Rendering the single dynamic component
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    component: <div></div>, // Placeholder or dynamic content
    className: "md:col-span-2",
  },
  {
    component: (
      <div className="h-full flex items-center justify-center">
        <InterestCalculator isCompact />
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    component: <div></div>,
    className: "md:col-span-1",
  },
  {
    component: <div></div>,
    className: "md:col-span-2",
  },
];

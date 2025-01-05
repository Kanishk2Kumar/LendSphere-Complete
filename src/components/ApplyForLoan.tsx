import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

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

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const items = [
  {
    component: <Skeleton />, // Placeholder or dynamic content
    className: "md:col-span-2",
  },
  {
    component: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    component: <Skeleton />,
    className: "md:col-span-1",
  },
  {
    component: <Skeleton />,
    className: "md:col-span-2",
  },
];

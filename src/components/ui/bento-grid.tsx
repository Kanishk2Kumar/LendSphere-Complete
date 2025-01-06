import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="mt-28">
      <div
        className={cn(
          "grid min-w-full min-h-full auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 gap-y-20 px-24",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const BentoGridItem = ({
  className,
  header,
}: {
  className?: string;
  header?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl transition duration-200 shadow-lg p-6 bg-blue-50 border border-blue-200 flex flex-col justify-center items-center hover:bg-blue-100 h-96",
        className
      )}
    >
      {header}
    </div>
  );
};

export const Badge = ({
  children,
  count,
}: {
  children: React.ReactNode;
  count: number;
}) => {
  if (count === 0) {
    return (
      <div
        className="
      relative
      inline-block
      "
      >
        {children}
        <span suppressHydrationWarning={true}></span>
      </div>
    );
  }
  return (
    <div
      className="
                    relative
                    inline-block
                    "
    >
      {children}
      <span
        suppressHydrationWarning={true}
        className="
                    inline-flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                    leading-none
                    text-red-100
                    bg-red-600
                    rounded-full
                    absolute
                    top-[-.5rem]
                    right-[-.5rem]
                    bg-accent
                    p-1
                    w-5
                    text-light
                    "
      >
        {count}
      </span>
    </div>
  );
};

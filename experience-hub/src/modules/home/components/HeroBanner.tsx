type HeroBannerProps = {
  className?: string;
};

export function HeroBanner({ className = "" }: HeroBannerProps) {
  return (
    <div
      className={`
        h-[180px]
        rounded-[32px]
        bg-gradient-to-r
        from-blue-600
        to-indigo-900

        md:h-[240px]
        lg:h-[320px]
        
        ${className}
      `}
    />
  );
}

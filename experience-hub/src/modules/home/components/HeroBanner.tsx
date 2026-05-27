type HeroBannerProps = {
  className?: string;
  image?: string;
};

export function HeroBanner({ className = "", image }: HeroBannerProps) {
  return (
    <div
      className={`
        h-[180px]
        rounded-[32px]
        bg-gradient-to-r
        from-blue-600
        to-indigo-900
        overflow-hidden

        md:h-[240px]
        lg:h-[320px]
        
        ${className}
      `}
    >
      {image && (
        <img
          src={image}
          alt="Hero Banner"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

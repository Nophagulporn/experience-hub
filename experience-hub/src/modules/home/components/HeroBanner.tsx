type HeroBannerProps = {
  className?: string;
  image?: string;
};

export function HeroBanner({ className = "", image }: HeroBannerProps) {
  return (
    <div className={`${className}`}>
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

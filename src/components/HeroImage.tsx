import OptimizedImage from './OptimizedImage';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

const HeroImage = ({ src, alt, className = '' }: HeroImageProps) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      priority={true}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
      placeholder="blur"
    />
  );
};

export default HeroImage;

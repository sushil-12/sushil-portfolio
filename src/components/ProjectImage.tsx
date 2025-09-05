import OptimizedImage from './OptimizedImage';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ProjectImage = ({ src, alt, className = '', priority = false }: ProjectImageProps) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={`rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
      placeholder="blur"
    />
  );
};

export default ProjectImage;

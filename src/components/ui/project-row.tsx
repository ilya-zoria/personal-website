import CraftItem from "./craft-item";
import { useRouter } from 'next/navigation';

interface ProjectRowProps {
  title: string;
  description: string;
  items: { src: string; alt: string }[];
  projectId: string;
}

const ProjectRow = ({ title, description, items, projectId }: ProjectRowProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/projects/${projectId}`);
  };

  return (
    <div 
      className="flex flex-col gap-6 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col gap-1 max-w-[600px]">
        <span className="text-dark hover:underline">{title}</span>
        <p className="class">{description}</p>
      </div>
      <div className="flex flex-row gap-4 overflow-x-scroll flex-nowrap scrollbar-hide px-6 sm:px-0 -mx-6 sm:mx-0">
        {items.map((item, index) => (
          <div className="relative overflow-hidden min-w-[300px] w-full aspect-[16/10.1]" key={index}>
            <CraftItem src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectRow; 
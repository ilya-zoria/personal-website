import CraftItem from "./craft-item";

interface ProjectRowProps {
  title: string;
  description: string;
  items: { src: string; alt: string }[];
}

const ProjectRow = ({ title, description, items }: ProjectRowProps) => (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 max-w-[600px]">
            <span className="text-dark">{title}</span>
            <p className="class">{description}</p>
        </div>
        <div className="flex flex-row gap-4">
        {items.map((item, index) => (
            <div className="relative overflow-hidden w-full" key={index}>
            <CraftItem src={item.src} alt={item.alt} />
            </div>
        ))}
        </div>
    </div>
);

export default ProjectRow; 
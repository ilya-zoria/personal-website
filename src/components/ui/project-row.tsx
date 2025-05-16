import CraftItem from "./craft-item";

interface ProjectRowProps {
  title: string;
  description: string;
  items: { src: string; alt: string }[];
}

const ProjectRow = ({ title, description, items }: ProjectRowProps) => (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
            <span className="text-dark">{title}</span>
            <p className="class">{description}</p>
        </div>
        <div className="flex flex-row gap-4 overflow-x-scroll flex-nowrap scrollbar-hide px-8 sm:px-0 -mx-8 sm:mx-0 ">
        {items.map((item, index) => (
            <div className="relative overflow-hidden min-w-[300px] w-full aspect-[16/10.1]" key={index}>
                <CraftItem src={item.src} alt={item.alt} />
            </div>
        ))}
        </div>
    </div>
);

export default ProjectRow; 
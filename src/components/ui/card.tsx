import Link from 'next/link';

interface CardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  link,
  className = ''
}) => {
  return (
    <div className='p-3 border-radius-outside bg-background-grey dark:bg-background-lightDark shadow-sm border hover:border-black/20 dark:hover:border-white/20 cursor-pointer ease-in-out duration-150 overflow-hidden'>
      <Link href={link} target="_blank"> 
        <img className={`border-radius-inside overflow-hidden ${className}`} src={image} alt={title}/>
        <div className="p-3">
          <h4>{title}</h4>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

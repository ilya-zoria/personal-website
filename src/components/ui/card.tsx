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
    <div className='p-3 border-radius-outside ease-in-out duration-150 bg-gray-50 hover:bg-white dark:bg-background-lightDark border border-transparent dark:hover:border-white/10 overflow-hidden'>
      <Link href={link}>
        <img className={`border-radius-inside overflow-hidden border border-gray-200 ${className}`} src={image} alt={title}/>
        <div className="p-3">
          <h3>{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

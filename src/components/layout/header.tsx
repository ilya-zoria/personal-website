import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative group flex flex-col">
        <Link href="/" className="hover:underline">Ilya Zoria</Link>
        <p className="text">Product designer</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <a 
            href="https://docs.google.com/document/d/11aLN-ZYWHOVM0TJ3mkV2PHSwiRUD3Tvy01J-QFZfmC8/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm hover:underline"
          >
            cv
          </a>
          <a 
            href="https://www.linkedin.com/in/ilya-zoria/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm hover:underline"
          >
            in
          </a>
          <a 
            href="https://x.com/ilya_zoria" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm hover:underline"
          >
            x
          </a>
        </div>
      </div>
    </div>
  );
} 
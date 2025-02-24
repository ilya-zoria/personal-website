"use client"

interface AboutInnerCardProps {
    title: string;
    className?: string;
    children: React.ReactNode;
}

const AboutInnerCard: React.FC<AboutInnerCardProps> = ({ title, children, className }) => {
  return (
    <div className={`bg-background-grey dark:bg-background-lightDark shadow-sm border border-radius-inside overflow-hidden ${className}`}>
      <h3 className="p-6">{title}</h3>
        {children}
    </div>
  );
};

export default AboutInnerCard; 
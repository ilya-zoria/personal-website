import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import CraftItem from "@/components/ui/craft-item";

interface ProjectProps {
  params: {
    id: string;
  };
}

export default function Project({ params }: ProjectProps) {
  const project = projects[params.id];

  if (!project) {
    notFound();
  }

  const renderContent = () => {
    switch (params.id) {
      case 'brainly-ai':
        return (
          <>
            <CraftItem src="/Craft/png/Brainly-1.png" alt="" />
            <CraftItem src="/Craft/png/Brainly-2.png" alt="" />
            <CraftItem src="/Craft/png/Brainly-3.png" alt="" />
            <CraftItem src="/Craft/intertactive-widgets.mp4" alt="intertactive-widgets" />
            <CraftItem src="/Craft/ai_learning_companion_interactions.mp4" alt="learning_companion_interactions" />
          </>
        );
      case 'carerix':
        return (
          <>
            <CraftItem src="/Craft/carerix-job-preview.mp4" alt="" />
            <CraftItem src="/Craft/carerix-job-preview.mp4" alt="" />
            
          </>
        );
    //   case 'cheapoair':
    //     return (
    //       <>
    //         <h3>Project Overview</h3>
    //         <p>CheapOair is a leading travel platform helping millions of travelers find affordable flights across 450+ airlines.</p>
    //         {/* Add more content sections as needed */}
    //       </>
    //     );
      case 'guidefoot':
        return (
          <>
            <h3>Project Overview</h3>
            <p>Guidefoot is a platform connecting travelers with local guides for immersive, long-lasting tours.</p>
            {/* Add more content sections as needed */}
          </>
        );
      case 'explorations':
        return (
          <>
            <CraftItem src="/Craft/spichify.mp4" alt="spichify" />
            <CraftItem src="/Craft/back-to-future.mov" alt="back-to-future" />
            <CraftItem src="/Craft/triple_tree.mp4" alt="triple_tree" />
            <CraftItem src="/Craft/pet-app.mp4" alt="pet-app" />
            
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full flex flex-col gap-16 sm:gap-24 p-8 sm:p-12">
        <Header />
        
        <div className="max-w-5xl mx-auto w-full flex flex-col gap-16">
            <div className="max-w-3xl mx-auto flex flex-col gap-8">
                <h2 className="text-center">{project.title}</h2>
                <p className="text-xl text-center">{project.description}</p>
            </div>

        {/* project image/video */}
        <div className="grid gap-8">
        <div className="relative aspect-video">
            {project.media.type === 'video' ? (
            <video
                src={project.media.src}
                className="object-cover w-full h-full rounded-lg"
                controls
                playsInline
                muted
            />
            ) : (
            <img
                src={project.media.src}
                alt={project.media.alt}
                className="object-cover w-full h-full rounded-lg"
            />
            )}
        </div>
        </div>

        {/* project description */}
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="uppercase text-xs tracking-widest text-gray-400 mb-1">Role</div>
                    <div className="text-base text-gray-200">{project.role}</div>
                </div>
                <div>
                    <div className="uppercase text-xs tracking-widest text-gray-400 mb-1">Team</div>
                    <div className="text-base text-gray-200">{project.team}</div>
                </div>
                <div>
                    <div className="uppercase text-xs tracking-widest text-gray-400 mb-1">Year</div>
                    <div className="text-base text-gray-200">{project.year}</div>
                </div>
                <div className="bg-background-lightDark rounded-xl p-6 mt-4">
                    <div className="uppercase text-xs tracking-widest text-gray-400 mb-2">Goal</div>
                    <div className="text-lg text-gray-200 whitespace-pre-line">{project.goal}</div>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-8">
            {renderContent()}
        </div>
        

        </div>

        <Footer />
      </div>
    </div>
  );
} 
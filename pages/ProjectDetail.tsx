
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* 1. Fullscreen Main Image */}
      <section className="w-full h-[70vh] md:h-screen overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </section>

      {/* 2. Structured Info Section (Studio JT Reference Layout) */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left/Main Column: Title and Long Description */}
          <div className="md:col-span-8 space-y-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
                {project.title}
              </h1>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal whitespace-pre-line">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Column: Metadata (Client & Release Date) */}
          <div className="md:col-span-4 space-y-10">
            <div className="border-t border-black pt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Client</p>
              <p className="text-base md:text-lg font-bold">{project.client}</p>
            </div>
            <div className="border-t border-black pt-6">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-4">Release Date</p>
              <p className="text-base md:text-lg font-bold">{project.year}</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Main Content Sections (Text and Images) */}
      <div className="space-y-24 md:space-y-40">
        {project.sections.map((section, index) => {
          if (section.type === 'full-image') {
            return (
              <div key={index} className="w-full">
                <img 
                  src={section.imageUrl} 
                  alt="" 
                  className="w-full h-auto object-cover block"
                />
              </div>
            );
          }
          if (section.type === 'image') {
            return (
              <div key={index} className="max-w-7xl mx-auto px-6">
                <img 
                  src={section.imageUrl} 
                  alt="" 
                  className="w-full h-auto block mx-auto"
                />
              </div>
            );
          }
          if (section.type === 'text') {
            return (
              <div key={index} className="max-w-4xl mx-auto px-6">
                {section.title && <h2 className="text-2xl md:text-4xl font-bold mb-8 uppercase tracking-tight">{section.title}</h2>}
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  {section.content}
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Footer Navigation */}
      <div className="max-w-7xl mx-auto px-6 mt-40 pt-20 border-t border-gray-100 flex justify-center items-center">
        <button 
          onClick={() => navigate('/work')}
          className="group flex items-center space-x-4 text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors"
        >
          <span>All Projects</span>
          <span className="group-hover:translate-x-2 smooth-transition">→</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;

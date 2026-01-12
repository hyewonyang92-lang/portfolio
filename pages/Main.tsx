
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS } from '../constants';

const RotatingText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const phrases = [
    '과정을 쌓아가는',
    '소통을 중요하게 생각하는',
    '사용자를 생각하는',
    '경험을 디자인하는'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      <div className="flex items-center space-x-2 text-[11px] md:text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
        <span className="whitespace-nowrap">디자이너 양혜원 포트폴리오</span>
        <span className="w-[1px] h-3 bg-gray-300 mx-2"></span>
        <div className="relative h-6 overflow-hidden min-w-[200px] text-left">
          {phrases.map((phrase, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-700 ease-in-out whitespace-nowrap text-black ${
                i === index 
                ? 'translate-y-0 opacity-100' 
                : i < index 
                  ? '-translate-y-full opacity-0' 
                  : 'translate-y-full opacity-0'
              }`}
            >
              {phrase}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Main: React.FC = () => {
  // 메인 페이지는 2x2 레이아웃을 위해 상위 4개 프로젝트만 노출
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="px-6 py-32 md:py-48 max-w-7xl mx-auto text-center">
        <RotatingText />
        
        <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[1.3] max-w-5xl mx-auto uppercase">
          Yang Hyewon’s <br />
          UI/UX Design Portfolio
        </h1>
      </section>

      {/* 2x2 Project Grid */}
      <section className="grid grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export default Main;

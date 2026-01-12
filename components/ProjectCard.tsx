
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group relative block overflow-hidden bg-gray-100 w-full aspect-square"
    >
      <div className="absolute inset-0 z-0">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover smooth-transition group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 smooth-transition z-10" />
      
      <div className="absolute bottom-0 left-0 p-4 md:p-8 z-20 w-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 smooth-transition">
        <div className="bg-white p-4 md:p-6 inline-block">
          <p className="text-[8px] md:text-xs uppercase tracking-widest text-gray-500 mb-1 md:mb-2">{project.category}</p>
          <h3 className="text-sm md:text-2xl font-bold leading-tight">{project.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

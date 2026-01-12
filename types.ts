
export interface ProjectSection {
  type: 'text' | 'image' | 'full-image';
  content?: string;
  imageUrl?: string;
  title?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  thumbnail: string;
  description: string;
  client: string;
  role: string;
  sections: ProjectSection[];
}

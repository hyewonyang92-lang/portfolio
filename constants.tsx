
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'sanc-brand',
    title: 'Sanc Brand Identity & Website Renewal',
    category: 'UI/UX & Branding',
    year: '2024.03',
    thumbnail: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop',
    description: `하이엔드 주얼리 브랜드 Sanc의 디지털 아이덴티티를 새롭게 정의하였습니다. 

사용자들에게 더욱 감각적인 브랜드 경험을 제공하기 위해 미니멀한 레이아웃과 고해상도 이미지를 조화롭게 구성하였습니다. 특히 제품의 디테일을 강조하는 줌 기능과 유려한 트랜지션을 통해 오프라인 부티크에서 느끼는 고급스러움을 온라인에서도 경험할 수 있도록 설계하였습니다.`,
    client: 'Sanc Global',
    role: 'Lead UI/UX Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'Design Strategy',
        content: '우리는 단순한 쇼핑몰을 넘어 브랜드의 철학을 공유하는 공간으로 웹사이트를 재해석했습니다. 여백의 미를 활용하여 제품이 돋보이게 하였으며, 사용자 흐름에 따른 자연스러운 스토리텔링을 유도했습니다.'
      },
      {
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'kakao-renewal',
    title: 'kakao 대표 홈페이지 UI/UX 개편',
    category: 'Web Design',
    year: '2024.01',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop',
    description: `카카오 공동체와의 연결. 사용자들에게 더욱 효과적인 서비스 소식을 알리기 위해 편리한 위젯 기능을 제공함으로써 첫 화면에서 다양한 소식을 손쉽게 확인할 수 있도록 구성하였습니다.`,
    client: '카카오 (Kakao)',
    role: 'Senior UI/UX Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'finance-plus',
    title: 'Finance+ Mobile Asset Management',
    category: 'App Design',
    year: '2023.11',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
    description: `복잡한 금융 자산 관리 프로세스를 누구나 이해하기 쉬운 비주얼로 시각화하였습니다.`,
    client: 'FinPlus Fintech',
    role: 'Product Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1616077168079-7e09a677fb2c?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'eco-living',
    title: 'Eco Living IoT Smart Home Dashboard',
    category: 'Web Design',
    year: '2023.08',
    thumbnail: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop',
    description: `지속 가능한 삶을 위한 스마트 홈 대시보드 디자인입니다.`,
    client: 'GreenHome IoT',
    role: 'UI Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  }
];

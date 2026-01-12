
import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'sanc-brand',
    title: 'Sanc Brand Identity & Website Renewal',
    category: 'UI/UX & Branding',
    year: '2024.03',
    // 사용자가 첨부하고 요청한 파일명으로 직접 지정합니다.
    thumbnail: 'thumbnail_01.png',
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
    description: `카카오 공동체와의 연결

사용자들에게 더욱 효과적인 서비스 소식을 알리기 위해 편리한 위젯 기능을 제공함으로써 첫 화면에서 다양한 소식을 손쉽게 확인할 수 있도록 구성하였습니다. 이를 통해 카카오의 다양한 서비스를 효과적으로 표현하고, 사용자 경험을 높이는데 집중하였습니다.`,
    client: '카카오 (Kakao)',
    role: 'Senior UI/UX Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'User-Centric Interface',
        content: '복잡한 서비스 생태계를 하나의 직관적인 대시보드 형태로 통합하여 사용자가 원하는 정보에 도달하는 단계를 최소화했습니다.'
      }
    ]
  },
  {
    id: 'finance-plus',
    title: 'Finance+ Mobile Asset Management',
    category: 'App Design',
    year: '2023.11',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
    description: `복잡한 금융 자산 관리 프로세스를 누구나 이해하기 쉬운 비주얼로 시각화하였습니다.

데이터의 위계를 명확히 하고, 사용자의 자산 현황을 실시간으로 파악할 수 있는 다이내믹 차트를 도입하였습니다. 보안성과 편의성 사이의 균형을 맞춘 혁신적인 인터랙션을 통해 신뢰받는 금융 앱으로서의 가치를 높였습니다.`,
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
    description: `지속 가능한 삶을 위한 스마트 홈 대시보드 디자인입니다.

에너지 소비 패턴을 인포그래픽으로 제공하여 사용자의 자발적인 에너지 절약을 유도합니다. 친환경적인 무드의 컬러 팔레트와 부드러운 UI 요소를 사용하여 기술이 삶에 자연스럽게 스며드는 경험을 선사합니다.`,
    client: 'GreenHome IoT',
    role: 'UI Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'mood-magazine',
    title: 'Mood & Tone: Lifestyle Magazine App',
    category: 'App Design',
    year: '2023.05',
    thumbnail: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2000&auto=format&fit=crop',
    description: `일상의 영감을 기록하고 공유하는 라이프스타일 매거진 플랫폼입니다. 

감도 높은 폰트 시스템과 그리드 레이아웃을 통해 디지털 환경에서도 종이 매거진의 질감을 느낄 수 있도록 하였습니다. 사용자의 취향에 맞춘 큐레이션 알고리즘을 시각적으로 아름답게 구현하여 콘텐츠 탐색의 즐거움을 극대화했습니다.`,
    client: 'M&T Media',
    role: 'Lead Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'text',
        title: 'Editorial Experience',
        content: '스크롤 깊이에 따른 타이포그래피의 크기 변화와 배경색의 자연스러운 전환을 통해 몰입감 있는 읽기 경험을 선사합니다.'
      }
    ]
  },
  {
    id: 'beyond-space',
    title: 'Beyond Space: Coworking Platform',
    category: 'Product Design',
    year: '2023.02',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    description: `전 세계의 코워킹 스페이스를 실시간으로 예약하고 커뮤니티와 연결되는 올인원 플랫폼입니다. 

공간의 분위기를 한눈에 파악할 수 있는 360도 뷰 인터페이스와 복잡한 멤버십 옵션을 직관적인 카드로 설계하였습니다. 리모트 워커들의 생산성을 높이기 위한 예약 관리 시스템의 사용성을 대폭 개선하였습니다.`,
    client: 'Beyond Global',
    role: 'UX Designer',
    sections: [
      {
        type: 'full-image',
        imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop'
      },
      {
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  }
];

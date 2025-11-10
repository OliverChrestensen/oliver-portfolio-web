export interface Project {
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  status: 'completed' | 'ongoing' | 'planned'
  result: string
  color: string
  githubFrontendUrl?: string
  githubBackendUrl?: string
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured?: boolean
  dateStarted?: string
  dateCompleted?: string
  challenges?: string[]
  achievements?: string[]
  // Optional extended metadata for richer project pages
  deployment?: string
  ciCdPipeline?: string
  architecture?: string
  dockerServices?: string[]
  keyFeatures?: string[]
  learningOutcomes?: string[]
  roadmap?: string[]
  inspiration?: string
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug)
}

export const projects: Project[] = [
  {
    slug: 'foodstockmate',
    title: 'FoodStockMate',
    shortDescription: 'A full-stack platform that helps users manage and organize their food stock efficiently.',
    fullDescription: `
FoodStockMate helps users reduce food waste by tracking expiration dates and managing fridge inventory. If you dont want to create an account, you can use the "Use guest account" button in the login page.
Built with a separate backend (Java Spring Boot + PostgreSQL) and frontend (Next.js + TypeScript + Tailwind CSS), it’s deployed on a VPS using Docker, 
Nginx reverse proxy, and automated CI/CD pipelines through GitHub Actions.`,
    deployment: 'VPS using Docker & GitHub Actions',
    ciCdPipeline: 'Automated build, Docker image creation, and redeployment triggered on push to main',
    architecture: 'Client–Server REST API',
    dockerServices: ['Frontend', 'Backend', 'PostgreSQL', 'Nginx Reverse Proxy  '],
    technologies: [
      'Next.js', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 
      'PostgreSQL', 'Docker', 'GitHub Actions', 'Nginx'
    ],
    status: 'completed',
    result: 'Victory 🏆',
    keyFeatures: [
      'Track food items with expiry dates',
      'Filter and categorize ingredients',
      'Visual dashboard for stock overview',
    ],
    challenges: [
      'Building a stable CI/CD pipeline with deployments',
      'Container networking between backend and frontend',
      'Efficient Docker Compose setup for multiple environments'
    ],
    achievements: [
      'Automated deployment pipeline using GitHub Actions',
      'Deployed a complete full-stack system on a self-managed VPS',
      'Clean modular structure between backend and frontend'
    ],
    learningOutcomes: [
      'Deepened understanding of Docker networking and volumes',
      'Improved CI/CD automation skills',
      'Learned advanced Spring Boot configuration and API versioning',
      'Building a next.js frontend with Tailwind CSS and TypeScript'
    ],
    githubBackendUrl: 'https://github.com/OliverChrestensen/FoodStockMate-Backend',
    githubFrontendUrl: 'https://github.com/OliverChrestensen/FoodStockMate-Frontend',
    liveUrl: 'https://foodstockmate.oliverc.dk/',
    color: 'from-green-500 to-green-600',
    roadmap: [
      'Add recipe suggestions based on available ingredients',
      'Integrate barcode scanning using a camera API',
      'Enable multi-user collaboration for households'
    ],
    inspiration: 'Inspired by the idea of reducing household food waste and improving sustainability.'
  },
  {
    slug: 'number-elimination',
    title: 'Number Elimination',
    shortDescription: 'A fast-paced multiplayer number elimination game where players take turns removing numbers from the board — the last one remaining loses!',
    fullDescription: `
  Number Elimination is a real-time multiplayer browser game inspired by a classic paper-and-pen elimination game. 
  Players take turns removing numbers from a shared board, and the last player remaining loses. 
  Built with a Node.js backend using Socket.io for real-time communication and a Next.js + Tailwind CSS frontend, 
  the game delivers instant interactions and simple, competitive fun.
  It was created to digitize a nostalgic game we used to play manually with pen and paper — 
  so we’d never have to redraw the number board again!`,
    deployment: 'Vercel',
    ciCdPipeline: 'Automatic deployment triggered via Vercel on push to main branch',
    architecture: 'Real-time client–server architecture using WebSockets',
    dockerServices: [],
    technologies: [
      'Next.js', 'Tailwind CSS', 'Node.js', 'Socket.io', 'Vercel'
    ],
    status: 'completed',
    result: 'Fun Multiplayer Experience 🎮',
    keyFeatures: [
      'Real-time multiplayer gameplay',
      'Turn-based elimination logic',
      'Automatic board generation',
      'Simple and intuitive interface'
    ],
    challenges: [
      'Managing real-time communication between players',
      'Synchronizing game state across multiple clients',
      'Handling player disconnects gracefully'
    ],
    achievements: [
      'Built a working multiplayer game using Socket.io',
      'Successfully deployed a full real-time app on Vercel',
      'Digitized a traditional offline game for easy online play'
    ],
    learningOutcomes: [
      'Gained experience with WebSocket-based real-time systems',
      'Improved state synchronization techniques for multiplayer logic',
      'Enhanced understanding of event-driven architecture with Socket.io',
      'Refined frontend design skills using Tailwind CSS and Next.js'
    ],
    githubBackendUrl: 'https://github.com/OliverChrestensen/number-elimination-backend',
    githubFrontendUrl: 'https://github.com/OliverChrestensen/number-elimination-frontend',
    liveUrl: 'https://streg-frontend.vercel.app/',
    color: 'from-blue-500 to-blue-600',
    roadmap: [
      'Add matchmaking and lobby system',
      'Implement animations and sound effects',
      'Add player profiles and game history',
      'Enable spectator mode for live matches'
    ],
    inspiration: 'Inspired by a classic number elimination game we used to play with pen and paper.'
  }  
];

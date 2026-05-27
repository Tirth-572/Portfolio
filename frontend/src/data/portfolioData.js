export const personalInfo = {
  name: 'Tirth Vadariya',
  titles: ['Full Stack Developer', 'React.js Developer', 'Node.js Developer'],
  avatar: '/images/profile.jpg',
  about:
    'I am a passionate Full Stack Developer with strong knowledge of frontend and backend development. I completed my Bachelor of Computer Application (BCA) from Sardar Vallabhbhai Global University. After graduation, I joined StackCode Training Institute where I completed an 8-month Full Stack Development course. I love building modern web applications using React.js, Node.js, Express.js, and databases like MongoDB and PostgreSQL.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'tirthvadariya572@gmail.com',
  github: 'https://github.com/Tirth-572',
  linkedin: 'https://www.linkedin.com/in/tirth-vadariya-53351637a/',
  resumeUrl: '/Tirth Vadariya Resume.png',
};

export const education = {
  degree: 'Bachelor Of Computer Application (BCA)',
  university: 'Sardar Vallabhbhai Global University',
  website: 'https://svgu.ac.in/',
  period: '2023 - 2026',
};

export const training = {
  course: 'Full Stack Web Development Trainee',
  institute: 'StackCode Training Institute',
  duration: '8 Months',
  website: 'https://stackcodetraining.com/',
  period: '2025 - 2026',
  join: '22-07-2025',
  End: '22-03-2026',
};

export const courseInfo = {
  course: 'Full Stack Web Development Course',
  institute: 'StackCode Training Institute',
  duration: '8 Months | 2025 - 2026',
  website: 'https://stackcodetraining.com/',
};

export const languages = ['English', 'Hindi', 'Gujarati'];

export const skills = {
  frontend: [
    { name: 'HTML', level: 95, icon: 'html' },
    { name: 'CSS', level: 90, icon: 'css' },
    { name: 'Bootstrap', level: 85, icon: 'bootstrap' },
    { name: 'JavaScript', level: 92, icon: 'javascript' },
    { name: 'React.js', level: 90, icon: 'react' },
    { name: 'Tailwind CSS', level: 88, icon: 'tailwind' },
  ],
  backend: [
    { name: 'Node.js', level: 88, icon: 'nodejs' },
    { name: 'Express.js', level: 85, icon: 'express' },
    { name: 'Prisma', level: 80, icon: 'prisma' },
    { name: 'REST API', level: 90, icon: 'api' },
  ],
  database: [
    { name: 'PostgreSQL', level: 85, icon: 'postgresql' },
    { name: 'MongoDB', level: 88, icon: 'mongodb' },
    { name: 'MySQL', level: 82, icon: 'mysql' },
  ],
  tools: [
    { name: 'Visual Studio Code', level: 95, icon: 'vscode' },
    { name: 'PostgreSQL', level: 85, icon: 'postgresql' },
    { name: 'Postman', level: 90, icon: 'postman' },
    { name: 'Mongo Compass', level: 85, icon: 'mongodb' },
    { name: 'Mongosh', level: 80, icon: 'mongodb' },
    { name: 'Git & GitHub', level: 92, icon: 'git' },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'E-Auction (BidBazaar)',
    slug: 'bidbazaar',
    description:
      'BidBazaar is a group project developed during college. It is an online auction platform where users can bid on products in real-time. The platform provides secure bidding functionality, user authentication, product listings, and auction management features. This project helped improve teamwork, frontend/backend integration, and database management skills.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    github: 'https://github.com/Tirth-572/BidBazaar',
    live: null,
    image: '/images/projects/bidbazaar.jpg',
    badge: null,
  },
  {
    id: 2,
    title: 'StackCode LMS',
    slug: 'stackcode-lms',
    description:
      'StackCode LMS is a Learning Management System developed during Hackathon-I organized by StackCode Training Institute. This project was designed to help students access learning materials, manage courses, and improve communication between trainers and students. The project demonstrates problem-solving skills, teamwork, and full stack development experience.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/Tirth-572/LMS-OF-Stackcode-Training-Institute',
    live: null,
    image: '/images/projects/lms.jpg',
    badge: '🏆 Hackathon Project',
  },
  {
    id: 3,
    title: 'Instagram Clone',
    slug: 'instagram-clone',
    description:
      'This Instagram Clone is a personal project created using React.js and Tailwind CSS. It includes modern UI components inspired by Instagram such as posts, stories, navigation, responsive layouts, and interactive design. This project showcases frontend development and UI/UX skills.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Tirth-572/Instagram-Clone',
    live: null,
    image: '/images/projects/instagram.jpg',
    badge: null,
  },
];

export const achievements = [
  {
    id: 1,
    title: '🥈 First Runner-Up — Hackathon-I',
    description:
      'I participated in Hackathon-I organized by StackCode Training Institute and achieved First Runner-Up position. This experience improved my teamwork, creativity, and problem-solving abilities.',
    note: 'Received gifts and certificate for outstanding performance in Hackathon-I.',
    images: [
      { key: 'certificate', alt: 'Hackathon Certificate' },
      { key: 'gifts', alt: 'Gifts and Awards' },
    ],
  },
];

export const gallery = [
  { id: 1, key: 'certificate', alt: 'Hackathon Certificate', title: 'Hackathon Certificate' },
  { id: 2, key: 'gifts', alt: 'Gifts and Awards', title: 'Gifts & Awards' },
];

export const stats = [
  { label: 'Projects Completed', value: 5, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Months Training', value: 8, suffix: '' },
  { label: 'Hackathon Wins', value: 3, suffix: '' },
];

export const experience = [
  {
    title: '2 Months Internship',
    company: 'StackCode Training Institute',
    period: '2 Months | 2026',
    description: 'Intensive hands-on training in React.js, Node.js, Express.js, MongoDB, PostgreSQL, and real-world project development.',
    type: 'Internship',
  },
  {
    title: 'Full Stack Development Trainee',
    company: 'StackCode Training Institute',
    period: '8 Months | 2025 - 2026',
    description: 'Intensive hands-on training in React.js, Node.js, Express.js, MongoDB, PostgreSQL, and real-world project development.',
    type: 'training',
  }
];

export const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Achievements', to: 'achievements' },
  // { name: 'Gallery', to: 'gallery' },
  { name: 'Contact', to: 'contact' },
];

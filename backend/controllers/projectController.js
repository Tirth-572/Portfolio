const projects = [
  {
    id: 1,
    title: 'E-Auction (BidBazaar)',
    slug: 'bidbazaar',
    description:
      'BidBazaar is a group project developed during college. It is an online auction platform where users can bid on products in real-time. The platform provides secure bidding functionality, user authentication, product listings, and auction management features.',
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
      'StackCode LMS is a Learning Management System developed during Hackathon-I organized by StackCode Training Institute.',
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
      'This Instagram Clone is a personal project created using React.js and Tailwind CSS with modern UI components inspired by Instagram.',
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
    github: 'https://github.com/Tirth-572/Instagram-Clone',
    live: null,
    image: '/images/projects/instagram.jpg',
    badge: null,
  },
];

export const getProjects = (req, res) => {
  res.json(projects);
};

export const getProjectBySlug = (req, res) => {
  const project = projects.find((p) => p.slug === req.params.slug);
  if (!project) return res.status(404).json({ message: 'Project not found' });
  res.json(project);
};

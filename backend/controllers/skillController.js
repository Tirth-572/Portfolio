const skills = {
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

export const getSkills = (req, res) => {
  res.json(skills);
};

import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { TbApi } from 'react-icons/tb';

const iconMap = {
  html: SiHtml5,
  css: SiCss,
  bootstrap: SiBootstrap,
  javascript: SiJavascript,
  react: SiReact,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  prisma: SiPrisma,
  api: TbApi,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  mysql: SiMysql,
  vscode: VscVscode,
  postman: SiPostman,
  git: SiGit,
  github: SiGithub,
};

const colorMap = {
  html: '#E34F26',
  css: '#1572B6',
  bootstrap: '#7952B3',
  javascript: '#F7DF1E',
  react: '#61DAFB',
  tailwind: '#06B6D4',
  nodejs: '#339933',
  express: '#ffffff',
  prisma: '#2D3748',
  api: '#f97316',
  postgresql: '#4169E1',
  mongodb: '#47A248',
  mysql: '#4479A1',
  vscode: '#007ACC',
  postman: '#FF6C37',
  git: '#F05032',
  github: '#ffffff',
};

export function SkillIcon({ icon, size = 24, className = '' }) {
  const Icon = iconMap[icon] || SiReact;
  const color = colorMap[icon] || '#f97316';
  return <Icon size={size} style={{ color }} className={className} />;
}

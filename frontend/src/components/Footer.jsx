import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { personalInfo, navLinks } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100/50 dark:bg-dark-400/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-2xl font-bold gradient-text mb-3">{personalInfo.name}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Full Stack Developer passionate about building modern web applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary-500 text-sm cursor-pointer transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:border-primary-500/30 transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:border-primary-500/30 transition-all">
                <FaLinkedin className="w-5 h-5 text-blue-500" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 glass rounded-lg hover:border-primary-500/30 transition-all">
                <HiMail className="w-5 h-5 text-primary-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>© {year} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <FaHeart className="text-primary-500 w-4 h-4" /> using React.js & Node.js
          </p>
        </div>
      </div>
    </footer>
  );
}

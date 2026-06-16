import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
// import Gallery from './components/Gallery';
import GitHubContributions from './components/GitHubContributions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <div className={loading ? 'hidden' : ''}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Stats />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          {/* <Gallery /> */}
          <GitHubContributions />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;

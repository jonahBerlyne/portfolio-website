import { HomeIcon } from '@heroicons/react/24/solid';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className='bg-primary text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 sm:scrollbar sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-secondary/80'>
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <>      
        <footer className='sticky bottom-5 w-full hidden sm:inline'>
            <div className='flex items-center justify-center'>
              <a href="#hero">
                <HomeIcon 
                 className='h-10 w-10 cursor-pointer'
                />
              </a>
            </div>
        </footer>    
      </>
    </div>
  )
}

export default App;
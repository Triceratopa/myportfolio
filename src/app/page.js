import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import projects from './components/Projects'; // Importing project data from a JSON file
// src/app/page.js
// This component renders the main content of the portfolio page.
// It includes a welcome message, a list of skills, project cards, and contact links.

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-black text-purple-600">
   
     <h1 className="text-4xl font-bold text-center lg:text-left lg:w-1/2">
    Benvenuto nel mio portfolio!</h1>
   <section className="flex flex-col lg:flex-row items-center gap-8 max-w-6xl mx-auto px-4 py-12">

  <div className="lg:w-1/2">
    <p className="text-lg leading-relaxed text-purple-600">
      Ciao sono Giulia, una sviluppatrice full stack.
      
      Ho una passione per la programmazione che mi ha aiutato a riprendere in mano la mia vita e sono un'appassionata di videogiochi.
     
      In questo portfolio, puoi trovare i miei progetti e le mie competenze.
      
      Continuo a studiare e migliorare le mie abilità ogni giorno, e questo portfolio sarà la dimostrazione del mio percorso.
      
      Spero che ti piaccia!
    </p>
  </div>

  
  <div className="lg:w-1/2 flex justify-center">
    <img
      src="/path/to/tuafoto.jpg"
      alt="Giulia Gallo"
      className="rounded-xl shadow-lg max-w-xs w-full object-cover"
    />
  </div>
</section>

     <section id="skills" className="mb-20 text-center mt-20 py-20">
  <h2  className="text-2xl font-bold mb-4">Le mie Skills</h2>
  <ul className="flex flex-wrap justify-center gap-4 mt-10">
    {[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "Next.js",
      "Node.js",
      "Java",
      "Spring Boot",
    ].map((skill) => (
    <li
  key={skill}
  className="border border-purple-600 text-purple-600 px-4 py-2 rounded glow-purple-border glow-purple-text"
>
  {skill}
</li>

    ))}
  </ul>
</section>

      <h2 id='projects' className="text-2xl font-bold mb-6 text-purple-600">I miei progetti</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
  {projects.map((project, index) => (
    <div
      key={index}
      className="project-card border border-purple-600 rounded-lg p-6 bg-gray-900 shadow-md
                 hover:shadow-purple-600/50 transition-shadow duration-300"
      style={{
        boxShadow: '0 0 8px rgba(139, 92, 246, 0.7)',
      }}
    >
      <h3 className="text-xl font-semibold mb-2 text-purple-600">{project.title}</h3>
      <p className="mb-4 text-gray-300">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-500 hover:text-purple-400 hover:underline drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]"
      >
        Vedi codice su GitHub →
      </a>
    </div>
  ))}
</div>

<section id="contact" className="mt-20 text-center">
      <h2 className="text-2xl font-bold mb-6 text-purple-600">Contatti</h2>
      <div className="flex justify-center gap-8 text-white text-3xl">
        <a 
          href="https://github.com/Triceratopa" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-purple-600 transition-colors"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="http://linkedin.com/in/giulia-gallo-fullstackdev-devgame" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-purple-500 transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a 
          href="giulia.gallo2903@gmail.com" 
          className="hover:text-purple-500 transition-colors"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>

      
      
     
    </main>
  );
}
// This is the main page of a Next.js application.
// It serves as the landing page for a portfolio website.
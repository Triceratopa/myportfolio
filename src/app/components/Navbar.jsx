// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="bg-black-900 p-4 flex justify-between items-center">
      <div className="font-bold text-xl">Il Mio Portfolio</div>
      <ul className="flex gap-6">
        <li>
          <a href="#home" className="hover:underline">Home</a>
        </li>
        <li>
          <a href="#skills" className="hover:underline">Skills</a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">Progetti</a>
        </li>
           <li>
          <a href="#contact" className="hover:underline">Contatti</a>
        </li>
       
      </ul>
    </nav>
  );
}

// This is a simple navigation bar component for a portfolio website.
// It includes links to Home, About, Projects, and Contact pages.
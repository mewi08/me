import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light";
  });

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Sobre mí", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  function toggleMode() {
    const newMode = mode === "light" ? "dark" : "light";

    setMode(newMode);
    localStorage.setItem("mode", newMode);
    document.documentElement.dataset.mode = newMode;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <nav className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          Mewi<span>.</span>
        </a>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <ul className="navbar-links">
            {links.map((link) => (
              <li key={link.href} className="navbar-item">
                <a href={link.href} className="navbar-link" onClick={closeMenu}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-theme-button"
            onClick={toggleMode}
            aria-label="Cambiar tema"
          >
            {mode === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

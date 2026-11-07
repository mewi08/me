import { ArrowUp } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile } from '../data/profile'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-description">
          Desarrollando ideas, aprendiendo tecnologías
          y construyendo soluciones.
        </p>

        <div className="footer-socials">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="footer-social-link"
          >
            <FaGithub size={19} />
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-social-link"
            >
              <Linkedin size={19} />
            </a>
          )}
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} {profile.name}.
            Todos los derechos reservados.
          </p>
          <a
            href="#home"
            className="footer-back-top"
            aria-label="Volver al inicio"
          >
            <ArrowUp size={20} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
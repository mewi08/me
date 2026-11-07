import { Mail, ArrowDown, Download } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile } from '../data/profile'

function Home() {
  return (
    <section id="home" className="home section">
      <div className="home-container">
        <div className="home-content">
          <span className="home-greeting">Hola, soy</span>

          <h1 className="home-title">{profile.name}</h1>

          <h2 className="home-subtitle">
            Desarrolladora de Software en formación
          </h2>

          <p className="home-description">{profile.description}</p>

          <div className="home-actions">
            <a href="#projects" className="btn btn-primary">
              Ver proyectos
            </a>

            {profile.cv && (
              <a href={profile.cv} download className="btn btn-secondary">
                <Download size={18} />
                Descargar CV
              </a>
            )}
          </div>

          <div className="home-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="home-social-link"
              aria-label="Correo electrónico"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="home-visual">
          <div className="home-visual-container">
            <div className="home-visual-content">
              <span className="home-visual-label">SOFTWARE DEVELOPER</span>

              <div className="home-visual-symbol">{'</>'}</div>

              <p className="home-visual-text">
                Transformando ideas en soluciones digitales.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="home-scroll">
        <span>Desliza para explorar</span>
        <ArrowDown size={18} />
      </a>
    </section>
  )
}

export default Home
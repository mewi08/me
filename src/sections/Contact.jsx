import { Mail, Send } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { profile } from '../data/profile'

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-container">

        <div className="section-heading">
          <span className="section-subtitle">HABLEMOS</span>
          <h2 className="section-title">Contacto</h2>
          <p className="section-description">
            ¿Tienes alguna propuesta, proyecto o simplemente
            quieres conversar? ¡Me encantaría conocerte!
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h3 className="contact-title">
              Conectemos
            </h3>

            <p className="contact-description">
              Estoy abierta a nuevas oportunidades de aprendizaje,
              colaboración y crecimiento profesional.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="contact-email"
            >
              <Mail size={20} />
              <span>{profile.email}</span>
            </a>

            <div className="contact-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>

          <div className="contact-action">
            <div className="contact-action-icon">
              <Send size={30} />
            </div>

            <h3 className="contact-action-title">
              ¿Trabajamos juntos?
            </h3>

            <p className="contact-action-description">
              Escríbeme y conversemos sobre nuevas oportunidades.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
            >
              Enviar un correo
              <Send size={17} />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
import { GraduationCap, Award, CalendarDays, ExternalLink } from 'lucide-react'
import { education, diplomas } from '../data/education'

function Education() {
  return (
    <section id="education" className="education section">
      <div className="education-container">

        <div className="section-heading">
          <span className="section-subtitle">MI FORMACIÓN</span>
          <h2 className="section-title">Educación</h2>
          <p className="section-description">
            Estudios y certificaciones que respaldan mi aprendizaje.
          </p>
        </div>

        <div className="education-group">
          <div className="education-group-heading">
            <GraduationCap size={24} />
            <h3>Estudios</h3>
          </div>

          <div className="education-list">
            {education.map((item) => (
              <article className="education-card" key={item.degree}>
                <GraduationCap className="education-card-icon" size={26} />

                <div className="education-card-content">
                  <h4 className="education-degree">{item.degree}</h4>
                  <p className="education-institution">{item.institution}</p>

                  <span className="education-period">
                    <CalendarDays size={16} />
                    {item.period}
                  </span>

                  {item.description && (
                    <p className="education-description">{item.description}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        {diplomas.length > 0 && (
          <div className="education-group">
            <div className="education-group-heading">
              <Award size={24} />
              <h3>Cursos y certificaciones</h3>
            </div>

            <div className="diplomas-grid">
              {diplomas.map((item) => (
                <article className="diploma-card" key={item.name}>
                  <Award className="diploma-icon" size={26} />

                  <div className="diploma-card-content">
                    <h4 className="diploma-name">{item.name}</h4>
                    <p className="diploma-institution">{item.institution}</p>

                    {item.certificate && (
                      <a
                        href={item.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <ExternalLink size={16} />
                        Ver certificado
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Education
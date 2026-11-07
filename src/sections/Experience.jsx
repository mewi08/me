import { BriefcaseBusiness, CalendarDays } from 'lucide-react'
import { experience } from '../data/experience'

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="experience-container">

        <div className="section-heading">
          <span className="section-subtitle">MI TRAYECTORIA</span>
          <h2 className="section-title">Experiencia profesional</h2>
          <p className="section-description">
            Experiencias que han contribuido a mi crecimiento personal
            y profesional.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <article
              className="experience-card"
              key={`${item.place}-${index}`}
            >
              <div className="experience-card-marker">
                <BriefcaseBusiness size={22} />
              </div>

              <div className="experience-card-content">
                <div className="experience-card-header">
                  <div className="experience-card-info">
                    <h3 className="experience-role">
                      {item.role}
                    </h3>

                    <h4 className="experience-company">
                      {item.place}
                    </h4>
                  </div>

                  <span className="experience-period">
                    <CalendarDays size={16} />
                    {item.period}
                  </span>
                </div>

                <div className="experience-description">
                  {item.description.map((description, i) => (
                    <p key={i}>
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Experience
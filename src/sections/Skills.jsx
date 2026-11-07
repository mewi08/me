import { techStack } from '../data/techStack'

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="skills-container">

        <div className="section-heading">
          <span className="section-subtitle">MIS CONOCIMIENTOS</span>
          <h2 className="section-title">Habilidades</h2>
          <p className="section-description">
            Tecnologías y herramientas que forman parte
            de mi aprendizaje y desarrollo profesional.
          </p>
        </div>

        <div className="tech-grid">
          {techStack.map(({ name, icon: Icon, color }) => (
            <article className="tech-item" key={name}>
              <Icon className="tech-icon" size={44} style={{ color }} aria-hidden="true" />
              <span className="tech-name">{name}</span>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
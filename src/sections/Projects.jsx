import { ExternalLink, Code2 } from "lucide-react"
import { FaGithub } from 'react-icons/fa'
import { projects } from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="projects-container">
        <div className="section-heading">
          <span className="section-subtitle">MI TRABAJO</span>
          <h2 className="section-title">Proyectos</h2>
          <p className="section-description">
            Algunos proyectos en los que he trabajado, aplicando mis
            conocimientos y aprendiendo nuevas tecnologías.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-card-header">
                <div className="project-icon">
                  <Code2 size={28} />
                </div>

                <span className="project-category">{project.category}</span>
              </div>

              <div className="project-card-content">
                <h3 className="project-name">{project.name}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span className="project-tech-tag" key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub size={18} />
                    Repositorio
                  </a>
                )}

                {project.backendRepository && (
                  <a
                    href={project.backendRepository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={18} />
                    API Backend
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

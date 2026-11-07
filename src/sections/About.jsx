import { Code2, Database, Lightbulb, Rocket } from "lucide-react";
import { profile } from "../data/profile";

function About() {
  const highlights = [
    {
      icon: <Code2 size={24} />,
      title: "Desarrollo de software",
      description: "Interés en crear aplicaciones y soluciones digitales.",
    },
    {
      icon: <Database size={24} />,
      title: "Backend y bases de datos",
      description: "Desarrollo de API y gestión de bases de datos.",
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Aprendizaje continuo",
      description: "Interés por aprender nuevas tecnologías.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Nuevos desafíos",
      description: "Motivación para participar en proyectos reales.",
    },
  ];

  return (
    <section id="about" className="about section">
      <div className="about-container">
        <div className="section-heading">
          <span className="section-subtitle">CONÓCEME</span>
          <h2 className="section-title">Sobre mí</h2>
          <p className="section-description">
            Un poco sobre mi formación e intereses profesionales.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3 className="about-name">¡Hola! Soy {profile.name}</h3>

            <p className="about-description">{profile.description}</p>

            <p className="about-description">
              Actualmente estudio {profile.title} y busco seguir desarrollando
              mis conocimientos mediante proyectos y experiencias profesionales.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item) => (
              <article className="about-card" key={item.title}>
                <div className="about-card-icon">{item.icon}</div>

                <div className="about-card-content">
                  <h4 className="about-card-title">{item.title}</h4>

                  <p className="about-card-description">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

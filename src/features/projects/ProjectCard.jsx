import { ProjectPreview } from './ProjectPreview'

export function ProjectCard({ project, texts }) {
  const cardContent = (
    <>
      <div className="server-icon" aria-hidden="true">
        {project.name.slice(0, 1)}
      </div>

      <div className="server-info">
        <div className="server-title-row">
          <h3>{project.name}</h3>
          <span className="server-status" aria-label={texts.activeLabel}>
            <span className="ping-bars" aria-hidden="true">
              <i /><i /><i /><i />
            </span>
            {texts.active}
          </span>
        </div>
        <p className="project-type">{project.type}</p>
        <p>{project.description}</p>
        <ProjectPreview project={project} texts={texts} />
        {project.learning?.length ? (
          <div className="project-learning">
            <strong>{texts.learningLabel}</strong>
            <ul>
              {project.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <ul className="tag-list" aria-label={`${texts.techAriaPrefix} ${project.name}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </>
  )

  if (project.repositoryUrl) {
    return (
      <a className="server-card server-card--link" href={project.repositoryUrl} target="_blank" rel="noreferrer">
        {cardContent}
      </a>
    )
  }

  return (
    <article className="server-card">
      {cardContent}
    </article>
  )
}

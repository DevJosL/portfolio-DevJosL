export function ProjectPreview({ project, texts }) {
  const hasPreview = Boolean(project.preview)
  const hasScreenshots = Boolean(project.screenshots?.length)

  if (!hasPreview && !hasScreenshots) return null

  return (
    <div className="project-preview" aria-label={`${texts.previewAriaPrefix} ${project.name}`}>
      {hasPreview ? (
        <>
          <div className="project-preview__topbar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="project-preview__body">
            <strong>{project.preview.title}</strong>
            <ul>
              {project.preview.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </>
      ) : null}

      {hasScreenshots ? (
        <div className="project-screenshots" aria-label={`${texts.screenshotsLabel} ${project.name}`}>
          <strong>{texts.screenshotsLabel}</strong>
          <div className="project-screenshots__grid">
            {project.screenshots.map((screenshot) => (
              <div className="project-screenshot" key={screenshot.id}>
                {screenshot.src ? (
                  <img src={screenshot.src} alt={`${screenshot.label} - ${project.name}`} loading="lazy" />
                ) : (
                  <span>{screenshot.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}

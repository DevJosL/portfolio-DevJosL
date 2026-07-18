import { useMemo, useState } from 'react'
import { PixelButton } from '../../shared/components/PixelButton'
import { SectionTitle } from '../../shared/components/SectionTitle'
import { SearchBar } from '../../shared/components/SearchBar'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection({ projects, title, socialLinks, texts }) {
  const [query, setQuery] = useState('')

  const githubHref = socialLinks?.find((link) => link.label === 'GitHub')?.href
  const projectTexts = texts.projects

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return projects

    return projects.filter((project) => {
      const haystack = [project.name, project.type, ...project.technologies]
        .join(' ')
        .toLowerCase()
      return haystack.includes(normalized)
    })
  }, [projects, query])

  return (
    <div className="section-content">
      <SectionTitle id="active-section-title" title={title} />

      <SearchBar
        value={query}
        onChange={setQuery}
        label={projectTexts.searchLabel}
        placeholder={projectTexts.searchPlaceholder}
      />

      <div className="server-list" aria-label={projectTexts.listLabel}>
        {filteredProjects.length ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} texts={projectTexts} />
          ))
        ) : (
          <p className="empty-state">{projectTexts.empty}</p>
        )}
      </div>

      {githubHref ? (
        <PixelButton className="menu-button--ghost view-all" href={githubHref}>
          {projectTexts.viewAll}
        </PixelButton>
      ) : null}
    </div>
  )
}

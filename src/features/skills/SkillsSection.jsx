import { useMemo, useState } from 'react'
import { SectionTitle } from '../../shared/components/SectionTitle'
import { SearchBar } from '../../shared/components/SearchBar'
import { SkillBar } from './SkillBar'

export function SkillsSection({ skills, title, texts }) {
  const [query, setQuery] = useState('')
  const skillTexts = texts.skills

  const filteredSkills = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return skills
    return skills.filter((skill) => skill.name.toLowerCase().includes(normalized))
  }, [skills, query])

  return (
    <div className="section-content">
      <SectionTitle id="active-section-title" title={title} />

      <SearchBar
        value={query}
        onChange={setQuery}
        label={skillTexts.searchLabel}
        placeholder={skillTexts.searchPlaceholder}
      />

      <div className="world-list" aria-label={skillTexts.listLabel}>
        {filteredSkills.length ? (
          filteredSkills.map((skill) => <SkillBar key={skill.id} skill={skill} texts={skillTexts} />)
        ) : (
          <p className="empty-state">{skillTexts.empty}</p>
        )}
      </div>
    </div>
  )
}

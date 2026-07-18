import { useState } from 'react'
import { EducationTimelineModal } from './EducationTimelineModal'
import { ExperienceTimelineModal } from './ExperienceTimelineModal'
import { SectionTitle } from '../../shared/components/SectionTitle'

export function AboutSection({ personalDetails, personalInfo, socialLinks, title, texts }) {
  const [activeModal, setActiveModal] = useState(null)
  const aboutTexts = texts.about

  return (
    <div className="section-content">
      <SectionTitle id="active-section-title" title={title} />

      <dl className="options-grid" aria-label={aboutTexts.personalDataLabel}>
        {personalDetails.map((detail) => {
          const isEducation = detail.id === 'education'
          const isExperience = detail.id === 'experience'

          if (isEducation || isExperience) {
            return (
              <button
                className="option-card option-card--button"
                key={detail.id}
                type="button"
                onClick={() => setActiveModal(detail.id)}
              >
                <strong>{detail.label}</strong>
              </button>
            )
          }

          return (
            <div className="option-card" key={detail.id}>
              <dt>{detail.label}</dt>
              <dd>{detail.value}</dd>
            </div>
          )
        })}
      </dl>

      <p className="about-copy">{personalInfo.summary}</p>

      <ul className="social-links" aria-label={aboutTexts.socialProfilesLabel}>
        {socialLinks.map((link) => {
          const isExternal = link.href?.startsWith('http')
          return (
            <li key={link.id}>
              <a href={link.href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
                {link.label}
              </a>
            </li>
          )
        })}
      </ul>

      {activeModal === 'education' ? (
        <EducationTimelineModal texts={texts.educationTimeline} onClose={() => setActiveModal(null)} />
      ) : null}

      {activeModal === 'experience' ? (
        <ExperienceTimelineModal texts={texts.experienceTimeline} onClose={() => setActiveModal(null)} />
      ) : null}
    </div>
  )
}

import { BackButton } from '../../shared/components/BackButton'

export function ExperienceTimelineModal({ onClose, texts }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="contact-modal timeline-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-timeline-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="screen-heading">
          <p className="content-eyebrow">{texts.eyebrow}</p>
          <BackButton onClick={onClose}>
            {texts.close}
          </BackButton>
        </div>

        <h2 id="experience-timeline-title">{texts.title}</h2>

        <ol className="timeline-list" aria-label={texts.listLabel}>
          {texts.items.map((item) => (
            <li className="timeline-item" key={item.id}>
              <span className="timeline-year">{item.year}</span>
              <div className="timeline-content">
                <h3>{item.institution}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}

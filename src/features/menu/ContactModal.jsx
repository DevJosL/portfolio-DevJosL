import { BackButton } from '../../shared/components/BackButton'

export function ContactModal({ email, linkedinUrl, onClose, phone, socialLinks, texts }) {
  const contactLinks = [
    {
      id: 'email',
      label: texts.emailLabel,
      value: email,
      href: `mailto:${email}`,
    },
    {
      id: 'phone',
      label: texts.phoneLabel,
      value: phone || texts.phoneEmpty,
      href: phone ? `tel:${phone}` : '',
    },
    {
      id: 'linkedin',
      label: texts.linkedinLabel,
      value: linkedinUrl || texts.linkedinEmpty,
      href: linkedinUrl,
    },
    ...(socialLinks ?? []).map((link) => ({
      id: link.id,
      label: link.label,
      value: link.href,
      href: link.href,
    })),
  ]

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="screen-heading">
          <p className="content-eyebrow">{texts.eyebrow}</p>
          <BackButton onClick={onClose}>
            {texts.close}
          </BackButton>
        </div>

        <h2 id="contact-modal-title">{texts.title}</h2>

        <div className="contact-list">
          {contactLinks.map((contact) => (
            <a
              className={`contact-card ${!contact.href ? 'contact-card--disabled' : ''}`}
              key={contact.id}
              href={contact.href || undefined}
              target={contact.href?.startsWith('http') ? '_blank' : undefined}
              rel={contact.href?.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span>{contact.label}</span>
              <strong>{contact.value}</strong>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

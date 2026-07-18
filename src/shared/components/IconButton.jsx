export function IconButton({ href, icon, label, languageLabel, onClick }) {
  const isExternal = href?.startsWith('http')

  if (!href) {
    return (
      <button className="icon-button" type="button" title={label} aria-label={label} onClick={onClick}>
        <span aria-hidden="true">{languageLabel}</span>
      </button>
    )
  }

  return (
    <a
      className="icon-button"
      href={href}
      title={label}
      aria-label={label}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <svg aria-hidden="true">
        <use href={`/icons.svg#${icon}`} />
      </svg>
    </a>
  )
}

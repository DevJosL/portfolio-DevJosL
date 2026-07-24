export function PixelButton({ children, className = '', disabled = false, href, onClick, title, type = 'button' }) {
  const classes = ['menu-button', className].filter(Boolean).join(' ')
  const isExternal = href?.startsWith('http')

  if (href && !disabled) {
    return (
      <a className={classes} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} title={title} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

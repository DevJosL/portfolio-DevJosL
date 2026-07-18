export function PixelButton({ children, className = '', href, onClick, title, type = 'button' }) {
  const classes = ['menu-button', className].filter(Boolean).join(' ')
  const isExternal = href?.startsWith('http')

  if (href) {
    return (
      <a className={classes} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} title={title} onClick={onClick}>
      {children}
    </button>
  )
}

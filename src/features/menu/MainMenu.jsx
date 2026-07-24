import { useState } from 'react'
import { IconButton } from '../../shared/components/IconButton'
import { PixelButton } from '../../shared/components/PixelButton'
import { ContactModal } from './ContactModal'

export function MainMenu({
  activeLanguage,
  contactTexts,
  menuOptions,
  menuTexts,
  onChangeLanguage,
  onSelectScreen,
  quickLinks,
  cvUrl,
  email,
  linkedinUrl,
  phone,
  socialLinks,
}) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const githubLink = quickLinks?.find((link) => link.label === 'GitHub')

  return (
    <div className="main-menu-wrap">
      <nav className="main-menu" aria-label={menuTexts.ariaLabel}>
        {menuOptions.map((option) => (
          <PixelButton key={option.id} title={option.helper} onClick={() => onSelectScreen(option.id)}>
            {option.label}
          </PixelButton>
        ))}
      </nav>

      <div className="quick-link-spacer" aria-hidden="true" />

      <div className="bottom-actions">
        <div className="primary-actions">
          <PixelButton onClick={() => setIsContactModalOpen(true)}>
            {menuTexts.contact}
          </PixelButton>
          <PixelButton disabled={!cvUrl} href={cvUrl} title={!cvUrl ? menuTexts.cvUnavailable : undefined}>
            {menuTexts.cv}
          </PixelButton>
        </div>
        <div className="icon-row icon-row--beside" aria-label={menuTexts.quickLinksLabel}>
          <IconButton
            icon="language-icon"
            label={menuTexts.languageButtonLabel}
            languageLabel={activeLanguage.toUpperCase()}
            onClick={onChangeLanguage}
          />
          {githubLink ? (
            <IconButton href={githubLink.href} icon={githubLink.icon} label={githubLink.label} />
          ) : null}
        </div>
      </div>

      {isContactModalOpen ? (
        <ContactModal
          email={email}
          linkedinUrl={linkedinUrl}
          phone={phone}
          socialLinks={socialLinks}
          texts={contactTexts}
          onClose={() => setIsContactModalOpen(false)}
        />
      ) : null}
    </div>
  )
}

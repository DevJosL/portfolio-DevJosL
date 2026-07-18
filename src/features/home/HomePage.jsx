import { useEffect, useMemo, useState } from 'react'
import {
  personalInfo,
  projects,
  skills,
  socialLinks,
  quickLinks,
} from '../../data/portfolio'
import { defaultLanguage, supportedLanguages, translations } from '../../data/translations'
import { BackButton } from '../../shared/components/BackButton'
import { MainMenu } from '../menu/MainMenu'
import { AboutSection } from '../about/AboutSection'
import { ProjectsSection } from '../projects/ProjectsSection'
import { SkillsSection } from '../skills/SkillsSection'

const languageStorageKey = 'portfolio-language'

const screenComponents = {
  worlds: SkillsSection,
  servers: ProjectsSection,
  options: AboutSection,
}

function pickSplashId(splashes) {
  const totalWeight = splashes.reduce((total, splash) => total + splash.weight, 0)
  let cursor = Math.random() * totalWeight

  for (const splash of splashes) {
    cursor -= splash.weight
    if (cursor <= 0) return splash.id
  }

  return splashes[0].id
}

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(languageStorageKey)
  const isSupported = supportedLanguages.some((language) => language.id === savedLanguage)

  return isSupported ? savedLanguage : defaultLanguage
}

export function HomePage() {
  const [activeScreen, setActiveScreen] = useState('main')
  const [language, setLanguage] = useState(getInitialLanguage)
  const [splashId] = useState(() => pickSplashId(translations[defaultLanguage].header.splashes))
  const texts = translations[language]
  const currentScreen = texts.screens[activeScreen]
  const ActiveContent = screenComponents[activeScreen]
  const selectedSplash = texts.header.splashes.find((splash) => splash.id === splashId) ?? texts.header.splashes[0]

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language)
  }, [language])

  const localizedProjects = useMemo(
    () =>
      projects.map((project) => {
        const projectTexts = texts.projects.items[project.id]
        const screenshots = projectTexts?.screenshots
          ? projectTexts.screenshots.map((screenshot) => ({
              ...screenshot,
              src: project.screenshots?.find((projectScreenshot) => projectScreenshot.id === screenshot.id)?.src ?? screenshot.src,
            }))
          : project.screenshots

        return {
          ...project,
          type: projectTexts?.type ?? project.type,
          description: projectTexts?.description ?? project.description,
          learning: projectTexts?.learning ?? project.learning,
          preview: projectTexts?.preview ?? project.preview,
          screenshots,
        }
      }),
    [texts],
  )

  const localizedPersonalInfo = useMemo(
    () => ({
      ...personalInfo,
      summary: texts.about.summary,
    }),
    [texts],
  )

  const footerLabel = useMemo(() => {
    if (activeScreen === 'main') {
      return texts.footer.main
    }

    return currentScreen.title
  }, [activeScreen, currentScreen.title, texts.footer.main])

  function handleLanguageChange() {
    const currentIndex = supportedLanguages.findIndex((supportedLanguage) => supportedLanguage.id === language)
    const nextLanguage = supportedLanguages[(currentIndex + 1) % supportedLanguages.length]

    setLanguage(nextLanguage.id)
  }

  return (
    <main
      className={`portfolio-screen portfolio-screen--${activeScreen} ${
        activeScreen !== 'main' ? 'portfolio-screen--subscreen' : ''
      }`}
    >
      {activeScreen === 'main' ? (
        <header className="portfolio-header">
          <p className="portfolio-kicker">{personalInfo.role}</p>
          <h1>{personalInfo.name}</h1>
          <p className={`splash-text ${selectedSplash.variant === 'special' ? 'splash-text--special' : ''}`}>
            {selectedSplash.text}
          </p>
          <p className="welcome-text">{texts.header.welcome}</p>
        </header>
      ) : null}

      <section className="portfolio-layout" aria-label="Portfolio principal">
        {activeScreen === 'main' ? (
          <MainMenu
            activeLanguage={language}
            menuOptions={texts.menu.options}
            menuTexts={texts.menu}
            contactTexts={texts.contact}
            onSelectScreen={setActiveScreen}
            onChangeLanguage={handleLanguageChange}
            quickLinks={quickLinks}
            email={personalInfo.email}
            phone={personalInfo.phone}
            socialLinks={socialLinks}
          />
        ) : (
          <section className="content-panel" aria-labelledby="active-section-title">
            <div className="screen-heading">
              <p className="content-eyebrow">{currentScreen.helper}</p>
              <BackButton onClick={() => setActiveScreen('main')}>
                {texts.screens.back}
              </BackButton>
            </div>

            <ActiveContent
              title={currentScreen.title}
              personalInfo={localizedPersonalInfo}
              personalDetails={texts.about.details}
              projects={localizedProjects}
              skills={skills}
              socialLinks={socialLinks}
              texts={texts}
            />
          </section>
        )}
      </section>

      <footer className="screen-footer" aria-label="Información del portfolio">
        <span>{footerLabel}</span>
        <span>{personalInfo.location}</span>
      </footer>
    </main>
  )
}

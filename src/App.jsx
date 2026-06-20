import { useState, useEffect, useRef } from 'react'
import LangToggle from './components/LangToggle.jsx'
import StoryPanel from './components/StoryPanel.jsx'
import { defaultLang, panels } from './data/story.js'

function App() {
  const [lang, setLang] = useState(defaultLang)
  const pageRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const cards = pageRef.current?.querySelectorAll('.comic-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="page" ref={pageRef}>
      <LangToggle lang={lang} onChange={setLang} />
      {panels.map((panel, index) => (
        <StoryPanel key={panel.id} panel={panel} lang={lang} index={index} />
      ))}
    </main>
  )
}

export default App

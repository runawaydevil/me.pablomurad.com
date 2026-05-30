import { useState } from 'react'
import LangToggle from './components/LangToggle.jsx'
import StoryPanel from './components/StoryPanel.jsx'
import { defaultLang, panels } from './data/story.js'

function App() {
  const [lang, setLang] = useState(defaultLang)

  return (
    <main className="page">
      <LangToggle lang={lang} onChange={setLang} />
      {panels.map((panel, index) => (
        <StoryPanel key={panel.id} panel={panel} lang={lang} index={index} />
      ))}
    </main>
  )
}

export default App

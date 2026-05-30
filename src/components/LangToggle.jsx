function LangToggle({ lang, onChange }) {
  return (
    <nav className="lang-toggle" aria-label="Language">
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        onClick={() => onChange('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        className={lang === 'pt' ? 'active' : ''}
        onClick={() => onChange('pt')}
        aria-pressed={lang === 'pt'}
      >
        PT
      </button>
    </nav>
  )
}

export default LangToggle

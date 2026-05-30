function StoryPanel({ panel, lang, index }) {
  const rotateClass =
    panel.rotate === 'left'
      ? 'rotate-left'
      : panel.rotate === 'right'
        ? 'rotate-right'
        : ''

  const layoutClass = panel.layout === 'hero' ? 'big' : ''

  const isHeroIntro = panel.id === '00'
  const isTextFirst = panel.layout === 'text-first'

  const image = (
    <img src={panel.image} alt={panel.alt[lang]} loading={index < 2 ? 'eager' : 'lazy'} />
  )

  const text = <p className="story-text">{panel.text[lang]}</p>

  return (
    <section
      className={`comic-card ${layoutClass} ${rotateClass}`.trim()}
      data-layout={panel.layout}
      data-panel={panel.id}
      style={{ '--panel-accent': panel.accent }}
    >
      <span className="panel-index">{panel.id}</span>

      {isHeroIntro && (
        <div className="caption">
          {image}
          <h2>Understanding Pablo</h2>
          {text}
        </div>
      )}

      {!isHeroIntro && isTextFirst && (
        <>
          {text}
          {image}
        </>
      )}

      {!isHeroIntro && !isTextFirst && (
        <>
          {image}
          {text}
        </>
      )}
    </section>
  )
}

export default StoryPanel

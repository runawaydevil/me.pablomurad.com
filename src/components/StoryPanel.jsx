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
    <img
      src={panel.image}
      alt={panel.alt[lang]}
      loading={index < 2 ? 'eager' : 'lazy'}
    />
  )

  const caption = (
    <div className="caption-box">
      <p className="story-text">{panel.text[lang]}</p>
    </div>
  )

  return (
    <section
      className={`comic-card ${layoutClass} ${rotateClass}`.trim()}
      data-layout={panel.layout}
      data-panel={panel.id}
      data-dark={panel.dark ? 'true' : undefined}
      style={{ '--panel-accent': panel.accent }}
    >
      <span className="panel-index">{panel.id}</span>

      {isHeroIntro && (
        <>
          {image}
          <div className="caption-box">
            <h2 className="hero-title">Understanding Pablo</h2>
            <p className="story-text">{panel.text[lang]}</p>
          </div>
        </>
      )}

      {!isHeroIntro && isTextFirst && (
        <>
          {caption}
          {image}
        </>
      )}

      {!isHeroIntro && !isTextFirst && (
        <>
          {image}
          {caption}
        </>
      )}
    </section>
  )
}

export default StoryPanel

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  highlight?: string   // word to highlight in title (replaces first occurrence)
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean      // true for dark backgrounds
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  // Replace the first occurrence of highlight in title with a styled span
  const renderTitle = () => {
    if (!highlight) {
      return <span>{title}</span>
    }
    const parts = title.split(highlight)
    if (parts.length < 2) return <span>{title}</span>
    return (
      <>
        {parts[0]}
        <span style={{ color: '#DC1E13' }}>{highlight}</span>
        {parts.slice(1).join(highlight)}
      </>
    )
  }

  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`mb-12 ${alignClass} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: light ? 'rgba(244,160,25,0.9)' : '#F4A019' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="section-title mb-4"
        style={{ color: light ? '#ffffff' : '#002798' }}
      >
        {renderTitle()}
      </h2>
      {subtitle && (
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ color: light ? 'rgba(255,255,255,0.75)' : '#5a6a8a' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

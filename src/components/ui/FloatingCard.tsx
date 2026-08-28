interface FloatingCardProps {
  emoji: string
  title: string
  subtitle: string
  className?: string
  style?: React.CSSProperties
}

export default function FloatingCard({ emoji, title, subtitle, className = '', style }: FloatingCardProps) {
  return (
    <div
      className={`float-anim bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100 ${className}`}
      style={style}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
        style={{ background: '#F8F9FC' }}
      >
        {emoji}
      </div>
      <div>
        <p className="font-bold text-sm leading-tight" style={{ color: '#002798' }}>
          {title}
        </p>
        <p className="text-xs" style={{ color: '#5a6a8a' }}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

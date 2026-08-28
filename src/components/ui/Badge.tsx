interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'navy' | 'yellow' | 'green' | 'gray'
  size?: 'sm' | 'md'
  className?: string
}

const variantStyles: Record<string, string> = {
  primary: 'bg-primary text-white',
  secondary: 'text-white',
  navy: 'text-white',
  yellow: 'text-navy font-bold',
  green: 'bg-emerald-500 text-white',
  gray: 'bg-gray-100 text-gray-600',
}

const variantInline: Record<string, React.CSSProperties> = {
  primary: { background: '#DC1E13' },
  secondary: { background: '#F4A019' },
  navy: { background: '#002798' },
  yellow: { background: '#FFF500', color: '#002798' },
  green: {},
  gray: {},
}

const sizeClasses = {
  sm: 'text-xs px-2.5 py-0.5 rounded-full',
  md: 'text-sm px-3.5 py-1 rounded-full',
}

export default function Badge({
  children,
  variant = 'navy',
  size = 'sm',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-semibold ${variantClasses(variant, size)} ${className}`}
      style={variantInline[variant]}
    >
      {children}
    </span>
  )
}

function variantClasses(variant: string, size: string) {
  return `${variantStyles[variant] ?? ''} ${sizeClasses[size as keyof typeof sizeClasses] ?? sizeClasses.sm}`
}

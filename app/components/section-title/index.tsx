import { cn } from '@/app/lib/utils'

type SectionTitleProps = {
  subtitle: string
  title: string
  className?: string
}

export const SectionTitle = ({
  subtitle,
  title,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  )
}

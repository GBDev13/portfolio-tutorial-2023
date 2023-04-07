type SectionTitleProps = {
  subtitle: string
  title: string
}

export const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  )
}

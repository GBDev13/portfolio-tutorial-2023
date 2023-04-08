type CMSIconProps = {
  icon: string
}

export const CMSIcon = ({ icon }: CMSIconProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  )
}

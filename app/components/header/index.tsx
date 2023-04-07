'use client'

import Image from 'next/image'
import { NavItem } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 h-[96px] w-full flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Image
          width={58}
          height={49}
          src="/images/logo.svg"
          alt="Logo GB Dev"
        />

        <nav className="flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}

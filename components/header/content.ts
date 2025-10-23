interface INavData {
  en: INavItem[];
  fr: INavItem[];
}

export const navData: INavData = {
  en: [
    {
      label: 'Home',
      href: '#top',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ],
  fr: [
    {
      label: 'Accueil',
      href: '#top',
    },
    {
      label: 'A propos',
      href: '#about',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'Projets',
      href: '#projects',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ],
};

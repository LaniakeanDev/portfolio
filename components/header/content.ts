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
  ],
};

interface NavbarProps {
  // lang: ILang;
  menuItems: INavItem[];
  className: string;
}

export default function Navbar({ menuItems, className }: NavbarProps) {
  return (
    <nav className={className}>
      <ul className="flex flex-row gap-8">
        {menuItems.map((item, idx) => (
          <li key={`nav${String(idx)}`}>
            <a href={item.href}>
              <p>{item.label}</p>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

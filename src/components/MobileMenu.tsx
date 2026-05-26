import { useState } from 'react';

export interface NavLink {
  label: string;
  href: string;
}

interface Props {
  links: NavLink[];
  /** Accessible label for the nav landmark */
  ariaLabel?: string;
}

export default function MobileMenu({ links, ariaLabel = 'Main navigation' }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label={ariaLabel}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-list"
        onClick={() => setOpen((o) => !o)}
      >
        <span aria-hidden="true">{open ? '✕' : '☰'}</span>
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>

      <ul id="mobile-menu-list" hidden={!open} role="list">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

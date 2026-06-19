import React from 'react';
import styles from './Navigation.module.css';

export type NavItem = {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
};

export interface NavigationProps {
  className?: string;
  collapsed?: boolean; // variant: collapsed vs expanded
  variant?: 'default' | 'compact';
  items?: NavItem[];
  onToggle?: (collapsed: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  className = '',
  collapsed = true,
  variant = 'default',
  items = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'docs', label: 'Docs', href: '#' },
    { id: 'components', label: 'Components', href: '#' },
  ],
  onToggle,
}) => {
  const handleToggle = () => onToggle?.(!collapsed);

  return (
    <aside
      className={`${styles.root} ${collapsed ? styles.collapsed : styles.expanded} ${
        variant === 'compact' ? styles.compact : ''
      } ${className}`}
      aria-hidden={false}
    >
      <div className={styles.header}>
        <button
          type="button"
          aria-expanded={!collapsed}
          aria-label={collapsed ? 'Open navigation' : 'Collapse navigation'}
          onClick={handleToggle}
          className={styles.toggleButton}
        >
          <span aria-hidden="true">{collapsed ? '☰' : '✕'}</span>
        </button>
      </div>

      <nav className={styles.navWrapper} aria-label="Main navigation">
        <ul className={styles.navList} role="menu">
          {items.map((item) => (
            <li key={item.id} className={styles.navItem} role="none">
              <a
                role="menuitem"
                href={item.href ?? '#'}
                className={styles.link}
                tabIndex={0}
              >
                {item.icon && <span className={styles.icon}>{item.icon}</span>}
                <span className={styles.label}>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Navigation;

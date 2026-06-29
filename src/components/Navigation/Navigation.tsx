import React, { useEffect, useRef, useState } from 'react';
import styles from './Navigation.module.css';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { radius } from '../../tokens/radius';
import { typography } from '../../tokens/typography';

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
  const [isCollapsed, setIsCollapsed] = useState<boolean>(collapsed);
  const listRef = useRef<HTMLUListElement | null>(null);

  const COLLAPSE_BREAKPOINT = 768; // px

  useEffect(() => {
    setIsCollapsed(collapsed);
  }, [collapsed]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth < COLLAPSE_BREAKPOINT) setIsCollapsed(true);
    }
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleToggle = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    onToggle?.(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const list = listRef.current;
    if (!list) return;
    const focusable = Array.from(list.querySelectorAll<HTMLAnchorElement>('[role="menuitem"]'));
    const idx = focusable.indexOf(document.activeElement as HTMLAnchorElement);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = focusable[(idx + 1) % focusable.length];
      next?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = focusable[(idx - 1 + focusable.length) % focusable.length];
      prev?.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      focusable[0]?.focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      focusable[focusable.length - 1]?.focus();
    }
  };

  const styleVars: React.CSSProperties = {
    background: colors.interaction.secondary.base,
    borderRight: `1px solid ${colors.border.primary}`,
    padding: spacing.xs,
    borderRadius: radius.small,
    fontFamily: typography.fontFamily.base,
  };

  return (
    <aside
      className={`${styles.root} ${isCollapsed ? styles.collapsed : styles.expanded} ${
        variant === 'compact' ? styles.compact : ''
      } ${className}`}
      aria-hidden={false}
      style={styleVars}
    >
      <div className={styles.header}>
        <button
          type="button"
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? 'Open navigation' : 'Collapse navigation'}
          onClick={handleToggle}
          className={styles.toggleButton}
        >
          <span aria-hidden="true">{isCollapsed ? '☰' : '✕'}</span>
        </button>
      </div>

      <nav className={styles.navWrapper} aria-label="Main navigation">
        <ul
          className={styles.navList}
          role="menu"
          ref={listRef}
          onKeyDown={handleKeyDown}
        >
          {items.map((item, i) => (
            <li key={item.id} className={styles.navItem} role="none">
              <a
                role="menuitem"
                href={item.href ?? '#'}
                className={styles.link}
                tabIndex={0}
                aria-posinset={i + 1}
                aria-setsize={items.length}
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

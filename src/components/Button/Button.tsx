import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  iconLeft?: boolean
  iconRight?: boolean
  iconOnly?: boolean
  icon?: ReactNode
  ariaLabel?: string
}

const defaultIcon = (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
    className={styles.icon}
  >
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.16" />
    <path
      d="M9.5 13.75 11.75 16 16.5 10.75"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export function Button({
  label = 'Placeholder',
  variant = 'primary',
  size = 'large',
  iconLeft = true,
  iconRight = true,
  iconOnly = false,
  icon,
  ariaLabel,
  className,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const displayText = !iconOnly ? label : undefined
  const accessibleLabel = iconOnly ? ariaLabel ?? label : undefined
  const hasIcon = iconOnly || iconLeft || iconRight

  const classNames = [
    styles.button,
    styles[variant],
    styles[`size${size.charAt(0).toUpperCase()}${size.slice(1)}` as keyof typeof styles],
    iconOnly ? styles.iconOnly : '',
    disabled ? styles.disabled : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ')

  const renderedIcon = icon || defaultIcon

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      aria-label={accessibleLabel}
      {...rest}
    >
      {hasIcon && iconLeft && !iconOnly ? (
        <span className={styles.iconWrapper}>{renderedIcon}</span>
      ) : null}

      {displayText ? <span className={styles.text}>{displayText}</span> : null}

      {hasIcon && (iconRight || iconOnly) ? (
        <span className={styles.iconWrapper}>{renderedIcon}</span>
      ) : null}
    </button>
  )
}

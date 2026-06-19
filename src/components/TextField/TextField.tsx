import { type InputHTMLAttributes, type ReactNode, useId } from 'react'
import styles from './TextField.module.css'

export type TextFieldVariant = 'default' | 'search' | 'pillars'
export type TextFieldSize = 'small' | 'medium' | 'large'

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'className'> {
  id?: string
  label?: string
  subtitle?: string
  caption?: string
  placeholder?: string
  prefix?: ReactNode
  suffix?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  showLabel?: boolean
  showSubtitle?: boolean
  showCaption?: boolean
  showPrefix?: boolean
  showSuffix?: boolean
  showLeftIcon?: boolean
  showRightIcon?: boolean
  showValue?: boolean
  showPillars?: boolean
  pillarLabel?: string
  variant?: TextFieldVariant
  size?: TextFieldSize
  className?: string
  inputClassName?: string
}

export function TextField({
  id,
  label = 'Input Label',
  subtitle = 'Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)',
  caption = 'We will notify the customer and issue a full refund',
  placeholder = 'Enter your title here',
  prefix = '+1',
  suffix = '0/50',
  leftIcon = null,
  rightIcon = null,
  showLabel = true,
  showSubtitle = false,
  showCaption = true,
  showPrefix = true,
  showSuffix = true,
  showLeftIcon = true,
  showRightIcon = false,
  showValue = true,
  showPillars = false,
  pillarLabel = 'Reliability',
  variant = 'default',
  size = 'medium',
  className = '',
  inputClassName = '',
  type = 'text',
  ...inputProps
}: TextFieldProps) {
  const generatedId = useId()
  const inputId = id ?? `textfield-${generatedId}`
  const describedBy = [
    showSubtitle && subtitle ? `${inputId}-subtitle` : undefined,
    showCaption && caption ? `${inputId}-caption` : undefined,
  ]
    .filter(Boolean)
    .join(' ') || undefined

  const hiddenLabelId = `${inputId}-label`
  const ariaLabel = !showLabel && label ? label : undefined
  const effectivePlaceholder = showValue ? placeholder : ''

  const variantClass =
    variant === 'search'
      ? styles.variantSearch
      : variant === 'pillars'
      ? styles.variantPillars
      : styles.variantDefault

  const sizeClass =
    size === 'small'
      ? styles.sizeSmall
      : size === 'large'
      ? styles.sizeLarge
      : styles.sizeMedium

  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      {label && showLabel ? (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      ) : null}

      {label && !showLabel ? (
        <span id={hiddenLabelId} className={styles.visuallyHidden}>
          {label}
        </span>
      ) : null}

      {showSubtitle && subtitle ? (
        <p id={`${inputId}-subtitle`} className={styles.subtitle}>
          {subtitle}
        </p>
      ) : null}

      <div className={[styles.inputWrapper, variantClass, sizeClass].join(' ')}>
        {showPrefix && prefix ? (
          <div className={styles.prefix}>
            <span className={styles.prefixText}>{prefix}</span>
            <span className={styles.prefixDivider} />
          </div>
        ) : null}

        {showLeftIcon && leftIcon ? (
          <span className={styles.icon} aria-hidden="true">
            {leftIcon}
          </span>
        ) : null}

        <input
          id={inputId}
          className={[styles.input, inputClassName].filter(Boolean).join(' ')}
          type={type}
          placeholder={effectivePlaceholder}
          aria-describedby={describedBy}
          aria-labelledby={!showLabel && label ? hiddenLabelId : undefined}
          aria-label={ariaLabel}
          {...inputProps}
        />

        {showPillars && pillarLabel ? (
          <span className={styles.pillar}>{pillarLabel}</span>
        ) : null}

        {showSuffix && suffix ? (
          <span className={styles.suffix}>{suffix}</span>
        ) : null}

        {showRightIcon && rightIcon ? (
          <span className={styles.icon} aria-hidden="true">
            {rightIcon}
          </span>
        ) : null}
      </div>

      {showCaption && caption ? (
        <p id={`${inputId}-caption`} className={styles.caption}>
          {caption}
        </p>
      ) : null}
    </div>
  )
}

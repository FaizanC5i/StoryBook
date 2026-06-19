import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    iconLeft: { control: 'boolean' },
    iconRight: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Placeholder',
    variant: 'primary',
    size: 'large',
    iconLeft: true,
    iconRight: true,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Placeholder',
    variant: 'secondary',
    size: 'large',
    iconLeft: true,
    iconRight: true,
  },
}

export const Outline: Story = {
  args: {
    label: 'Placeholder',
    variant: 'outline',
    size: 'medium',
    iconLeft: true,
    iconRight: false,
  },
}

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    ariaLabel: 'Confirm action',
    variant: 'primary',
    size: 'large',
  },
}

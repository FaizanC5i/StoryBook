import type { Meta, StoryObj } from '@storybook/react'
import { TextField, type TextFieldProps } from './TextField'

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
    <path d="M16.5 16.5L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'search', 'pillars'],
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    showLabel: { control: 'boolean' },
    showSubtitle: { control: 'boolean' },
    showCaption: { control: 'boolean' },
    showPrefix: { control: 'boolean' },
    showSuffix: { control: 'boolean' },
    showLeftIcon: { control: 'boolean' },
    showRightIcon: { control: 'boolean' },
    showPillars: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter your title here',
    caption: 'We will notify the customer and issue a full refund',
    showLabel: true,
    showSubtitle: false,
    showCaption: true,
    showPrefix: true,
    showSuffix: true,
    showLeftIcon: true,
    showRightIcon: false,
    showPillars: false,
    variant: 'default',
    size: 'medium',
  },
}

export const Search: Story = {
  args: {
    ...Default.args,
    label: 'Search',
    subtitle: 'Search by name',
    variant: 'search',
    showSubtitle: true,
    showLeftIcon: true,
    showRightIcon: false,
    leftIcon: <SearchIcon />,
  },
}

export const WithPillars: Story = {
  args: {
    ...Default.args,
    variant: 'pillars',
    showPillars: true,
    pillarLabel: 'Reliability',
    showSuffix: false,
  },
}

export const HiddenLabel: Story = {
  args: {
    ...Default.args,
    showLabel: false,
    showSubtitle: false,
    showCaption: false,
    ariaLabel: 'Phone number',
  },
}

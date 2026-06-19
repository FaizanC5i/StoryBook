import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Navigation from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Organisms/Navigation',
  component: Navigation,
  argTypes: {
    collapsed: { control: 'boolean' },
    variant: { control: 'select', options: ['default', 'compact'] },
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    collapsed: false,
    variant: 'default',
    items: [
      { id: 'home', label: 'Home', href: '#' },
      { id: 'browse', label: 'Browse', href: '#' },
      { id: 'components', label: 'Components', href: '#' },
    ],
  },
};

export const Collapsed: Story = {
  args: {
    collapsed: true,
    variant: 'default',
    items: Default.args?.items,
  },
};

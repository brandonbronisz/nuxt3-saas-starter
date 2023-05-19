import type { Meta, StoryObj } from '@storybook/vue3'
import Banner from './Banner.vue'

const meta: Meta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
}

export default meta

type Story = StoryObj<typeof Banner>

export const Basic: Story = {}

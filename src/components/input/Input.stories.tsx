import type { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './Input'

export default {
  title: 'LIBRARY/Form/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (arg) => {
  return <Input {...arg} />
}

export const Default = Template.bind({})

Default.args = {
  label: 'Select',
  placeholder: 'Placeholder'
}

export const SelectionWithoutFill = Template.bind({})

SelectionWithoutFill.storyName = 'Selection without fill'
SelectionWithoutFill.args = {
  ...Default.args,
  autoFocus: true
}

export const SelectionWithFill = Template.bind({})
SelectionWithFill.storyName = 'Selection with fill'

SelectionWithFill.args = {
  ...Default.args,
  defaultValue: 'Text fill'
}

export const Disabled = Template.bind({})
Disabled.args = {
  ...Default.args,
  disabled: true,
  defaultValue: 'Value disable'
}

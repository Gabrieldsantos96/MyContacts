import { Meta, Story } from '@storybook/react'
import ToastMessage, { ToastMessageProps } from '.'

export default {
  title: 'Components/ToastMessage',
  component: ToastMessage
} as Meta

const Template: Story<ToastMessageProps> = (args) => (
  <div
    style={{
      margin: '5rem',
      position: 'fixed',
      bottom: '4rem',
      left: '50%',
      transform: 'translateX(-50%)'
    }}
  >
    <ToastMessage {...args} />
  </div>
)

export const Default: Story<ToastMessageProps> = Template.bind({})
Default.args = {
  message: {
    id: 1,
    type: 'danger',
    text: 'Mensagem de erro!',
    duration: 5000
  }
}

export const Success: Story<ToastMessageProps> = Template.bind({})
Success.args = {
  message: {
    id: 1,
    type: 'success',
    text: 'Operação concluída com sucesso!',
    duration: 3000
  }
}

export const Warning: Story<ToastMessageProps> = Template.bind({})
Warning.args = {
  message: {
    id: 3,
    type: 'warning',
    text: 'Esta é uma mensagem de aviso.',
    duration: 4000
  }
}

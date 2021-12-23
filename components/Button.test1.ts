import { mount } from '@vue/test-utils'

describe('MessageComponent.vue', () => {
  // The component to test
  const MessageComponent = {
    template: '<p>{{ msg }}</p>',
    props: ['msg'],
  }

  test('displays message', () => {
    const wrapper = mount(MessageComponent, {
      props: {
        msg: 'Hello world',
      },
    })

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Hello world')
  })
})

// import { render, screen, fireEvent } from '@testing-library/vue'
// import Button from './Button.vue'

// describe('Button', () => {
//   it('has a label', () => {
//     render(Button, {
//       slots: { default: 'Hello' },
//     })

//     const button = screen.getByText('Hello')

//     expect(button).toBeInTheDocument()
//   })

//   it('can be clicked', () => {
//     const onClick = jest.fn()

//     render(Button, {
//       slots: { default: 'Hello' },
//       props: {
//         onClick,
//       },
//     })

//     expect(onClick).not.toHaveBeenCalled()

//     fireEvent.click(screen.getByText('Hello'))

//     expect(onClick).toHaveBeenCalledTimes(1)
//   })
// })

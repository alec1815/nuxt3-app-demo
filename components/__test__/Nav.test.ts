import { mount } from '@vue/test-utils'
import Nav from '../Nav.vue'

describe('Nav', () => {
  it('should render correctly', () => {
    const wrapper = mount(Nav)
    expect(wrapper.element).toMatchSnapshot()
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

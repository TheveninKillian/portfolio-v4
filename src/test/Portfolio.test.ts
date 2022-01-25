import { mount } from '@vue/test-utils'
import Portfolio from '../pages/Portfolio.vue'

test('mount Portfolio', () => {
  const wrapper = mount(Portfolio)
  expect(wrapper.vm.randomPosition()).toMatch(/left|top|right|bottom/)
})

import { mount } from '@vue/test-utils'
import Logo from '@/components/Logo.vue'

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
      console.log(1)
    console.log(2)
    expect(wrapper.vm).toBeTruthy()
  })
})

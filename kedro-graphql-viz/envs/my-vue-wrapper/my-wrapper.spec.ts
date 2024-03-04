//import { render } from "@testing-library/vue";
//import { BasicMyWrapper } from "./my-wrapper.composition";
//
//it("should render with the correct text", () => {
//  const { getByText } = render(BasicMyWrapper);
//  const rendered = getByText(/Hello World/);
//  expect(rendered).toBeTruthy();
//});

import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//import HelloWorld from '../../src/components/HelloWorld.vue'
import { BasicMyWrapper } from "./my-wrapper.composition";

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

test('displays message', () => {
  const wrapper = mount({
    template: '<v-layout><hello-world></hello-world></v-layout>'
  }, {
    props: {},
    global: {
      components: {
        BasicMyWrapper,
      },
      plugins: [vuetify],
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Components')
})

import Vue from 'vue'
import Landing from '/src/components/Landing'
import {it, describe, expect} from 'mocha'

describe('Landing.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Landing)
    })
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})

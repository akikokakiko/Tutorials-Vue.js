var app = new Vue({
  el: '#app',
  data: {
    message1: 'Hello Vue.js',
    message2: 'Hello Vue.js',
    message3: 'Hello <span style="color:red;">Vue.js</span>',
    message4: 'Hello Vue.js'
  },
  methods: {
    clickHandler: function(event) {
      this.message1 = this.message1.split('').reverse().join('')
    }
  }
})

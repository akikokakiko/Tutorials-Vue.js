var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    url: 'https://vuejs.org/',
    toggle: true,
    languages: ['JavaScript', 'Ruby', 'Python']
  },
  methods: {
    onclick: function() {
      this.message = 'Clicked!'
    }
  }
})

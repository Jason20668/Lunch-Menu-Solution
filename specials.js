

const vue_app = Vue.createApp({
  data() {
    return {
      specials: []
    }
  },
  created() {
    fetch('json.json')
      .then(response => response.json())
      .then(json => {
        this.specials = json.slice(0, 5)
      })
  }
})

vue_app.mount("#vue_app")
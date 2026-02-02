

const vue_app = Vue.createApp({
      created() {
            fetch('json.json').then(response => response.json()).then(json => {
                  this.json = json
            })
      }
})

vue_app.mount("#vue_app")
let home = require('./home.vue').default
let app = new Vue({ 
  el: '#app', 
  render: (renderElement) => renderElement(home)
})

let header = require('./header.vue').default
let app = new Vue({ 
  el: '#app', 
  render: (renderElement) => renderElement(header)
})

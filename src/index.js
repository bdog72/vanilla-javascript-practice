if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += 'bdog'
}

const bdog2 = 'bdog2'

console.log(bdog2)

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}

if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}

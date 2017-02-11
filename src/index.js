if (process.env.NODE_ENV !== 'production') require('./index.html')
import './styles/screen.scss'

const main = () => {
  document.querySelector('h1').textContent += 'bdog'
}

function bdog1 () {
  document.write('Bdoggy72')
}
bdog1()

const timesFive = (num) => {
  return num * 5
}
var answer = timesFive(5)
document.write(answer)

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}

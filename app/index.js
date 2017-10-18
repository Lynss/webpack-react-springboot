import './main.scss'
import generateText from './sub'
import  './plugin'
import moment from 'moment'

let app = document.createElement('div')
const myPromise = Promise.resolve(42)
myPromise.then(number => {
    $('body').append(`<p>promise result is ${number} now is ${moment().format()}</p>`)
    $('div').yellow()
})
app.innerHTML = '<h1>Hello World</h1>'
app.appendChild(generateText())
document.body.appendChild(app)

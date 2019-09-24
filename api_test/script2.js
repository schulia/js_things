//finding the element to start
const app = document.getElementById('root')

//creating new elements
const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

//ading it to the page 
app.appendChild(logo)
app.appendChild(container)

//setling the connection
var request = new XMLHttpRequest()

//starting the request with method and object 

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function() {
  // accessing the JSON formatted data 
  var data = JSON.parse(this.response)
  //if worked then function X 
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title
      
      const h3 = document.createElement('h3')
      h3.textContent = (`From ${movie.director} released at ${movie.release_year}`)

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 150)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(h3)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()
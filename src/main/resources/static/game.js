const gameUrl = 'http://localhost:8080/increment'
const pointStoreName = 'points'

window.addEventListener('load', event => {
  addListenerToButton()
})

function addListenerToButton () {
  const nappi = document.querySelector('#nappi')
  nappi.addEventListener('click', event => {
    fetch(gameUrl).then(response => response.json()).then(result => countPoints(result))
  })
}

function countPoints (result) {
  if (storageAvailable('localStorage')) {
    let points = localStorage.getItem(pointStoreName)
    if (points === null) {
      points = 20
    }
    if (typeof points === 'string') {
      points = parseInt(points)
    }
    if (result.points === 0) {
      points--
    }
    points += result.points
    console.log(points)
    console.log(result)
    localStorage.setItem(pointStoreName, points)
    // Yippee! We can use localStorage awesomeness
  } else {
    // Too bad, no localStorage for us
  }
}

function storageAvailable (type) {
  var storage
  try {
    storage = window[type]
    var x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      (storage && storage.length !== 0)
  }
}

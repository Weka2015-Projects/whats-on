'use strict'

const getWeather = (lat, lon) => {
  $.get('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric' + '&appid=2de143494c0b295cca9337e1e96b00e0',
    (weather) => {
      let icons = {
        '01d': 'wi-day-sunny',
        '01n': 'wi-stars',
        '02d': 'wi-day-sunny-overcast',
        '02n': 'wi-night-partly-cloudy',
        '03n': 'wi-night-cloudy',
        '03d': 'wi-day-cloudy',
        '04d': 'wi-cloudy',
        '04n': 'wi-cloudy',
        '09d': 'wi-day-sprinkle',
        '10d': 'wi-day-rain',
        '11d': 'wi-day-thunderstorm',
        '13d': 'wi-day-snow',
        '50d': 'wi-day-fog',
        '09n': 'wi-night-sprinkle',
        '10n': 'wi-night-rain',
        '11n': 'wi-night-thunderstorm',
        '13n': 'wi-night-snow',
        '50n': 'wi-night-fog'
      }
      let location = weather.name + ', ' + weather.sys.country
      let wind = weather.wind.speed
      let humidity = weather.main.humidity
      let pressure = Math.round(weather.main.pressure / 10)
      let temp = Math.round(weather.main.temp * 10) / 10
      let tempMax = Math.round(weather.main.temp_max * 10) / 10
      let tempMin = Math.round(weather.main.temp_min * 10) / 10
      let iconSource = weather.weather[0].icon
      let iconName = iconSource.split(' ').map((code) => {
        let results = []
        results.push(icons[code])
        return results.join('')
      })
      let icon = iconName[0]
      let windIcon = 'wi-wind towards-' + weather.wind.deg + '-deg'
      console.log(icon)
      let sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString('en-au')
      let sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString('en-au')
      let time = new Date(weather.dt * 1000).toLocaleTimeString('en-au')
      let date = new Date(weather.dt * 1000).toLocaleDateString('en-au')

      $('.temp').empty().append(temp + '&deg;C')
      $('.tempMax').empty().append(tempMax + '&deg;C')
      $('.tempMin').empty().append(tempMin + '&deg;C')
      $('#temperature').removeClass().addClass('wi').addClass(icon)
      $('.location').empty().append(location)
      $('.time').empty().append(time)
      $('.date').empty().append(date)
      $('.sunrise').empty().append(sunrise)
      $('.sunset').empty().append(sunset)
      $('#windIcon').removeClass().addClass("wi").addClass(windIcon);
      $('.wind').empty().append(wind + ' m/s')
      $('.humidity').empty().append(humidity + '%')
      $('.pressure').empty().append(pressure + ' kPA')
      , 'json'
    })
}

const getLocation = () => {
  $.get('http://ip-api.com/json', (loc) => {
    getWeather(loc.lat, loc.lon, loc.region)
  }, 'json')
}

getLocation()

const customWeather = () => {
  let userlat = (document.getElementById('latiude').value)
  let userlong = (document.getElementById('longitude').value)
  if (userlong) {
    getWeather(userlat, userlong)
  }
}
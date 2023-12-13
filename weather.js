let input_place = document.getElementById("input_place")
let button = document.getElementById("find_button")
let container = document.getElementById("container")
let weather = document.getElementById("weather");
let place = document.getElementById("place");
let temperature = document.getElementById("temperature");
 button.addEventListener("click", function () {
    let a = input_place.value
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${a}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            let latitude = data.results[0].latitude
            let longitude = data.results[0].longitude
            console.log(latitude);
            console.log(longitude)
            fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
            )
                .then(function (res) {
                    return res.json();
                })
                .then(function (weather_data) {
                    console.log(weather_data);
                    temperature.innerText = weather_data.current_weather.temperature;
                    console.log(temperature)
                    place.innerText = a;
                    let weather_code = weather_data.current_weather.weathercode
                    if (weather_code <= 3) {
                        container.style.backgroundImage = "url(https://i.pinimg.com/originals/a4/d4/3e/a4d43eb1957573dc17df168c1a16e5ee.gif)"
                    } else if (weather_code >= 48 && weather_code <= 67) {
                        container.style.backgroundImage = "url(https://i.pinimg.com/originals/fa/01/42/fa0142566206003877c56870612b026d.gif)"
                    } else if (weather_code >= 71 && weather_code <= 86) {
                        container.style.backgroundImage = "url(https://i.pinimg.com/originals/b5/15/a3/b515a32d5134ebb8a40b1a4faa5224d1.gif)"

                    } else if (weather_code >= 95 && weather_code <= 99) {
                        container.style.backgroundImage = "url(https://i.pinimg.com/originals/36/ad/bd/36adbd4765f5e1f65d7615cf0ae48f65.gif)"

                    }


                });
        })


})

// fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${input_place}`)
//   .then(function (res) {
//     return res.json();
//   })
// .then(function(data){
//     console.log(data);
//     let latitude = data.results[0].latitude
//     let longitude = data.results[0].longitude
//     console.log(latitude);
//     console.log(longitude)
//     fetch(
//         `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//       )
//         .then(function (res) {
//           return res.json();
//         })
//         .then(function (weather_data) {
//           console.log(weather_data);
//           let temperature = weather_data.current_weather.temperature;
//           console.log(temperature)

//         });
// })
//
// 
let joke = document.querySelector('.joke')
let jokeRsp = document.querySelector('.joke-response')
let generate = document.querySelector('.btn-generate')
let jokeText  = document.querySelector('.joke-display')

//Liens API joke
let url = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

// 
let getJoke = ()=>{
    fetch(url)
      .then(data => data.json())
      .then(item => {
        joke.textContent = item.setup
        jokeRsp.textContent = item.delivery
        jokeText.style.backgroundColor = "white"
       
      })
      .catch(function(error) {
        console.log(error)
      });
}

generate.addEventListener('click', getJoke)



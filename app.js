let first = "http://api.giphy.com/v1/gifs/search"
let search = "?q="
let q = "cat"
let key = "&api_key=n5v0ys2kC8OaWWwSg4chpqA837dlrHZs"

//full api with the query
let fullApi  = ""




//get all my elements
const btn = document.getElementById("btn");

btn.addEventListener('click',function(){
  document.getElementById('imgs').innerHTML = ""
  //get the inputValue
  q = document.getElementById("seachButton").value;
  fullApi = first + search + q + key
  getApi()
  
})


async function getApi(){
   await fetch(fullApi).then(function(response){
    return response.json()
   }).then(function(data){

   for(let i = 0; i <data.data.length; i++){
      const gifImage = document.createElement('img');
      gifImage.src = data.data[i].images.original.url;
      gifImage.className = "mb-2"
      document.getElementById('imgs').appendChild(gifImage)
   }

  })
}


var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');
var back= document.querySelector('.card')

input.addEventListener("keypress",function(e){
    if(e.key==="Enter"){
        button.click()
    }
})
button.addEventListener('click', function(name){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  main.style.backgroundColor=" rgb(255, 123, 0)"
  input.value ="";
//   console.log(data)
  if(tempValue>500){
    back.style.background="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1oPVUn8jT97A3a_qVetjyFP7h9bFdsxQHQXji9hE&s)";
    back.style.backgroundSize="cover"
    
  }else if(400>tempValue>300){
    back.style.background="url(https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80)";
    back.style.backgroundSize="cover"
  }else if(tempValue>200){
    back.style.background="url(https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336)";
    back.style.backgroundSize="cover";
}}
)

.catch(err => alert("Wrong city name!"));

})
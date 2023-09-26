const deneme = document.querySelector("#deneme");
const deneme1 = document.querySelector("#deneme1");
const deneme2 = document.querySelector("#deneme2");
const ara = document.querySelector("#ara");
const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");


btn.addEventListener("click", function(){

  
    apikey = ara.value;
  
    
const url ="https://restcountries.com/v3.1/name/" + apikey;



fetch(url)
.then(res => res.json())
.then(data => {

  let data1 = data[0];
    console.log(data[0]);
    
    

 deneme1.innerHTML = `
 <div class="card mx-auto mt-5 " style="width: 18rem;">
     <img class="card-img-top" src="${data1.flags.png}" alt="Card image cap">
     <div class="card-body">
       <h5 class="card-title">${data1.name.common}</h5>
     </div>
     <ul class="list-group list-group-flush">
       <li id="deneme" class="list-group-item"><b>Capital:</b> ${data1.capital}</li>
       <li class="list-group-item"><b>Population:</b> ${(data1.population / 1000000).toFixed(1)}</li>
       <li class="list-group-item"><b>Languages:</b> ${Object.values(data1.languages)}</li>
       <li class="list-group-item"><b>Borders:</b> ${data1.borders}</li>
       <li class="list-group-item"><b>Region:</b> ${data1.region}, ${data1.subregion}</li>
       <li class="list-group-item"><b>Google Maps:</b> ${data1.maps.googleMaps}</li>
     </ul>    
     
   </div> 
   

  
</div>
   
   ` ;

   



})






    
})









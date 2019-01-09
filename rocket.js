document.addEventListener("DOMContentLoaded", function() {

//Global Variables

const rocketURL = "https://api.spacexdata.com/v2/rockets/";
const rockets = document.getElementById("rockets"); //rockets btn
const upcomingRockets = document.getElementById("upcoming"); //upcoming launches btn
const allLaunches = document.getElementById("all"); //all launches btn
const output = document.getElementById("output");
const info = document.getElementById("info"); // content/info
const footer = document.getElementById("footer"); // content/info
const image = document.getElementById("image");
const proxyURL = "https://cors.io/?";



//event Listeners

//upcomingRockets.addEventListener("click", showInfo);
//allLaunches.addEventListener("click", showInfo);
rockets.addEventListener("click", showInfo);
rockets.addEventListener("click", clear);

function clear(){
  info.innerHTML = ` <div height="600px">
  </div>`;

  image.innerHTML = ` <div height="600px">
  </div>`;

  footer.innerHTML = ` <div height="600px">
  </div>`;
}


async function showInfo() {




await fetch(proxyURL + rocketURL)
.then((res) => res.json())
.then( data => {
console.log(data);
//output.innerHTML += ` <span> ${ data.id } </span> `;

for (let n=0; n<data.length;n++){
info.innerHTML += ` <div>
<h1> <span> ${data[n].name} </span> </h1>
<p> <strong> First flight: </strong> <span> ${data[n].first_flight} </span> </p>
<p> <strong> Cost per launch: </strong> <span> ${data[n].cost_per_launch} </span>$ </p>
<p> <strong> Success rate:  </strong> <span> ${data[n].success_rate_pct} </span>% </p>
<p> <strong> Height: </strong> <span> ${data[n].height.meters} </span> meters
    (<span> ${data[n].height.feet} </span> feet)</p>
<p> <strong> Diameter: </strong>  <span> ${data[n].diameter.meters} </span> meters
        (<span> ${data[n].diameter.feet} </span> feet)</p>
<p> <strong> Mass: </strong>  <span> ${data[n].mass.kg} </span> meters
            (<span> ${data[n].mass.lb} </span> feet)</p>

<p> <strong> Payload: </strong> </br> id: <span> ${data[n].payload_weights[0].id} </span>
                    </br> destination: <span> ${data[n].payload_weights[0].name} </span>
                    </br> weight: <span> ${data[n].payload_weights[0].kg} </span> kg
                    (<span> ${data[n].payload_weights[0].lb} </span> lb)
</p>


<p> <strong> Engines: </strong> </br> number:  <span> ${data[n].engines.number} </span>
                    </br> type:  <span> ${data[n].engines.type} </span>
                    </br> layout:  <span> ${data[n].engines.layout} </span>
                    </br> propellant:  <span> ${data[n].engines.propellant_1} </span>
                          and <span> ${data[n].engines.propellant_2} </span>

                    </br> thrust at sea level:  <span> ${data[n].engines.thrust_sea_level.kN} </span>kN
                          (<span> ${data[n].engines.thrust_sea_level.lbf} </span>lbf)
                    </br> thrust in vacuum:  <span> ${data[n].engines.thrust_vacuum.kN} </span>kN
                          (<span> ${data[n].engines.thrust_vacuum.lbf} </span>lbf)
                    </br> thrust to weight:  <span> ${data[n].engines.thrust_to_weight} </span>
</p>

<p> <strong> Landing legs: </strong> </br> number: <span> ${data[n].landing_legs.number} </span>
                  </br> material: <span> ${data[n].landing_legs.material} </span> </p>
</div>`;


if(n==0){
image.innerHTML += `<span> <img src="https://www.spacex.com/sites/spacex/files/styles/media_gallery_large/public/2009_-_02_default_liftoff_west_full_wide_nn6p2062_xl.jpg?itok=p776nHsM"> </span> `;
} else if (n==1){
  image.innerHTML += `<span> <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg"> </span> `;
} else if (n==2) {
  image.innerHTML += `<span> <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg"> </span> `;
} else if (n==3) {
  image.innerHTML += `<span> <img src="https://farm2.staticflickr.com/1861/30934146988_f3de261bb4_b.jpg"> </span> `;
} else {
  image.innerHTML += `<span> <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjO9ODu-d7fAhXtc98KHVpPBYcQjRx6BAgBEAU&url=https%3A%2F%2Fcoub.com%2Fview%2Fvbjla&psig=AOvVaw31h3sNBQsLLmzguJ_zcQzt&ust=1547063249180057"> </span> `;
}
}


footer.innerHTML += `
<div class="column">

  <p> I used SpaceData &rarr; </br> API  for this project </p>
</div>

<div class="column">
<p></p>
<a href="https://api.spacexdata.com/" target="_blank">
  <img src="img/spacedataAPI.png" alt="I used spacedata API"  height="100px"; width="300px;">
</a>
</div>


<div class="column"> <!-- placeholder -->
  <p>                           </p>
</div>


<div class="column">
  <a href="https://github.com/LadyFromMars/spaceX-data" target="_blank">
      <img src="img/octonaut2.png" alt="GitHub Link"  height="150px">
  </a>
</div>

<div class="column">

  <p> &larr; Take a look at my GitHub page </p>
</div>
   `;





})
.catch(err => {
 console.log(err);})

}



});

document.addEventListener("DOMContentLoaded", function() {

//Global Variables

const upcomingLaunchesURL = "https://api.spacexdata.com/v3/launches";
const history = document.getElementById("all"); // launches history btn
const output = document.getElementById("output");
const image = document.getElementById("image");




//event Listeners

//upcomingRockets.addEventListener("click", showInfo);
//allLaunches.addEventListener("click", showInfo);
history.addEventListener("click", clear);
history.addEventListener("click", launchHistory);

function clear(){
  info.innerHTML = ` <div height="600px">
  </div>`;

  image.innerHTML = ` <div height="600px">
  </div>`;

  footer.innerHTML = ` <div height="600px">
  </div>`;
  
}


async function launchHistory() {


await fetch(upcomingLaunchesURL)
.then((res) => res.json())
.then( data => {
console.log(data);
//output.innerHTML += ` <span> ${ data.id } </span> `;

for (let n=data.length-1; n>0;n--){
info.innerHTML += ` <div>
<h1> Mission name:  <span> ${data[n].mission_name} </span> </h1>
<p> <strong> Launch year: </strong> <span> ${data[n].launch_year} </span> </p>
<p> <strong> Rocket: </strong> <span> ${data[n].rocket.rocket_name} </span> </p>
<p> <strong> Launch site: </strong> <span> ${data[n].launch_site.site_name_long} </span> </p>
<p> <strong> Launch success: </strong> <span> ${data[n].launch_success} </span> </p>


</div>`;



}


})
.catch(err => {
 console.log(err);})

}



});

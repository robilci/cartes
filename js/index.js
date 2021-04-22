const jedi = ["Girl", "Yoda", "Luc"];
const sith = ["Dark Maul", "Dark Sidious", "Dark Vador"];
const extension_fichier = "jfif";
const chemin_images = "js/images/";

/*<div class="col-md-3 border border-danger">
            <div class="card">
                <img src="https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/mobile_1440w/2020/11/portrait-of-darth-vader-costume-replica-with-grab-hand-and-sword.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Dark Vador</h5>
                    <p class="card-text">Degats multipliés par 2 contre les Jedis</p>
                    <div class="row">
                        <div class="col-md-1"><button class="btn btn-info">4</button></div>
                        <div class="offset-8 col-md-1"><button class="btn btn-danger">8</button></div>
                    </div>
                </div>
            </div>
        </div>*/

let divPrincipal = document.createElement("div");
divPrincipal.classList.add("col-md-3");
let card = document.createElement("div");
card.classList.add("card")
let image = document.createElement("img");
image.setAttribute("src", "https://fyooyzbm.filerobot.com/v7/https://static01.nicematin.com/media/npo/mobile_1440w/2020/11/portrait-of-darth-vader-costume-replica-with-grab-hand-and-sword.jpg");
let divBody = document.createElement("div");
divBody.classList.add("card-body");
let title = document.createElement("h5");
title.innerText = "test";
let pDescription = document.createElement("p");
pDescription.classList.add("card-text");
pDescription.innerText = 'Inflige le double de dégats au Jedi'
let divRow = document.createElement("div");
divRow.classList.add("row");
let divDegats = document.createElement("div");
divDegats.classList.add("col-md-1");
let buttonDegats = document.createElement("button");
buttonDegats.innerText = '4';
buttonDegats.className += "btn btn-info";
let divSante = document.createElement("div");;
divSante.className += "offset-6 col-md-1";
let buttonSante = document.createElement("button");
buttonSante.innerText = "8";
buttonSante.className += "btn btn-danger";


divDegats.appendChild(buttonDegats);
divSante.appendChild(buttonSante);

divRow.appendChild(divDegats);
divRow.appendChild(divSante);

divBody.appendChild(title);
divBody.appendChild(pDescription);
divBody.appendChild(divRow);

card.appendChild(image);
card.appendChild(divBody);
divPrincipal.appendChild(card);

document.getElementById('main').appendChild(divPrincipal);
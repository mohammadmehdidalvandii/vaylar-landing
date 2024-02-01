let servicesContainer = document.querySelector('#services_wrapper');
import { services } from "../data/db.js";

// Start Section services
let dataServices =services

showItemDom(dataServices)

function showItemDom (dataServices){
    servicesContainer.innerHTML="";
    dataServices.forEach(service=>{
            servicesContainer.insertAdjacentHTML("beforeend",`
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12" id="services_wrapper">
                <div class="services_card">
                    <img src=${service.icon} alt="" class="services_card_icon">
                     <h5 class="services_card_title">${service.title}</h5>
                     <p class="services_card_desc">${service.desc}</p>
                 </div>
             </div>
            `)
        })
}
// End Section services

export {
    showItemDom
}
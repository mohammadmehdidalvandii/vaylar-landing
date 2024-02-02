let servicesContainer = document.querySelector('#services_wrapper');
let ProjectContainer = document.querySelector('#wrapper_project');
let aboutContainer = document.querySelector(".swiper-wrapper")
let articleContainer = document.querySelector('#wrapper_article')
import { services, projects, comments, articles } from "../data/db.js";

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

// Start Section Projects
let dataProjects = projects

showProjectDom(dataProjects)

function showProjectDom (dataProjects){
ProjectContainer.innerHTML = '';
dataProjects.forEach(project=>{
    ProjectContainer.insertAdjacentHTML("beforeend", `
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <a href="#" class="project_card">
        <img src=${project.image} alt="project" class="project_card_img">
        <div class="project_card_content">
            <h6 class="project_card_title">${project.title}</h6>
            <p class="project_card_text">جهت مشاهده کلیک کنید</p>
        </div>
    </a>
</div>
    `)
})
}

// End Section Projects

// Start Section About
let dataComments = comments

showCommentToDOM(comments)

function showCommentToDOM (){
     new Swiper(".mySwiper", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        loop: true
      });

    aboutContainer.innerHTML = "",
    dataComments.forEach(comment=>{
        aboutContainer.insertAdjacentHTML("beforeend", `
        <div class="swiper-slide">
        <div class="comment_card">
          <p class="comment_card_text">
          ${comment.text}
          </p>
          <div class="comment_card_info">
            <img
              src=${comment.image}
              alt="user image"
              class="comment_card_img"
            />
            <div class="comment_card_infoContent">
              <h6 class="comment_card_name">${comment.name}</h6>
              <span class="comment_card_job">${comment.job}</span>
            </div>
          </div>
        </div>
      </div>
        `)
    })
}
// End Section About

// End Section Articles
let dataArticles = articles

showArticleToDom(dataArticles)

function showArticleToDom (dataArticles){
  articleContainer.innerHTML ="";
  dataArticles.forEach(article => {
    articleContainer.insertAdjacentHTML("beforeend", `
      <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <div class="article_card">
        <div class="article_card_textImg">
          <img
            src=${article.image}
            alt="article-image"
            class="article_card_img"
          />
          <span class="article_card_text">${article.category}</span>
        </div>
        <div class="article_card_content">
          <h6 class="article_card_title">${article.title}</h6>
          <p class="article_card_desc">
          ${article.desc}
          </p>
          <a href="#" class="article_card_link">مشاهده بیشتر</a>
        </div>
      </div>
    </div
      `)
  })
}
// End Section Articles

export {
    showItemDom,
    showProjectDom,
    showCommentToDOM,
    showArticleToDom
}
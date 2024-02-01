let showButton = document.querySelector('.navbarRes_btn')
let navbarRes = document.querySelector('.items_wrapper')
let icon = document.querySelector('.fa-bars')

function handlerMenuNavbar (){
    if(navbarRes.classList.contains("notActive")){
        navbarRes.classList.remove("notActive")
      icon.classList = 'fa fa-times'
    }else{
        navbarRes.classList.add('notActive')
        icon.classList = 'fa fa-bars'
    }
}

showButton.addEventListener('click' , handlerMenuNavbar)
export default handlerMenuNavbar
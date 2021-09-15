const detailsButton = document.getElementsByClassName('details-btn');
// console.log(detailsButton)
for(const button of detailsButton){
    console.log(button);
    button.addEventListener('click',()=>{
        window.location.href='details.html';
    })
}

document.getElementById('login').addEventListener('click',()=>{
    window.location.href='login.html';
})
document.querySelector('.chat-open').addEventListener("click", function(){
    document.querySelector('.main-chat').style.display = 'block'
    document.querySelector('.chat').classList.add('chat-active');
})
document.querySelector('.chat-close').addEventListener("click", function(){
    document.querySelector('.main-chat').style.display = 'none'
    document.querySelector('.chat').classList.remove('chat-active');
})

document.querySelector('.menu .button button').addEventListener("click", function(){
    document.querySelector('.call').style.display = "block"
})

document.querySelector('.callclose').addEventListener("click", function(){
    document.querySelector('.call').style.display = "none"
})


let password1 = document.querySelector('#password1')
let btn = document.querySelector('.password__show')

btn.addEventListener('click', function(){
    btn.classList.toggle('.showPassword')

    if(btn.classList.contains('.showPassword')){
        password1.type = 'text'
    } else {
        password1.type = 'password'
    }
})
function showPassword(){
    if(document.getElementById('pw').type == 'password'){
        document.getElementById('pw').type = 'text';
        document.getElementsByClassName('btn')[0].innerText = 'Hide password';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'red';
    }
    else{
        document.getElementById('pw').type = 'password';
        document.getElementsByClassName('btn')[0].innerText = 'Show password';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'green';
    }
}
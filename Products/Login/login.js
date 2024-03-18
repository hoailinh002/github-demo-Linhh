    var login = document.getElementById('login')
    login.onclick = function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var kt = document.getElementById('kt');
        if(email == "" || password == ""){
            alert('Please enter all fields! ')
        
        }
        else{
            kt.innerText = 'Logged in successfully!';
            kt.style.color = 'blue'
        }
    }

    AOS.init();

    var sign = document.getElementById('sign')
    sign.onclick = function (){
    var surnames = document.getElementById('surnames').value
    var names = document.getElementById('names').value
    var emails = document.getElementById('emails').value
    var numbers = document.getElementById('numbers').value
    var passwords = document.getElementById('passwords').value
    var kts = document.getElementById('kts')
        if(surnames == "" || names == "" || emails== "" || numbers == "" || passwords === "")
        {
            alert('Please enter all fields! ')
        }
        else{
            kts.innerText = 'Sign Up Success!';
            kts.style.color = 'blue'
        }        
    }



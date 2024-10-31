document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('password').value

    const emailMessage = document.getElementById('emailMessage')

    const emailTemplate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailTemplate.test(email)) {
        emailMessage.textContent = 'Emaili nuk eshte ne formatin e duhur'
    } else {
        
        emailMessage.textContent = 'ok'
    }

    const phoneMessage = document.getElementById('phoneMessage')
    const telTemplate = /^(068|069)\d{7}$/
    if (!telTemplate.test(phone)) {
        phoneMessage.textContent = 'Numri i telefonit duhet te filloje me 068 ose 069 dhe te kete 10 numra'
    } else {

        phoneMessage.textContent = 'ok'
    }
    const passwordMessage = document.getElementById('passwordMessage')
    const passTemplate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passTemplate.test(password)) {
        passwordMessage.textContent = 'Fjalekalimi duhet te kete te pakten 8 karaktere, nje germe te madhe,nje germe te vogel dhe nje numer.';
    } 
    else {
        passwordMessage.textContent = 'ok'
    }
}
)
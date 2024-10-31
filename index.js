document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const emailMessage = document.getElementById('emailMessage');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailMessage.textContent = 'Emaili nuk është në formatin e duhur.';
        console.log('Emaili nuk është në formatin e duhur.');
    } else {
        emailMessage.textContent = '';
        console.log('Emaili është valid.');
    }

    const phoneMessage = document.getElementById('phoneMessage');
    const phonePattern = /^(068|069)\d{7}$/;
    if (!phonePattern.test(phone)) {
        phoneMessage.textContent = 'Numri i telefonit duhet të fillojë me 068 ose 069 dhe të ketë 10 numra.';
        console.log('Numri i telefonit është i pavlefshëm.');
    } else {
        phoneMessage.textContent = '';
        console.log('Numri i telefonit është valid.');
    }
    const passwordMessage = document.getElementById('passwordMessage');
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordMessage.textContent = 'Fjalëkalimi duhet të ketë të paktën 8 karaktere, një germe të madhe, një germe të vogël dhe një numër.';
        console.log('Fjalëkalimi është i pavlefshëm.');
    } else {
        passwordMessage.textContent = '';
        console.log('Fjalëkalimi është valid.');
    }
});
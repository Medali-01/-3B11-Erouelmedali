

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact__form');

    contactForm.addEventListener('submit', function (event) {
        
        const nameValue = document.querySelector('.contact__form-el--name').value.trim();
        const emailValue = document.querySelector('.contact__form-el--email').value.trim();
        const messageValue = document.querySelector('.contact__form-el--message').value.trim();

       
        if (nameValue !== '' && emailValue !== '' && messageValue !== '') {
            
            showAlert(`Nom: ${nameValue}\nEmail: ${emailValue}\nMessage: ${messageValue}`);

            alert('Message envoyé avec succès!');

           
            contactForm.reset();
        } else {
           
            alert('Veuillez remplir tous les champs.');
        }

        
        event.preventDefault();
    });

    function showAlert(message) {
       
        alert(message);
    }
});

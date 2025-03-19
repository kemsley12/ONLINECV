    const toggleButton = document.getElementById('toggle-btn');
    const body = document.body;
    
    toggleButton.addEventListener('click',() => {

        body.classList.toggle('dark-mode');

        const elementsToToggle = [document.querySelector('header'),document.querySelectorAll('section'),toggleButton];

        elementsToToggle.forEach(element => {
            element.classList.toggle('dark-mode');
        })
    } )
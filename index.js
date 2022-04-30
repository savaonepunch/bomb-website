window.addEventListener('load', () => {
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    const cards = document.querySelectorAll('.card');
    const wrapper = document.getElementById('containerId');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });

    document.getElementById('discord').addEventListener('click', () => {
        navigator.clipboard.writeText("LittleGuy252#7657").then(function () {
            console.log('done');
            alert("Discord copied to clipboard!");
        }, function () {
            console.log('error');
            alert("Couldn't copy discord to clipboard!");
        });
    })

    // Change the "LEARN MORE" URLs here
    wrapper.addEventListener('click', (event) => {
        const isButton = event.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        switch (event.target.id) {
            case 'service1':
                window.open("https://www.google.com", "_blank");
                break;
            case 'service2':
                window.open("https://www.google.com", "_blank");
                break;
            case 'service3':
                window.open("https://www.google.com", "_blank");
                break;
            case 'service4':
                window.open("https://www.google.com", "_blank");
                break;
            default:
                break;
        }
    })
})
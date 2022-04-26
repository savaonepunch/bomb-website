window.addEventListener('load', () => {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            card.classList.toggle('is-flipped');
        });
    });

    document.getElementById('discord').addEventListener('click', () => {
        navigator.clipboard.writeText("Placeholder#0000").then(function () {
            console.log('done');
            alert("Discord copied to clipboard!");
        }, function () {
            console.log('error');
            alert("Couldn't copy discord to clipboard!");
        });
    })
})

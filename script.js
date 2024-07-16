document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Web Developer', 'Computer Engg. Student', 'Frontend Developer'],
        typeSpeed: 30,
    });

    document.addEventListener('DOMContentLoaded', function () {
        var inputs = document.querySelectorAll('.contact-inputs');
        inputs.forEach(function (input) {
            if (window.getComputedStyle(input).display === 'none') {
                input.style.display = 'block';
            }
        });
    });

    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function animateSkillBars() {
        document.querySelectorAll('.bar span').forEach(span => {
            span.style.width = span.getAttribute('data-width');
        });
    }
});


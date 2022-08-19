let speed = 100;
window.addEventListener('load', function () {
    document.querySelectorAll('h1#intro-text span').forEach(function (line) {
        line.innerHTML = line.textContent.replace(/(\S*)/g, m => {
            return m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>");
        });
    });
    let intro_text = document.getElementById('intro-text');
    intro_text.classList.add('show');
    var lines = intro_text.querySelectorAll('h1#intro-text > span');
    type_word(lines, 0, lines.length);
    Particles.init({
        // normal options
        selector: '.background',
        // color:'#48F2E3',
        color: ["#48F2E3", "#1E6AE1", "#1EE196", "#33b1f8"],
        connectParticles: true,
        maxParticles: 150,
        // options for breakpoints
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 100,
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 40
                }
            }, {
                breakpoint:
                    320
                ,
                options: {
                    maxParticles: 0
                    // disables particles.js
                }
            }
        ]
    });
    //animate squares
    var waypoint = new Waypoint({
        element: document.querySelector('.skill-images'),
        handler: function () {
            anime({
                targets: document.querySelectorAll('.skill-images div'),
                opacity: 1,
                easing: 'easeInOutQuad',
               // delay: anime.stagger(200, { start: 500 }) // delay starts at 500ms then increase by 100ms for each elements.
               delay: anime.stagger(500, { start: 300, grid: [4, 3], from: 'center'})

            });
        },
        offset: '90%'
    });
    //animate title
    var title_waypoint = new Waypoint({
        element: document.querySelector('#portfolio .svg-title'),
        handler: function () {
            if(!document.querySelector('#portfolio .svg-title').classList.contains('active')){
                document.querySelector('#portfolio .svg-title').classList.add('active');
                anime({
                    targets: '#portfolio .svg-title path',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 1000,
                    delay: function(el, i) { return i * 100 },
                  });
                  setTimeout(function(){
                    document.querySelector('#portfolio .svg-title').classList.add('fill');
                  }, 3000);
            }
            
        },
        offset: '90%'
    });
    var title_waypoint_about = new Waypoint({
        element: document.querySelector('#about .svg-title'),
        handler: function () {
            if(!document.querySelector('#about .svg-title').classList.contains('active')){
                document.querySelector('#about .svg-title').classList.add('active');
                anime({
                    targets: '#about .svg-title path',
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration: 1000,
                    delay: function(el, i) { return i * 100 },
                  });
                  setTimeout(function(){
                    document.querySelector('#about .svg-title').classList.add('fill');
                  }, 1500);
            }
            
        },
        offset: '90%'
    });
});
function type_word(elem, curr, max) {
    if (curr < max) {
        elem[curr].classList.add('blink-cursor');
        var index = 0;
        var letters = elem[curr].querySelectorAll('span');
        var letter_interval = setInterval(function () {
            if (index >= letters.length) {
                clearInterval(letter_interval);
                elem[curr].classList.remove('blink-cursor');
                var next = curr + 1;
                type_word(elem, next, max);
            } else {
                letters[index].classList.add('show');
                index++;
            }

        }, speed);
    } else {
        elem[curr - 1].classList.add('blink-cursor', 'blink');
        document.querySelector('.intro-button.inline').classList.add('anim');
    }
}
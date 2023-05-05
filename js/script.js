$(() => {
    $(window).scroll(() => {
        var height = $(this).height()
        $('.js-animate-scroll').each(function() {
            console.log (this.getBoundingClientRect().top )
            this.classList.add('animate__fadeInUp')
        })
    })

    $('.carousel-control-next-icon, .carousel-control-prev-icon').click(() => {
        if(typed == 0){
            typewriter = setupTypewriter($('#typewriter')[0], () => {
                $('.hero-action.d-none').removeClass('d-none').addClass('d-grid d-sm-flex')
            });
            typewriter.type();
        }
    })        
})

var typed = 0


function setupTypewriter(t, callback) {
    var HTML = t.innerHTML;

    t.innerHTML = "";

    var cursorPosition = 0,
        tag = "",
        writingTag = false,
        tagOpen = false,
        typeSpeed = 100,
      tempTypeSpeed = 0;

    var type = function() {
      
        if (writingTag === true) {
            tag += HTML[cursorPosition];
        }

        if (HTML[cursorPosition] === "<") {
            tempTypeSpeed = 0;
            if (tagOpen) {
                tagOpen = false;
                writingTag = true;
            } else {
                tag = "";
                tagOpen = true;
                writingTag = true;
                tag += HTML[cursorPosition];
            }
        }
        if (!writingTag && tagOpen) {
            tag.innerHTML += HTML[cursorPosition];
        }
        if (!writingTag && !tagOpen) {
            if (HTML[cursorPosition] === " ") {
                tempTypeSpeed = 0;
            }
            else {
                tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            }
            t.innerHTML += HTML[cursorPosition];
        }
        if (writingTag === true && HTML[cursorPosition] === ">") {
            tempTypeSpeed = (Math.random() * typeSpeed) + 50;
            writingTag = false;
            if (tagOpen) {
                var newSpan = document.createElement("span");
                t.appendChild(newSpan);
                newSpan.innerHTML = tag;
                tag = newSpan.firstChild;
            }
        }

        cursorPosition += 1;
        if (cursorPosition < HTML.length - 1)
            setTimeout(type, tempTypeSpeed);
        else{
            callback()
            typed = 1
        }
            

    };

    return {
        type: type
    };
}
function confirm(text, callback) {
    var brand = document.querySelector('.navbar__brand');
    var question = document.createElement('div');
    question.classList.add('navbar__brand');
    question.setAttribute('data-original-brand', brand.innerHTML);
    question.innerHTML = text;
    brand.parentNode.insertBefore(question, brand);
    brand.style.display = 'none';
    var buttons = document.createElement('div');
    buttons.classList.add('navbar__brand');
    buttons.innerHTML = '<button class="button button--primary" style="margin-right:5px;">Да</button><button class="button button--secondary">Нет</button>';
    brand.parentNode.insertBefore(buttons, brand);
    buttons.querySelector('button').addEventListener('click', function() {
        question.parentNode.removeChild(question);
        brand.style.display = 'flex';
        buttons.parentNode.removeChild(buttons);
        callback(true);
    });
    buttons.querySelector('button:last-child').addEventListener('click', function() {
        question.parentNode.removeChild(question);
        brand.style.display = 'flex';
        buttons.parentNode.removeChild(buttons);
        callback(false);
    });

    var oldHref = window.location.href;
    setInterval(function() {
        if(oldHref != window.location.href) {
            oldHref = window.location.href;
            if(question.parentNode != null) {
                question.parentNode.removeChild(question);
                brand.style.display = 'flex';
                // remove the buttons
                buttons.parentNode.removeChild(buttons);
                clearInterval(this);
            }
        }
    }, 100);
}

var loadedScroll = false;

function onDocumentReady() {
    // on load, ask the user whether they want to scroll to the last position
    if(document.URL.includes("/book/1/")) {
        var currentPage = document.URL.split("/book/")[1];
        var lastPage = localStorage.getItem("hpmor-last-page");
        var lastScroll = localStorage.getItem("hpmor-scroll-page_"+currentPage);
        if(lastScroll && lastScroll > 150) {
            confirm("Перемотать, где читали?", function(continueReading) {
                if(continueReading) {
                    document.documentElement.scrollTop = lastScroll;
                }
            });
        }
        jf(!loadedScroll) {
            loadedScroll = true;
            window.addEventListener('scroll', function() {
                if(!document.URL.includes("/book/1/")) return;
                var currentPage = document.URL.split("/book/")[1];
                localStorage.setItem("hpmor-scroll-page_"+currentPage, document.documentElement.scrollTop);
                localStorage.setItem("hpmor-last-page", currentPage);
            });
        }
    }

    if(document.URL == 'https://xn--c1asakg.xn--p1ai/') {
        var lastPage = localStorage.getItem("hpmor-last-page");
        if(lastPage && lastPage != undefined) {
            confirm("Продолжить чтение главы?", function(continueReading) {
                if(continueReading) {
                    if(lastPage == undefined) {
                        lastPage = localStorage.getItem("hpmor-last-page");
                    }
                    if (lastPage != 'undefined') {
                        window.location.href = 'https://xn--c1asakg.xn--p1ai/book/'+lastPage;
                    }
                }
            });
        }
    }
}

if (document.readyState !== 'loading') {
    onDocumentReady();
} else {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
}

// if the location changes without page reloading via react, call onDocumentReady
var oldHref = window.location.href;
setInterval(function() {
    if(oldHref != window.location.href) {
        oldHref = window.location.href;
        onDocumentReady();
    }
}, 100);

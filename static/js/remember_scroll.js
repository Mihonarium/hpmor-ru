function confirm(text, callback) {
    // add a question inplace of navbar__brand
    var brand = document.querySelector('.navbar__brand');
    var question = document.createElement('div');
    question.classList.add('navbar__brand');
    // remember the original brand
    question.setAttribute('data-original-brand', brand.innerHTML);
    question.innerHTML = text;
    brand.parentNode.insertBefore(question, brand);
    brand.style.display = 'none';
    // add buttons
    var buttons = document.createElement('div');
    buttons.classList.add('navbar__brand');
    buttons.innerHTML = '<button class="button button--primary" style="margin-right:5px;">Да</button><button class="button button--secondary">Нет</button>';
    brand.parentNode.insertBefore(buttons, brand);
    buttons.querySelector('button').addEventListener('click', function() {
        // remove the navbar__brand div, show the original brand (a href navbar__brand)
        question.parentNode.removeChild(question);
        brand.style.display = 'flex';
        // remove the buttons
        buttons.parentNode.removeChild(buttons);
        callback(true);
    });
    buttons.querySelector('button:last-child').addEventListener('click', function() {
        // remove the navbar__brand div, show the original brand (a href navbar__brand)
        question.parentNode.removeChild(question);
        brand.style.display = 'flex';
        // remove the buttons
        buttons.parentNode.removeChild(buttons);
        callback(false);
    });
}
function onDocumentReady() {
    // on load, ask the user whether they want to scroll to the last position
    if(document.URL.includes("/book/1/")) {
        var currentPage = document.URL.split("/book/")[1];
        var lastPage = localStorage.getItem("hpmor-last-page");
        var lastScroll = localStorage.getItem("hpmor-scroll-page_"+currentPage);
        if(lastScroll) {
            confirm("Продолжить чтение с последней позиции?", function(continueReading) {
                if(continueReading) {
                    document.documentElement.scrollTop = lastScroll;
                }
            });
        }
    }
    // on scroll, save the scroll position
    window.addEventListener('scroll', function() {
        if(document.URL.includes("/book/1/")) {
            var currentPage = document.URL.split("/book/")[1];
            localStorage.setItem("hpmor-scroll-page_"+currentPage, document.documentElement.scrollTop);
            localStorage.setItem("hpmor-last-page", currentPage);
        }
    });
}

if (document.readyState !== 'loading') {
    onDocumentReady();
} else {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
}

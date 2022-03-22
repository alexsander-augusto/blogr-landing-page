window.onload = function(){
    document.querySelector(".header_hamburguer").addEventListener("click", function(){
        if(document.querySelector(".header-nav").style.display == 'block') {
            document.querySelector(".header-nav").style.display = 'none';
            document.querySelector("#icon-hamburguer").style.display = 'block';
            document.querySelector("#icon-close").style.display = 'none'
        } else {
            document.querySelector(".header-nav").style.display = 'block';
            document.querySelector("#icon-hamburguer").style.display = 'none';
            document.querySelector("#icon-close").style.display = 'block'
        };
    });
    document.querySelector("#navlinks-product").addEventListener("click", function(){
        if(document.querySelector(".navsublinks.nav-product").style.display == 'block') {
            document.querySelector(".navsublinks.nav-product").style.display = 'none';
            document.querySelector("#product-icon-arrow-light").style.display = 'inline-block';
            document.querySelector("#product-icon-arrow-light-close").style.display = 'none';
            document.querySelector("#product-icon-arrow-dark").style.display = 'inline-block';
            document.querySelector("#product-icon-arrow-dark-close").style.display = 'none';
            document.querySelector(".navsublinks.nav-company").style.display = 'none';
            document.querySelector(".navsublinks.nav-connect").style.display = 'none'
        } else {
            document.querySelector(".navsublinks.nav-product").style.display = 'block';
            document.querySelector("#product-icon-arrow-light").style.display = 'none';
            document.querySelector("#product-icon-arrow-light-close").style.display = 'inline-block';
            document.querySelector("#product-icon-arrow-dark").style.display = 'none';
            document.querySelector("#product-icon-arrow-dark-close").style.display = 'inline-block';
            document.querySelector(".navsublinks.nav-company").style.display = 'none';
            document.querySelector(".navsublinks.nav-connect").style.display = 'none'
        };
        if(window.matchMedia("(max-width:1140px)").matches) {
            document.querySelector("#product-icon-arrow-light").style.display = 'none';
            document.querySelector("#product-icon-arrow-light-close").style.display = 'none'
        };
        if(window.matchMedia("(min-width:1140px)").matches) {
            document.querySelector("#product-icon-arrow-dark").style.display = 'none';
            document.querySelector("#product-icon-arrow-dark-close").style.display = 'none'
        }
    });
    document.querySelector("#navlinks-company").addEventListener("click", function(){
        if(document.querySelector(".navsublinks.nav-company").style.display == 'block') {
            document.querySelector(".navsublinks.nav-company").style.display = 'none';
            document.querySelector("#company-icon-arrow-light").style.display = 'inline-block';
            document.querySelector("#company-icon-arrow-light-close").style.display = 'none';
            document.querySelector("#company-icon-arrow-dark").style.display = 'inline-block';
            document.querySelector("#company-icon-arrow-dark-close").style.display = 'none';
            document.querySelector(".navsublinks.nav-product").style.display = 'none';
            document.querySelector(".navsublinks.nav-connect").style.display = 'none'
        } else {
            document.querySelector(".navsublinks.nav-company").style.display = 'block';
            document.querySelector("#company-icon-arrow-light").style.display = 'none';
            document.querySelector("#company-icon-arrow-light-close").style.display = 'inline-block';
            document.querySelector("#company-icon-arrow-dark").style.display = 'none';
            document.querySelector("#company-icon-arrow-dark-close").style.display = 'inline-block';
            document.querySelector(".navsublinks.nav-product").style.display = 'none';
            document.querySelector(".navsublinks.nav-connect").style.display = 'none'
        };
        if(window.matchMedia("(max-width:1140px)").matches) {
            document.querySelector("#company-icon-arrow-light").style.display = 'none';
            document.querySelector("#company-icon-arrow-light-close").style.display = 'none'
        };
        if(window.matchMedia("(min-width:1140px)").matches) {
            document.querySelector("#company-icon-arrow-dark").style.display = 'none';
            document.querySelector("#company-icon-arrow-dark-close").style.display = 'none'
        }
    });
    document.querySelector("#navlinks-connect").addEventListener("click", function(){
        if(document.querySelector(".navsublinks.nav-connect").style.display == 'block') {
            document.querySelector(".navsublinks.nav-connect").style.display = 'none';
            document.querySelector("#connect-icon-arrow-light").style.display = 'inline-block';
            document.querySelector("#connect-icon-arrow-light-close").style.display = 'none';
            document.querySelector("#connect-icon-arrow-dark").style.display = 'inline-block';
            document.querySelector("#connect-icon-arrow-dark-close").style.display = 'none';
            document.querySelector(".navsublinks.nav-company").style.display = 'none';
            document.querySelector(".navsublinks.nav-product").style.display = 'none'
        } else {
            document.querySelector(".navsublinks.nav-connect").style.display = 'block';
            document.querySelector("#connect-icon-arrow-light").style.display = 'none';
            document.querySelector("#connect-icon-arrow-light-close").style.display = 'inline-block';
            document.querySelector("#connect-icon-arrow-dark").style.display = 'none';
            document.querySelector("#connect-icon-arrow-dark-close").style.display = 'inline-block';
            document.querySelector(".navsublinks.nav-company").style.display = 'none';
            document.querySelector(".navsublinks.nav-product").style.display = 'none'
        };
        if(window.matchMedia("(max-width:1140px)").matches) {
            document.querySelector("#connect-icon-arrow-light").style.display = 'none';
            document.querySelector("#connect-icon-arrow-light-close").style.display = 'none'
        };
        if(window.matchMedia("(min-width:1140px)").matches) {
            document.querySelector("#connect-icon-arrow-dark").style.display = 'none';
            document.querySelector("#connect-icon-arrow-dark-close").style.display = 'none'
        }
    });
};
window.onload = function(){
    let headerHamburguer = document.querySelector(".header_hamburguer");
    let headerNav = document.querySelector(".header-nav");
    let iconHamburguer = document.querySelector("#icon-hamburguer");
    let iconClose = document.querySelector("#icon-close");

    headerHamburguer.addEventListener("click", function(){
        if(headerNav.style.display == 'block') {
            headerNav.style.display = 'none';
            iconHamburguer.style.display = 'block';
            iconClose.style.display = 'none'
        } else {
            headerNav.style.display = 'block';
            iconHamburguer.style.display = 'none';
            iconClose.style.display = 'block'
        };
    });

    let navsublinksnavProduct = document.querySelector(".navsublinks.nav-product");
    let navsublinksnavCompany = document.querySelector(".navsublinks.nav-company");
    let navsulinksnavConnect = document.querySelector(".navsublinks.nav-connect");

    let navlinksProduct = document.querySelector("#navlinks-product");
    let producticonarrowLight = document.querySelector("#product-icon-arrow-light");
    let producticonarrowlightClose = document.querySelector("#product-icon-arrow-light-close");
    let producticonarrowDark = document.querySelector("#product-icon-arrow-dark");
    let producticonarrowdarkClose = document.querySelector("#product-icon-arrow-dark-close");

    let navlinksCompany = document.querySelector("#navlinks-company");
    let companyiconarrowLight = document.querySelector("#company-icon-arrow-light");
    let companyiconarrowlightClose = document.querySelector("#company-icon-arrow-light-close");
    let companyiconarrowDark = document.querySelector("#company-icon-arrow-dark");
    let companyiconarrowdarkClose = document.querySelector("#company-icon-arrow-dark-close");

    let navlinksConnect = document.querySelector("#navlinks-connect");
    let connecticonarrowLight = document.querySelector("#connect-icon-arrow-light");
    let connecticonarrowlightClose = document.querySelector("#connect-icon-arrow-light-close");
    let connecticonarrowDark = document.querySelector("#connect-icon-arrow-dark");
    let connecticonarrowdarkClose = document.querySelector("#connect-icon-arrow-dark-close");


    navlinksProduct.addEventListener("click", function(){
        if(navsublinksnavProduct.style.display == 'block') {
            navsublinksnavProduct.style.display = 'none';
            producticonarrowLight.style.display = 'inline-block';
            producticonarrowlightClose.style.display = 'none';
            producticonarrowDark.style.display = 'inline-block';
            producticonarrowdarkClose.style.display = 'none';
            navsublinksnavCompany.style.display = 'none';
            navsulinksnavConnect.style.display = 'none'

            // Arrows company & connect.
            companyiconarrowLight.style.display = 'inline-block';
            companyiconarrowlightClose.style.display = 'none';
            companyiconarrowDark.style.display = 'inline-block';
            companyiconarrowdarkClose.style.display = 'none';

            connecticonarrowLight.style.display = 'inline-block';
            connecticonarrowlightClose.style.display = 'none';
            connecticonarrowDark.style.display = 'inline-block';
            connecticonarrowdarkClose.style.display = 'none';
        } else {
            navsublinksnavProduct.style.display = 'block';
            producticonarrowLight.style.display = 'none';
            producticonarrowlightClose.style.display = 'inline-block';
            producticonarrowDark.style.display = 'none';
            producticonarrowdarkClose.style.display = 'inline-block';
            navsublinksnavCompany.style.display = 'none';
            navsulinksnavConnect.style.display = 'none'

            // Arrows company & connect.
            companyiconarrowLight.style.display = 'inline-block';
            companyiconarrowlightClose.style.display = 'none';
            companyiconarrowDark.style.display = 'inline-block';
            companyiconarrowdarkClose.style.display = 'none';

            connecticonarrowLight.style.display = 'inline-block';
            connecticonarrowlightClose.style.display = 'none';
            connecticonarrowDark.style.display = 'inline-block';
            connecticonarrowdarkClose.style.display = 'none';
        };
        if(window.matchMedia("(max-width:1140px)").matches) {
            producticonarrowLight.style.display = 'none';
            producticonarrowlightClose.style.display = 'none'
            companyiconarrowLight.style.display = 'none';
            companyiconarrowlightClose.style.display = 'none'
            connecticonarrowLight.style.display = 'none';
            connecticonarrowlightClose.style.display = 'none'
        };
        if(window.matchMedia("(min-width:1140px)").matches) {
            producticonarrowDark.style.display = 'none';
            producticonarrowdarkClose.style.display = 'none'
            companyiconarrowDark.style.display = 'none';
            companyiconarrowdarkClose.style.display = 'none'
            connecticonarrowDark.style.display = 'none';
            connecticonarrowdarkClose.style.display = 'none'
        }
    });
    navlinksCompany.addEventListener("click", function(){
        if(navsublinksnavCompany.style.display == 'block') {
            navsublinksnavCompany.style.display = 'none';
            companyiconarrowLight.style.display = 'inline-block';
            companyiconarrowlightClose.style.display = 'none';
            companyiconarrowDark.style.display = 'inline-block';
            companyiconarrowdarkClose.style.display = 'none';
            navsublinksnavProduct.style.display = 'none';
            navsulinksnavConnect.style.display = 'none'

            // Arrows product & connect.
            producticonarrowLight.style.display = 'inline-block';
            producticonarrowlightClose.style.display = 'none';
            producticonarrowDark.style.display = 'inline-block';
            producticonarrowdarkClose.style.display = 'none';

            connecticonarrowLight.style.display = 'inline-block';
            connecticonarrowlightClose.style.display = 'none';
            connecticonarrowDark.style.display = 'inline-block';
            connecticonarrowdarkClose.style.display = 'none';
        } else {
            navsublinksnavCompany.style.display = 'block';
            companyiconarrowLight.style.display = 'none';
            companyiconarrowlightClose.style.display = 'inline-block';
            companyiconarrowDark.style.display = 'none';
            companyiconarrowdarkClose.style.display = 'inline-block';
            navsublinksnavProduct.style.display = 'none';
            navsulinksnavConnect.style.display = 'none'

            // Arrows product & connect.
            producticonarrowLight.style.display = 'inline-block';
            producticonarrowlightClose.style.display = 'none';
            producticonarrowDark.style.display = 'inline-block';
            producticonarrowdarkClose.style.display = 'none';

            connecticonarrowLight.style.display = 'inline-block';
            connecticonarrowlightClose.style.display = 'none';
            connecticonarrowDark.style.display = 'inline-block';
            connecticonarrowdarkClose.style.display = 'none';
        };
        if(window.matchMedia("(max-width:1140px)").matches) {
            producticonarrowLight.style.display = 'none';
            producticonarrowlightClose.style.display = 'none'
            companyiconarrowLight.style.display = 'none';
            companyiconarrowlightClose.style.display = 'none'
            connecticonarrowLight.style.display = 'none';
            connecticonarrowlightClose.style.display = 'none'
        };
        if(window.matchMedia("(min-width:1140px)").matches) {
            producticonarrowDark.style.display = 'none';
            producticonarrowdarkClose.style.display = 'none'
            companyiconarrowDark.style.display = 'none';
            companyiconarrowdarkClose.style.display = 'none'
            connecticonarrowDark.style.display = 'none';
            connecticonarrowdarkClose.style.display = 'none'
        }
    });
    navlinksConnect.addEventListener("click", function(){
        if(navsulinksnavConnect.style.display == 'block') {
            navsulinksnavConnect.style.display = 'none';
            connecticonarrowLight.style.display = 'inline-block';
            connecticonarrowlightClose.style.display = 'none';
            connecticonarrowDark.style.display = 'inline-block';
            connecticonarrowdarkClose.style.display = 'none';
            navsublinksnavCompany.style.display = 'none';
            navsublinksnavProduct.style.display = 'none'

            // Arrows product & company.
            producticonarrowLight.style.display = 'inline-block';
            producticonarrowlightClose.style.display = 'none';
            producticonarrowDark.style.display = 'inline-block';
            producticonarrowdarkClose.style.display = 'none';

            companyiconarrowLight.style.display = 'inline-block';
            companyiconarrowlightClose.style.display = 'none';
            companyiconarrowDark.style.display = 'inline-block';
            companyiconarrowdarkClose.style.display = 'none';
        } else {
            navsulinksnavConnect.style.display = 'block';
            connecticonarrowLight.style.display = 'none';
            connecticonarrowlightClose.style.display = 'inline-block';
            connecticonarrowDark.style.display = 'none';
            connecticonarrowdarkClose.style.display = 'inline-block';
            navsublinksnavCompany.style.display = 'none';
            navsublinksnavProduct.style.display = 'none'

            // Arrows product & company.
            producticonarrowLight.style.display = 'inline-block';
            producticonarrowlightClose.style.display = 'none';
            producticonarrowDark.style.display = 'inline-block';
            producticonarrowdarkClose.style.display = 'none';

            companyiconarrowLight.style.display = 'inline-block';
            companyiconarrowlightClose.style.display = 'none';
            companyiconarrowDark.style.display = 'inline-block';
            companyiconarrowdarkClose.style.display = 'none';
        };
        if(window.matchMedia("(max-width:1140px)").matches) {
            producticonarrowLight.style.display = 'none';
            producticonarrowlightClose.style.display = 'none'
            companyiconarrowLight.style.display = 'none';
            companyiconarrowlightClose.style.display = 'none'
            connecticonarrowLight.style.display = 'none';
            connecticonarrowlightClose.style.display = 'none'
        };
        if(window.matchMedia("(min-width:1140px)").matches) {
            producticonarrowDark.style.display = 'none';
            producticonarrowdarkClose.style.display = 'none'
            companyiconarrowDark.style.display = 'none';
            companyiconarrowdarkClose.style.display = 'none'
            connecticonarrowDark.style.display = 'none';
            connecticonarrowdarkClose.style.display = 'none'
        }
    });
};
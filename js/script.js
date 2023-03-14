// Collapse Navbar
// Add styling fallback for when a transparent background .navbar-marketing is scrolled
var navbarCollapse = function() {
    const navbarMarketingTransparentFixed = document.body.querySelector('.bg-transparent.fixed-top');
    if (!navbarMarketingTransparentFixed) {
        return;
    }
    if (window.scrollY === 0) {
        navbarMarketingTransparentFixed.classList.remove('navbar-scrolled')
    } else {
        navbarMarketingTransparentFixed.classList.add('navbar-scrolled')
    }

};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
document.addEventListener('scroll', navbarCollapse);
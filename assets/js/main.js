$(document).ready(function () {
    $(".ceo-image").hover(function () {
        $(".ceo-desc").toggle(250);
        $(".coo").toggleClass("opacity");
        $(".cto").toggleClass("opacity");
        $(".cao").toggleClass("opacity");
        $(".cio").toggleClass("opacity");
        $(".cco").toggleClass("opacity");
        $(".cmo").toggleClass("opacity");
    });
    
    $(".coo-image").hover(function () {
        $(".coo-desc").toggle(250);
        $(".ceo").toggleClass("opacity");
        $(".cto").toggleClass("opacity");
        $(".cao").toggleClass("opacity");
        $(".cio").toggleClass("opacity");
        $(".cco").toggleClass("opacity");
        $(".cmo").toggleClass("opacity");
        
    });
    
    $(".cto-image").hover(function () {
        $(".cto-desc").toggle(250);
        $(".ceo").toggleClass("opacity");
        $(".coo").toggleClass("opacity");
        $(".cao").toggleClass("opacity");
        $(".cio").toggleClass("opacity");
        $(".cco").toggleClass("opacity");
        $(".cmo").toggleClass("opacity");
    });
    
    $(".cao-image").hover(function () {
        $(".cao-desc").toggle(250);
        $(".ceo").toggleClass("opacity");
        $(".coo").toggleClass("opacity");
        $(".cto").toggleClass("opacity");
        $(".cio").toggleClass("opacity");
        $(".cco").toggleClass("opacity");
        $(".cmo").toggleClass("opacity");
    });
    
    $(".cco-image").hover(function () {
        $(".cco-desc").toggle(250);
        $(".ceo").toggleClass("opacity");
        $(".coo").toggleClass("opacity");
        $(".cto").toggleClass("opacity");
        $(".cao").toggleClass("opacity");
        $(".cmo").toggleClass("opacity");
        $(".cio").toggleClass("opacity");
    });
    
    $(".cio-image").hover(function () {
        $(".cio-desc").toggle(250);
        $(".ceo").toggleClass("opacity");
        $(".coo").toggleClass("opacity");
        $(".cto").toggleClass("opacity");
        $(".cao").toggleClass("opacity");
        $(".cmo").toggleClass("opacity");
        $(".cco").toggleClass("opacity");
    });
    
    $(".cmo-image").hover(function () {
        $(".cmo-desc").toggle(250);
        $(".ceo").toggleClass("opacity");
        $(".coo").toggleClass("opacity");
        $(".cto").toggleClass("opacity");
        $(".cao").toggleClass("opacity");
        $(".cio").toggleClass("opacity");
        $(".cco").toggleClass("opacity");
    });
    
    $(".home-link").click(function () {
        $(this).addClass("active");
        $(".about-link").removeClass("active");
        $(".services-link").removeClass("active");
        $(".team-link").removeClass("active");
        $(".contact-link").removeClass("active");
    });
    
    $(".about-link").click(function () {
        $(this).addClass("active");
        $(".home-link").removeClass("active");
        $(".services-link").removeClass("active");
        $(".team-link").removeClass("active");
        $(".contact-link").removeClass("active");
    });
    
    $(".services-link").click(function () {
        $(this).addClass("active");
        $(".about-link").removeClass("active");
        $(".home-link").removeClass("active");
        $(".team-link").removeClass("active");
        $(".contact-link").removeClass("active");
    });
    
    $(".team-link").click(function () {
        $(this).addClass("active");
        $(".about-link").removeClass("active");
        $(".services-link").removeClass("active");
        $(".home-link").removeClass("active");
        $(".contact-link").removeClass("active");
    });
    
    $(".contact-link").click(function () {
        $(this).addClass("active");
        $(".about-link").removeClass("active");
        $(".services-link").removeClass("active");
        $(".team-link").removeClass("active");
        $(".home-link").removeClass("active");
    });
});
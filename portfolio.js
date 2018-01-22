
const clickOnPortfolio = () => {
	$("#portfolio-button").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-container").offset().top
    }, 2000);
});
}

const clickOnBio = () => {
	$("#bio-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".bio-content").offset().top
    }, 2000);
});
}

const clickOnContact = () => {
	$("#contact-button").click(function() {
    $('html, body').animate({
        scrollTop: $(".contact-content").offset().top
    }, 2000);
});
}


$(function() {
	clickOnPortfolio()
	clickOnBio()
	clickOnContact()
})


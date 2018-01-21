const clickOnPortfolio = () => {
	$('body').on('click', '.portfolio-link', (event) => {
		 $('html, body').animate({
        scrollTop: $('#portfolio-container').offset().top
    }, 2000)
	}
}




$(function() {
	clickOnPortfolio()
})


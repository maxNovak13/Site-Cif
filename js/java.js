$('.nav-link').click(function(){var divId = $(this).attr('href');
$('html, body').animate({scrollTop: $(divId).offset().top - 80}, 100);});

function alerta(){
	alert("Pedido confirmado.");
	window.location.href = '../index.html';
}

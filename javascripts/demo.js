$(document).on('ready', function() {
	$.getJSON('http://guaman.cl/social2.php?r=flickr&m=publicaciones&s=busqueda&b=nature&n=10&callback=?', function(ret) {
		formateaDatos(ret);
	});
});
function agregaFoto(url, n) {
	var ret = false
	var markupBefore = '<div class="step diapo jaime" data-y="' + 600 * n + '" data-x="' + (400 * n) + '" data-rotate-y="' + Math.floor(Math.random() * 71) + '" data-rotate-x="' + Math.floor(Math.random() * 71) + '"><img id="img-' + n + '" src="';
	var markupAfter = '" alt="demo"/></div>';
	$('#impress').append(markupBefore + url + markupAfter);
}

function formateaDatos(datos) {
	var n = 0;
	var flckr = new Array();
	$.each(datos.photos.photo, function(f, foto) {
		flckr[n] = 'http://farm' + foto.farm + '.staticflickr.com/' + foto.server + '/' + foto.id + '_' + foto.secret + '.jpg'
		agregaFoto(flckr[n], n);
		n++;
	});
	cargaImpress();
}

function cargaImpress() {
	var ultimaDiapo = '<div class="step diapo jaime" data-y=2000 data-x=6000 data-rotate-z="40">';
	ultimaDiapo += '<p>NO! no somos el centro de todo</p> <span>Imagenes obtenidas desde Flickr. Licencias de sus respectivos dueños. <a href="#">GitHub</a> - </span>';
	ultimaDiapo += ' <a href="http://guaman.cl">guaman.cl</a> - <a href="http://twitter.com/jaimeg90">@jaimeg90</a></div>"'
	$('#impress').append(ultimaDiapo);

	var s = '<script src="javascripts/impress.js"></script>';
	$('body').append(s);
	if(window.location.hash.replace(/^#\/?/, "") != 'step-1') {
		$('#tip').fadeIn('slow');
	}
	$('#impress').fadeIn('slow', function() {
		$('#loader').fadeOut('slow');
	});
}

//to-do: trigger (byId);
var fondo='oscuro';
function cambiaFondo() {
	//to do: debe compararse en base a array de elementos. en caso de reproduccion no lineal (step1,step2,step3...);
	
	if(window.location.hash.replace(/^#\/?/, "") == 'inicio') {
		fondo='nice';
		$('body').attr('class',fondo);
	}
	if(window.location.hash.replace(/^#\/?/, "") == 'step-12') {
		fondo='oscuro';
		$('body').attr('class',fondo);
	}
	if(window.location.hash.replace(/^#\/?/, "") == 'nada') {
		fondo='sadstorybro';
		$('body').attr('class',fondo);
	}
	if(window.location.hash.replace(/^#\/?/, "") == 'step-22') {
		fondo='fin';
		$('body').attr('class',fondo);
	}
	if(window.location.hash.replace(/^#\/?/, "") == 'step-1') {
		fondo='oscuro';
		$('body').attr('class',fondo);
	}
	$('body').attr('class',fondo);


}
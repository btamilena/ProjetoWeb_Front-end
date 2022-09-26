/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudos.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudos");

/* Exibe o conteúdo */

// INICIO PROBLEMATIZAÇÃO
function funcaoSubTitulo1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue + "</h2>");}
	}

function funcaodesc1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaodesc11() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1.1")[0].childNodes[0].nodeValue + "</p>");
	}
} 

function funcaodesc12() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1.2")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaodesc13() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1.3")[0].childNodes[0].nodeValue + "</p>");
	}
}
// FIM PROBLEMATIZAÇÃO 

// INICIO PROPOSTA DE PREVENÇÃO
function funcaoSubTitulo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaodesc2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals' style='text-align: center; margin-top: 10%;'>" + x[i].getElementsByTagName("desc2")[0].childNodes[0].nodeValue + "</p>");
	}
}

// INICIO DO FUNCIONAMENTO
function funcaoSubTitulo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaodesc3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals' style='text-align: center; margin-top: 10%;'>" + x[i].getElementsByTagName("desc3")[0].childNodes[0].nodeValue + "</p>");
	}
}

// INTEGRANTES

function funcaointegrantes() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo4")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcname01() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='card-title' class='textgerals'>" + x[i].getElementsByTagName("participante01")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcname02() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='card-title' class='textgerals'>" + x[i].getElementsByTagName("participante02")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcname03() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='card-title' class='textgerals'>" + x[i].getElementsByTagName("participante03")[0].childNodes[0].nodeValue + "</h4>");
	}
}
	

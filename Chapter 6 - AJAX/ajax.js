function loadPage(file) {
	//alert('tes');
	var xmlHttp;

	if (window.XMLHttpRequest) {
		xmlHttp = new XMLHttpRequest();
	} else {
		xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	/*
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			document.getElementById("page").innerHTML = xmlHttp.responseText;
		}
	}
	*/

	//alert('tes');

	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
			respon = xmlHttp.responseText;
			document.getElementById("page").innerHTML = respon;
		}
	}

	//alert('tes');

	xmlHttp.open("GET", file, true);
	xmlHttp.send("");
}

function loadContent() {
	//alert("test")
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	
	xmlhttp.open("GET", "ajax.html",true);
	xmlhttp.send();
}
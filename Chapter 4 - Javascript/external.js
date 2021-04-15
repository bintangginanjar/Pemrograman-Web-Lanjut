function tampilAlertBox() {
	alert('Alert Box');
}

function tampilAlertBoxParam(param) {
	alert(param);
}

function tampilConfirmBox() {
	var konfirmasi = confirm("Apakah anda ingin membuka halaman ini?");

	if (konfirmasi == true)
		document.location.href = "page1.html";
	else
		document.location.href = "index.html";
}

function tampilPromptBox() {
	var bil1, bil2, jml;

	bil1 = prompt("Bilangan 1", 1);
	bil2 = prompt("Bilangan 2", 2);

	//jml = bil1 + bil2
	jml = parseInt(bil1) + parseInt(bil2)

	document.write("<h3>" + jml + "</h3>");
}

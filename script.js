// your code here
document.getElementById('button').addEventListener('click', function() {
	const name = document.getElementById('name').value;
	const year = document.getElementById('year').value;
	let baseUrl = "https://localhost:8080/";
	let queryString = "";

	if(name && year){
		queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	} else if(name){
		queryString = `?name=${encodeURIComponent(name)}`;
	} else if(year){
		queryString = `?name=${encodeURIComponent(year)}`;
	}

	document.getElementById('url').textContent = baseUrl+queryString;
});
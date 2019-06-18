const searchForm = document.querySelector('#searchForm');
const movie = document.querySelector("#movies");
let apiKey = '4544cb4d92499c59fccaa3fcd0fa9e15';
function apiSearch(event) {
	event.preventDefault();
	const searchText = document.querySelector('#searchText').value;
	const server = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=ru-RU&query=${searchText}`;
	requestApi('GET', server);
}
searchForm.addEventListener('submit', apiSearch);
function requestApi(method, url) {
	const request = new XMLHttpRequest();
	request.open(method, url);
	request.send();
	request.addEventListener('readystatechange', () => {
		if (request.readyState !== 4) {
			return;
		}
		if (request.status !== 200) {
			console.log('error:' + request.status);
			return;
		}
		const output = JSON.parse(request.responseText);
		let inner = '';
		output.results.forEach((item) => {
			let nameItem = item.name || item.title;
			let date = item.first_air_date || item.release_date;
			let poster = item.poster_path;
			inner += `
			<div class="col-lg-3">
<img src="https://image.tmdb.org/t/p/w500${poster}" class="img-fluid">
			<h4 class="movies__item">${nameItem}
			 <span class="badge badge-primary">${date} </span></h4> 
			</div>
			`;
		});
		movie.innerHTML = inner;
		console.log(output);
	});
}


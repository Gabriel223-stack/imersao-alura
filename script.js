const searchInput = document.getElementById('search-input');
const resultsArtist = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlist');

function requestApi(searchTerm) {
    const url = 'http://localhost:3000/artists?name_like=${searchTerm}'
    fetch() //inserir url
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = elemnt.name;
        artistImage.src = element.urlImg;
    })

    resultsArtist.classList.remove('hidden')
}


document.addEventListener('input', function () {
    const searchTerm = searchInput.Value.toLocaleLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultsArtist.classList.remove('hidden');
        return;
    }
}) 
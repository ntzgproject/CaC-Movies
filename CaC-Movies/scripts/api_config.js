const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmRjOGJhZjAzZDMxNDIxZWIxMThlZGIzM2Q1ZDAzOCIsIm5iZiI6MTcyMTgyOTk1NS42ODIyNzUsInN1YiI6IjY1OGM4ZGE3NjJmY2QzNTNjZDY1OTNkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5ggFDPEB0XVHDNlgtFrVRamDnI2WEb6PhyzjmAf7nLI'

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: API_KEY
    }
};

fetch('https://api.themoviedb.org/3/configuration', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
// API key for Giphy (replace with your own key)
const apiKey = 'TiLeI1RS7pZCUsD3kvrH14VNaorUFdqc';

// Function to fetch GIFs based on a search term
function fetchGIFs(searchTerm) {
  const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;
  
  return axios.get(apiUrl);
}

// Function to append a GIF to the page
function appendGIF(gifUrl) {
  const gifContainer = document.getElementById('gif-container');
  const gifImage = document.createElement('img');
  gifImage.src = gifUrl;
  gifContainer.appendChild(gifImage);
}

// Handle form submission
const form = document.getElementById('search-form');
form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value;

  if (searchTerm) {
    try {
      const response = await fetchGIFs(searchTerm);
      const gifUrl = response.data.data[0].images.original.url;
      appendGIF(gifUrl);
    } catch (error) {
      console.error('Error fetching GIF:', error);
    }
  }

  searchInput.value = '';
});

// Handle clearing GIFs
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', function() {
  const gifContainer = document.getElementById('gif-container');
  gifContainer.innerHTML = '';
});

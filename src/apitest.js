const img = document.querySelector('img');

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=6m4en5Tv6rHoWO5d9zpCQwTAqSg9XncJ&s=cats',
    {mode: 'cors'});
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();
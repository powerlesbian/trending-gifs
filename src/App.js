import { useEffect, useState } from 'react';
import axios from 'axios';
// import Gif from './components/Gif';
// import SearchGif from './components/SearchGif';



function App() {
  const [gifs, setGifs] = useState([]);
  const [favoriteGifs, setFavoriteGifs] = useState([]);

  useEffect(() => {
    const getTrendingGifs = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151');
      setGifs(response.data.results);
      console.log(response.data.results);
    }
    getTrendingGifs();
  }, []);

  // const searchGifs = async (searchText) => {
  //   const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=EXcg3N1MInQC4wDdCETkGmUQNT3wouoO&q=${searchText}`);
  //   setGifs(response.data.data);
  // }

  // const saveFavorite = (gifId) => {
  //   const favGif = gifs.find(gif => gif.id === gifId);
  //   setFavoriteGifs([...favoriteGifs, favGif]);
  // }

  return (
        <div className="App">
      <header className="App-header"></header>
      <h1>Showing you cool free stuff that we got from other people!</h1>
      {/* <SearchGif searchGifs={searchGifs} />
      <p>Favorite gifs</p>
      {favoriteGifs.map((gif) => (
        <Gif
          key={gif.id}
          imageUrl={gif.images.fixed_height.url}
          title={gif.images.title} />
      ))} */}
      <p>Flavour of the day is.... Pokemon! 👻👾</p>
      {gifs.map((gif,index) => (
        <li key={index}>
          {index+1}. Pocket Monster:  {gif.name}, 
          <a href={gif.url}>     click for more info on {gif.name}</a> <br></br>
          </li>

      ))}

    </div>
  );
}
export default App;

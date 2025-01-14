const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=9CI9OdNKmcUf7Nh8TONgVNjrbZClwm6L&q=${category}&limit=20`;
  const respo = await fetch(url);
  const { data = [] } = await respo.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
}

export default getGifs;
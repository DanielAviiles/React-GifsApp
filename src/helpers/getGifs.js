
export const getGifs = async (category) => {

  const urlApi = 'https://api.giphy.com/v1/gifs/';
  const apiKey = '3FrupB6ml3Olu0k0QcMQmf4fv4xqadd8';

  const url = `${urlApi}search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: ((img.title).trim() === '') ? 'No tittle' : img.title ,
      url: img.images?.downsized_medium.url
    }
  });

  return gifs;
}
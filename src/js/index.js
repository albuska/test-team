import * as basicLightbox from 'basiclightbox';
import { fetchData } from './fetchMovie'; 
import { fetchTrailer } from './fetchMovie'; 

 const galleryRef = document.querySelector('.gallery'); 
 galleryRef.addEventListener('click', handleClick); 


async function getMovie(page) {
   try {
    const movies = await fetchData(page);
    console.log("🚀 ~ getMovie ~ movies:", movies.data.results);
    renderList(movies.data.results); 

   } catch(error) {
    console.log(error); 
   }
} 

async function getTrailer(id) {
    try {
        const trailers = await fetchTrailer(id); 
        console.log(trailers);
      const item = trailers.data.results.find(({site, type})  => site === 'YouTube' && type === 'Trailer');
      console.log("🚀 ~ getTrailer ~ item:", item)
      
        const instance = basicLightbox.create(`
        <iframe src="https://www.youtube.com/embed/${item.key}" width="560" height="315" frameborder="0"></iframe>
       `)
       
       instance.show();
         
    } catch(error) {
        console.log(error); 
    }
}

getMovie(1); 
getTrailer(536554); 

function renderList(items) {
    const markup = items.map(({backdrop_path, title, id}) => {
        return `<li>
        <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title}" data-id='${id}'/>
        <h3>${title}</h3>
        </li>`
    }).join('');
galleryRef.insertAdjacentHTML('beforeend', markup); 
}

// function renderTrailer() {

// }

function handleClick(event) {

if(event.target.nodeName === "IMG") {
const datasetId = event.target.dataset.id; 
   getTrailer(datasetId); 
}
}
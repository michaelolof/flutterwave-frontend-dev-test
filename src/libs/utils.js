import axios from "axios";
import Vue from "vue";

export async function fetchProducts(pageNo) {
  // Simulate a server request delay.
  await till( 3000 );

  // Just default to one json storage. 
  // Ideally this should be a database fetch.
  const resp = await axios.get(`/data/page-1.json`);

  // Generally each product will have a unique id. 
  // Since we're not using a database and the products are being repeated
  // We need to simulate the id.
  return addIds( resp.data, pageNo )

}

export async function postProducts( products ) {
  return axios.post( "http://www.mocky.io/v2/5be477442f00004900d9f521", products )
}

export function updateVueArray( oldArr, newArr ) {
  for( let elem of newArr ) {
    Vue.set( oldArr, oldArr.length, elem );
  }
  return oldArr;
}

export function deleteFromVueArray( arr, index ) {
  Vue.delete( arr, index );
}

export function persistor( key ) {
  return {
    get:() => JSON.parse( window.localStorage.getItem( key ) ),
    post: ( products ) => window.localStorage.setItem( key, JSON.stringify( products ) )
  }
}

export function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export async function till(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve( ms );
    }, ms);
  })
}

function addIds(products, pageNo) {
  const productsWithIds = [];

  for( let i = 0; i<products.length; i++ ) {
    const product = products[ i ];
    const start = ((pageNo + 1) * 10) - 10;
    product.id = start + i + 1; // Make id start at 1
    productsWithIds.push( product );
  }

  return productsWithIds;
}
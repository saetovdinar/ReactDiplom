import axios from "axios";


const URL = 'http://localhost:7070/api/';
export async function getTopSales() {
    const response = await axios.get(URL + 'top-sales')
    
    return  response.data
}

export async function getCategories() {
    const response = await axios.get(URL + 'categories')
    
    return response.data
}

export async function getItems(category: number= 0, offset: number= 0) {
    let currentURL = URL + 'items'
    if(category === 0 && offset === 0 ) {
        const response = await axios.get(currentURL)
        return response.data
    }

    if(category !== 0 && offset === 0 ) {
        currentURL += `?categoryId=${category}`;
        const response = await axios.get(currentURL)
        return response.data
    }
   

    currentURL += `?categoryId=${category}&offset=${offset}`
  
    const response = await axios.get(currentURL)
    
    return response.data
}


export async function getItemsBySearch(category: number= 0, offset: number= 0, q: string= '') {
    

    
    const response = await axios.get(URL + `items/?categoryId=${category}&offset=${offset}&q=${q}`)
    
    return response.data
}






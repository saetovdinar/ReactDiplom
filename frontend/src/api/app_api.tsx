'use client';
import axios from 'axios';

const URL = 'http://localhost:7070/api/';
export async function getTopSales() {
  try {
    const response = await axios.get(URL + 'top-sales');
    return await response.data;
  } catch (error) {
    console.log('getTopSales API error:' + error);
  }
}

export async function getCategories() {
  try {
    const response = await axios.get(URL + 'categories');

    return await response.data;
  } catch (error) {
    console.log('getCategories API error:' + error);
  }
}

export async function getItems(category: number = 0, offset: number = 0) {
  try {
    const currentURL = URL + 'items';
    if (category === 0 && offset === 0) {
      const response = await axios.get(currentURL);
      return await response.data;
    }

    if (category !== 0 && offset === 0) {
      const response = await axios.get(currentURL, {
        params: {
          categoryId: category,
        },
      });
      return await response.data;
    }
    const response = await axios.get(currentURL, {
      params: {
        categoryId: category,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.log('getItems API error:' + error);
  }
}

export async function getItemsBySearch(
  category: number = 0,
  offset: number = 0,
  q: string = '',
) {
  try {
    const response = await axios.get(URL + 'items/', {
      params: {
        categoryId: category,
        offset,
        q,
      },
    });
    return await response.data;
  } catch (error) {
    console.log('getItemsBySearch API error:' + error);
  }
}

export async function getProductByID(id: number) {
  try {
    const response = await axios.get(URL + `items/${id}`);
    return await response.data;
  } catch (error) {
    console.log('getProductByID API error:' + error);
  }
}
interface ItemsProps {
  id: number;
  price: number;
  count: number;
}
interface formData {
  owner: {
    phone: string;
    address: string;
  };
  items: ItemsProps[];
}
export async function postOrder(formData: formData) {
  try {
    const response = await axios.post(URL + 'order', formData);

    return await response;
  } catch (error) {
    console.log('postOrder API error:' + error);
  }
}

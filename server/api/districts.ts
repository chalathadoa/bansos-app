import { defineEventHandler, getQuery } from 'h3';
import fetch from 'node-fetch';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const regencyId = query.regencyId as string;

  if (regencyId) {
    const apiUrl = `https://emsifa.github.io/api-wilayah-indonesia/api/districts/${regencyId}.json`;
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { error: 'Failed to fetch data' };
    }
  } else {
    return { error: 'regencyId parameter is required' };
  }
});

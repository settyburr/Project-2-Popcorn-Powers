
export const retrieveComics = async (searchTerm: string) => {

  try {
    const response = await fetch(`/api/marvel/hero/${searchTerm}/comics`, {
      headers: {
        'content-type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

export const retrieveEvents = async (searchTerm:string) => {
  try {
    const response = await fetch(`/api/marvel/hero/${searchTerm}/events`, {
      headers: {
        'content-type': 'application/json',
      }
    });
    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};

export const retrieveSeries = async (searchTerm:string) => {
  try {
    const response = await fetch(`/api/marvel/hero/${searchTerm}/series`);

    if (!response.ok) {
      throw new Error('invalid user API response, check network tab!');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
};



const retrieveHeros = async () => {
  try {
    const response = await fetch('/api/marvel/hero/:heroName/comics');

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

const retrieveEvents = async () => {
  try {
    const response = await fetch('/api/marvel/hero/:heroName/events');

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

const retrieveSeries = async () => {
  try {
    const response = await fetch('/api/marvel/hero/:heroName/series');

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

export { retrieveSeries };
export { retrieveHeros };
export { retrieveEvents };

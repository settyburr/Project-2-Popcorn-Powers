// interface MarvelHero {
//     id: string;
//     name: string;
//     description: string;
//     comics: any[];
//     events: any[];
//     series: any[];
// }

class MarvelService {
    private baseURL?: string = 'https://gateway.marvel.com:443/v1/public';
    private apiKey?: string = process.env.API_KEY;

    private buildMarvelCharInfo(name: string) {
        return `${this.baseURL}/characters?name=${name}&apikey=${this.apiKey}`;
    }

    // Helper function to fetch data from the API
    private async fetchMarvelData(url: string): Promise<any> {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();
            return data.data.results[0]; // Assuming we're working with only one hero
        } catch (error) {
            console.error("Error fetching Marvel data:", error);
            throw error; // Re-throw error to handle in calling functions
        }
    }

    // Fetch Hero Description
    async getHeroDesc(name: string): Promise<string> {
        const url = this.buildMarvelCharInfo(name);
        const hero = await this.fetchMarvelData(url);
        return hero.description || 'No description available';
    }

    // Fetch Hero Comics
    async getHeroComics(name: string): Promise<any[]> {
        const url = `${this.buildMarvelCharInfo(name)}&limit=5&fields=comics`;
        const hero = await this.fetchMarvelData(url);
        return hero.comics.items || [];
    }

    // Fetch Hero Events
    async getHeroEvents(name: string): Promise<any[]> {
        const url = `${this.buildMarvelCharInfo(name)}&limit=5&fields=events`;
        const hero = await this.fetchMarvelData(url);
        return hero.events.items || [];
    }

    // Fetch Hero Series
    async getHeroSeries(name: string): Promise<any[]> {
        const url = `${this.buildMarvelCharInfo(name)}&limit=5&fields=series`;
        const hero = await this.fetchMarvelData(url);
        return hero.series.items || [];
    }
}

export default new MarvelService();
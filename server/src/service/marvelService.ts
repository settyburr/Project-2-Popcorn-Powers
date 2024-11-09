// interface MarvelHero {
//     id: string;
//     name: string;
//     description: string;
//     comics: any[];
//     events: any[];
//     series: any[];
// }
import dotenv from 'dotenv';
import crypto from 'crypto';
import axios from 'axios';

dotenv.config();
console.log(process.env)



class MarvelService {
    private baseURL?: string = 'https://gateway.marvel.com:443/v1/public';
    private apiKey?: string = process.env.API_KEY;
    private privateKey: string = process.env.PRIVATE_KEY!;

        // Helper function to generate timestamp and hash
        private getAuthParams() {
            const ts = Date.now().toString(); // Use current timestamp
            const hash = crypto.createHash('md5')
                .update(ts + this.privateKey + this.apiKey)
                .digest('hex');
            return { ts, hash };
        }
    
        private buildMarvelCharInfo(name: string) {
            const { ts, hash } = this.getAuthParams();
            return `${this.baseURL}/characters?name=${name}&ts=${ts}&apikey=${this.apiKey}&hash=${hash}`;
        }

    // private buildMarvelCharInfo(_name: string) {
    //     return `${this.baseURL}/characters?name=${'deadpool'}&apikey=${this.apiKey}`;
    // }

    // Helper function to fetch data from the API
    private async fetchMarvelData(url: string): Promise<any> {
        try {
            console.log(`Fetching URL: ${url}`);
            const response = await axios.get(url);
            return response.data.data.results[0]; // Assuming we're working with only one hero
        } catch (error) {
            console.error("Error fetching Marvel data:", error);
            throw error;
        }
    }

    // Fetch Hero Description
    async getHeroDesc(name: string): Promise<string> {
        const url = this.buildMarvelCharInfo(name);
        // console.log(url);
        const hero = await this.fetchMarvelData(url);
        // console.log(hero);
        return hero.description || 'No description available';
    }

    // Fetch Hero Comics
    async getHeroComics(name: string): Promise<any[]> {
        const url = `${this.buildMarvelCharInfo(name)}`;
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
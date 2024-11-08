export interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    series: string[];
    events: string[];
    comics: string[];
    thumbnail: {
        path: string;
        extension: string;
    };
}
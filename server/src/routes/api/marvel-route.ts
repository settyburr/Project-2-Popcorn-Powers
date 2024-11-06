import { Router } from 'express';
const router = Router();

import marvelService from '../../service/marvelService';

router.get('/hero/:name/comics', async (req, res) => {
    const { name } = req.params;

    try {
        // Fetch all relevant data using the MarvelService
        const description = await marvelService.getHeroDesc(name);
        const comics = await marvelService.getHeroComics(name);

        
        // Render the hero page with the data (using a template engine)
        res.render('hero', { 
            name, 
            description,
            comics,
        });

    } catch (error) {
        console.error('Error fetching hero details:', error);
        res.status(500).send('Something went wrong!');
    }
});

router.get('/hero/:name/events', async (req, res) => {
    const { name } = req.params;

    try {
        // Fetch all relevant data using the MarvelService
        const description = await marvelService.getHeroDesc(name);
        const events = await marvelService.getHeroEvents(name);

        
        // Render the hero page with the data (using a template engine)
        res.render('hero', { 
            name, 
            description,
            events,
        });

    } catch (error) {
        console.error('Error fetching hero details:', error);
        res.status(500).send('Something went wrong!');
    }
});

router.get('/hero/:name/series', async (req, res) => {
    const { name } = req.params;

    try {
        // Fetch all relevant data using the MarvelService
        const description = await marvelService.getHeroDesc(name);
        const series = await marvelService.getHeroSeries(name);

        
        // Render the hero page with the data (using a template engine)
        res.render('hero', { 
            name, 
            description,
            series,
        });

    } catch (error) {
        console.error('Error fetching hero details:', error);
        res.status(500).send('Something went wrong!');
    }
});

export default router;

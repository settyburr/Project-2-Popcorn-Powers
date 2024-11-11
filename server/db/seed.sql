   -- Seeding multiple characters
INSERT INTO characters (
    character_name, description, 
    comic_name, comic_link, 
    series_name, series_link, 
    events_name, events_link
) VALUES 
(
    'Captain America', 
    'Vowing to serve his country any way he could, young Steve Rogers...', 
    'A+X (2012) #1', 'http://gateway.marvel.com/v1/public/comics/43488', 
    'A+X (2012 - 2014)', 'http://gateway.marvel.com/v1/public/series/16450', 
    'Acts of Vengeance!', 'http://gateway.marvel.com/v1/public/events/116'
),
(
    'Iron Man', 
    'Tony Stark is a genius inventor, businessman, and philanthropist...', 
    'Iron Man (1968) #1', 'http://gateway.marvel.com/v1/public/comics/43489', 
    'Iron Man (1968 - 1996)', 'http://gateway.marvel.com/v1/public/series/16451', 
    'Infinity War', 'http://gateway.marvel.com/v1/public/events/117'
);


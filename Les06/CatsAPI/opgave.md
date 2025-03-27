# Algemeen
Dit deel bestaat uit 4 onderdelen, waarbij cat gifs via fetch() worden opgehaald via de API van https://thecatapi.com/. Het bestand 'screengrab.mp4' is een video van de oplossing in werking. 

Je plaatst je code in een extern script. 

Alle uitleg over fetch() requests (incl. headers en parameters) vind je terug in het derde deel van https://rogiervdl.github.io/JS-course/04_api_ajax.html#/. De documentatie van de API staat op https://docs.thecatapi.com/.

# Evaluatie
Het totaal staat op 10 punten. 

# Opgave

## 0: API key aanvragen
Vraag eerst je eigen API key aan op https://thecatapi.com/

## 1: eerste fetch() (2p)
Doe eerst een simpele fetch() request op de API, nog zonder parameters. Geef je API key mee memt de request. Bekijk het resultaat in de console.  

## 2: met parameters (2p)
Voeg nu parameters toe aan de request voor het aantal en de categorie. Geef die voorlopig de vaste waarden 3 en 1 (= nummer voor categorie 'hats'). Controleer weer het resultaat in de console. Zoek in de API documentatie hoe de parameters heten en wat hun mogelijke waarden zijn.

## 3: DOM weergave (3p)
Geef nu het resultaat van de fetch() niet weer in de console, maar gebruik het om de afbeeldingen toe te voegen aan het HTML element met id 'cats'. 

## 4: DOM weergave (3p)
Gebruik nu tenslotte de dropdown en de input om de parameters te kiezen.



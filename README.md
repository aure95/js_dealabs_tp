
### tp_dealabs_javascript
---------------------------------------

[] récuperer données 'INCOMPLET'
[] parsing 'INCOMPLET'
[] index.html 'INCOMPLET'

---------------------------------------
## descriptif du tp
---------------------------------------
-les données sont récuperer sur la page du site avec *request* et *cheerio* le script 'script.js' étant éxécuté par Node.js car probleme de CORS et allow Acess

-à partir de ce moment j'arrive a récuperer (des données mais pas celle que je veux) mais je ne peux plus modifier le dom de 'index.html', la seule facon que j'ai trouvé est de parser les données et les insérer dans un fichier texte
 'data.txt' pour par la suite les recuperer via le fichier 'data.txt' par le script 'gestion_index.js' qui est chargé d'afficher les données recues dans index.html ('balise div id="affichage"')

-l'appui sur le bouton 'refresh' recharge la page et devait simultanément recharger les nouvelles offres présent sur la page du site.

---------------------------------------

## installation

- *npm install request cheerio*
- *npm install -g request cheerio*
- *npm install request*
- *npm install request-promise*
- *npm install jsdom*
- *npm install fs*
- *npm start*

### 'les données présentes dans 'data.txt' sont celles qui ont été obtenues depuis le dernier lancement de 'script.js' via 'node script.js'

---------------------------------------

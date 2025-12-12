Voici toute les etapes qu on a suivie pour faire le projet devops : 



Etape 1 :  ( Creation d un site statique et le push dans github )
- Creer un site statique ( html , css , js )

- Creer un depot dans github ( mini-projet-devops )

- Push le site dans notre depot gthub



Etape 2 : ( mettre le site dans docker et push dans github ) 
- Poul notre depot dans notre environement de travaile ( kali linux )

- aller dans le dossier mini-projet-devops car c est la ou on va faire toute nos commande
# cd mini-projet-devops 

- creer le dockerfile et verifier qu il est bien dans notre dossier
# mkdir dockerfile 
# nano dockerfile  ( on va ecrire les commande suivante ) 
FROM nginx:alpine ( Prend l’image officielle de Nginx basée sur Alpine Linux )

RUN rm -rf /usr/share/nginx/html/* ( Cette commande supprime le contenu par défaut du dossier )

COPY . /usr/share/nginx/html ( copie tout le site (HTML, CSS, JS) dans le dossier web de Nginx )

EXPOSE 80 ( indique que le conteneur écoute sur le port 80 )

- constuire l image docker
# docker build -t projet-devops

- lancer le contenaire docker dans le port 80 et voir si tout marche bien 
# docker run -d -p 8080:80 mon-site

- verifier si le contenaire existe
# docker ps 





Etape 3 : ( push le nouveau dossier dans github ) 
-push le dossier mini-projet-devops dans github avec les commandes suivante 
# git init
# git add .
# git commit -m "Ajoute des modifications"
# git remote add origin https://github.com/mehdidris/mini-projet-devops.git
# git push







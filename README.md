# Voici toute les etapes qu on a suivie pour faire le projet devops : 



# Etape 1 :  ( Creation d un site statique et le push dans github )
- Creer un site statique ( html , css , js )

- Creer un depot dans github ( mini-projet-devops )

- Push le site dans notre depot gthub



# Etape 2 : ( mettre le site dans docker et push dans github ) 
- Pull notre depot dans notre environement de travaile ( kali linux )

- aller dans le dossier mini-projet-devops car c est la ou on va faire toute nos commande

- cd mini-projet-devops 

- creer le dockerfile et verifier qu il est bien dans notre dossier

- mkdir dockerfile

- nano dockerfile  ( on va ecrire les commande suivante ) :
FROM nginx:alpine ( Prend l’image officielle de Nginx basée sur Alpine Linux )

RUN rm -rf /usr/share/nginx/html/* ( Cette commande supprime le contenu par défaut du dossier )

COPY . /usr/share/nginx/html ( copie tout le site (HTML, CSS, JS) dans le dossier web de Nginx )

EXPOSE 80 ( indique que le conteneur écoute sur le port 80 )

- constuire l image docker
- docker build -t projet-devops

- lancer le contenaire docker dans le port 80 et voir si tout marche bien 
- docker run -d -p 8080:80 mon-site

- verifier si le contenaire existe
- docker ps




# Etape 3 : ( faire la papeline CI/CD ) 
- creer un fichier appeller .github puis a l interieur un fichier workflow puis a l interieur un fichier avec le code en yml
- le code CI/CD doit se derouler de la maniere suivante :
- Le code se pousse sur main ou pull request creee

- Job build-and-test

- Telecharge le code du repo
- Construit l'image Docker avec nginx et vos fichiers
- Verifie que inex.html existe
- Lance le conteneur de test sur le port 8080
- Teste l'acces avec curl
- Arrete et supprime le conteneur de test

- Job deploy (uniquement si push sur main)

- Telecharge le code du repo
- Se connecte au GitHub Container Registry
- Reconstruit l'image Docker
- Publie l'image sur GitHub Packages
- Affiche un message de confirmation





# Etape 4: ( push le nouveau dossier dans github ) 
- push le dossier mini-projet-devops dans github avec les commandes suivante

- git init
- git add .
- git commit -m "Ajoute des modifications"
- git remote add origin https://github.com/mehdidris/mini-projet-devops.git
- git push







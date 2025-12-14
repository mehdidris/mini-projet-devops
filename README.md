# Voici toute les etapes qu on a suivie pour faire le projet devops : 



# Etape 1 :  ( Creation d un site statique et le push dans github )
- Creer un site statique ( html , css , js )

- Creer un depot dans github ( mini-projet-devops )

- Push le site dans notre depot gthub



# Etape 2 : ( mettre le site dans docker et push dans github ) 
- Pull notre depot dans notre environement de travaile ( kali linux )

- Aller dans le dossier mini-projet-devops car c est la ou on va faire toute nos commande

- cd mini-projet-devops 

- Creer le dockerfile et verifier qu il est bien dans notre dossier

- mkdir dockerfile

- Nano dockerfile  ( on va ecrire les commande suivante ) :
FROM nginx:alpine ( Prend l’image officielle de Nginx basée sur Alpine Linux )

RUN rm -rf /usr/share/nginx/html/* ( Cette commande supprime le contenu par défaut du dossier )

COPY . /usr/share/nginx/html ( copie tout le site (HTML, CSS, JS) dans le dossier web de Nginx )

EXPOSE 80 ( indique que le conteneur écoute sur le port 80 )

- Constuire l image docker
- Docker build -t projet-devops

- Lancer le contenaire docker dans le port 80 et voir si tout marche bien 
- Docker run -d -p 8080:80 mon-site

- Verifier si le contenaire existe
- Docker ps
- Docker images




# Etape 3 : ( faire la papeline CI/CD ) 
- Creer un fichier appeller .github puis a l interieur un fichier workflow puis a l interieur un fichier avec le code en yml
- Le code CI/CD doit se derouler de la maniere suivante :
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
- Push le dossier mini-projet-devops dans github avec les commandes suivante

- git init
- git add .
- git commit -m "Ajoute des modifications"
- git remote add origin https://github.com/mehdidris/mini-projet-devops.git
- git push


# Les screens demanders : 

- Preuve du CI/CD :
<img width="1340" height="638" alt="image" src="https://github.com/user-attachments/assets/a9b4f4c9-cdf2-4cd8-9d72-4ce137bb14f2" />

<img width="1360" height="548" alt="image" src="https://github.com/user-attachments/assets/797d56a3-0839-4557-8b3a-4584607c11f8" />


- Preuve du site marche :
<img width="1296" height="519" alt="image" src="https://github.com/user-attachments/assets/0fe9bfc4-f32d-4c14-9903-79671c5a22aa" />

- Preuve de l image docker :
<img width="712" height="230" alt="image" src="https://github.com/user-attachments/assets/9dec7e3d-d972-4740-8602-4396e955dda8" />



# Les problemes que nous avons rencontrer  :

- Nous avons fait une erreur a la place d apeller le fichier index ( inex )

- Pour la commande docker build il faut mettre le nom en miniscule

- Ne pas oublier le . a la fin de la commande pour le build

- Nous avons pas verifier que notre collegue nous a ajouter dans le depot github avant de push

- Une erreur de synchronisation entre le docker file et le yml 


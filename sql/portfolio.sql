/* Nom de la db : portfolio */

CREATE TABLE projets (
	id int NOT NULL AUTO_INCREMENT,
	nom varchar(50) NOT NULL,
	description varchar(500) NOT NULL,
	annee varchar(4) NOT NULL,
	technologies varchar(200) NOT NULL,
	image varchar(100) NOT NULL,
	PRIMARY KEY (id)
);


INSERT into projets(nom, description, annee, technologies, image) VALUES
				("Projet 1", "Project de site/application de gestion de To-Do-List dynamique.", "2023", "JavaScript ES6, CSS, HTML", "./assets/img/projet-1.png"),
				("Projet 2", "Projet de refonte du site de la compagnie Creuset.", "2023", "WordPress, PHP, CSS, HTML", "./assets/img/projet-2.png"),
				("Projet 3", "Project de site d'une librairie en ligne.", "2022", "JavaScript ES6, CSS, HTML", "./assets/img/projet-3.png");
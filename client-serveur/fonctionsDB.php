<?php
	$connexion = connexionDB();
		
	/**
	 * Connection avec la base de données
	 */
	function connexionDB() {
		define('DB_HOST', 'localhost');
		define('DB_USER', 'root');
		define('DB_PASSWORD', '');			// MAC
		//define('DB_PASSWORD', '');			// Windows

		$laConnexion = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
				
		if (!$laConnexion) {
			// La connexion n'a pas fonctionné
			die('Erreur de connexion à la base de données. ' . mysqli_connect_error());
		}
		
		$db = mysqli_select_db($laConnexion, 'portfolio');

		if (!$db) {
			die ('La base de données n\'existe pas.');
		}
		
		mysqli_query($laConnexion, 'SET NAMES "utf8"');
		return $laConnexion;
	}


	/**
	 * Exécute la requête SQL
	 * Si le paramètre $insert est true, retourne l'id de la ressource ajoutée à la db
	 */
	function executeRequete($requete, $insert = false) {
		global $connexion;
		if ($insert) {
			mysqli_query($connexion, $requete);
			return $connexion->insert_id;
		} else {
			$resultats = mysqli_query($connexion, $requete);
			return $resultats;
		}
	}
	

	/**
	 * Retourne tous les projets
	 */
    function getAllProjets() {
		return executeRequete('SELECT * FROM projets');		
	}


	/**
	 * Retourne le projet spécifié
	 */
    function getProjet($id) {
		// La fonction mysqli_real_escape_string est utilisée pour créer une chaîne SQL légale qui peut être utilisée dans une instruction SQL, en tenant compte du jeu de caractères (charset) actuel de la connexion.
		global $connexion;
		$id = mysqli_real_escape_string($connexion, $id);
		return executeRequete('SELECT * FROM projets WHERE id=' . $id);		
	}
?>
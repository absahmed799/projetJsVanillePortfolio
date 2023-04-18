<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Épreuve finale</title>
	<meta name="description" content="Épreuve finale du cours 582-31F-MA Programmation d'interface Web 2">

	<!-- styles -->
	<link rel="stylesheet" type="text/css" href="./assets/styles/styles.css">

	<!-- scripts -->
    <script type="module" src="./assets/scripts/main.js" defer></script>
</head>

<body data-js-component="Router">
	<header>
		<h1><a href="" data-js-accueil>Épreuve finale</a></h1>
		<nav>
			<ul data-js-projets>
				<?php 
					// Générer les équipes dynamiquement
					require_once('client-serveur/fonctionsDB.php');
					$tasks = getAllProjets();
					
					// Récupération des résultats sous forme de tableau associatif
					while ($task= mysqli_fetch_assoc($tasks)) {
						echo '<li><a href="" data-js-projet-id="' . $task['id'] . '">' . $task['nom'] . '</a></li>';
					}
				?>
			</nav>
		</ul>
	</header>
	
    <main>
		<template data-js-projet-template>
			<div class="project">
				<div class="project__image">
					<img src="{{image}}" alt="{{nom}}">
				</div>
				<div class="project__detail">
					<h2>{{nom}} <small>({{annee}})</small></h2>
					<p><small>Technologies :</small> {{technologies}}</p>
					<p>{{description}}</p>
				</div>
			</div>
		</template>

		<div data-js-projet></div>
	</main>
</body>
</html>
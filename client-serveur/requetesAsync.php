<?php
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    if (isset($data['action'])) {

        // Switch en fonction de l'action envoyée
        switch ($data['action']) {
            case 'getProjet':
                if (isset($data['id'])) {
                    $projet = mysqli_fetch_assoc(getProjet($data['id']));
                    header('Content-type: application/json; charset=utf-8');
                    echo json_encode($projet);
                }
                break;
        }
    } else {
        echo 'Erreur action';					
    }
?>
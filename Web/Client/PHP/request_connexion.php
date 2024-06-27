<?php

require_once('User.php');

// Récupérer la méthode de la requête (GET, POST, etc.)

$requestMethod = $_SERVER['REQUEST_METHOD'];

//TOUT EST BON ICI :
//echo json_encode($requestMethod);

$result = null;

// ---------- On récupère des variables de GET et de POST ----------

$requestAction = isset($_GET['action']) ? $_GET['action'] : '';
//echo json_encode($requestAction);

switch ($requestAction){

    case 'recuperer_email' :
        $result = User::getAllMail();
        echo json_encode($result);
        break;

    case 'recuperer_mot_de_passe' :
        $result = User::getAllMotDePasse();
        echo json_encode($result);
        break;

    default:
        echo json_encode("Error => Rentrer dans le GET mais pas dans le case");
        break;

}


/*
switch ($requestMethod){

    case 'GET':

        switch ($requestAction) {

            case 'recuperer_email':
                $result = User::getAllMail();
                echo json_encode($result);
                break;

            case 'recuperer_mot_de_passe':
                $result = User::getAllMotDePasse();
                echo json_encode($result);
                break;

            default:
                echo json_encode("Dans get mais pas dans action");
                break;
        }

    default:
        echo json_encode("Pas dans le get");
        break;

}*/

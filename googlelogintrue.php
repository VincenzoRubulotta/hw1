<?php
if(isset($_SESSION['access_token']) && isset($_SESSION['client']))
{
    header('location: http://localhost/hw1/mhw3.php');
}
?>

<?php

require_once __DIR__.'/vendor/autoload.php';

use Google\Client;
use Google\Service\Drive;

session_start();

$client = new Client();
$client->setAuthConfigFile('client_secrets.json');
$client->setRedirectUri('http://localhost:80/hw1/googlelogintrue.php');
$client->addScope(Drive::DRIVE_METADATA_READONLY);

if (!isset($_GET['code'])) {
    // Generate and set state value
    $state = bin2hex(random_bytes(16));
    $client->setState($state);
    $_SESSION['state'] = $state;

    $auth_url = $client->createAuthUrl();
    header('Location: ' . filter_var($auth_url, FILTER_SANITIZE_URL));
} else {
    // Check the state value
    if (!isset($_GET['state']) || $_GET['state'] !== $_SESSION['state']) {
        die('State mismatch. Possible CSRF attack.');
    }
    $client->authenticate($_GET['code']);
    $_SESSION['access_token'] = $client->getAccessToken();
    $_SESSION['client'] = $client;
    $redirect_uri = 'http://' . $_SERVER['HTTP_HOST'] . '/';
    header('Location: ' . filter_var($redirect_uri, FILTER_SANITIZE_URL));
}
?>

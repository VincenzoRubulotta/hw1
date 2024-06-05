<?php
require_once __DIR__.'/vendor/autoload.php';

session_start();

$client = new Google\Client();
$client->setAuthConfig('client_secrets.json');
$client->addScope(Google\Service\Drive::DRIVE_METADATA_READONLY);

if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
  $client->setAccessToken($_SESSION['access_token']);
  $drive = new Google\Service\Drive($client);
  $files = $drive->files->listFiles(array())->getItems();
  echo json_encode($files);
} else {
  $redirect_uri = 'http://localhost:80/hw1/googlelogintrue.php';
  header('Location: ' . filter_var($redirect_uri, FILTER_SANITIZE_URL));
}
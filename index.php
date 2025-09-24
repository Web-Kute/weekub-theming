<?php
require_once __DIR__ . '/vendor/autoload.php';
// The vendor directory is located at: /Applications/MAMP/htdocs/vendor
use Twig\Environment;
use Twig\Loader\FilesystemLoader;
use App\Twig\AssetExtension;
// Set up Twig loader and environment
//$templatesPath = './templates/';
/*if (!is_dir($templatesPath)) {
    die("Templates directory not found: $templatesPath");
}*/
$loader = new FilesystemLoader(__DIR__ . '/templates');
// $loader = new \Twig\Loader\FilesystemLoader($templatesPath);
$twig = new Environment($loader);
/*$twig = new \Twig\Environment($loader, [
  'cache' => false, // Set to a writable directory for caching, e.g., __DIR__ . '/cache'
]);*/
//$twig = new \Twig\Environment($loader, ['debug' => true]);
//$twig->addExtension(new AssetExtension('/weekub-theme/public/assets'));
$twig->addExtension(new \App\Twig\AssetExtension('http://localhost:8888'));
echo $twig->render('index.html.twig');

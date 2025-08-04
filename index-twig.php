<?php
require_once __DIR__ . '/vendor/autoload.php';
// The vendor directory is located at: /Applications/MAMP/htdocs/vendor

// Set up Twig loader and environment
$templatesPath = './templates/';
if (!is_dir($templatesPath)) {
    die("Templates directory not found: $templatesPath");
}
$loader = new \Twig\Loader\FilesystemLoader($templatesPath);
$twig = new \Twig\Environment($loader, [
  'cache' => false, // Set to a writable directory for caching, e.g., __DIR__ . '/cache'
]);
$twig = new \Twig\Environment($loader, ['debug' => true]);

echo $twig->render('index.html.twig');

<?php
// src/Twig/AppExtension.php;

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AssetExtension extends AbstractExtension
{
    private $basePath;

    public function __construct(string $basePath)
    {
        $this->basePath = rtrim($basePath, '/');
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('asset', [$this, 'asset']),
        ];
    }

    public function asset(string $path): string
    {
        return $this->basePath . '/' . ltrim($path, '/');
    }
}
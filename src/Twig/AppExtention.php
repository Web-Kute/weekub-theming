<?php
// src/Twig/AppExtension.php

// namespace App\Twig;

// use Some\LipsumGenerator;
// use Twig\Extension\AbstractExtension;
// use Twig\TwigFilter;
// use Twig\TwigFunction;

// class AppExtension extends AbstractExtension
// {
//     public function getFilters()
//     {
//         return [
//             new TwigFilter('price', [$this, 'filterPrice']),
//         ];
//     }

//     public function getFunctions()
//     {
//         return [
//             // appellera la fonction LipsumGenerator:generate()
//             new TwigFunction('lipsum', [LipsumGenerator, 'generate']),
//         ];
//     }

//     public function filterPrice($number, $decimals = 0)
//     {
//         $price = number_format($number, $decimals);
//         $price = $price . '€';

//         return $price;
//     }
// }
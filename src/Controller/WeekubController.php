<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WeekubController extends AbstractController {
  /**
  * @Route("/", name="weekub")
  * @Method("GET")
  */
public function index(): Response {
      return $this->render('index.html.twig');
    }
}

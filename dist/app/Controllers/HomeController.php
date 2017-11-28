<?php

namespace App\Controllers;

use App\Controllers\Controller;

class HomeController extends Controller
{
    public function index($req, $res, $args)
    {
        return $this->c->view->render($res, 'home.twig');
    }

    public function post($req, $res, $args)
    {
        echo 'Posted';
    }

    public function flash($req, $res, $args)
    {
        $this->c->flash->addMessage('global', 'Hello');

        return $res->withRedirect($this->c->router->pathFor('home'));
    }
}

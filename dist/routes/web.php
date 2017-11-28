<?php

use App\Controllers\HomeController;
use App\Controllers\ContactController;

$app->get('/', HomeController::class . ':index')->setName('home');
$app->post('/', HomeController::class . ':post')->setName('post');
$app->get('/flash', HomeController::class . ':flash')->setName('flash');

$app->post('/contact/form', ContactController::class . ':index')->setName('contact.form');

$app->get('/about', function ($req, $res) {
	return $this->view->render($res, 'about.twig');
})->setName('about');

$app->get('/services', function ($req, $res) {
	return $this->view->render($res, 'services.twig');
})->setName('services');

$app->get('/locations', function ($req, $res) {
	return $this->view->render($res, 'locations.twig');
})->setName('locations');

$app->get('/smile-gallery', function ($req, $res) {
	return $this->view->render($res, 'smile-gallery.twig');
})->setName('smile-gallery');

$app->get('/contact', function ($req, $res) {
	return $this->view->render($res, 'contact.twig');
})->setName('contact');

$app->get('/windsor', function ($req, $res) {
	return $this->view->render($res, 'locations-windsor.twig');
})->setName('windsor');

$app->get('/leamington', function ($req, $res) {
	return $this->view->render($res, 'locations-leamington.twig');
})->setName('leamington');

$app->get('/fergus', function ($req, $res) {
	return $this->view->render($res, 'locations-fergus.twig');
})->setName('fergus');

$app->get('/waterloo', function ($req, $res) {
	return $this->view->render($res, 'locations-waterloo.twig');
})->setName('waterloo');

$app->get('/oakville', function ($req, $res) {
	return $this->view->render($res, 'locations-oakville.twig');
})->setName('oakville');

<?php

namespace App\Controllers;

use App\Controllers\Controller;
use App\Models\User;

class ContactController extends Controller
{
    public function index($req, $res, $args)
    {
    	$mail = new \PHPMailer;
		$data = $req->getParams();

		$template =  $this->c->view->fetch('email/welcome.twig', compact('data'));

		$mail->setFrom($data['name']);
	    $mail->ReutrnPath='info@thedenturecenter.ca';
	    $mail->addAddress('info@thedenturecenter.ca');
	    $mail->addReplyTo($data['name']);

	    $mail->isHTML(true);

	    $mail->Subject = 'A new message from ' . $data['name'];
	    $mail->Body = $template;
	    $mail->AltBody = $template;

		if(!$mail->send()) {
			echo 'Message could not be sent.';
			echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
			echo 'Message Sent!';
		}
	}
}

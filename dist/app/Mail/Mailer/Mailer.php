<?php

namespace App\Mail\Mailer;

use Swift_Mailer;
use Swift_Message;
use Slim\Views\Twig;
use App\Mail\Mailer\MessageBuilder;

class Mailer
{

	protected $swift;
	protected $twig;
	protected $from = [];

	public function __construct(Swift_Mailer $swift, Twig $twig)
	{
		$this->swift = $swift;
		$this->twig = $twig;
	}

	public function alwaysFrom($address, $name = null)
	{
		$this->from = compact('address', 'name');

		return $this;
	}

	public function send($view, $viewData, Callable $callback = null)
	{
		$message = $this->buildMessage();

		call_user_func($callback, $message);

		$message->body($this->parseView($view, $viewData));

		return $this->swift->send($message->getSwiftMessage());
	}

	protected function buildMessage()
	{
		return (new MessageBuilder(new Swift_Message))
			->from($this->from['address'], $this->from['name']);
	}

	protected function parseView($view, $viewData)
	{
		return $this->twig->fetch($view, $viewData);
	}
}
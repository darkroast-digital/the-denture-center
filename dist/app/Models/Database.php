<?php

namespace App;

use Symfony\Component\Yaml\Yaml;

class Database
{

	protected $table;
	protected $row;

	public function create($table)
	{
		if (!is_dir($table)) {
			mkdir($table, 0775);
		}

		return $this;
	}

	public function addRow($row)
	{
		if (!file_exists($row)) {
			fopen($row, 'w');
		}

		return $this;
	}

	public function delete($table)
	{
		if (is_dir($table)) {
			$files = glob($table . '/*');
			foreach ($files as $file) {
				is_dir($file) ? rmdir($file) : unlink($file);
			}
			rmdir($table);
		}

		return $this;
	}

	public function deleteRow($row)
	{
		if (file_exists($row)) {
			unlink($row);
		}

		return $this;
	}

	public function load($row)
	{
		$data = Yaml::parse(file_get_contents($row));

		return $data;
	}

	public function write($row, $content)
	{
		$data = Yaml::dump($content);

		file_put_contents($row, $data);
	}
}

<?php

namespace App\Controllers;

class Home extends BaseController
{

    public function index()
    {
        session()->set("tab", "home");
        return view('home');
    }
}

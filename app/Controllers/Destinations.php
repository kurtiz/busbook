<?php

namespace App\Controllers;

use CodeIgniter\Controller;

class Destinations extends Controller
{

    public function index()
    {
        session()->set("tab", "destinations");
        return view('destinations');
    }
}

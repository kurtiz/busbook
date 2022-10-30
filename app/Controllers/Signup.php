<?php

namespace App\Controllers;

use App\Models\UserModel;

class Signup extends BaseController
{

    public $userModel;

    public function __construct(){
        $this->userModel = new UserModel();
    }

    public function index()
    {
        session()->set("tab", "signup");

        if ($this->request->getMethod() == "post") {
            $fields = [
                "user_id" => hash("md5", "user". date("ymdishia")),
                "user_name" =>
                    $this->request->getVar("firstname", FILTER_SANITIZE_STRING)
                    . " " .
                    $this->request->getVar("lastname", FILTER_SANITIZE_STRING),
                "user_email" => $this->request->getVar("email", FILTER_SANITIZE_EMAIL),
                "user_contact" => $this->request->getVar("contact", FILTER_SANITIZE_STRING),
                "user_passkey" => hash(
                    "gost-crypto",
                    hash ("md5", $this->request->getVar("password", FILTER_SANITIZE_STRING)) .
                    hash("md4", $this->request->getVar("lastname", FILTER_SANITIZE_STRING))
                )
            ];

            $addedUser = $this->userModel->createUser($fields);

            if($addedUser){
                session()->setTempdata("msg", "success", 2);
            } else {
                session()->setTempdata("msg", "error", 2);
            }

        }

        return view('signup');
    }
}

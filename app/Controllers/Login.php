<?php

namespace App\Controllers;

use App\Models\UserModel;

class Login extends BaseController
{

    public $userModel;

    public function __construct()
    {
        $this->userModel = new UserModel();
    }

    public function index()
    {
        session()->set("tab", "login");
        if (session()->has("logged_user")) {
            return redirect()->to(base_url() . '/destinations');
        }

        if ($this->request->getMethod() == "post") {
            $email = $this->request->getVar("email", FILTER_SANITIZE_EMAIL);
            $password = $this->request->getVar("password", FILTER_SANITIZE_STRING);
            $hashed = hash(
                "gost-crypto",
                hash("md5", $password) .
                hash("md4", $password)
            );

            $user = $this->userModel->verifyUser($email);

            if ($user) {
                if ($user->user_passkey == $hashed) {
                    session()->set("logged_user", $user->user_id);
                    if (session()->has("from_url")) {
                        $to = session()->get("from_url");
                        session()->remove("from_url");
                        return redirect()->to($to);
                    }
                    return redirect()->to(base_url() . "/destinations");
                } else {
                    session()->setTempdata("msg", "error", 2);
                }

            } else {
                session()->setTempdata("msg", "error", 2);
            }
        }

        return view('signin');
    }

    public function logout()
    {
        session()->remove("logged_user");
        session()->destroy();
        return redirect()->to(base_url());
    }
}

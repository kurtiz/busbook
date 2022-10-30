<?php

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $tbl = "users";

    public function createUser(array $fields){
        $builder = $this->db->table($this->tbl);
        $builder->insert($fields);

        if ($this->db->affectedRows() == 1) {
            return true;
        }else {
            return false;
        }
    }
}
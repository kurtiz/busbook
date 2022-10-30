<?php

namespace App\Models;

use CodeIgniter\Model;

/**
 * Class Ticket Model
 * @package App\Models
 */
class BookingModel extends Model
{

    protected $tbl = "booking";
    protected $nextTbl = "booking_details";

    /**
     * @param array $fields is the array of data needed to create a ticket
     *
     * @return bool returns true if the operation was successful and returns false otherwise
     */
    public function addBooking(array $fields)
    {
        $builder = $this->db->table($this->tbl);
        $builder->insert($fields);
        if ($this->db->affectedRows() == 1) {
            return true;
        } else {
            return false;
        }

    }

    /**
     * @param array $fields is the array of data needed to create a ticket
     *
     * @return bool returns true if the operation was successful and returns false otherwise
     */
    public function addBookingDetails(array $fields)
    {
        $builder = $this->db->table($this->nextTbl);
        $builder->insert($fields);
        if ($this->db->affectedRows() == 1) {
            return true;
        } else {
            return false;
        }

    }

}
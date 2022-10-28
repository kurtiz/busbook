<?php

namespace App\Models;

use CodeIgniter\Model;

/**
 * Class Ticket Model
 * @package App\Models
 */
class TicketsPagerModel extends Model
{
    protected $table = 'ticket';
    protected $primaryKey = 'ticket_id';
    protected $allowedFields = [
        "destination_id",
        "departure_time",
        "departure_date",
        "ticket_cost",
        "bus_id",
        "driver_id",
        "ticket_image"];
}
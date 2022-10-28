<?php

namespace App\Controllers;

use App\Libraries\ActiveSession;
use App\Models\BusesModel;
use App\Models\DestinationsModel;
use App\Models\DriversModel;
use App\Models\TicketsModel;
use App\Models\TicketsPagerModel;
use CodeIgniter\Controller;
use App\Libraries;

class Destinations extends Controller
{
    public $ticketsModel;
    public $driversModel;
    public $busesModel;
    public $destinationsModel;
    public $activeSession;

    public function __construct() {
        $this->ticketsModel = new TicketsModel();
        $this->driversModel = new DriversModel();
        $this->destinationsModel = new DestinationsModel();
        $this->busesModel = new BusesModel();
        $this->activeSession = new ActiveSession();

    }

    public function index()
    {
        $ticketsPagerModel = new TicketsPagerModel();
        $data['tickets'] = $ticketsPagerModel->paginate(20);
        $data['pager'] = $ticketsPagerModel->pager;
        $data["adminUrl"] = $this->activeSession->admin_url();

        foreach ($data['tickets'] as $ticket) {
            $data['from'][] = $this->destinationsModel->getDestination($ticket['destination_id'])->destination;
            $data['to'][] = $this->destinationsModel->getDestination($ticket['from_destination_id'])->destination;
            $data['drivers'][] = $this->driversModel->getDriver($ticket['driver_id'])->driver_name;
            $data['buses'][] = $this->busesModel->getBus($ticket['bus_id'])->bus_model;
        }

        session()->set("tab", "destinations");
        return view('destinations', $data);
    }

    public function search(){
//        $
    }
}

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
    public $data;

    public function __construct() {
        $this->ticketsModel = new TicketsModel();
        $this->driversModel = new DriversModel();
        $this->destinationsModel = new DestinationsModel();
        $this->busesModel = new BusesModel();
        $this->activeSession = new ActiveSession();

    }

    public function index()
    {
        $this->pullTicketData();

        session()->set("tab", "destinations");
        return view('destinations', $this->data);
    }

    public function search($token){
        $this->pullTicketData();
        return json_encode($this->data);
    }

    /**
     * @return void
     */
    private function pullTicketData(): void
    {
        $ticketsPagerModel = new TicketsPagerModel();
        $this->data['tickets'] = $ticketsPagerModel->like([])->paginate(20);
        $this->data['pager'] = $ticketsPagerModel->pager;
        $this->data["adminUrl"] = $this->activeSession->admin_url();

        foreach ($this->data['tickets'] as $ticket) {
            $this->data['from'][] = $this->destinationsModel->getDestination($ticket['destination_id'])->destination;
            $this->data['to'][] = $this->destinationsModel->getDestination($ticket['from_destination_id'])->destination;
            $this->data['drivers'][] = $this->driversModel->getDriver($ticket['driver_id'])->driver_name;
            $this->data['buses'][] = $this->busesModel->getBus($ticket['bus_id'])->bus_model;
        }
    }
}

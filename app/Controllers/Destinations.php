<?php

namespace App\Controllers;

use App\Libraries\ActiveSession;
use App\Models\BookingModel;
use App\Models\BusesModel;
use App\Models\DestinationsModel;
use App\Models\DriversModel;
use App\Models\TicketsModel;
use App\Models\TicketsPagerModel;
use CodeIgniter\Controller;

class Destinations extends Controller
{
    public $ticketsModel;
    public $driversModel;
    public $busesModel;
    public $destinationsModel;
    public $activeSession;
    public $bookingModel;
    public $data;

    public function __construct() {
        $this->ticketsModel = new TicketsModel();
        $this->driversModel = new DriversModel();
        $this->destinationsModel = new DestinationsModel();
        $this->busesModel = new BusesModel();
        $this->bookingModel = new BookingModel();
        $this->activeSession = new ActiveSession();

    }

    public function index()
    {
        $this->pullTicketsData();

        session()->set("tab", "destinations");
        return view('destinations', $this->data);
    }

    public function search($token){
        $this->pullTicketsData();
        return json_encode($this->data);
    }

    public function view($id){
        $data["ticket"] = $this->ticketsModel->getTicket($id);
        $data["adminUrl"] = $this->activeSession->admin_url();
        $data['from'] = $this->destinationsModel->getDestination($data["ticket"]->from_destination_id);
        $data['to'] = $this->destinationsModel->getDestination($data["ticket"]->destination_id);
        $data['driver'] = $this->driversModel->getDriver($data["ticket"]->driver_id);
        $data['bus'] = $this->busesModel->getBus($data["ticket"]->bus_id);

        if($this->request->getMethod() == "post"){
            if(!session()->has("logged_user")) {
                session()->set("from_url", current_url());
                return redirect()->to(base_url().'/login');
            }

            $fields = [
                "bk_id" => hash("md5", "booking". date("ymdishia")),
                "amount" => (float)$data["ticket"]->ticket_cost *  (int)$this->request->getVar("tk_quantity"),
                "user_id" => session()->get("logged_user"),
                "date_booked" => date("Y-m-d"),
                "time_booked" => date("H:i:s"),
            ];

            $addedBooking = $this->bookingModel->addBooking($fields);

            if($addedBooking){
                $otherFields = [
                    "bk_details_id" => hash("md5", "booking_details". date("ymdishia")),
                    "bk_id" => $fields["bk_id"],
                    "tk_id" => $id,
                    "tk_cost" => $data['ticket']->ticket_cost,
                    "quantity" => $this->request->getVar("tk_quantity"),
                ];

                $addedBookingDetails = $this->bookingModel->addBookingDetails($otherFields);
                if($addedBookingDetails){
                    session()->setTempdata( "success", "You have successfully booked the trip", 2);
                } else {
                    session()->setTempdata( "error", "An error occurred", 2);
                }
            } else {
                session()->setTempdata( "error", "An error occurred", 2);
            }
        }

        return view("destination_details", $data);
    }

    /**
     * @return void
     */
    private function pullTicketsData(): void
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

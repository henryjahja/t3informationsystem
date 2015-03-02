<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class VerifyLogin extends CI_Controller {

 function __construct()
 {
   parent::__construct();
   
		$this->load->database();
		$this->load->helper('url');
		$this->load->model('user','',TRUE);
		$this->load->model('profil','',TRUE);
 }

 function index()
 {
   $this->load->library('form_validation');
   $this->form_validation->set_rules('username', 'Username', 'trim|required|xss_clean');
   $this->form_validation->set_rules('password', 'Password', 'trim|required|xss_clean|callback_check_database');
   if($this->form_validation->run() == FALSE)
   {
    $this->load->view('loginview');
   }
   else
   {
     redirect('internal', 'refresh');
   }
 }

 function check_database($password)
 {
   $username = $this->input->post('username');
   $result = $this->user->login($username, $password);
   if($result)
   {
     $sess_array = array();
     foreach($result as $row)
     {
	   if (($row->id_editor) == '1'){
	   redirect('internal', 'refresh');
	   } else {
			$result2 = $this->profil->get_user($row->id_editor);
			foreach($result2 as $row2)
			{   
				$sess_array = array(
					'id_user' => $row->id_user,
					'id_editor' => $row->id_editor,
					'username' => $row->username,
					'name' => $row2->nama_Editor,
					'rank'=> $row->rank
				); 
			}
        $this->session->set_userdata('logged_in', $sess_array);
		}
		return TRUE;
	 }
   }
   else
   {
     $this->form_validation->set_message('check_database', 'Username atau Password Salah');
     return false;
   }
 }
}
?>

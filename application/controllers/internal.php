<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Internal extends CI_Controller {

	function __construct(){
		parent::__construct();		
		$this->load->database();
		$this->load->helper('url');		
		$this->load->library('grocery_CRUD');
	}
	
	function _example_output($output = null, $title = null){	
		$this->load->view('internal_tttmediacorp.php',$output);	
	}
	
	function editor(){		
		if($this->session->userdata('logged_in'))
			{
				$crud = new grocery_CRUD();	
				$crud->set_theme('datatables');
				$crud->set_language("indonesian");
				$crud->set_table('editor');
				$crud->set_subject('Informasi Data Editor');
				$crud->required_fields('nama_Editor','nomor_HP','email');
				$session_data = $this->session->userdata('logged_in');
				$rank_stat = $session_data['rank'];
				if($rank_stat == 'editor')
				{
					$editor_number = $session_data['id_editor'];
					$crud->unset_edit_fields('id_editor');
					$crud->unset_back_to_list();
					$crud->unset_list();
					try{
						$output = $crud->render();
						$output->title = 'Edit Profil - ';
						$this->_example_output($output);
					} catch(Exception $e) {
 
						if($e->getCode() == 14)
						{
							redirect(strtolower(__CLASS__).'/'.strtolower(__FUNCTION__).'/edit/'. $editor_number);
						}
						else {
							show_error($e->getMessage());
						}
					}	
				} else if($rank_stat == 'admin')
				{		
					$output = $crud->render();
					$output->title = 'Profil Editor - ';
					$this->_example_output($output);
				} 
			} else
				{
					redirect('internal/login','refresh');
				}
	}
	
	function review(){
		if($this->session->userdata('logged_in')){
			$session_data = $this->session->userdata('logged_in');
			$i_e = $session_data['id_editor'];
			$e_r = $session_data['rank'];
			$crud = new grocery_CRUD();
			$crud->set_theme('datatables');
			$crud->set_language("indonesian");
			$crud->set_table('review');
			$crud->set_subject('Review');
			$crud->set_relation('id_barang','barang','namaBarang');
			$crud->set_relation('id_editor','editor','nama_editor');
			$crud->set_field_upload('file_url','assets/uploads/files');
			$crud->display_as('id_editor','Nama Editor');
			if ($e_r == 'editor'){
				$crud->field_type('id_editor', 'hidden', $i_e);
			}
			$output = $crud->render();
			$output->title = 'Review - ';
			$this->_example_output($output);
			} else {
				redirect('internal/login', 'refresh');
			}
	}
	
	function barang(){
		if($this->session->userdata('logged_in'))
			{
				$crud = new grocery_CRUD();
				$crud->set_theme('datatables');
				$crud->set_language("indonesian");
				$crud->set_table('barang');
				$crud->set_subject('Daftar Barang');
				$crud->set_relation('id_editor','editor','nama_editor');
				$crud->set_relation('id_kategori','kategori','nama_kategori');
				$crud->set_relation_n_n('Photos',
				'foto_barang',
				'foto', 
				'id_barang', 
				'id_foto', 	
				'judul_foto', 	
				'priority');
				$crud->display_as('id_editor','Nama Editor');
				$crud->display_as('id_kategori','Kategori');
				$crud->unset_columns('Photos');
				$output = $crud->render();
				$output->title = 'Inventori - ';
				$this->_example_output($output);
			}  else
				{
					redirect('internal/login','refresh');
				}
	}
	
	function kategori(){
		if($this->session->userdata('logged_in'))
			{
				$crud = new grocery_CRUD();
				//$crud->set_theme('datatables');
				$crud->set_language("indonesian");
				$crud->set_table('kategori');
				$crud->set_subject('Daftar Kategori Barang');
				$crud->required_fields('nama_kategori');
				$output = $crud->render();
				$output->title = 'Kategori Barang - ';
				$this->_example_output($output);	
			}  else
				{
					redirect('internal/login','refresh');
				}
	}
	
	function foto(){
		if($this->session->userdata('logged_in'))
			{
				$crud = new grocery_CRUD();
				$crud->set_theme('datatables');
				$crud->set_language("indonesian");
				$crud->set_table('foto');
				$crud->set_subject('Foto');
				$crud->required_fields('url_foto');
				$crud->unset_add_fields('id_foto');
				$crud->unset_edit_fields('id_foto');
				$crud->set_field_upload('url_foto','assets/uploads/files/foto_produk');
				$output = $crud->render();
				$output->title = 'Foto Produk - ';
				$this->_example_output($output);
			}  else
				{
					redirect('internal/login','refresh');
				}
	}

	function logout(){
		if($this->session->userdata('logged_in')){
				$this->session->unset_userdata('logged_in');
				redirect('internal', 'refresh');
		} else {
				redirect('internal', 'refresh');
				}
	}
	
	function login(){
		if($this->session->userdata('logged_in'))
			{
				redirect('internal', 'refresh');
			} else {
				$this->load->helper(array('form'));
				$this->load->view('loginview');
				}
	}
	
	function user(){
		//if($this->session->userdata('logged_in')){
			$crud = new grocery_CRUD();
			$crud->set_theme('datatables');
			$crud->set_language("indonesian");
			$crud->set_table('user');
			$crud->set_relation('id_editor','editor','nama_editor');
			$crud->display_as('id_editor','Nama Editor');
			
			$crud->required_fields('username','password');
			$crud->set_subject('User');
			if($this->session->userdata('logged_in')){
				$session_data = $this->session->userdata('logged_in');
				$rank_stat = $session_data['rank'];
				if($rank_stat== 'editor'){	
					$editor_number = $session_data['id_editor'];
					$crud->fields('username','password');
					$crud->unset_edit_fields('rank', 'id_editor', 'status');
					$crud->unset_back_to_list();
					$crud->unset_list();
					try{
						$output = $crud->render();
						$output->title = 'Edit Login Credentials - ';
						$this->_example_output($output);
					} catch(Exception $e) {
						if($e->getCode() == 14){
						redirect(strtolower(__CLASS__).'/'.strtolower(__FUNCTION__).'/edit/'. $editor_number);
						} else {
							show_error($e->getMessage());
							}
					}
				} else if($rank_stat == 'admin'){			
					$output = $crud->render();
					$output->title = 'User Control Panel - ';
					$this->_example_output($output);
				} 
			} else {
				$crud->unset_add_fields('rank', 'id_editor', 'status');
				$crud->unset_back_to_list();
				$crud->unset_list();
				try{
					$output = $crud->render();
					$output->title = 'New User Registration - ';
					$this->_example_output($output);
				} catch(Exception $e) {
					if($e->getCode() == 14){
						redirect(strtolower(__CLASS__).'/'.strtolower(__FUNCTION__).'/add');
					} else {
						show_error($e->getMessage());
					}
				}
			}
		/*}  else
				{
					redirect('internal/login','refresh');
				}*/
	}
	
	function index(){	
		$this->_example_output((object)array('output' => '<center><h3><span style="font-size:17px;color:red;">Selamat datang, silahkan pilih menu di bawah</span></h3></center><br><br><br><br><br><br>' , 'js_files' => array() , 'css_files' => array()));
	}	
}
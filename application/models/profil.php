<?php
Class Profil extends CI_Model
{
 function get_user($id_e)
 {
   $this -> db -> select('id_editor, nama_Editor, nomor_HP, nomor_HP_2 email');
   $this -> db -> from('editor');
   $this -> db -> where('id_editor', $id_e);
   $this -> db -> limit(1);

   $query = $this -> db -> get();

   if($query -> num_rows() == 1)
   {
     return $query->result();
   }
   else
   {
     return false;
   }
 }
}
?>
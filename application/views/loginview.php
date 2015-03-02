<!DOCTYPE html>
<html>
<head>
	<title>Login - TTT Media Corp Information System</title>
	<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=PT+Sans:regular,bold&amp;v1" />
	<link rel="stylesheet" href="<?php echo base_url();?>css/example.css" />
	<link rel="stylesheet" href="<?php echo base_url();?>source/dock.css" />
</head>
<body>
	<div class="logstat">
	 Anda belum Log In<br><br> <a href="<?php echo base_url(); ?>internal/login">Log In</a> &nbsp;&nbsp;&nbsp; <a href="<?php echo base_url(); ?>internal/user">Register</a>
	</div>
	<div class="wrapper">
		<div class="logo">
			<a href="<?php echo base_url();?>"><img src="<?php echo base_url();?>images/intro.jpg" height='200' width='200'></a>
		</div>
		<div class='head'>
			 <h1>TTT Media Corp Information System <sup>[beta]</sup></h1>
		</div>
		<div class="example"><br>
		<center>
			<span style="color:red;"><?php echo validation_errors(); ?></span>
			<table width="400px" border='0'>
   <?php echo form_open('verifylogin'); ?>
     <tr><td><label for="username"><span style="color:black;">Username:</span></label></td>
     <td><input type="text" size="20" id="username" name="username"/></td></tr>
     
     <tr><td><label for="password"><span style="color:black;">Password:</span></label></td>
     <td><input type="password" size="20" id="password" name="password"/></td></tr>
     
     <tr><td>&nbsp;</td><td><input type="submit" value="Login"/></td>
   </form>
	</table>
	</center>
		</div>
	<div class='spacing'>
	</div>
	</div>	

	<div class='spacing'>
	</div>
	<div >	
		<div class='footer'>
			TTT Media Corp Information System by Henry Jahja - Concept by <a href="http://tiw.web.id">Tri Ismardiko Widyawan</a><br>CSS Dock by <a href="http://michaelhue.com">michaelhue</a> - Icons by <a href="http://iconsutra.com">Iconsutra</a> - Background by <a href="http://bartelme.at">Wolfgang Bartelme</a>
		</div>
	</div>
</body>
</html>
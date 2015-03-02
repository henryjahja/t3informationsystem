<!DOCTYPE html>
<!-- credit to http://michaelhue.com/cssdock/ -->
<html>
<head>
	<title><?php if(isset($title)){echo $title;} ?> TTT Media Corp Information System</title>
	<?php 
foreach($css_files as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($js_files as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
	<link rel="stylesheet" href="<?php echo base_url();?>css/example.css" />
	<link rel="stylesheet" href="<?php echo base_url();?>source/dock.css" />
	<!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<!--[if lt IE 8]>
	<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js"></script>
	<![endif]-->
</head>
<body>
	<div class="logstat">
	<?php
		if($this->session->userdata('logged_in'))
		{	$session_data = $this->session->userdata('logged_in');
			?>Halo, <?php echo $session_data['name'];?> [<?php echo $session_data['rank'];?>] <br><br><a href="<?php echo base_url(); ?>internal/logout">Log Out</a>
	<?php } else {?> Anda belum Log In<br><br> <a href="<?php echo base_url(); ?>internal/login">Log In</a> &nbsp;&nbsp;&nbsp; <a href="<?php echo base_url(); ?>internal/user">Register</a><?php } ?>
	</div>
	<div class="wrapper">
		<div class="logo">
			<a href="<?php echo base_url();?>"><img src="<?php echo base_url();?>images/intro.jpg" height='200' width='200'></a>
		</div>
		<div class='head'>
			 <h1>TTT Media Corp Information System <sup>[beta]</sup></h1>
		</div>
		<div class="example" >
			<?php echo $output; ?>
	
	
		</div>
		
	<div class='spacing'>
	</div>
	</div>	
		<!-- Begin: CSS Dock Code -->
			<center>
			<div class="dock">
				<ul>
					<li id="review">
						<a href="<?php echo base_url();?>internal/review">
							<em><span>Review Product</span></em>
							<img src="<?php echo base_url();?>images/icon-mail.png" alt="Review" />
						</a>
					</li>
					<li id="ical">
						<a href="<?php echo base_url();?>internal/barang">
							<em><span>Inventory</span></em>
							<img src="<?php echo base_url();?>images/icon-db.png" alt="Inventory" />
						</a>
					</li>
					<li id="ical">
						<a href="<?php echo base_url();?>internal/foto">
							<em><span>Foto</span></em>
							<img src="<?php echo base_url();?>images/icon-iphoto.png" alt="Foto" />
						</a>
					</li>
					<li id="addressbook">
						<a href="<?php echo base_url();?>internal/user">
							<em><span>User</span></em>
							<img src="<?php echo base_url();?>images/icon-safe.png" alt="User" />
						</a>
					</li>
					<li id="addressbook">
						<a href="<?php echo base_url();?>internal/kategori">
							<em><span>Category</span></em>
							<img src="<?php echo base_url();?>images/icon-cat.png" alt="Category" />
						</a>
					</li>
					<li id="addressbook">
						<a href="<?php echo base_url();?>internal/editor">
							<em><span>Editor Data</span></em>
							<img src="<?php echo base_url();?>images/icon-addressbook.png" alt="Editor Data" />
						</a>
					</li>
				</ul>
			</div></center>
			<!-- End: CSS Dock Code -->
	
	<div class='spacing'>
	</div>
	<div >	
		<div class='footer'>
			TTT Media Corp Information System by Henry Jahja - Concept by <a href="http://tiw.web.id">Tri Ismardiko Widyawan</a><br>CSS Dock by <a href="http://michaelhue.com">michaelhue</a> - Icons by <a href="http://iconsutra.com">Iconsutra</a> - Background by <a href="http://bartelme.at">Wolfgang Bartelme</a>
		</div>
	</div>
</body>
</html>
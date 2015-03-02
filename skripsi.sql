-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2013 at 10:35 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `skripsi`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE IF NOT EXISTS `barang` (
  `id_barang` smallint(5) NOT NULL AUTO_INCREMENT,
  `kodeBarang` varchar(25) NOT NULL,
  `namaBarang` varchar(200) NOT NULL,
  `id_kategori` smallint(5) NOT NULL,
  `brand` varchar(200) DEFAULT NULL,
  `perusahaan_penyerah` varchar(50) NOT NULL,
  `nama_penyerah` varchar(50) NOT NULL,
  `contact_person` varchar(25) NOT NULL,
  `id_editor` smallint(5) DEFAULT NULL,
  `tanggal_masuk` date DEFAULT NULL,
  `tanggal_pengembalian` date DEFAULT NULL,
  `status_review` varchar(25) NOT NULL DEFAULT 'belum direview',
  `comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_barang`),
  UNIQUE KEY `kodeBarang` (`kodeBarang`),
  UNIQUE KEY `id_barang` (`id_barang`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `kodeBarang`, `namaBarang`, `id_kategori`, `brand`, `perusahaan_penyerah`, `nama_penyerah`, `contact_person`, `id_editor`, `tanggal_masuk`, `tanggal_pengembalian`, `status_review`, `comment`) VALUES
(1, 'GT-9300', 'Galaxy S III', 1, 'Samsung', 'Samsung Electronics Indonesia', 'Alfred Siahaan', '081266820248', 11, '2013-03-06', '2013-03-13', 'belum direview', NULL),
(2, 'GT-7100', 'Samsung Galaxy Note II', 3, 'Samsung', 'Samsung Electronics Indonesia', 'Gladys Hutagalung', '087881315664', 6, '2013-03-01', '2013-03-08', 'Belum direview', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `editor`
--

CREATE TABLE IF NOT EXISTS `editor` (
  `id_editor` smallint(5) NOT NULL AUTO_INCREMENT,
  `nama_Editor` varchar(250) NOT NULL,
  `nomor_HP` varchar(50) NOT NULL,
  `nomor_HP_2` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id_editor`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `editor`
--

INSERT INTO `editor` (`id_editor`, `nama_Editor`, `nomor_HP`, `nomor_HP_2`, `email`) VALUES
(1, 'Belum Ditentukan', '0', NULL, '0'),
(2, 'Henry Jahja', '082125092141', '085213339009', 'henryjahja@gmail.com'),
(3, 'Admin', '0', '0', 'admin'),
(4, 'Tri Ismardiko', '0813512576678', NULL, 'cp@tiw.web.id'),
(12, 'Yabes Elia', '0', NULL, '0'),
(6, 'Gino Febrisa', '0', NULL, '0'),
(7, 'Yoga Wisesa', '0', NULL, '0'),
(8, 'Raditya Margi', '0', NULL, '0'),
(9, 'Dhian Wulandari', '0', NULL, '0'),
(10, 'David Samuel', '0', NULL, '0'),
(11, 'Arvin Asa', '0', NULL, '0'),
(13, 'Glenn Kaonang', '0', NULL, '0');

-- --------------------------------------------------------

--
-- Table structure for table `foto`
--

CREATE TABLE IF NOT EXISTS `foto` (
  `id_foto` smallint(5) NOT NULL AUTO_INCREMENT,
  `url_foto` varchar(250) NOT NULL,
  `judul_foto` varchar(40) NOT NULL,
  PRIMARY KEY (`id_foto`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `foto`
--

INSERT INTO `foto` (`id_foto`, `url_foto`, `judul_foto`) VALUES
(1, '2bba6-Galaxy_Note_2.jpg', 'gnote2 1'),
(2, '90196-galaxy-note-2.jpg', 'gnote2 2'),
(3, '3c0ce-Samsung-Galaxy-Note-II-PR-5-380-75.jpg', 'gnote2 3'),
(4, 'cc61b-samsung-galaxy-note-ii.jpg', 'gnote2 4'),
(5, '93876-htc-one-x-1.jpg', 'onex 1'),
(6, 'd6474-htc-one-x1-380-75.jpg', 'onex 2'),
(7, '886b1-slide-1-white.png', 'onex 3'),
(8, '9d1c9-440x330-samsung-galaxy-s3-front.jpg', 'sgs3 1'),
(9, '31ff0-20120614T020754.jpg', 'sgs3 2'),
(10, '16200-GALAXY_SIII_mini_Product_Image(4).jpg_610x406.jpg', 'sgs3 3');

-- --------------------------------------------------------

--
-- Table structure for table `foto_barang`
--

CREATE TABLE IF NOT EXISTS `foto_barang` (
  `id_barang` smallint(5) NOT NULL,
  `id_foto` smallint(5) NOT NULL,
  `priority` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `foto_barang`
--

INSERT INTO `foto_barang` (`id_barang`, `id_foto`, `priority`) VALUES
(1, 8, 0),
(1, 9, 1),
(1, 10, 2),
(2, 1, 0),
(2, 2, 1),
(2, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE IF NOT EXISTS `kategori` (
  `id_kategori` int(8) NOT NULL AUTO_INCREMENT,
  `nama_kategori` varchar(100) NOT NULL,
  `comment` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id_kategori`),
  UNIQUE KEY `nama_kategori` (`nama_kategori`),
  FULLTEXT KEY `comment` (`comment`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id_kategori`, `nama_kategori`, `comment`) VALUES
(1, 'Handphone', NULL),
(2, 'Laptop', NULL),
(3, 'Phablet', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE IF NOT EXISTS `review` (
  `id_review` int(11) NOT NULL AUTO_INCREMENT,
  `id_editor` smallint(5) NOT NULL,
  `id_barang` smallint(5) NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `file_url` varchar(250) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id_review`),
  UNIQUE KEY `idBarang` (`id_barang`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id_review`, `id_editor`, `id_barang`, `status`, `file_url`) VALUES
(1, 10, 1, 'Selesai', '93e42-Samsung-Galaxy-S3.docx'),
(2, 9, 2, NULL, '19c24-32356_455626844490086_735209946_n.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id_user` smallint(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `rank` varchar(25) NOT NULL DEFAULT 'user',
  `id_editor` smallint(5) DEFAULT '1',
  `status` varchar(25) NOT NULL DEFAULT 'active',
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `username` (`username`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id_user`, `username`, `password`, `rank`, `id_editor`, `status`) VALUES
(1, 'admin', 'admin', 'admin', 3, 'active'),
(3, 'henry', 'henry', 'user', 1, 'active');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

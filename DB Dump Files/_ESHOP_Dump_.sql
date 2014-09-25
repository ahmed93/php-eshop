-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 25, 2014 at 03:47 PM
-- Server version: 5.5.38-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `eshop`
--
CREATE DATABASE IF NOT EXISTS `eshop` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `eshop`;

-- --------------------------------------------------------

--
-- Table structure for table `History`
--
-- Creation: Sep 25, 2014 at 12:19 PM
--

DROP TABLE IF EXISTS `History`;
CREATE TABLE IF NOT EXISTS `History` (
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`,`product_id`,`date`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- RELATIONS FOR TABLE `History`:
--   `user_id`
--       `User` -> `ID`
--   `product_id`
--       `Product` -> `ID`
--

--
-- Truncate table before insert `History`
--

TRUNCATE TABLE `History`;
--
-- Dumping data for table `History`
--

INSERT INTO `History` (`user_id`, `product_id`, `date`) VALUES
(2, 1, '2014-09-19 15:42:32'),
(1, 2, '2014-09-19 15:42:32'),
(1, 3, '2014-09-25 12:41:26'),
(1, 4, '2014-09-25 12:41:26'),
(2, 4, '2014-09-25 12:42:18'),
(3, 4, '2014-09-25 12:41:54'),
(2, 5, '2014-09-25 12:42:18'),
(1, 6, '2014-09-25 12:41:41'),
(3, 7, '2014-09-25 12:41:54'),
(1, 8, '2014-09-25 12:41:41');

-- --------------------------------------------------------

--
-- Table structure for table `Product`
--
-- Creation: Sep 25, 2014 at 12:19 PM
--

DROP TABLE IF EXISTS `Product`;
CREATE TABLE IF NOT EXISTS `Product` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `stock` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `picture` varchar(500) NOT NULL DEFAULT 'http://productfind.interiordesign.net/media/photos/37/37806-18469-cfakepathno-product-image.jpg',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Truncate table before insert `Product`
--

TRUNCATE TABLE `Product`;
--
-- Dumping data for table `Product`
--

INSERT INTO `Product` (`ID`, `name`, `description`, `stock`, `price`, `picture`) VALUES
(1, 'iphone6', 'it is the most expensive smartphone you will ever buy', 10, 12000, 'http://4.bp.blogspot.com/-YIgkZw5pee8/VA9aIpRwk3I/AAAAAAAAkW4/Ay9VbVEzfdY/s1600/Imagenes%2Biphone%2B6%2Bpng%2B2.png'),
(2, 'samsung_s5', 'it uses android which will make your life easier', 10, 5500, 'https://community.sprint.com/baw/servlet/JiveServlet/showImage/38-4980-50070/samsung-galaxy-s5-d.png'),
(3, 'chinese_phone', 'this is the cheapest phone we had in our store', 0, 400, 'http://blogs.technet.com/resized-image.ashx/__size/550x0/__key/communityserver-blogs-components-weblogfiles/00-00-00-69-43/5516.WindowsPhoneChina.png'),
(4, 'HTC', 'this is an average smartphone, you will love it', 1, 600, 'http://techbeasts.com/wp-content/uploads/2014/03/HTC2-STILL-01.jpg'),
(5, 'Citizen Watch', 'this is an elegant watch that charges through light', 10, 1500, 'http://www.shadestation.co.uk/media/thumbs/800x800/media/product_images/Citizen-Watches-AT4008-51Efw800fh800.jpg'),
(6, 'Chrome Book', 'The Chromebook is a new, faster computer. It starts in seconds, and offers thousands of apps', 15, 6000, 'https://www.google.com/chrome/assets/common/images/devices/samsung-chromebook/hero-single.png'),
(7, 'Beats Headphones', 'if you love music, you will definitely appreciate it ', 100, 2200, 'http://www.mypay-computers-credit.com/wp-content/uploads/beats-studio-headphones.jpeg'),
(8, 'Fifa 15 ps4 game', 'play with your friends online and experience the winning and losing with your best team', 100, 600, 'http://img1.wikia.nocookie.net/__cb20140715142835/vgost/images/b/b3/FIFA15.png');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--
-- Creation: Sep 25, 2014 at 12:19 PM
--

DROP TABLE IF EXISTS `User`;
CREATE TABLE IF NOT EXISTS `User` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `avatar` varchar(500) NOT NULL DEFAULT 'http://productfind.interiordesign.net/media/photos/37/37806-18469-cfakepathno-product-image.jpg',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `email` (`email`),
  KEY `ID` (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Truncate table before insert `User`
--

TRUNCATE TABLE `User`;
--
-- Dumping data for table `User`
--

INSERT INTO `User` (`ID`, `first_name`, `last_name`, `email`, `password`, `avatar`) VALUES
(1, 'ahmed', 'basiony', 'a_b@email.com', '123456', 'http://www.ghanainstituteofplanners.com/themes/gip/img/default-profile.png'),
(2, 'mohamed', 'saeed', 'm_s@email.com', '123456', 'http://www.kdu.ac.lk/faculty-of-management-social-sciences-and-finance/images/default_profile_large.jpg'),
(3, 'ahmed', 'magdi', 'a_m@email.com', '123456', 'http://www.fm-base.co.uk/forum/attachments/football-manager-2014-manager-stories/618828d1403554937-ups-downs-building-one-default_original_profile_pic.png');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `History`
--
ALTER TABLE `History`
  ADD CONSTRAINT `History_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `User` (`ID`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `History_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `Product` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

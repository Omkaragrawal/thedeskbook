-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2015 at 04:49 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `thedeskbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `accountstatus`
--

CREATE TABLE IF NOT EXISTS `accountstatus` (
  `idAccountStatus` int(11) NOT NULL AUTO_INCREMENT,
  `AccountStatus` varchar(45) NOT NULL,
  `AccountStatusDesc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`AccountStatus`),
  UNIQUE KEY `idAccountStatus_UNIQUE` (`idAccountStatus`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `accountstatus`
--

INSERT INTO `accountstatus` (`idAccountStatus`, `AccountStatus`, `AccountStatusDesc`) VALUES
(1, 'ACTIVE', 'Status when user account is active'),
(3, 'DEACTIVATED', 'Status when user chose to delete his/her acco'),
(2, 'SUSPENDED', 'Status when user account is suspended');

-- --------------------------------------------------------

--
-- Table structure for table `sharetype`
--

CREATE TABLE IF NOT EXISTS `sharetype` (
  `idShareType` int(11) NOT NULL,
  `ShareType` varchar(10) NOT NULL,
  `ShareTypeDesc` varchar(45) NOT NULL,
  PRIMARY KEY (`idShareType`),
  KEY `ShareType` (`ShareType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sharetype`
--

INSERT INTO `sharetype` (`idShareType`, `ShareType`, `ShareTypeDesc`) VALUES
(1, 'PUBLIC', 'Visible to everyone'),
(2, 'PRIVATE', 'Visible to only followers');

-- --------------------------------------------------------

--
-- Table structure for table `userdeskuploads`
--

CREATE TABLE IF NOT EXISTS `userdeskuploads` (
  `idUserDeskUploads` int(11) NOT NULL AUTO_INCREMENT,
  `UserDeskUploadsUserId` int(11) NOT NULL,
  `UserDeskUploadsPath` text NOT NULL,
  `UserDeskUploadsSize` varchar(45) NOT NULL,
  `UserDeskUploadsTime` datetime NOT NULL,
  `UserDeskUploadsFileName` text NOT NULL,
  `UserDeskUploadsTitle` varchar(45) NOT NULL DEFAULT 'MyDesk',
  `UserDeskUploadsType` varchar(10) NOT NULL,
  PRIMARY KEY (`idUserDeskUploads`),
  KEY `UserDeskUserId` (`UserDeskUploadsUserId`),
  KEY `UserDeskType` (`UserDeskUploadsType`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `userdeskuploads`
--

INSERT INTO `userdeskuploads` (`idUserDeskUploads`, `UserDeskUploadsUserId`, `UserDeskUploadsPath`, `UserDeskUploadsSize`, `UserDeskUploadsTime`, `UserDeskUploadsFileName`, `UserDeskUploadsTitle`, `UserDeskUploadsType`) VALUES
(11, 6, 'public/banner1437122855578.png', '30595', '2015-07-17 14:17:35', 'banner1437122855578.png', 'MyDesk', 'PUBLIC'),
(12, 6, 'public/banner21437123068920.png', '22408', '2015-07-17 14:21:09', 'banner21437123068920.png', 'MyDesk', 'PUBLIC'),
(13, 6, 'public/590291121437123152857.jpg', '101104', '2015-07-17 14:22:32', '590291121437123152857.jpg', 'MyDesk', 'PUBLIC'),
(14, 6, 'public/banner1437123319534.png', '30595', '2015-07-17 14:25:19', 'banner1437123319534.png', 'MyDesk', 'PUBLIC'),
(15, 6, 'public/banner21437123442951.png', '22408', '2015-07-17 14:27:23', 'banner21437123442951.png', 'MyDesk', 'PUBLIC'),
(16, 6, 'public/590291121437123454591.jpg', '101104', '2015-07-17 14:27:34', '590291121437123454591.jpg', 'MyDesk', 'PUBLIC'),
(17, 6, 'public/banner21437123641507.png', '22408', '2015-07-17 14:30:41', 'banner21437123641507.png', 'MyDesk', 'PUBLIC'),
(18, 7, 'public/banner1437124402306.png', '30595', '2015-07-17 14:43:22', 'banner1437124402306.png', 'MyDesk', 'PUBLIC'),
(19, 7, 'public/590291121437124422919.jpg', '101104', '2015-07-17 14:43:42', '590291121437124422919.jpg', 'MyDesk', 'PUBLIC'),
(20, 7, 'public/banner21437125809764.png', '22408', '2015-07-17 15:06:49', 'banner21437125809764.png', 'MyDesk', 'PUBLIC'),
(21, 7, 'public/590291121437133286847.jpg', '101104', '2015-07-17 17:11:26', '590291121437133286847.jpg', 'Callbacks :D', 'PUBLIC'),
(22, 8, 'public\\icccccc1440327809036.jpg', '353497', '0000-00-00 00:00:00', 'icccccc1440327809036.jpg', 'MyDesk', 'PUBLIC'),
(23, 8, 'public\\icccccc1440327845705.jpg', '353497', '0000-00-00 00:00:00', 'icccccc1440327845705.jpg', 'THIS IS SPARTAAAA!!!!', 'PUBLIC');

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE IF NOT EXISTS `userlogin` (
  `idUserLogin` int(11) NOT NULL AUTO_INCREMENT,
  `UserLoginEmail` varchar(45) NOT NULL,
  `UserLoginPassword` varchar(45) NOT NULL,
  PRIMARY KEY (`idUserLogin`),
  UNIQUE KEY `UserLoginEmail_UNIQUE` (`UserLoginEmail`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`idUserLogin`, `UserLoginEmail`, `UserLoginPassword`) VALUES
(6, 'rwtc66@gmail.com', 'shahid'),
(7, 'shahid@codeforgeek.com', 'shahid'),
(8, 'rahilsk47@gmail.com', 'rahil'),
(9, 'rahil@gmail.com', 'rahil123'),
(10, '', ''),
(11, 'ra@asd.com', 'asdsad'),
(12, 'rahil.shaikh@accoinlabs.com', 'y'),
(14, 'rahil.shaikh1@accoinlabs.com', 'y'),
(15, 'rahil.sk45@gmail.co', '12345');

-- --------------------------------------------------------

--
-- Table structure for table `userprofile`
--

CREATE TABLE IF NOT EXISTS `userprofile` (
  `idUserProfile` int(11) NOT NULL,
  `UserProfileName` varchar(45) NOT NULL,
  `UserProfileJoinDate` datetime NOT NULL,
  `UserProfilePic` varchar(45) DEFAULT NULL,
  `UserProfileAccountStatus` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idUserProfile`),
  KEY `UserProfileAccountStatusIndex` (`UserProfileAccountStatus`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userprofile`
--

INSERT INTO `userprofile` (`idUserProfile`, `UserProfileName`, `UserProfileJoinDate`, `UserProfilePic`, `UserProfileAccountStatus`) VALUES
(6, 'Shahid', '2015-07-12 01:00:49', NULL, 'ACTIVE'),
(7, 'Shahid', '2015-07-12 01:04:22', NULL, 'ACTIVE'),
(8, 'Rahil', '2015-07-12 01:25:27', NULL, 'ACTIVE'),
(9, 'Rahil', '0000-00-00 00:00:00', NULL, 'ACTIVE'),
(10, '', '0000-00-00 00:00:00', NULL, 'ACTIVE'),
(11, 'rahil', '0000-00-00 00:00:00', NULL, 'ACTIVE'),
(15, 'Rahil Shaikh', '0000-00-00 00:00:00', NULL, 'ACTIVE');

-- --------------------------------------------------------

--
-- Table structure for table `userrelation`
--

CREATE TABLE IF NOT EXISTS `userrelation` (
  `idUserRelation` int(11) NOT NULL AUTO_INCREMENT,
  `UserRelationFollowingID` int(11) NOT NULL COMMENT 'This column will hold user id who is currently login\n\ne.g 1 follows 2 So 1 will be here.\n',
  `UserRelationFollowerID` int(11) NOT NULL,
  `UserRelationFollowingDate` datetime NOT NULL,
  PRIMARY KEY (`idUserRelation`),
  KEY `UserRelationFollowingIndex` (`UserRelationFollowingID`),
  KEY `UserRelationFollowerIndex` (`UserRelationFollowerID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `userdeskuploads`
--
ALTER TABLE `userdeskuploads`
  ADD CONSTRAINT `UserDeskUploadsFK` FOREIGN KEY (`UserDeskUploadsUserId`) REFERENCES `userprofile` (`idUserProfile`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `UserDeskUploadsTypeFK` FOREIGN KEY (`UserDeskUploadsType`) REFERENCES `sharetype` (`ShareType`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `userprofile`
--
ALTER TABLE `userprofile`
  ADD CONSTRAINT `UserProfileFK` FOREIGN KEY (`idUserProfile`) REFERENCES `userlogin` (`idUserLogin`),
  ADD CONSTRAINT `UserProfileStatusFK` FOREIGN KEY (`UserProfileAccountStatus`) REFERENCES `accountstatus` (`AccountStatus`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `userrelation`
--
ALTER TABLE `userrelation`
  ADD CONSTRAINT `UserRelationFollowerFK` FOREIGN KEY (`UserRelationFollowerID`) REFERENCES `userprofile` (`idUserProfile`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `UserRelationFollowingFK` FOREIGN KEY (`UserRelationFollowingID`) REFERENCES `userprofile` (`idUserProfile`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

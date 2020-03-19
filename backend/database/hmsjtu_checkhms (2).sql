-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 25, 2020 at 04:04 PM
-- Server version: 5.7.28
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hmsjtu_checkhms`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `income` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expenses` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` int(10) UNSIGNED NOT NULL,
  `actname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `id` int(100) NOT NULL,
  `customer_id` int(100) NOT NULL,
  `department_id` int(100) NOT NULL,
  `doctor_id` int(100) DEFAULT NULL,
  `branch_id` int(200) DEFAULT NULL,
  `voucher_id` int(200) NOT NULL,
  `treatment` varchar(100) NOT NULL DEFAULT 'close',
  `lab` varchar(100) NOT NULL DEFAULT 'close',
  `prescription` varchar(100) DEFAULT 'close',
  `invoice` varchar(100) NOT NULL DEFAULT 'close',
  `voucher` varchar(100) NOT NULL DEFAULT 'close',
  `status` varchar(50) NOT NULL DEFAULT 'open',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `date` varchar(100) DEFAULT NULL,
  `time` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `appointments`
--

INSERT INTO `appointments` (`id`, `customer_id`, `department_id`, `doctor_id`, `branch_id`, `voucher_id`, `treatment`, `lab`, `prescription`, `invoice`, `voucher`, `status`, `updated_at`, `created_at`, `date`, `time`) VALUES
(48, 5, 1, NULL, 1, 1009, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-17 14:43:13', '2020-02-02 11:54:42', 'Feb 2, 2020', '12:54:42 PM'),
(49, 1, 1, NULL, 1, 1010, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-06 12:36:08', '2020-02-02 11:56:01', 'Feb 2, 2020', '12:56:01 PM'),
(50, 2, 1, NULL, 1, 1011, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-06 12:36:08', '2020-02-02 21:58:30', 'Feb 2, 2020', '10:58:30 PM'),
(51, 2, 1, NULL, 1, 1012, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-06 12:36:08', '2020-02-03 14:29:32', 'Feb 3, 2020', '03:29:32 PM'),
(52, 1, 1, NULL, 1, 1013, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-06 12:36:08', '2020-02-03 15:57:22', 'Feb 3, 2020', '04:57:22 PM'),
(53, 5, 1, NULL, 1, 1014, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-17 14:43:13', '2020-02-03 15:59:19', 'Feb 3, 2020', '04:59:19 PM'),
(54, 2, 1, NULL, 1, 1015, 'success', 'close', 'success', 'paid', 'success', 'close', '2020-02-06 12:36:08', '2020-02-05 20:00:37', 'Feb 5, 2020', '09:00:37 PM'),
(55, 3, 1, NULL, 1, 1016, 'open', 'close', 'open', 'open', 'open', 'active', '2020-02-08 11:27:31', '2020-02-08 11:27:31', 'Feb 8, 2020', '05:27:31 PM');

-- --------------------------------------------------------

--
-- Table structure for table `blood_details`
--

CREATE TABLE `blood_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `blood_pressure` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `heat_beat` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `haemoglobin` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sugar_level` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `weight` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `br_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales_rep` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_quantity` int(200) NOT NULL DEFAULT '0',
  `total_cost` int(200) NOT NULL DEFAULT '0',
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branches`
--

INSERT INTO `branches` (`id`, `name`, `br_name`, `address`, `contact_number`, `sales_rep`, `total_quantity`, `total_cost`, `status`, `created_at`, `updated_at`, `staff_id`) VALUES
(1, 'Main', 'branch_main', 'Ogbomoso', '060070070700', 'kefi', 0, 0, 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00', '7'),
(4, 'Buth', 'branch_buth', 'Lala\'s Compound, Randa Area', '07007060050', 'Rep 1', 0, 0, 'active', '2019-11-17 11:51:44', '2019-11-17 11:51:44', NULL),
(5, 'Buth 2', 'branch_buth2', 'Ogbomoso', '77', 'Rep 2', 0, 0, 'active', '2019-11-17 12:14:35', '2019-11-17 12:14:35', NULL),
(6, 'Buth 3', 'branch_buth3', 'Ogbomoso', '1010', 'Rep 3', 0, 0, 'active', '2019-11-17 12:26:16', '2019-11-17 12:26:16', NULL),
(7, 'Buth 4', 'branch_buth4', 'Fourth Address Buth Street', '090112233448676', 'Rep Four', 0, 0, 'active', '2019-12-05 15:05:48', '2019-12-05 15:05:48', NULL),
(8, 'Buth 5', 'branch_buth5', 'Lala\'s Compound, Randa', '76419617167', 'Rep 5', 0, 0, 'suspend', '2020-01-03 01:34:47', '2020-01-03 01:34:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth`
--

CREATE TABLE `branch_buth` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth`
--

INSERT INTO `branch_buth` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '50', '50', '0', '20', '30', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, 'variance', NULL, '1', '0'),
(2, '0', '0', '10', '50', '40', '0', '8', '32', '0', '10', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'variance', NULL, '2', '0'),
(3, '0', '0', '0', '170', '170', '0', '0', '170', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, 'added', NULL, '3', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '50', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, 'added', NULL, '7', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0'),
(9, '50', '0', '0', '0', '50', '0', '20', '30', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '1', '0'),
(10, '40', '0', '0', '0', '40', '0', '8', '32', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '2', '0'),
(11, '170', '0', '0', '0', '170', '0', '0', '170', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '3', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '4', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '5', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '6', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '7', '0'),
(16, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth2`
--

CREATE TABLE `branch_buth2` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth2`
--

INSERT INTO `branch_buth2` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, NULL, NULL, '1', '0'),
(2, '0', '0', '0', '20', '20', '0', '0', '20', '0', '0', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'added', NULL, '2', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, '0', '0', '0', '20', '10', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, 'added', NULL, '4', '0'),
(5, '0', '0', '0', '10', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, '0', '0', '0', '100', '100', '0', '0', '100', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, 'added', NULL, '8', '0'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '1', '0'),
(10, '20', '0', '0', '0', '20', '0', '0', '20', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '2', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '3', '0'),
(12, '10', '0', '0', '0', '10', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '4', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '5', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '6', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '7', '0'),
(16, '100', '0', '0', '0', '100', '0', '0', '100', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth3`
--

CREATE TABLE `branch_buth3` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` int(190) NOT NULL DEFAULT '0',
  `sales` int(190) NOT NULL DEFAULT '0',
  `transfer` int(190) NOT NULL DEFAULT '0',
  `receive` int(190) NOT NULL DEFAULT '0',
  `total_remain` int(190) NOT NULL DEFAULT '0',
  `close_balance` int(190) NOT NULL DEFAULT '0',
  `variance` int(190) NOT NULL DEFAULT '0',
  `physical_balance` int(190) NOT NULL DEFAULT '0',
  `amount` int(190) NOT NULL DEFAULT '0',
  `balance` int(190) NOT NULL DEFAULT '0',
  `c_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth3`
--

INSERT INTO `branch_buth3` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, 0, 0, 0, 10, 10, 0, 0, 10, 0, 0, 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, 'added', NULL, '1', '0'),
(2, 0, 0, 0, 40, 20, 0, 0, 0, 0, 0, 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'added', NULL, '2', '0'),
(3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0'),
(9, 10, 0, 0, 0, 10, 0, 0, 10, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '1', '0'),
(10, 20, 0, 0, 0, 20, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '2', '0'),
(11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '3', '0'),
(12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '4', '0'),
(13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '5', '0'),
(14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '6', '0'),
(15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '7', '0'),
(16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth4`
--

CREATE TABLE `branch_buth4` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth4`
--

INSERT INTO `branch_buth4` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, NULL, NULL, '1', '0'),
(2, '0', '0', '0', '10', '10', '0', '0', '10', '0', '0', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, 'added', NULL, '2', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '1', '0'),
(10, '10', '0', '0', '0', '10', '0', '0', '10', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '2', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '3', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '4', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '5', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '6', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '7', '0'),
(16, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_buth5`
--

CREATE TABLE `branch_buth5` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `c_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `add_status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `update_status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_buth5`
--

INSERT INTO `branch_buth5` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `update_status`, `item_detail_id`, `staff_id`) VALUES
(1, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:47:50 AM', NULL, NULL, NULL, NULL, '1', '0'),
(2, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '07:48:34 AM', NULL, NULL, NULL, NULL, '2', '0'),
(3, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 3, 2020', '01:23:34 PM', NULL, NULL, NULL, NULL, '3', '0'),
(4, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 7, 2020', '05:07:26 PM', NULL, NULL, NULL, NULL, '4', '0'),
(5, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '12:16:42 PM', NULL, NULL, NULL, NULL, '5', '0'),
(6, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 8, 2020', '04:32:59 PM', NULL, NULL, NULL, NULL, '6', '0'),
(7, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '12:08:46 AM', NULL, NULL, NULL, NULL, '7', '0'),
(8, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Jan 9, 2020', '08:46:36 PM', NULL, NULL, NULL, NULL, '8', '0'),
(9, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '1', '0'),
(10, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '2', '0'),
(11, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '3', '0'),
(12, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '4', '0'),
(13, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '5', '0'),
(14, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '6', '0'),
(15, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '7', '0'),
(16, '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'Feb 6, 2020', '12:00:00 AM', NULL, NULL, NULL, NULL, '8', '0');

-- --------------------------------------------------------

--
-- Table structure for table `branch_main`
--

CREATE TABLE `branch_main` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` int(190) DEFAULT '0',
  `sales` int(190) DEFAULT '0',
  `transfer` int(190) DEFAULT '0',
  `receive` int(190) DEFAULT '0',
  `total_remain` int(190) DEFAULT '0',
  `close_balance` int(190) DEFAULT '0',
  `variance` int(190) DEFAULT '0',
  `physical_balance` int(190) DEFAULT '0',
  `amount` int(190) DEFAULT '0',
  `balance` int(190) DEFAULT '0',
  `c_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `c_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `add_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `transfer_status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` int(190) NOT NULL,
  `staff_id` int(190) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `branch_main`
--

INSERT INTO `branch_main` (`id`, `open_stock`, `sales`, `transfer`, `receive`, `total_remain`, `close_balance`, `variance`, `physical_balance`, `amount`, `balance`, `c_date`, `c_time`, `created_at`, `updated_at`, `add_status`, `transfer_status`, `item_detail_id`, `staff_id`) VALUES
(1, 0, 53, 60, 510, 397, 0, 0, 397, 0, 113, 'Jan 3, 2020', '07:47:50 AM', '2020-01-03 06:47:50', '2020-01-03 06:47:50', 'transfer', NULL, 1, 0),
(2, 0, 13, 110, 1500, 1377, 0, 0, 1377, 0, 123, 'Jan 3, 2020', '07:48:34 AM', '2020-01-03 06:48:34', '2020-01-03 06:48:34', 'transfer', 'saved', 2, 0),
(3, 0, 0, 170, 550, 380, 0, 10, 370, 0, 170, 'Jan 3, 2020', '01:23:34 PM', '2020-01-03 12:23:34', '2020-01-03 12:23:34', 'variance', 'transferd', 3, 0),
(4, 0, 20, 20, 100, 60, 0, 0, 60, 0, 40, 'Jan 7, 2020', '05:07:26 PM', '2020-01-07 16:07:26', '2020-01-07 16:07:26', 'transfer', NULL, 4, 0),
(5, 0, 20, 10, 204, 164, 0, 0, 164, 0, 40, 'Jan 8, 2020', '12:16:42 PM', '2020-01-08 11:16:42', '2020-01-08 11:16:42', 'added', 'saved', 5, 0),
(6, 0, 125, 0, 3150, 3025, 0, 0, 3025, 0, 125, 'Jan 8, 2020', '04:32:59 PM', '2020-01-08 15:32:59', '2020-01-08 15:32:59', 'added', NULL, 6, 0),
(7, 0, 29, 50, 250, 171, 0, 0, 171, 0, 79, 'Jan 9, 2020', '12:08:46 AM', '2020-01-08 23:08:46', '2020-01-08 23:08:46', 'added', NULL, 7, 0),
(8, 0, 0, 100, 200, 100, 0, 0, 100, 0, 100, 'Jan 9, 2020', '08:46:36 PM', '2020-01-09 19:46:36', '2020-01-09 19:46:36', 'transfer', NULL, 8, 0),
(9, 397, 0, 0, 0, 397, 0, 0, 397, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 1, 0),
(10, 1377, 0, 0, 0, 1377, 0, 0, 1377, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 2, 0),
(11, 380, 0, 0, 0, 380, 0, 10, 370, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 3, 0),
(12, 60, 0, 0, 0, 60, 0, 0, 60, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 4, 0),
(13, 164, 0, 0, 0, 164, 0, 0, 164, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 5, 0),
(14, 3025, 0, 0, 0, 3025, 0, 0, 3025, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 6, 0),
(15, 171, 0, 0, 0, 171, 0, 0, 171, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 7, 0),
(16, 100, 0, 0, 0, 100, 0, 0, 100, 0, 0, 'Feb 6, 2020', '12:00:00 AM', '2020-02-06 09:47:41', '2020-02-06 09:47:41', NULL, NULL, 8, 0);

-- --------------------------------------------------------

--
-- Table structure for table `branch_names`
--

CREATE TABLE `branch_names` (
  `id` int(10) UNSIGNED NOT NULL,
  `open_stock` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sales` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transfer` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `receive` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_remain` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `close_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `variance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `physical_balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `catname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `activity_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment_tbs`
--

CREATE TABLE `comment_tbs` (
  `id` int(10) UNSIGNED NOT NULL,
  `comment` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contents`
--

CREATE TABLE `contents` (
  `id` int(10) UNSIGNED NOT NULL,
  `header` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `c_image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `list` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `othername` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '000000',
  `patient_image` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `mobile_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `d_o_b` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` longtext COLLATE utf8mb4_unicode_ci,
  `allergy` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blood_group` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `genotype` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `n_h_i_s` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `othername`, `gender`, `email`, `password`, `patient_image`, `mobile_number`, `address`, `city`, `state`, `country`, `d_o_b`, `about`, `allergy`, `blood_group`, `genotype`, `n_h_i_s`, `card_number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Ayo Lala', 'Name', 'Female', 'ayoadelala@yahoo.com', '000000', 'male.png', '764196171', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '10/28/2019', 'ojik', 'Allergy 1', '0+', 'AA', '7637kl', '4737474t', 'active', '2019-11-17 15:16:08', '2019-11-17 15:16:08'),
(2, 'Kune', 'Afford', 'Male', 'kunle@yahoo.com', '000000', 'male.png', '07064196171', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '11/05/2019', 'ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod                     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo                     consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse                     cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'ewedu', 'A-', 'AS', '48848', 'ae4444', 'active', '2019-11-18 00:20:15', '2019-11-18 00:20:15'),
(3, 'Alfred', 'Depay', 'Male', 'alfred@mail.com', '000000', 'male.png', '353554', 'dgtrt', 'sfwrf', 'frwrw', 'vdgdg', '11/05/2019', 'zczcczczcz', 'aadsewr', '0', 'AA', '24244dw', 'sfsf42424', 'active', '2019-11-18 10:18:03', '2019-11-18 10:18:03'),
(4, 'Tobi', 'Igeh', 'Male', 'ige@yahoo.com', '000000', 'male.png', '12345', 'Lala\'s Compound, Randa Area', 'Ogbomoso', 'Oyo', 'Nigeria', '10/28/1995', 'ojikororoooe eoeoeoe ekeokpepodept_id kkkldkkdk', 'oil', NULL, NULL, '7637kk', '83885', 'active', '2020-01-05 03:01:50', '2020-01-05 03:01:50'),
(5, 'Dele', 'Oguntoye', 'Male', 'dele1234@gmail.com', '000000', 'male.png', '0600606006069', 'Adisamm Stret', 'oyo', 'Oyo', 'Nigeria', '2020-01-16', 'me', 'Water', NULL, NULL, '494949', '050553', 'active', '2020-01-30 23:08:32', '2020-01-30 23:08:32');

-- --------------------------------------------------------

--
-- Table structure for table `daily_supply`
--

CREATE TABLE `daily_supply` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `value` varchar(220) NOT NULL,
  `type_id` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'active',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `user_id` varchar(220) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `daily_supply`
--

INSERT INTO `daily_supply` (`id`, `name`, `value`, `type_id`, `status`, `created_at`, `updated_at`, `user_id`) VALUES
(1, 'once daily', '1', '4', 'active', '2020-01-01 00:00:00', '2020-01-23 00:00:00', '6'),
(3, 'twice Daily', '2', '6', 'active', '2020-01-25 11:41:07', '2020-01-25 11:41:07', '3'),
(4, 'three in a day', '3', '6', 'active', '2020-02-03 16:16:51', '2020-02-03 16:16:51', '3');

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'hosp.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `position_id` int(190) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `description`, `image`, `created_at`, `updated_at`, `position_id`) VALUES
(1, 'Pharmacy', 'Pharmacy', 'pharm.jpg', '2019-11-05 23:00:00', '2019-11-05 23:00:00', 1),
(2, 'Surgeon', 'sogeon', 'doc.jpg', '2019-11-05 23:00:00', '2019-11-05 23:00:00', 3),
(10, 'Admin', 'admin', 'admin.jpg', '2019-11-10 20:27:46', '2019-11-10 20:27:46', 4),
(11, 'Cashier', 'payment', 'cash.jpg', '2019-11-10 20:28:22', '2019-11-10 20:28:22', 2),
(12, 'cadio', 'this is cadio', 'hosp.jpg', '2020-01-30 18:21:50', '2020-01-30 18:21:50', 1);

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctor_prescriptions`
--

CREATE TABLE `doctor_prescriptions` (
  `id` int(10) UNSIGNED NOT NULL,
  `item_id` int(200) NOT NULL,
  `instock` int(200) NOT NULL,
  `instruction` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `day_supply` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `days` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dispense` int(200) NOT NULL,
  `original_qty` int(200) NOT NULL,
  `quantity` int(200) NOT NULL,
  `refill` int(100) NOT NULL,
  `remain` int(200) NOT NULL,
  `refill_range` int(200) NOT NULL,
  `amount` int(200) NOT NULL,
  `amount_paid` int(200) NOT NULL,
  `caution` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `p_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `p_time` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `doctor_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pharmacist_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `appointment_id` int(200) DEFAULT NULL,
  `customer_id` int(200) DEFAULT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `refill_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `voucher_id` int(250) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `doctor_prescriptions`
--

INSERT INTO `doctor_prescriptions` (`id`, `item_id`, `instock`, `instruction`, `day_supply`, `days`, `dispense`, `original_qty`, `quantity`, `refill`, `remain`, `refill_range`, `amount`, `amount_paid`, `caution`, `created_at`, `updated_at`, `p_date`, `p_time`, `doctor_id`, `pharmacist_id`, `branch_id`, `appointment_id`, `customer_id`, `status`, `refill_status`, `voucher_id`) VALUES
(35, 6, 3035, '2.5', '2', '7', 1, 10, 10, 0, 0, 10, 200, 2000, 'm,mmm', '2020-02-05 20:05:17', '2020-02-05 20:05:17', 'Feb 5, 2020', '09:05:16 PM', 'Dr durodola', '3', '1', 54, 2, 'paid', 'non-refillable', 1015),
(34, 4, 80, '1', '2', '5', 1, 10, 10, 0, 0, 10, 200, 2000, 'm,mmm', '2020-02-05 20:02:09', '2020-02-05 20:02:09', 'Feb 5, 2020', '09:02:09 PM', 'Dr durodola', '3', '1', 54, 2, 'paid', 'non-refillable', 1015),
(33, 4, 80, '1', '2', '5', 1, 10, 10, 0, 0, 10, 200, 2000, 'm,mmm', '2020-02-05 20:02:01', '2020-02-05 20:02:01', 'Feb 5, 2020', '09:02:01 PM', 'Dr durodola', '3', '1', 54, 2, 'paid', 'non-refillable', 1015),
(32, 6, 3055, '1.5', '1', '10', 1, 10, 10, 0, 0, 10, 200, 2000, 'this is caution 1', '2020-02-04 10:35:36', '2020-02-04 10:35:36', 'Feb 4, 2020', '11:35:36 AM', 'Dr durodola', '3', '1', 52, 1, 'paid', 'non-refillable', 1013),
(31, 6, 3055, '1.5', '1', '10', 1, 10, 10, 0, 0, 10, 200, 2000, 'this is caution 2', '2020-02-04 10:35:25', '2020-02-04 10:35:25', 'Feb 4, 2020', '11:35:25 AM', 'Dr durodola', '3', '1', 52, 1, 'paid', 'non-refillable', 1013),
(30, 2, 1499, '1', '1', '5', 1, 10, 10, 0, 0, 10, 250, 2500, 'take with food', '2020-02-03 16:17:50', '2020-02-03 16:17:50', 'Feb 3, 2020', '05:17:50 PM', 'Dr Ariloba', '3', '1', 51, 2, 'paid', 'non-refillable', 1012),
(29, 6, 3080, '2.5', '2', '5', 1, 25, 25, 0, 0, 25, 200, 5000, 'take with food', '2020-02-03 16:12:26', '2020-02-03 16:12:26', 'Feb 3, 2020', '05:12:26 PM', 'Dr Ariloba', '3', '1', 51, 2, 'paid', 'non-refillable', 1012),
(28, 1, 448, '1', '1', '4', 1, 50, 50, 0, 0, 50, 555, 27750, 'this', '2020-02-03 02:32:04', '2020-02-03 02:32:04', 'Feb 3, 2020', '03:32:04 AM', 'Dr durodola', '3', '1', 49, 1, 'paid', 'non-refillable', 1010),
(27, 6, 3075, '2.5', '2', '5', 1, 25, 25, 0, 0, 25, 200, 5000, 'this is the caution', '2020-02-02 22:03:25', '2020-02-02 22:03:25', 'Feb 2, 2020', '11:03:25 PM', 'Dr durodola', '3', '1', 50, 2, 'paid', 'non-refillable', 1011),
(26, 1, 450, '1', '1', '2', 1, 2, 2, 0, 0, 2, 555, 1110, 'this is the caution', '2020-02-02 22:02:13', '2020-02-02 22:02:13', 'Feb 2, 2020', '11:02:13 PM', 'Dr durodola', '3', '1', 50, 2, 'paid', 'non-refillable', 1011),
(23, 7, 225, '1.5', '1', '2.5', 2, 8, 4, 1, 4, 4, 15, 45, 'booo', '2020-02-02 12:57:54', '2020-02-02 12:57:54', 'Feb 2, 2020', '01:57:54 PM', 'Dr durodola', '3', '1', 48, 5, 'paid', 'refillable', 1009),
(24, 5, 204, '1', '2', '8', 4, 10, 10, 3, 0, 10, 200, 2000, 'booo', '2020-02-02 12:58:47', '2020-02-02 12:58:47', 'Feb 2, 2020', '01:58:47 PM', 'Dr durodola', '3', '1', 48, 5, 'paid', 'refillable', 1009),
(25, 5, 204, '1', '2', '8', 1, 10, 10, 0, 0, 10, 200, 2000, 'booo', '2020-02-02 13:01:41', '2020-02-02 13:01:41', 'Feb 2, 2020', '02:01:41 PM', 'Dr durodola', '3', '1', 48, 5, 'paid', 'non-refillable', 1009),
(36, 1, 398, '1', '1', '1', 1, 1, 1, 0, 0, 1, 555, 555, 'pre caution before drug', '2020-02-05 22:22:15', '2020-02-05 22:22:15', 'Feb 5, 2020', '11:22:15 PM', 'Dr Lancelot', '3', '1', 53, 5, 'paid', 'non-refillable', 1014),
(37, 2, 1379, '1', '1', '2', 1, 2, 2, 0, 0, 2, 250, 500, 'this is the second drug precaution', '2020-02-05 22:27:05', '2020-02-05 22:27:05', 'Feb 5, 2020', '11:27:05 PM', 'Physician Gaius', '3', '1', 53, 5, 'paid', 'non-refillable', 1014);

-- --------------------------------------------------------

--
-- Table structure for table `durations`
--

CREATE TABLE `durations` (
  `id` int(11) NOT NULL,
  `duration_name` varchar(20) NOT NULL,
  `value` varchar(20) NOT NULL DEFAULT '1',
  `type_id` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'actice',
  `created_at` datetime(6) NOT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `user_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `durations`
--

INSERT INTO `durations` (`id`, `duration_name`, `value`, `type_id`, `status`, `created_at`, `updated_at`, `user_id`) VALUES
(1, '1', '1', '1', 'active', '2020-01-01 00:00:00.000000', '0000-00-00 00:00:00.000000', '3'),
(2, '1.5', '1.5', '6', 'active', '2020-01-25 00:17:24.000000', '2020-01-25 00:17:24.000000', '3'),
(3, '2.5', '2.5', '6', 'active', '2020-01-25 02:06:23.000000', '2020-01-25 02:06:23.000000', '3');

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `company_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `short_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `web_url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `app_url` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `module` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `license_key` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiring_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `app` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `create_date` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `company_name`, `short_name`, `address`, `logo`, `contact_number`, `email`, `web_url`, `app_url`, `module`, `status`, `license_key`, `expiring_date`, `app`, `create_date`, `create_time`, `created_at`, `updated_at`) VALUES
(1, 'Check CMS', 'Check', 'Check Address', 'logo.png', '070123456789', 'check@jtcheck.com', 'jtcheck.com', 'hms.jtcheck.com', 'pharmacy', 'activated', 'qwert123yuij3kds6', NULL, 'Check', '', '', '2020-01-26 23:00:00', '2020-01-26 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(10) UNSIGNED NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `paid` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `delivery_status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `i_date` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `i_time` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `voucher_id` int(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `amount`, `paid`, `balance`, `status`, `delivery_status`, `created_at`, `updated_at`, `i_date`, `i_time`, `branch_id`, `staff_id`, `voucher_id`) VALUES
(14, '3250', '3250', '0', 'paid', 'delivered', NULL, NULL, 'Jan 30, 2020', '11:38:04 AM', '1', '3', 1001),
(15, '60000', '60000', '0', 'paid', 'delivered', NULL, NULL, 'Jan 30, 2020', '01:13:13 PM', '1', '3', 1002),
(16, '60000', '60000', '0', 'paid', 'delivered', NULL, NULL, 'Jan 30, 2020', '01:13:20 PM', '1', '3', 1002),
(17, '60000', '60000', '0', 'paid', 'delivered', NULL, NULL, 'Jan 30, 2020', '01:13:36 PM', '1', '3', 1002),
(18, '4045', '4045', '0', 'paid', 'delivered', NULL, NULL, 'Feb 2, 2020', '10:19:19 PM', '1', '3', 1009),
(19, '4045', '4045', '0', 'paid', 'delivered', NULL, NULL, 'Feb 2, 2020', '10:31:31 PM', '1', '3', 1009),
(20, '6110', '6110', '0', 'paid', 'delivered', NULL, NULL, 'Feb 2, 2020', '11:17:48 PM', '1', '3', 1011),
(21, '27750', '27750', '0', 'paid', 'delivered', NULL, NULL, 'Feb 3, 2020', '03:30:08 PM', '1', '3', 1010),
(22, '7500', '7500', '0', 'paid', 'delivered', NULL, NULL, 'Feb 3, 2020', '05:27:59 PM', '1', '3', 1012),
(23, '4000', '4000', '0', 'paid', 'delivered', NULL, NULL, 'Feb 4, 2020', '11:36:15 AM', '1', '3', 1013),
(24, '6000', '6000', '0', 'paid', 'delivered', NULL, NULL, 'Feb 5, 2020', '10:27:10 PM', '1', '3', 1015),
(25, '1055', '1055', '0', 'paid', 'delivered', NULL, NULL, 'Feb 6, 2020', '08:57:02 AM', '1', '3', 1014);

-- --------------------------------------------------------

--
-- Table structure for table `item_categories`
--

CREATE TABLE `item_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `cat_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_categories`
--

INSERT INTO `item_categories` (`id`, `cat_name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'maleria', 'active', '2019-11-10 23:00:00', '2019-11-10 23:00:00'),
(5, 'Anti Protozoal', 'active', '2019-11-17 12:36:50', '2019-11-17 12:36:50'),
(4, 'pain', 'suspend', '2019-11-12 15:08:48', '2019-11-12 15:08:48'),
(6, 'Anti Diabetes', 'active', '2020-01-07 16:01:33', '2020-01-07 16:01:33'),
(7, 'Anti Fungal', 'active', '2020-01-07 16:02:12', '2020-01-07 16:02:12'),
(8, 'Anti Biotics', 'active', '2020-01-07 16:04:57', '2020-01-07 16:04:57');

-- --------------------------------------------------------

--
-- Table structure for table `item_details`
--

CREATE TABLE `item_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `generic_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `selling_price` int(190) NOT NULL DEFAULT '0',
  `purchasing_price` int(190) NOT NULL DEFAULT '0',
  `markup_price` double NOT NULL DEFAULT '0',
  `manufacture_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expiring_date` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_time` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_img` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `item_unit_id` int(190) NOT NULL,
  `item_category_id` int(190) NOT NULL,
  `item_type_id` int(190) NOT NULL,
  `manufacturer_id` int(190) NOT NULL,
  `item_shelf_id` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `discount_id` int(190) NOT NULL,
  `staff_id` int(190) DEFAULT NULL,
  `shelve_id` int(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_details`
--

INSERT INTO `item_details` (`id`, `generic_name`, `selling_price`, `purchasing_price`, `markup_price`, `manufacture_date`, `expiring_date`, `status`, `created_at`, `updated_at`, `item_date`, `item_time`, `item_img`, `item_unit_id`, `item_category_id`, `item_type_id`, `manufacturer_id`, `item_shelf_id`, `tax_id`, `discount_id`, `staff_id`, `shelve_id`) VALUES
(1, 'Paracetamol', 555, 460, 0, NULL, NULL, 'active', '2020-01-03 06:47:50', '2020-01-03 06:47:50', 'Jan 3, 2020', '07:47:50 AM', 'drug.jpg', 2, 5, 1, 1, '', '0', 0, NULL, 1),
(2, 'Penicillin', 250, 100, 0, NULL, NULL, 'active', '2020-01-03 06:48:34', '2020-01-03 06:48:34', 'Jan 3, 2020', '07:48:34 AM', '1580810604.png', 1, 5, 1, 2, '', '0', 0, NULL, 1),
(3, 'Item 1', 150, 10, 0, NULL, NULL, 'active', '2020-01-03 12:23:34', '2020-01-03 12:23:34', 'Jan 3, 2020', '01:23:34 PM', 'drug.jpg', 2, 5, 1, 1, '', '10', 0, NULL, 1),
(4, 'CIROFLOXACIN 500mg', 200, 20, 1.5, NULL, NULL, 'active', '2020-01-07 16:07:26', '2020-01-07 16:07:26', 'Jan 7, 2020', '05:07:26 PM', 'drug.jpg', 1, 8, 1, 2, '', '10', 0, NULL, 1),
(5, 'Bonadol Paracetamol', 200, 100, 0, NULL, NULL, 'active', '2020-01-08 11:16:42', '2020-01-08 11:16:42', 'Jan 8, 2020', '12:16:42 PM', 'drug.jpg', 1, 5, 1, 1, '', '10', 0, NULL, 1),
(6, 'Atorvastatin 20mg', 200, 100, 0, NULL, NULL, 'active', '2020-01-08 15:32:59', '2020-01-08 15:32:59', 'Jan 8, 2020', '04:32:59 PM', 'drug.jpg', 1, 6, 6, 6, '', '0', 0, NULL, 1),
(7, 'Albendazole 200mg', 15, 10, 1.5, NULL, NULL, 'active', '2020-01-08 23:08:46', '2020-01-08 23:08:46', 'Jan 9, 2020', '12:08:46 AM', 'drug.jpg', 1, 5, 6, 1, '', '0', 0, NULL, 1),
(8, 'Item 2', 0, 10, 1.5, NULL, NULL, 'active', '2020-01-09 19:46:36', '2020-01-09 19:46:36', 'Jan 9, 2020', '08:46:36 PM', 'drug.jpg', 1, 6, 6, 6, '', '0', 10, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `item_types`
--

CREATE TABLE `item_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `type_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'drug.jpg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_types`
--

INSERT INTO `item_types` (`id`, `type_name`, `image`, `created_at`, `updated_at`) VALUES
(1, 'Syrups', 'drug.jpg', '2019-10-17 16:43:21', '2019-11-06 14:16:00'),
(3, 'Drops', '1573468124.png', '2019-11-11 09:28:10', '2019-11-11 09:28:10'),
(4, 'Ingections', '1573598723.jpeg', '2019-11-12 21:44:19', '2019-11-12 21:44:19'),
(6, 'Tablets', 'drug.jpg', '2020-01-08 15:28:01', '2020-01-08 15:28:01'),
(7, 'Inhaler', 'drug.jpg', '2020-01-08 20:37:51', '2020-01-08 20:37:51'),
(8, 'Cream-Tube', 'drug.jpg', '2020-01-08 20:41:42', '2020-01-08 20:41:42');

-- --------------------------------------------------------

--
-- Table structure for table `item_units`
--

CREATE TABLE `item_units` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `box_size` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `value` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item_units`
--

INSERT INTO `item_units` (`id`, `name`, `box_size`, `value`, `created_at`, `updated_at`) VALUES
(1, 'PC', '200mg', '20', NULL, NULL),
(2, 'boundle', '300', 'boundle', '2019-11-10 19:46:23', '2019-11-10 19:46:23'),
(4, 'News', '22', 'kkk', '2019-11-10 19:49:16', '2019-11-10 19:49:16');

-- --------------------------------------------------------

--
-- Table structure for table `lab_depts`
--

CREATE TABLE `lab_depts` (
  `id` int(111) NOT NULL,
  `lab_name` varchar(200) NOT NULL,
  `description` varchar(200) NOT NULL,
  `status` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `department_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_depts`
--

INSERT INTO `lab_depts` (`id`, `lab_name`, `description`, `status`, `created_at`, `updated_at`, `department_id`) VALUES
(1, 'Lab One', 'Lab One Description', 'active', '2020-02-06 12:36:20', '2019-11-21 19:11:06', 2),
(2, 'Lab Two Edited', 'Lab Two Description Edited', 'suspend', '2020-02-06 12:36:20', '2019-11-21 19:11:27', 2);

-- --------------------------------------------------------

--
-- Table structure for table `lab_tests`
--

CREATE TABLE `lab_tests` (
  `id` int(200) NOT NULL,
  `result` varchar(200) DEFAULT NULL,
  `value` varchar(200) DEFAULT NULL,
  `note` text,
  `status` varchar(200) DEFAULT NULL,
  `test_date` varchar(100) NOT NULL,
  `test_time` varchar(100) NOT NULL,
  `lab_test_type_id` int(200) NOT NULL,
  `lab_dept_id` int(200) DEFAULT NULL,
  `appointment_id` int(200) NOT NULL,
  `staff_id` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lab_test_types`
--

CREATE TABLE `lab_test_types` (
  `id` int(200) NOT NULL,
  `test_name` varchar(200) NOT NULL,
  `test_description` varchar(200) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `lab_dept_id` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lab_test_types`
--

INSERT INTO `lab_test_types` (`id`, `test_name`, `test_description`, `created_at`, `updated_at`, `lab_dept_id`) VALUES
(1, 'Test One', 'Test One Description', '2020-02-06 12:36:23', '2019-11-23 13:38:12', 1),
(3, 'Test Two Edited', 'Test Two Description Edited', '2020-02-06 12:36:23', '2019-11-23 13:51:22', 2);

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_details`
--

CREATE TABLE `manufacturer_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contact_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `details` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `manufacturer_details`
--

INSERT INTO `manufacturer_details` (`id`, `name`, `address`, `contact_number`, `details`, `status`, `created_at`, `updated_at`) VALUES
(1, 'RALBEN', 'lagos', '07000707079', 'pills', 'active', '2019-10-17 16:43:21', '2019-10-17 16:43:21'),
(2, 'Zibatab', 'ikeja', '0700706005', 'medi', 'active', '2019-11-11 10:41:32', '2019-11-11 10:41:32'),
(6, 'ATV-20', 'Dony - Triumph', '764196171', 'medi', 'active', '2020-01-08 15:27:26', '2020-01-08 15:27:26'),
(5, 'Tawa', 'Alaja Tawa', '07064196171', 'medi', 'active', '2020-01-08 11:29:52', '2020-01-08 11:29:52');

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer_ledgers`
--

CREATE TABLE `manufacturer_ledgers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `balance` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_number` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `manufacturer_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `med_report`
--

CREATE TABLE `med_report` (
  `id` int(100) NOT NULL,
  `temperature` varchar(111) DEFAULT '0',
  `pulse_rate` varchar(100) DEFAULT '0',
  `respiration_rate` varchar(100) DEFAULT '0',
  `weight` varchar(100) DEFAULT '0',
  `height` varchar(100) DEFAULT '0',
  `customer_id` int(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `memos`
--

CREATE TABLE `memos` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(11, '2014_10_12_000000_create_users_table', 2),
(12, '2014_10_12_100000_create_password_resets_table', 2),
(13, '2019_10_17_084100_create_roles_table', 2),
(5, '2019_10_17_085938_create_categories_table', 1),
(6, '2019_10_17_090623_create_titles_table', 1),
(7, '2019_10_17_090738_create_contents_table', 1),
(8, '2019_10_17_121151_create_name_titles_table', 1),
(9, '2019_10_20_154951_create_rate_tbs_table', 1),
(10, '2019_10_20_155054_create_comment_tbs_table', 1),
(14, '2019_10_17_084414_create_activities_table', 2),
(15, '2019_11_05_115301_create_accounts_table', 2),
(16, '2019_11_05_115323_create_branches_table', 2),
(17, '2019_11_05_115351_create_branch_names_table', 2),
(18, '2019_11_05_115433_create_customers_table', 2),
(19, '2019_11_05_115451_create_discounts_table', 2),
(20, '2019_11_05_115535_create_doctor_prescriptions_table', 2),
(21, '2019_11_05_115556_create_general_settings_table', 2),
(22, '2019_11_05_115611_create_invoices_table', 2),
(23, '2019_11_05_115628_create_item_categories_table', 2),
(24, '2019_11_05_115640_create_item_details_table', 2),
(25, '2019_11_05_115657_create_item_types_table', 2),
(26, '2019_11_05_115705_create_item_units_table', 2),
(27, '2019_11_05_115724_create_manufacturer_details_table', 2),
(28, '2019_11_05_115738_create_manufacturer_ledgers_table', 2),
(29, '2019_11_05_115806_create_memos_table', 2),
(30, '2019_11_05_120307_create_positions_table', 2),
(31, '2019_11_05_120604_create_purchases_table', 2),
(32, '2019_11_05_120615_create_taxes_table', 2),
(33, '2019_11_05_120626_create_transfers_table', 2),
(34, '2019_11_05_120640_create_vouchers_table', 2),
(35, '2019_11_05_120653_create_shelves_table', 2),
(36, '2019_11_05_145135_create_departments_table', 2);

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id` int(200) NOT NULL,
  `module` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`id`, `module`, `description`, `status`) VALUES
(1, 'hms', 'HMS', 'inactive'),
(2, 'pharmacy ', 'Pharmacy', 'active'),
(3, 'laboratory', 'laboratory', 'inactive'),
(4, 'radiology', 'Radiology', 'inactive'),
(5, 'doctor', 'Doctor Terapy', 'inactive');

-- --------------------------------------------------------

--
-- Table structure for table `name_titles`
--

CREATE TABLE `name_titles` (
  `id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('admin@gmail.com', 'UJvvs9Z7JmzbXmp4lwzM9RTefgA0GQ0oTlSrDxshL4a1J9J51LiZB948IxxZ', '2019-11-20 21:02:01'),
('ayoadelala@yahoo.com', '6kQSP8amqbIySsIf3aVR4xP5PMd6KqDCchrqP2YNBFrslY3OYIqlKg3sGURv', '2020-01-31 10:42:24');

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `id` int(10) UNSIGNED NOT NULL,
  `position_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kei` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`id`, `position_name`, `description`, `kei`, `image`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Pharmacist', 'Pharmacist of the organisation', 'pham01', 'pharm.jpg', 'Active', '2019-11-06 14:16:00', '2019-11-06 14:16:00'),
(2, 'Cashier', 'Cashier of the organisation', 'cashier01', 'cash.jpg', 'Active', '2019-11-06 14:18:00', '2019-11-06 14:18:00'),
(3, 'Physicians', 'Doctors/Physicians of the organisation', 'physician01', 'doc.jpg', 'Active', '2019-11-06 14:22:00', '2019-11-06 14:22:00'),
(4, 'Administrator', 'Administrator of the organisation', 'admin01', 'admin.jpg', 'Active', '2019-11-06 14:23:00', '2019-11-06 14:23:00'),
(5, 'Patient', 'Patient of the organisation', 'patient01', 'patient.jpg', 'Active', '2019-11-06 14:24:00', '2019-11-06 14:24:00');

-- --------------------------------------------------------

--
-- Table structure for table `purchases`
--

CREATE TABLE `purchases` (
  `id` int(10) UNSIGNED NOT NULL,
  `instock` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newstock` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'saved',
  `p_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `p_time` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `manufacturer_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchases`
--

INSERT INTO `purchases` (`id`, `instock`, `quantity`, `newstock`, `status`, `p_date`, `p_time`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`, `branch_id`, `manufacturer_detail_id`) VALUES
(17, NULL, '50', NULL, 'added', '', '', '09:00:05 AM', NULL, '6', NULL, NULL, NULL),
(15, NULL, '20', '20', 'added', '', '', '08:15:20 AM', NULL, '7', NULL, NULL, NULL),
(25, '0', '100', '100', 'added', '', '', '08:47:11 PM', NULL, '8', '6', '0', NULL),
(13, NULL, '100', NULL, 'added', '', '', '12:19:46 PM', NULL, '5', NULL, NULL, NULL),
(12, NULL, '50', NULL, 'added', '', '', '05:10:53 PM', NULL, '4', NULL, NULL, NULL),
(24, '50', '500', '550', 'added', '', '', '06:04:42 PM', NULL, '3', '6', '0', NULL),
(23, '950', '500', '1450', 'added', '', '', '06:03:50 PM', NULL, '2', '6', '0', NULL),
(26, '100', '100', '200', 'added', '', '', '09:10:28 PM', NULL, '8', '6', '0', NULL),
(27, '20', '180', '200', 'added', '', '', '06:42:26 PM', NULL, '7', '3', '0', NULL),
(32, '435', '20', '455', 'added', '', '', '01:10:48 AM', NULL, '1', '3', '0', NULL),
(33, '455', '5', '460', 'added', 'Jan 11, 2020', '09:37:49 AM', NULL, NULL, '1', '3', '0', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `rate_tbs`
--

CREATE TABLE `rate_tbs` (
  `id` int(10) UNSIGNED NOT NULL,
  `rate` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1001, 'Super Admin', 'The Super Admin of this platform', 'active', '2020-01-09 23:00:00', '2020-01-10 00:00:00'),
(2002, 'Global Admin', 'The Admin of this platform', 'active', '2020-01-09 23:00:00', '2020-01-09 23:00:00'),
(3003, 'Department Admin', 'The head of each departments in this platform', 'active', '2020-01-09 23:00:00', '2020-01-09 23:00:00'),
(4004, 'Staff', 'This staffs in this platform', 'active', '2020-01-09 23:00:00', '2020-01-09 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `shelves`
--

CREATE TABLE `shelves` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `point` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` int(190) NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `shelves`
--

INSERT INTO `shelves` (`id`, `name`, `point`, `branch_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 'AB', 'A2', 1, 'active', '2019-11-03 23:00:00', '2019-11-10 23:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `titles`
--

CREATE TABLE `titles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name_title` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `t_image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `about` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rate` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `views` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transfers`
--

CREATE TABLE `transfers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity_from` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remain_from` int(255) NOT NULL DEFAULT '0',
  `quantity_to` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remain_to` int(255) DEFAULT '0',
  `total_quantity` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `newstock` int(255) DEFAULT '0',
  `status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `t_date` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `t_time` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transfers`
--

INSERT INTO `transfers` (`id`, `quantity_from`, `remain_from`, `quantity_to`, `remain_to`, `total_quantity`, `newstock`, `status`, `t_date`, `t_time`, `created_at`, `updated_at`, `item_detail_id`, `staff_id`) VALUES
(13, 'Main', 0, 'Buth 2', NULL, '10', 0, NULL, '', '', '08:06:06 AM', NULL, '5', NULL),
(12, 'Main', 0, 'Buth', NULL, '20', 0, NULL, '', '', '01:26:52 PM', NULL, '3', NULL),
(11, 'Main', 0, 'Buth', NULL, '50', 0, NULL, '', '', '07:51:01 AM', NULL, '2', NULL),
(14, 'Main', 0, 'Buth', 0, '50', 0, NULL, '', '', '09:22:22 PM', NULL, '3', NULL),
(19, 'branch_main', 70, 'branch_buth', 0, '50', 50, 'close', '', '', '06:16:06 PM', NULL, '7', '3'),
(16, 'branch_main', 485, 'branch_buth', 485, '20', 505, 'close', '', '', '04:17:12 PM', NULL, '1', '3'),
(17, 'branch_main', 1450, 'branch_buth3', 1450, '20', 1470, 'close', '', '', '04:18:20 PM', NULL, '2', '3'),
(18, 'branch_main', 100, 'branch_buth2', 0, '10', 10, 'close', '', '', '05:27:15 PM', NULL, '4', '3'),
(20, 'branch_main', 200, 'branch_buth2', 0, '50', 50, 'close', '', '', '06:25:22 PM', NULL, '8', '3'),
(21, 'branch_main', 150, 'branch_buth2', 0, '50', 50, 'close', '', '', '06:33:42 PM', NULL, '8', '3'),
(23, 'branch_main', 445, 'branch_buth', 20, '10', 30, 'close', '', '', '08:59:26 PM', NULL, '1', '3'),
(24, 'branch_main', 1410, 'branch_buth2', 0, '20', 20, 'close', '', '', '12:32:55 AM', NULL, '2', '3'),
(25, 'branch_main', 550, 'branch_buth', 0, '50', 50, 'close', '', '', '12:33:44 AM', NULL, '3', '3'),
(26, 'branch_buth', 50, 'branch_buth4', 0, '10', 10, 'close', '', '', '01:57:09 AM', NULL, '2', '3'),
(27, 'branch_main', 460, 'branch_buth3', 0, '10', 10, 'close', 'Jan 11, 2020', '09:41:09 AM', NULL, NULL, '1', '3'),
(28, 'branch_buth2', 20, 'branch_buth4', 10, '10', 20, 'open', 'Jan 11, 2020', '10:10:26 AM', NULL, NULL, '2', '3');

-- --------------------------------------------------------

--
-- Table structure for table `treatments`
--

CREATE TABLE `treatments` (
  `id` int(50) NOT NULL,
  `treatment_type` varchar(100) NOT NULL,
  `note` varchar(100) NOT NULL,
  `treatment_date` varchar(100) NOT NULL,
  `treatment_time` varchar(100) NOT NULL,
  `appointment_id` int(100) NOT NULL,
  `staff_id` int(100) NOT NULL,
  `branch_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `firstname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastname` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `d_o_b` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `mobile_number` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `id_number` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'male.png',
  `facebook_handle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter_handle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `instagram_handle` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `degree` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` longtext COLLATE utf8mb4_unicode_ci,
  `status` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'reg',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `dept_id` int(190) DEFAULT NULL,
  `branch_id` int(255) NOT NULL DEFAULT '0',
  `role_id` int(250) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `gender`, `d_o_b`, `email`, `email_verified_at`, `mobile_number`, `address`, `city`, `state`, `password`, `remember_token`, `id_number`, `image`, `facebook_handle`, `twitter_handle`, `instagram_handle`, `degree`, `about`, `status`, `created_at`, `updated_at`, `dept_id`, `branch_id`, `role_id`) VALUES
(6, 'admin', 'admin', 'male', NULL, 'admin@gmail.com', NULL, '0807796884747', NULL, NULL, NULL, '$2y$10$IkuoyQzu4NApJ7ct3Vm/7.wUVnsP7YclTd6xT1/YTtFmcZ21Dkp2u', NULL, 'yey333', '1580638681.jpeg', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:34:46', '2020-02-02 10:18:01', 10, 1, 1001),
(2, 'Glory', 'Olusola', 'male', NULL, 'glory@gmail.com', NULL, '080070060060', NULL, NULL, NULL, '$2y$10$Fzoku2ldHZoEIFTpYbGMK.zUXVYlMdnJ2zLve9IAqIDza.o8aI5gi', NULL, 'ww777', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:36:07', '2019-11-06 23:36:07', 10, 2, 2002),
(3, 'Ayo', 'Lala', 'male', NULL, 'ayoadelala@yahoo.com', NULL, '764196171', NULL, NULL, NULL, '$2y$10$PSahJY2NJR3nNpL5pqmnBOEWhG937EovBlegWGJZeLni5w.GvqEKS', NULL, 'ywy77', '1580402869.jpeg', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-06 23:38:56', '2020-01-30 16:47:50', 1, 1, 3003),
(7, 'adeola', 'adeola', 'male', NULL, 'adeola@yahoo.com', NULL, '9494304394', NULL, NULL, NULL, '$2y$10$pGLDEzhiFwRv/j8B.4SVMuqIaveamkZfO2S1WxH.XhCHHHnh0h5P2', NULL, 'adeola', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-10 20:39:46', '2019-11-10 20:39:46', 1, 7, 4004),
(8, 'ppp', 'ppp', 'male', NULL, 'ppp@gmail.com', NULL, '08007070700', NULL, NULL, NULL, '$2y$10$JQZfumDyHh10SVlsHHqf6OCaSStGZ9ZXMLTEW4rKqyp.ZptztxVoO', NULL, 'jeu74', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-12 15:18:38', '2019-11-12 15:18:38', 1, 6, 0),
(9, 'Ade', 'Duro', 'male', NULL, 'ade@gmail.com', NULL, '08077997978', NULL, NULL, NULL, '$2y$10$E6v2TpeGOzoFUMvIluL.YuKf9YZZNsmO/WD19F7aAW2uwwGQZP8Ca', NULL, 'qw1234', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2019-11-14 14:20:21', '2019-11-14 14:20:21', 2, 0, 0),
(1000, 'dayo', 'Ajamu', 'male', NULL, 'zenithsilvarex@protonmail.com', NULL, NULL, NULL, NULL, NULL, '$2y$10$D2AElN8/I1vTOfOcXfVbT.XFequq6RD359noKXwVAedP2R3kaJmSO', NULL, '12365', 'male.png', NULL, NULL, NULL, NULL, NULL, 'approved', '2020-01-30 19:27:54', '2020-01-30 19:27:54', 1, 6, 4004);

-- --------------------------------------------------------

--
-- Table structure for table `variances`
--

CREATE TABLE `variances` (
  `id` int(255) NOT NULL,
  `item_detail_id` int(255) NOT NULL,
  `branch_id` varchar(200) NOT NULL,
  `instock` int(255) NOT NULL,
  `quantity` int(255) NOT NULL,
  `newstock` int(255) NOT NULL,
  `purpose` varchar(50) DEFAULT NULL,
  `detail` longtext NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `v_date` varchar(50) NOT NULL,
  `v_time` varchar(50) NOT NULL,
  `user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `variances`
--

INSERT INTO `variances` (`id`, `item_detail_id`, `branch_id`, `instock`, `quantity`, `newstock`, `purpose`, `detail`, `status`, `created_at`, `updated_at`, `v_date`, `v_time`, `user_id`) VALUES
(1, 1, 'branch_buth', 50, 10, 40, 'damaged', 'damaged', 'close', NULL, NULL, 'Jan 11, 2020', '09:48:22 AM', 3),
(2, 2, 'branch_buth', 40, 4, 36, 'expire', '11/12/2019', 'close', NULL, NULL, 'Jan 12, 2020', '07:31:05 PM', 3),
(3, 3, 'branch_main', 380, 10, 370, 'expire', '12/12/2019', 'close', NULL, NULL, 'Jan 13, 2020', '11:28:15 AM', 6);

-- --------------------------------------------------------

--
-- Table structure for table `vouchers`
--

CREATE TABLE `vouchers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quantity` int(250) DEFAULT '0',
  `amount` int(250) DEFAULT '0',
  `paid` int(250) DEFAULT '0',
  `balance` int(250) DEFAULT '0',
  `total_refill` int(200) DEFAULT '0',
  `refill_remain` int(200) DEFAULT '0',
  `paid_status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `delivery_status` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `refill_status` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT 'open',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `v_date` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `v_time` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `item_detail_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `customer_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `invoice_id` varchar(190) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 CHECKSUM=1 COLLATE=utf8mb4_unicode_ci ROW_FORMAT=DYNAMIC;

--
-- Dumping data for table `vouchers`
--

INSERT INTO `vouchers` (`id`, `quantity`, `amount`, `paid`, `balance`, `total_refill`, `refill_remain`, `paid_status`, `delivery_status`, `refill_status`, `created_at`, `updated_at`, `v_date`, `v_time`, `item_detail_id`, `customer_id`, `staff_id`, `branch_id`, `invoice_id`) VALUES
(1011, 27, 6110, 6110, 0, 0, 0, 'paid', 'delivered', 'non-refillable', '2020-02-02 21:58:30', '2020-02-02 21:58:30', 'Feb 2, 2020', '11:05:51 PM', NULL, '2', '3', '1', '20'),
(1010, 50, 27750, 27750, 0, 0, 0, 'paid', 'delivered', 'non-refillable', '2020-02-02 11:56:01', '2020-02-02 11:56:01', 'Feb 3, 2020', '03:32:20 AM', NULL, '1', '3', '1', '21'),
(1009, 24, 4045, 4045, 0, 4, 4, 'paid', 'delivered', 'refillable', '2020-02-02 11:54:42', '2020-02-02 11:54:42', 'Feb 2, 2020', '08:21:22 PM', NULL, '5', '3', '1', '19'),
(1012, 35, 7500, 7500, 0, 0, 0, 'paid', 'delivered', 'non-refillable', '2020-02-03 14:29:32', '2020-02-03 14:29:32', 'Feb 3, 2020', '05:20:24 PM', NULL, '2', '3', '1', '22'),
(1013, 20, 4000, 4000, 0, 0, 0, 'paid', 'delivered', 'non-refillable', '2020-02-03 15:57:22', '2020-02-03 15:57:22', 'Feb 4, 2020', '11:35:42 AM', NULL, '1', '3', '1', '23'),
(1014, 3, 1055, 1055, 0, 0, 0, 'paid', 'delivered', 'non-refillable', '2020-02-03 15:59:19', '2020-02-03 15:59:19', 'Feb 6, 2020', '08:21:28 AM', NULL, '5', '3', '1', '25'),
(1015, 30, 6000, 6000, 0, 0, 0, 'paid', 'delivered', 'non-refillable', '2020-02-05 20:00:37', '2020-02-05 20:00:37', 'Feb 5, 2020', '09:06:04 PM', NULL, '2', '3', '1', '24'),
(1016, 0, 0, 0, 0, 0, 0, 'open', 'open', 'open', '2020-02-08 11:27:31', '2020-02-08 11:27:31', NULL, NULL, NULL, '3', '1', '1', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `accounts_branch_id_index` (`branch_id`);

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`),
  ADD KEY `depertments_id` (`department_id`),
  ADD KEY `doctor_id` (`doctor_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- Indexes for table `blood_details`
--
ALTER TABLE `blood_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `branches_contact_number_unique` (`contact_number`),
  ADD KEY `branches_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth`
--
ALTER TABLE `branch_buth`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth2`
--
ALTER TABLE `branch_buth2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth2_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth2_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth3`
--
ALTER TABLE `branch_buth3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth3_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth3_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth4`
--
ALTER TABLE `branch_buth4`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth4_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth4_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_buth5`
--
ALTER TABLE `branch_buth5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_buth5_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_buth5_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_main`
--
ALTER TABLE `branch_main`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_names_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_names_staff_id_index` (`staff_id`);

--
-- Indexes for table `branch_names`
--
ALTER TABLE `branch_names`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_names_item_detail_id_index` (`item_detail_id`),
  ADD KEY `branch_names_staff_id_index` (`staff_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment_tbs`
--
ALTER TABLE `comment_tbs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contents`
--
ALTER TABLE `contents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `customers_email_unique` (`email`),
  ADD UNIQUE KEY `customers_mobile_number_unique` (`mobile_number`);

--
-- Indexes for table `daily_supply`
--
ALTER TABLE `daily_supply`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `departments_position_id_index` (`position_id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_prescriptions`
--
ALTER TABLE `doctor_prescriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `doctor_prescriptions_doctor_id_index` (`doctor_id`),
  ADD KEY `doctor_prescriptions_pharmacist_id_index` (`pharmacist_id`),
  ADD KEY `doctor_prescriptions_branch_id_index` (`branch_id`),
  ADD KEY `item_id` (`item_id`),
  ADD KEY `customer_id` (`appointment_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- Indexes for table `durations`
--
ALTER TABLE `durations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `general_settings_contact_number_unique` (`contact_number`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoices_branch_id_index` (`branch_id`),
  ADD KEY `invoices_staff_id_index` (`staff_id`),
  ADD KEY `voucher_id` (`voucher_id`);

--
-- Indexes for table `item_categories`
--
ALTER TABLE `item_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_details`
--
ALTER TABLE `item_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `generic_name` (`generic_name`),
  ADD KEY `item_details_item_unit_id_index` (`item_unit_id`),
  ADD KEY `item_details_item_category_id_index` (`item_category_id`),
  ADD KEY `item_details_item_type_id_index` (`item_type_id`),
  ADD KEY `item_details_manufacturer_id_index` (`manufacturer_id`),
  ADD KEY `item_details_tax_id_index` (`tax_id`),
  ADD KEY `item_details_discount_id_index` (`discount_id`),
  ADD KEY `item_details_staff_id_index` (`staff_id`),
  ADD KEY `shelve_id` (`shelve_id`);

--
-- Indexes for table `item_types`
--
ALTER TABLE `item_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `item_units`
--
ALTER TABLE `item_units`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lab_depts`
--
ALTER TABLE `lab_depts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `department_id` (`department_id`);

--
-- Indexes for table `lab_tests`
--
ALTER TABLE `lab_tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `test_type_id` (`lab_test_type_id`),
  ADD KEY `customer_id` (`appointment_id`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `lab_id` (`lab_dept_id`);

--
-- Indexes for table `lab_test_types`
--
ALTER TABLE `lab_test_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lab_type_id` (`lab_dept_id`);

--
-- Indexes for table `manufacturer_details`
--
ALTER TABLE `manufacturer_details`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `manufacturer_details_contact_number_unique` (`contact_number`);

--
-- Indexes for table `manufacturer_ledgers`
--
ALTER TABLE `manufacturer_ledgers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `manufacturer_ledgers_manufacturer_detail_id_index` (`manufacturer_detail_id`);

--
-- Indexes for table `med_report`
--
ALTER TABLE `med_report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `memos`
--
ALTER TABLE `memos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `memos_staff_id_index` (`staff_id`),
  ADD KEY `memos_branch_id_index` (`branch_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `name_titles`
--
ALTER TABLE `name_titles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchases_item_detail_id_index` (`item_detail_id`),
  ADD KEY `purchases_staff_id_index` (`staff_id`),
  ADD KEY `purchases_branch_id_index` (`branch_id`),
  ADD KEY `purchases_manufacturer_detail_id_index` (`manufacturer_detail_id`);

--
-- Indexes for table `rate_tbs`
--
ALTER TABLE `rate_tbs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `shelves`
--
ALTER TABLE `shelves`
  ADD PRIMARY KEY (`id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `titles`
--
ALTER TABLE `titles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transfers`
--
ALTER TABLE `transfers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transfers_item_detail_id_index` (`item_detail_id`),
  ADD KEY `transfers_staff_id_index` (`staff_id`);

--
-- Indexes for table `treatments`
--
ALTER TABLE `treatments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `customer_id` (`appointment_id`),
  ADD KEY `staff_id` (`staff_id`),
  ADD KEY `branch_id` (`branch_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_mobile_number_unique` (`mobile_number`),
  ADD KEY `users_dept_id_index` (`dept_id`);

--
-- Indexes for table `variances`
--
ALTER TABLE `variances`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vouchers`
--
ALTER TABLE `vouchers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vouchers_item_detail_id_index` (`item_detail_id`),
  ADD KEY `vouchers_customer_id_index` (`customer_id`),
  ADD KEY `vouchers_staff_id_index` (`staff_id`),
  ADD KEY `vouchers_branch_id_index` (`branch_id`),
  ADD KEY `vouchers_invoice_id_index` (`invoice_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `activities`
--
ALTER TABLE `activities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `blood_details`
--
ALTER TABLE `blood_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `branch_buth`
--
ALTER TABLE `branch_buth`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `branch_buth2`
--
ALTER TABLE `branch_buth2`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `branch_buth3`
--
ALTER TABLE `branch_buth3`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `branch_buth4`
--
ALTER TABLE `branch_buth4`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `branch_buth5`
--
ALTER TABLE `branch_buth5`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `branch_main`
--
ALTER TABLE `branch_main`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `branch_names`
--
ALTER TABLE `branch_names`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment_tbs`
--
ALTER TABLE `comment_tbs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contents`
--
ALTER TABLE `contents`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `daily_supply`
--
ALTER TABLE `daily_supply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `doctor_prescriptions`
--
ALTER TABLE `doctor_prescriptions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `durations`
--
ALTER TABLE `durations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `item_categories`
--
ALTER TABLE `item_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `item_details`
--
ALTER TABLE `item_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `item_types`
--
ALTER TABLE `item_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `item_units`
--
ALTER TABLE `item_units`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `lab_depts`
--
ALTER TABLE `lab_depts`
  MODIFY `id` int(111) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `lab_tests`
--
ALTER TABLE `lab_tests`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lab_test_types`
--
ALTER TABLE `lab_test_types`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `manufacturer_details`
--
ALTER TABLE `manufacturer_details`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `manufacturer_ledgers`
--
ALTER TABLE `manufacturer_ledgers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `med_report`
--
ALTER TABLE `med_report`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `memos`
--
ALTER TABLE `memos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `name_titles`
--
ALTER TABLE `name_titles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `rate_tbs`
--
ALTER TABLE `rate_tbs`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5006;

--
-- AUTO_INCREMENT for table `shelves`
--
ALTER TABLE `shelves`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `titles`
--
ALTER TABLE `titles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transfers`
--
ALTER TABLE `transfers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `treatments`
--
ALTER TABLE `treatments`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1001;

--
-- AUTO_INCREMENT for table `variances`
--
ALTER TABLE `variances`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `vouchers`
--
ALTER TABLE `vouchers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1017;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

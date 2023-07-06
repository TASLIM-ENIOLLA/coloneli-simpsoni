-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 06, 2023 at 01:11 PM
-- Server version: 10.5.20-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `id19227110_colson_ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` varchar(20) NOT NULL,
  `f_name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `email` tinytext NOT NULL,
  `password` tinytext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `f_name`, `l_name`, `email`, `password`, `timestamp`) VALUES
('1', 'Taslim', 'Eniolla', 'taslim.eniolla@gmail.com', '1bbd886460827015e5d605ed44252251', '2022-07-09 02:54:07'),
('2', 'Maddie', 'Maddie', 'maddie4u2c@yahoo.com', '21232f297a57a5a743894a0e4a801fc3', '2022-08-09 02:12:14');

-- --------------------------------------------------------

--
-- Table structure for table `contact_messages`
--

CREATE TABLE `contact_messages` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` tinytext NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_messages`
--

INSERT INTO `contact_messages` (`id`, `name`, `email`, `phone`, `subject`, `message`, `timestamp`) VALUES
(1, 'taslim', 'taslim.eniolla@gmail.com', '2543657', 'a report', 'i love coloneli simpsoni', '2022-07-06 22:42:07'),
(2, 'tabitha', 'tab@gmail.com', '312467528', 'corp', 'hello world', '2022-07-06 23:29:05'),
(3, 'korede', 'rede@gmail.com', '435672', 'jump', 'how is it?', '2022-07-06 23:30:01'),
(4, 'paul', 'paulo@gmail.com', '34568', 'hello', 'are you there?', '2022-07-06 23:31:06'),
(5, 'israel', 'is@gmail.com', '34567', 'inquiries', 'is it okay to return a product', '2022-07-06 23:32:18'),
(6, 'helen', 'helen@gmail.com', '3426547', 'helen', '$', '2022-07-06 23:37:40'),
(7, 'tdfk', 'fdbkj@gbgkj.vv', '3245743', 'dgnlbn', '$', '2022-07-06 23:38:20');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` varchar(20) NOT NULL,
  `f_name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `email` tinytext NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` tinytext NOT NULL,
  `country` tinytext NOT NULL,
  `town_or_city` tinytext NOT NULL,
  `state_or_region` tinytext NOT NULL,
  `postal_or_zipcode` varchar(8) NOT NULL,
  `password` tinytext NOT NULL,
  `profile_img` tinytext DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `f_name`, `l_name`, `email`, `phone`, `address`, `country`, `town_or_city`, `state_or_region`, `postal_or_zipcode`, `password`, `profile_img`, `timestamp`) VALUES
('cust-2cf23e315b6e595', 'taslim', 'eniolla', 'taslim.eniolla@gmail.com', '07084712978', 'lorem ipsum dolor', 'nigeria', 'ilorin', 'kwara', '224543', '1bbd886460827015e5d605ed44252251', 'cust-2cf23e315b6e595.jpg', '2022-06-28 15:17:43'),
('cust-2ded-2dedc-2ded', 'taslim', 'eniolla', 'taslim.eniolla@gmail.com', '07084712978', 'lorem ipsum dolor', 'nigeria', 'ilorin', 'kwara', '224543', '1bbd886460827015e5d605ed44252251', 'download (5).jpg', '2022-07-04 16:32:06'),
('cust-57bd-57bd7-57bd', 'taslim', 'eniolla', 'taslim.eniolla@gmail.com', '07084712978', 'lorem ipsum dolor', 'nigeria', 'ilorin', 'kwara', '224543', '1bbd886460827015e5d605ed44252251', 'download (5).jpg', '2022-06-28 15:23:55'),
('cust-8efed444cae0753', 'taslim', 'eniolla', 'taslim.eniolla@gmail.com', '07084712978', 'lorem ipsum dolor', 'nigeria', 'ilorin', 'kwara', '224543', '1bbd886460827015e5d605ed44252251', 'download (5).jpg', '2022-06-28 15:22:19');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `email` tinytext NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`id`, `email`, `timestamp`) VALUES
(1, 'taslim.eniolla@gmail.com', '2022-07-01 07:53:46');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` varchar(20) NOT NULL,
  `customer_id` varchar(20) NOT NULL,
  `f_name` varchar(50) NOT NULL,
  `l_name` varchar(50) NOT NULL,
  `country` tinytext NOT NULL,
  `address` tinytext NOT NULL,
  `town_or_city` tinytext NOT NULL,
  `state_or_region` tinytext NOT NULL,
  `postal_or_zipcode` varchar(8) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` tinytext NOT NULL,
  `notes` mediumtext DEFAULT NULL,
  `order_data` longtext NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'processing',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `f_name`, `l_name`, `country`, `address`, `town_or_city`, `state_or_region`, `postal_or_zipcode`, `phone`, `email`, `notes`, `order_data`, `status`, `timestamp`) VALUES
('ord-515a2de257469deb', 'cust-2cf23e315b6e595', 'sdkghdgh', 'gdkgbjbgbk', 'nigeria', 'gdkjbgkjbgkj', 'gdkjbgdkjbgk', 'gkjdebgkjbdkj', '44sdg', '65478473', 'efkjdbkjgbkj@gmail.von', 'dghgbhj', '[{\"id\":\"prd-147c6e6284642a74\",\"quantity\":\"1\",\"name\":\"sweater\",\"price\":\"4655\"},{\"id\":\"prd-7096c9f4cb2f6786\",\"quantity\":\"1\",\"name\":\"blouse\",\"price\":\"2000\"},{\"id\":\"prd-3f3626602275d84d\",\"quantity\":\"1\",\"name\":\"denim coat\",\"price\":\"3000\"}]', 'processing', '2022-07-08 09:55:57'),
('ord-d0c7c6a40924470d', 'cust-2cf23e315b6e595', 'ddgkjlkg', 'gdkgkjdj', 'nigeria', 'gkjdkjgkj', 'gdkjbkjgb', 'dfkdgjb', '489489', '384696896', 'sffkj@gfjg.vdgf', '', '[{\"id\":\"prd-147c6e6284642a74\",\"quantity\":\"1\",\"name\":\"sweater\",\"price\":\"4655\"},{\"id\":\"prd-7096c9f4cb2f6786\",\"quantity\":\"1\",\"name\":\"blouse\",\"price\":\"2000\"},{\"id\":\"prd-3f3626602275d84d\",\"quantity\":\"1\",\"name\":\"denim coat\",\"price\":\"3000\"}]', 'processing', '2022-07-09 01:09:13'),
('ord-dae5e6dd851a6fda', 'cust-2cf23e315b6e595', 'efdgj', 'dkgkdfjgfkj', 'nigeria', 'ghfkhngj', 'gdghfjnkj', 'khkkjghjk', 'gghkj', '5667893789', 'rkhyjrhjk@hmail.von', 'tgrhkjgfbnjbb', '[{\"id\":\"prd-147c6e6284642a74\",\"quantity\":\"1\",\"name\":\"sweater\",\"price\":\"4655\"},{\"id\":\"prd-7096c9f4cb2f6786\",\"quantity\":\"1\",\"name\":\"blouse\",\"price\":\"2000\"},{\"id\":\"prd-3f3626602275d84d\",\"quantity\":\"1\",\"name\":\"denim coat\",\"price\":\"3000\"}]', 'processing', '2022-07-08 09:52:15');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(20) NOT NULL,
  `name` tinytext NOT NULL,
  `category` varchar(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `sold` int(11) NOT NULL DEFAULT 0,
  `description` tinytext DEFAULT NULL,
  `price` int(11) NOT NULL,
  `gender` varchar(20) DEFAULT 'unisex',
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `quantity`, `sold`, `description`, `price`, `gender`, `timestamp`) VALUES
('prd-3f3626602275d84d', 'denim coat', 'clothes', 1000, 0, 'cute denim jeans for both male and female', 3000, 'unisex', '2022-07-07 00:04:31'),
('prd-7096c9f4cb2f6786', 'blouse', 'clothes', 1900, 0, 'lovely blouse for ladies', 2000, 'female', '2022-07-07 00:24:46'),
('prd-c51d430d2bf97aa4', 'scrafs', 'clothes', 1000, 0, 'a lovely scarf', 2500, 'female', '2022-07-10 13:48:25'),
('prd-f6917403660d25f4', 'tear jeans', 'clothes', 1000, 0, 'best jeans in the market', 3000, 'unisex', '2022-07-10 13:38:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_messages`
--
ALTER TABLE `contact_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact_messages`
--
ALTER TABLE `contact_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

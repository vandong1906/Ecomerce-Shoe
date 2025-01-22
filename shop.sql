-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Dec 20, 2024 at 12:23 PM
-- Server version: 5.7.44
-- PHP Version: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `Brand_id` int(11) NOT NULL,
  `Brand_Name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`Brand_id`, `Brand_Name`, `createdAt`, `updatedAt`) VALUES
(1, 'Nike', '2024-12-07 04:46:13', '2024-12-07 04:46:13'),
(2, 'Jorden', '2024-12-07 15:56:29', '2024-12-07 15:56:29');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `Ngay` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `CartShopping_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cartshoppings`
--

CREATE TABLE `cartshoppings` (
  `CartShopping_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `User_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_Name` varchar(255) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `image_data` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `Brand_id` int(11) DEFAULT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_Name`, `number`, `image_data`, `createdAt`, `updatedAt`, `Brand_id`, `description`) VALUES
(7, 'adsd', 2, 'BackGround1733812191634.jpg', '2024-12-10 06:29:51', '2024-12-10 06:29:51', 2, 'asdasd'),
(10, 'asdsad12312', 2, 'download1733812364218.jpg', '2024-12-10 06:32:44', '2024-12-10 06:32:44', 2, 'adasd'),
(11, 'asdsad12312', 2, 'download1733812367552.jpg', '2024-12-10 06:32:47', '2024-12-10 06:32:47', 1, 'adasd'),
(12, 'ada', 1, 'BackGround1733814668814.jpg', '2024-12-10 07:11:08', '2024-12-10 07:11:08', 2, 'asd'),
(17, 'asdds', 2, 'BackGround1733814837577.jpg', '2024-12-10 07:13:57', '2024-12-10 07:13:57', 2, 'asdas'),
(18, 'asdds', 2, 'BackGround1733814877086.jpg', '2024-12-10 07:14:37', '2024-12-10 07:14:37', 2, 'asdas'),
(19, 'asdas', 1, 'Giay_Ultraboost_11733815118037.0_trang_HQ4207_01_00_standard', '2024-12-10 07:18:38', '2024-12-10 07:18:38', 2, 'asd'),
(20, 'First', 2, 'BackGround1734068107434.jpg', '2024-12-13 05:35:07', '2024-12-13 05:35:07', 2, 'san pham dau tien'),
(21, 'vandong', 2, 'download1734068187907.jpg', '2024-12-13 05:36:27', '2024-12-13 05:36:27', 1, 'asdasd'),
(22, 'asdsa', 2, 'download1734068355968.jpg', '2024-12-13 05:39:15', '2024-12-13 05:39:15', 1, '123'),
(23, 'asdsa', 2, 'download1734068401349.jpg', '2024-12-13 05:40:01', '2024-12-13 05:40:01', 1, '123'),
(24, 'asdsa', 2, 'download1734068405665.jpg', '2024-12-13 05:40:05', '2024-12-13 05:40:05', 1, '123'),
(25, 'áda', 2, 'download1734068902366.jpg', '2024-12-13 05:48:22', '2024-12-13 05:48:22', 1, '1saasd'),
(26, 'áda', 2, 'download1734068941558.jpg', '2024-12-13 05:49:01', '2024-12-13 05:49:01', 1, '1saasd'),
(27, 'áda', 2, 'download1734068962586.jpg', '2024-12-13 05:49:22', '2024-12-13 05:49:22', 1, '1saasd'),
(28, 'áda', 2, 'download1734068981582.jpg', '2024-12-13 05:49:41', '2024-12-13 05:49:41', 1, '1saasd'),
(29, 'asd', 2, 'download1734068997433.jpg', '2024-12-13 05:49:57', '2024-12-13 05:49:57', 1, '123asd'),
(30, 'asd', 2, 'download1734069188713.jpg', '2024-12-13 05:53:08', '2024-12-13 05:53:08', 1, '123asd'),
(31, 'asd', 2, 'download1734069191153.jpg', '2024-12-13 05:53:11', '2024-12-13 05:53:11', 1, '123asd'),
(32, 'asdasd', 2, 'BackGround1734069209048.jpg', '2024-12-13 05:53:29', '2024-12-13 05:53:29', 1, 'asdad'),
(33, 'asdasd', 2, 'BackGround1734069215876.jpg', '2024-12-13 05:53:35', '2024-12-13 05:53:35', 1, 'asdad'),
(34, 'asdasd', 2, 'BackGround1734069225021.jpg', '2024-12-13 05:53:45', '2024-12-13 05:53:45', 1, 'asdad'),
(35, 'asdasd', 2, 'BackGround1734069509681.jpg', '2024-12-13 05:58:29', '2024-12-13 05:58:29', 1, 'asdad'),
(36, 'asdasd', 2, 'download1734069528419.jpg', '2024-12-13 05:58:48', '2024-12-13 05:58:48', 1, 'asda123'),
(37, 'asdasd', 2, 'download1734069535323.jpg', '2024-12-13 05:58:55', '2024-12-13 05:58:55', 1, 'asda123'),
(38, 'asdasd', 2, 'download1734069542940.jpg', '2024-12-13 05:59:02', '2024-12-13 05:59:02', 1, 'asda123'),
(39, 'asdasd', 1, 'Giay_Ultraboost_11734097522556.0_trang_HQ4207_01_00_standard', '2024-12-13 13:45:22', '2024-12-13 13:45:22', 1, 'asda'),
(40, 'asdasd', 1, 'Giay_Ultraboost_11734251296376.0_trang_HQ4207_01_00_standard', '2024-12-15 08:28:16', '2024-12-15 08:28:16', 1, 'asd'),
(41, 'zxc', 1, 'BackGround1734251341287.jpg', '2024-12-15 08:29:01', '2024-12-15 08:29:01', 2, 'lkj');

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `size_id` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `Date` datetime DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `User_id` int(11) NOT NULL,
  `User_Name` varchar(255) NOT NULL,
  `gmail` varchar(255) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`User_id`, `User_Name`, `gmail`, `password`, `role`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'trinhdomg114z2gmail.com', '123456', 'admin', 'active', '2024-11-25 07:59:23', '2024-11-25 07:59:23'),
(6, 'admin', 'trinhdomg11412@gmail.com', '123456', 'user', 'active', '2024-12-17 03:16:49', '2024-12-17 03:16:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`Brand_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `CartShopping_id` (`CartShopping_id`);

--
-- Indexes for table `cartshoppings`
--
ALTER TABLE `cartshoppings`
  ADD PRIMARY KEY (`CartShopping_id`),
  ADD KEY `User_id` (`User_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `Brand_id` (`Brand_id`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`size_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`User_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `Brand_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cartshoppings`
--
ALTER TABLE `cartshoppings`
  MODIFY `CartShopping_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `size_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `User_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`CartShopping_id`) REFERENCES `cartshoppings` (`CartShopping_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `cartshoppings`
--
ALTER TABLE `cartshoppings`
  ADD CONSTRAINT `cartshoppings_ibfk_1` FOREIGN KEY (`User_id`) REFERENCES `users` (`User_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`Brand_id`) REFERENCES `brands` (`Brand_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `sizes`
--
ALTER TABLE `sizes`
  ADD CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

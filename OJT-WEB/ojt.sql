-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2023 at 04:15 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ojt`
--

-- --------------------------------------------------------

--
-- Table structure for table `building`
--

CREATE TABLE `building` (
  `building_id` int(255) NOT NULL,
  `building_name` varchar(255) DEFAULT NULL,
  `building_location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `building`
--

INSERT INTO `building` (`building_id`, `building_name`, `building_location`) VALUES
(2, 'CEA', 'New Site'),
(3, 'CIT', 'New Site'),
(4, 'CAS', 'New Site'),
(5, 'COE', 'Old Site');

-- --------------------------------------------------------

--
-- Table structure for table `colleges`
--

CREATE TABLE `colleges` (
  `colleges_ID` int(255) NOT NULL,
  `colleges_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `colleges`
--

INSERT INTO `colleges` (`colleges_ID`, `colleges_name`) VALUES
(4, 'CEA'),
(5, 'COE'),
(6, 'CAS'),
(7, 'CIT');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_ID` int(255) NOT NULL,
  `colleges_ID` int(255) NOT NULL,
  `course_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_ID`, `colleges_ID`, `course_name`) VALUES
(9, 6, 'BSIT'),
(10, 5, 'BTLEDS'),
(11, 6, 'BSIS'),
(12, 7, 'BSE');

-- --------------------------------------------------------

--
-- Table structure for table `emergency`
--

CREATE TABLE `emergency` (
  `emergency_id` int(255) NOT NULL,
  `id` int(255) DEFAULT NULL,
  `room_id` int(255) DEFAULT NULL,
  `emergency_level` int(5) DEFAULT NULL,
  `status` int(3) DEFAULT NULL,
  `emergency_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emergency`
--

INSERT INTO `emergency` (`emergency_id`, `id`, `room_id`, `emergency_level`, `status`, `emergency_date`) VALUES
(36, 28, 6, 5, 2, '2023-03-20 02:34:00'),
(41, 28, 6, 3, 2, '2023-04-11 13:20:23'),
(42, 28, 14, 5, 2, '2023-05-10 08:02:26'),
(43, 28, 13, 3, 2, '2023-05-12 05:03:07'),
(44, 28, 14, 5, 2, '2023-05-13 05:40:35'),
(45, 28, 6, 3, 2, '2023-05-13 05:42:31'),
(46, 28, 9, 3, 2, '2023-05-13 05:43:45'),
(47, 28, 6, 3, 2, '2023-05-13 05:45:20'),
(48, 28, 11, 5, 2, '2023-05-13 05:52:05'),
(49, 28, 12, 5, 2, '2023-05-13 05:58:44'),
(50, 28, 6, 3, 2, '2023-05-13 05:59:21'),
(51, 28, 9, 5, 2, '2023-05-13 06:03:54'),
(52, 28, 10, 4, 1, '2023-05-13 09:31:30'),
(53, 28, 10, 5, 2, '2023-05-15 06:23:59'),
(54, 28, 11, 5, 1, '2023-05-17 14:08:23'),
(55, 28, 14, 4, 1, '2023-05-23 06:18:33');

-- --------------------------------------------------------

--
-- Table structure for table `emergency_result`
--

CREATE TABLE `emergency_result` (
  `emergencyResultID` int(255) NOT NULL,
  `emergency_id` int(255) DEFAULT NULL,
  `rescuer_id` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emergency_result`
--

INSERT INTO `emergency_result` (`emergencyResultID`, `emergency_id`, `rescuer_id`) VALUES
(2, 52, 6),
(3, 55, 6),
(4, 55, 6),
(5, 55, 6),
(6, 55, 6),
(7, 55, 6),
(8, 55, 6),
(9, 55, 6),
(10, 55, 6),
(11, 55, 6),
(12, 55, 6),
(13, 55, 6);

-- --------------------------------------------------------

--
-- Table structure for table `emergency_tools`
--

CREATE TABLE `emergency_tools` (
  `emergency_tools_ID` int(255) NOT NULL,
  `emergency_id` int(255) NOT NULL,
  `tool_ID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emergency_tools`
--

INSERT INTO `emergency_tools` (`emergency_tools_ID`, `emergency_id`, `tool_ID`) VALUES
(1, 55, 4),
(2, 55, 4),
(3, 55, 5),
(4, 55, 4),
(5, 55, 4),
(6, 55, 5),
(7, 55, 4),
(8, 55, 5),
(9, 55, 4),
(10, 55, 5);

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `room_id` int(255) NOT NULL,
  `building_id` int(255) DEFAULT NULL,
  `room_num` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`room_id`, `building_id`, `room_num`) VALUES
(6, 2, '60'),
(7, 2, '202'),
(9, 2, '301'),
(10, 2, '65'),
(11, 2, '98'),
(12, 2, '87'),
(13, 2, '67'),
(14, 5, '23'),
(15, 5, '1'),
(16, 3, '60');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` varchar(255) NOT NULL,
  `id` int(255) NOT NULL,
  `year_level` int(2) NOT NULL,
  `course_ID` int(255) NOT NULL,
  `register_datetime` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `id`, `year_level`, `course_ID`, `register_datetime`) VALUES
('010-69-8210', 37, 1, 12, '2023-05-24 05:02:32'),
('2018-6869-A', 35, 3, 9, '2023-04-24 02:26:28'),
('2019-1029-A', 34, 1, 9, '2023-03-08 02:39:26'),
('2019-3568-A', 31, 2, 9, '2023-02-25 02:49:01'),
('2019-4746-A', 28, 3, 10, '2023-02-24 11:58:22'),
('2019-4774-A', 30, 4, 10, '2023-02-25 02:33:29'),
('2019-4790-A', 27, 5, 10, '2023-02-23 01:51:50'),
('2019-6754-A', 36, 1, 9, '2023-05-12 04:41:35'),
('2019-7867-A', 33, 2, 9, '2023-02-27 01:47:47'),
('2019-8785-A', 29, 1, 10, '2023-02-24 12:23:09');

-- --------------------------------------------------------

--
-- Table structure for table `tool`
--

CREATE TABLE `tool` (
  `tool_ID` int(255) NOT NULL,
  `tool_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tool`
--

INSERT INTO `tool` (`tool_ID`, `tool_name`) VALUES
(4, 'Wheel Chair'),
(5, 'Hakwat2');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(250) NOT NULL,
  `role` varchar(10) NOT NULL,
  `user_status` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `role`, `user_status`) VALUES
(6, 'Alucard Bennedets', 'alucard12345', 'alucard12345@gmail.com', '$2y$10$/8LPbX1yLeik25ZIrIA5MeY9U7IGXC2MmDlap70L8Q3v1/T05Hfo6', 'rescuer', 1),
(11, 'Cj Carl Duting', 'CJDuting123', 'cjcarl.duting@students.isatu.edu.ph', '$2y$10$cMThXpANR7HSnNPcW6YIfe0rkUBJV1gxOddkgLaj/Ffn/5c01bmXG', 'admin', 1),
(27, 'Ruy Embiado ', 'Gwapoxander123@gmail.com', 'Gwapoxander123@gmail.com', '$2y$10$YjADxeW4cvFp1/QgTZF3bO4WQb/s0/HfTHqY2cZJmWU/bDfgkaPWy', 'student', 1),
(28, 'Alexander Novo', 'Alexander123', 'alexandebbanr.novo@students.isatu.edu.ph', '$2y$10$nUCDur.I7RJTknIW9Z.s0e9QWmxk4mggAHeKKoLP.wvusj/8S4Bku', 'student', 1),
(29, 'Ernalyn Tabuada', 'ernalyn.tabuada@students.isatu.edu.ph', 'ernalyn.tabuada@students.isatu.edu.ph', '$2y$10$Hm8KzYDX3CRgb1zKwesZNOJ5zRup2bUMdMyMj27mwLEH1j6j9yVie', 'student', 1),
(30, 'Ruy Embiado', 'ruy@gmail.com', 'ruy@gmail.com', '$2y$10$fAzBTLBYOoOm4J/FvsFwzOzxq336r9npVLkDU3nMJkUcZd0oOpyoO', 'student', 1),
(31, 'Marvin Hallara', 'marvin@gmail.com', 'marvin@gmail.com', '$2y$10$M.r3Z33xodniBDNmYxEiqeSuyQ.Kad/FUMtMazsDYtqCKZS7QCIsu', 'student', 1),
(32, 'Ruden Buensuceso', 'ruden123@gmail.com', 'ruden123@gmail.com', '$2y$10$dhSb/XcXPsUd1iQzSWBLOOldcSeXARVDurUGvLSnhkpQeDpGW0n6y', 'admin', 1),
(33, 'Jessa Pasapak GC', 'jessa@gmail.com', 'jessa@gmail.com', '$2y$10$fH4JQqnjLCHDOp46LcyFq.f11QYthwu3NXv7zAPuCFjC/alG3M7rG', 'student', 1),
(34, 'JCarlo', 'jcarlo@gmail.com', 'jcarlo@gmail.com', '$2y$10$DT7uLCRASnHAHhK2cwKyPuwYvOHcMWrCozo5vt9Qk44epGjHRtZh6', 'student', 1),
(35, 'Marian Rivera', 'Rivera123', 'Rivera123@gmail.com', '$2y$10$gZSBsqmsSqK32MeBSJfcje4At55w2TobohuN1Nvj5FBCiELNfmjy6', 'student', 0),
(36, 'Ruy Embiado', 'ruy12345@gmail.com', 'ruy12345@gmail.com', '$2y$10$Ld7MQ7.6hMHvJ0uQJ554Ye86N3KU1W/rAlOgUbbuTS7wyB2nMKnyq', 'student', 0),
(37, 'Tana Soto', 'gewuv', 'zefacudyf@mailinator.com', '$2y$10$WCnv9drqsQ4NzZEdGKuXAeyWHtuhZ5Drc9jCQ.M.nva1F6ag0zPq.', 'student', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `building`
--
ALTER TABLE `building`
  ADD PRIMARY KEY (`building_id`);

--
-- Indexes for table `colleges`
--
ALTER TABLE `colleges`
  ADD PRIMARY KEY (`colleges_ID`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_ID`),
  ADD KEY `colleges_ID` (`colleges_ID`);

--
-- Indexes for table `emergency`
--
ALTER TABLE `emergency`
  ADD PRIMARY KEY (`emergency_id`),
  ADD KEY `id` (`id`),
  ADD KEY `room_id` (`room_id`);

--
-- Indexes for table `emergency_result`
--
ALTER TABLE `emergency_result`
  ADD PRIMARY KEY (`emergencyResultID`),
  ADD KEY `emergency_id` (`emergency_id`);

--
-- Indexes for table `emergency_tools`
--
ALTER TABLE `emergency_tools`
  ADD PRIMARY KEY (`emergency_tools_ID`),
  ADD KEY `emergency_id` (`emergency_id`),
  ADD KEY `tool_ID` (`tool_ID`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`room_id`),
  ADD KEY `building_id` (`building_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `id` (`id`),
  ADD KEY `course_ID` (`course_ID`);

--
-- Indexes for table `tool`
--
ALTER TABLE `tool`
  ADD PRIMARY KEY (`tool_ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `building`
--
ALTER TABLE `building`
  MODIFY `building_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `colleges`
--
ALTER TABLE `colleges`
  MODIFY `colleges_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `emergency`
--
ALTER TABLE `emergency`
  MODIFY `emergency_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT for table `emergency_result`
--
ALTER TABLE `emergency_result`
  MODIFY `emergencyResultID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `emergency_tools`
--
ALTER TABLE `emergency_tools`
  MODIFY `emergency_tools_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `room_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tool`
--
ALTER TABLE `tool`
  MODIFY `tool_ID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `course`
--
ALTER TABLE `course`
  ADD CONSTRAINT `course_ibfk_1` FOREIGN KEY (`colleges_ID`) REFERENCES `colleges` (`colleges_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `emergency`
--
ALTER TABLE `emergency`
  ADD CONSTRAINT `emergency_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `emergency_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `room` (`room_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `emergency_result`
--
ALTER TABLE `emergency_result`
  ADD CONSTRAINT `emergency_result_ibfk_1` FOREIGN KEY (`emergency_id`) REFERENCES `emergency` (`emergency_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `emergency_tools`
--
ALTER TABLE `emergency_tools`
  ADD CONSTRAINT `emergency_tools_ibfk_1` FOREIGN KEY (`tool_ID`) REFERENCES `tool` (`tool_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `emergency_tools_ibfk_2` FOREIGN KEY (`emergency_id`) REFERENCES `emergency` (`emergency_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `room`
--
ALTER TABLE `room`
  ADD CONSTRAINT `room_ibfk_1` FOREIGN KEY (`building_id`) REFERENCES `building` (`building_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`course_ID`) REFERENCES `course` (`course_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

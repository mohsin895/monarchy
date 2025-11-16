-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2025 at 12:21 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ojus`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_post_id` int(11) DEFAULT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `resume` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `coverLetter` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `job_post_id`, `fullName`, `email`, `resume`, `phone`, `coverLetter`, `created_at`, `updated_at`) VALUES
(1, 1, 'Mohsin', 'mohsinsikder895@gmail.com', 'resumes/1763269686_filtered_result (10).pdf', '01715486265', 'dsfesrfdrg', '2025-11-15 23:08:06', '2025-11-15 23:08:06'),
(2, 1, 'Mohsin', 'mohsinsikder895@gmail.com', 'resumes/1763269884_filtered_result (9).pdf', '01715486265', 'wr3e4et5rt', '2025-11-15 23:11:24', '2025-11-15 23:11:24'),
(3, 1, 'Mohsin', 'mohsinsikder895@gmail.com', 'resumes/1763270097_filtered_result (8).pdf', '01715486265', 'retfretgry', '2025-11-15 23:14:57', '2025-11-15 23:14:57'),
(4, 1, 'Mohsin', 'mohsinsikder895@gmail.com', 'resumes/1763270336_filtered_result (10).pdf', '01715486265', 'dsfcsf', '2025-11-15 23:18:56', '2025-11-15 23:18:56');

-- --------------------------------------------------------

--
-- Table structure for table `general_settings`
--

CREATE TABLE `general_settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_name` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `videoUrl` varchar(255) DEFAULT NULL,
  `favicon` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `currency` varchar(255) DEFAULT NULL,
  `position` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `seo_title` varchar(255) DEFAULT NULL,
  `seo_description` varchar(255) DEFAULT NULL,
  `google_pixle` varchar(255) DEFAULT NULL,
  `facebook_pixle` varchar(255) DEFAULT NULL,
  `fb` varchar(255) DEFAULT NULL,
  `wp` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `youtube` varchar(255) DEFAULT NULL,
  `linkdi` varchar(255) DEFAULT NULL,
  `term_condition` longtext DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `footer_content` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `general_settings`
--

INSERT INTO `general_settings` (`id`, `site_name`, `logo`, `videoUrl`, `favicon`, `email`, `phone`, `currency`, `position`, `url`, `seo_title`, `seo_description`, `google_pixle`, `facebook_pixle`, `fb`, `wp`, `twitter`, `youtube`, `linkdi`, `term_condition`, `address`, `footer_content`, `created_at`, `updated_at`) VALUES
(1, 'Royal Monarchs', 'uploads/images/projects/1763225934.png', 'https://www.youtube.com/watch?v=xR6zAFleN1c', NULL, NULL, NULL, NULL, 'Please select posisiton', NULL, 'Royal Monarchs', 'ncvf vfdvnfd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2025-11-15 10:58:54', '2025-11-16 04:36:54');

-- --------------------------------------------------------

--
-- Table structure for table `job_posts`
--

CREATE TABLE `job_posts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `jobType` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `quolification` longtext DEFAULT NULL,
  `lastApplyDate` date DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_posts`
--

INSERT INTO `job_posts` (`id`, `title`, `jobType`, `address`, `description`, `quolification`, `lastApplyDate`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Marketing Executive', 'Full time', 'Noida', '<div style=\"color: rgb(204, 204, 204);\" courier=\"\" new\",=\"\" monospace;=\"\" font-size:=\"\" 14px;=\"\" line-height:=\"\" 19px;=\"\" white-space:=\"\" pre;\"=\"\"><div style=\"line-height: 19px;\"><span style=\"background-color: rgb(0, 0, 0);\"><span style=\"color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\">At Royal Monarch, creativity brings brands to life. Our company is growing fast, and we’re looking for passionate marketing professionals to join our mission-driven team.</span><br style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5); color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\"><br style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5); color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\"><span style=\"color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\">You’ll be working closely with our brand team to develop data-driven strategies and lead marketing campaigns across digital and social channels. You’ll collaborate with design, content, and analytics teams to deliver measurable growth.</span><br style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5); color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\"><br style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5); color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\"><span style=\"color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; font-size: 14px;\">This is your chance to work with a dynamic group of experts, where your ideas will shape the next era of our marketing efforts.</span></span></div></div>', '<div style=\"color: rgb(204, 204, 204); background-color: rgb(31, 31, 31); font-family: Consolas, \" courier=\"\" new\",=\"\" monospace;=\"\" font-size:=\"\" 14px;=\"\" line-height:=\"\" 19px;=\"\" white-space:=\"\" pre;\"=\"\"><ul class=\"list-disc list-inside text-sm text-gray-300 leading-relaxed\" style=\"border: 0px solid rgb(45, 55, 72); margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5); list-style-position: inside; list-style-image: initial; font-size: 14px; line-height: 1.625; --tw-leading: 1.625; color: lab(85.1236 -0.612259 -3.7138); font-family: Geist, &quot;Geist Fallback&quot;; background-color: rgb(0, 0, 0);\"><li style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5);\">Bachelor’s degree in Marketing, Business, or related field.</li><li style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5);\">1–3 years of experience in marketing, branding, or advertising.</li><li style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5);\">Strong understanding of digital marketing tools &amp; analytics.</li><li style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5);\">Excellent communication skills.</li><li style=\"border: 0px solid rgb(45, 55, 72); margin: 0px; padding: 0px; outline-color: oklab(0.626818 0.129727 -0.192971 / 0.5);\">Creative, self-motivated, and detail-oriented professional.</li></ul></div>', NULL, 'active', '2025-11-15 22:09:57', '2025-11-15 22:11:22');

-- --------------------------------------------------------

--
-- Table structure for table `parks`
--

CREATE TABLE `parks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parks`
--

INSERT INTO `parks` (`id`, `image`, `title`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'uploads/images/projects/1763238898.png', 'Everyone has a positive voice.', 'Innovation doesn’t know hierarchy. We make sure everyone is heard, considered and respected.', 'active', '2025-11-15 14:33:20', '2025-11-15 14:34:58'),
(2, 'uploads/images/projects/1763238953.png', 'We’re Positive. You’ll love it!', 'Random prank wars, team hikes, Chili Cook-offs, Pretty cool holidays and summer parties. Need we say more?', 'active', '2025-11-15 14:35:53', '2025-11-15 14:35:53'),
(3, 'uploads/images/projects/1763239006.png', 'We’re Flexible!', 'Enjoy the ability to take as much personal and vacation time as needed with advance approval. Sometimes people work from Home.', 'active', '2025-11-15 14:36:46', '2025-11-15 14:36:46'),
(4, 'uploads/images/projects/1763239117.png', 'Make your move.', 'Come for a financial job. Stay for a tech career. We support exploring new fields right under our own roof.', 'active', '2025-11-15 14:37:56', '2025-11-15 14:38:37'),
(5, 'uploads/images/projects/1763239164.png', 'All Inclusive.', 'Be yourself. That’s who we’re hiring. Our culture celebrates and supports the difference that make each of us unique. It’s how we build better products for the world.', 'active', '2025-11-15 14:39:24', '2025-11-15 14:39:24'),
(6, 'uploads/images/projects/1763239225.png', 'We’ve Got You Covered.', 'Our benefits include healthcare plan, a great retirement plan, backup childcare, education stipends and so much more.', 'active', '2025-11-15 14:40:25', '2025-11-15 14:40:25');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `designation` longtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `title`, `image`, `designation`, `created_at`, `updated_at`) VALUES
(1, 'Rahul Patel', 'uploads/images/projects/1763265315.png', 'Marketing Lead', '2025-11-15 21:55:15', '2025-11-16 03:27:49'),
(2, 'Rahul Patel', NULL, 'Tech Lead', '2025-11-16 03:28:20', '2025-11-16 03:28:20'),
(3, 'Rahul Patel', NULL, 'Operations Lead', '2025-11-16 03:28:44', '2025-11-16 03:28:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `general_settings`
--
ALTER TABLE `general_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_posts`
--
ALTER TABLE `job_posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parks`
--
ALTER TABLE `parks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `general_settings`
--
ALTER TABLE `general_settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `job_posts`
--
ALTER TABLE `job_posts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `parks`
--
ALTER TABLE `parks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

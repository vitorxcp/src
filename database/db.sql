CREATE DATABASE  IF NOT EXISTS `loja` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `loja`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: loja
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `armazenamento`
--

DROP TABLE IF EXISTS `armazenamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armazenamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(180) NOT NULL,
  `velocidade` varchar(45) NOT NULL,
  `marca` varchar(180) NOT NULL,
  `modelo` varchar(180) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armazenamento`
--

LOCK TABLES `armazenamento` WRITE;
/*!40000 ALTER TABLE `armazenamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `armazenamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fontes`
--

DROP TABLE IF EXISTS `fontes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fontes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(180) NOT NULL,
  `marca` varchar(180) NOT NULL,
  `potencia` varchar(50) NOT NULL,
  `conectores` varchar(200) NOT NULL,
  `voltagem` varchar(80) NOT NULL,
  `modelo` varchar(180) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fontes`
--

LOCK TABLES `fontes` WRITE;
/*!40000 ALTER TABLE `fontes` DISABLE KEYS */;
/*!40000 ALTER TABLE `fontes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gabinete`
--

DROP TABLE IF EXISTS `gabinete`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gabinete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(180) NOT NULL,
  `medidas` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gabinete`
--

LOCK TABLES `gabinete` WRITE;
/*!40000 ALTER TABLE `gabinete` DISABLE KEYS */;
/*!40000 ALTER TABLE `gabinete` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memoria`
--

DROP TABLE IF EXISTS `memoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(180) NOT NULL,
  `DDR` varchar(180) NOT NULL,
  `hz` varchar(100) NOT NULL,
  `modelo` varchar(180) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memoria`
--

LOCK TABLES `memoria` WRITE;
/*!40000 ALTER TABLE `memoria` DISABLE KEYS */;
/*!40000 ALTER TABLE `memoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monitor`
--

DROP TABLE IF EXISTS `monitor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `monitor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(180) NOT NULL,
  `hz` varchar(50) NOT NULL,
  `conectores` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monitor`
--

LOCK TABLES `monitor` WRITE;
/*!40000 ALTER TABLE `monitor` DISABLE KEYS */;
/*!40000 ALTER TABLE `monitor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placa_mae`
--

DROP TABLE IF EXISTS `placa_mae`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placa_mae` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `DDR` varchar(50) NOT NULL,
  `socket` varchar(50) NOT NULL,
  `barramento` varchar(45) NOT NULL,
  `chipset` varchar(70) NOT NULL,
  `velocidade_sata` varchar(50) NOT NULL,
  `modelo` varchar(180) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placa_mae`
--

LOCK TABLES `placa_mae` WRITE;
/*!40000 ALTER TABLE `placa_mae` DISABLE KEYS */;
/*!40000 ALTER TABLE `placa_mae` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placa_video`
--

DROP TABLE IF EXISTS `placa_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placa_video` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(150) NOT NULL,
  `DDR` varchar(150) NOT NULL,
  `barramento` varchar(50) NOT NULL,
  `modelo` varchar(180) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placa_video`
--

LOCK TABLES `placa_video` WRITE;
/*!40000 ALTER TABLE `placa_video` DISABLE KEYS */;
/*!40000 ALTER TABLE `placa_video` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processador`
--

DROP TABLE IF EXISTS `processador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `processador` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(180) NOT NULL,
  `nucleos` int NOT NULL,
  `socket` varchar(80) NOT NULL,
  `modelo` varchar(180) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processador`
--

LOCK TABLES `processador` WRITE;
/*!40000 ALTER TABLE `processador` DISABLE KEYS */;
/*!40000 ALTER TABLE `processador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'loja'
--

--
-- Dumping routines for database 'loja'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-10 14:46:24

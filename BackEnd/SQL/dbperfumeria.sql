-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-04-2026 a las 00:13:53
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbperfumeria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfumes`
--

CREATE TABLE `perfumes` (
  `id` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Precio` float NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Marca` varchar(25) NOT NULL,
  `Proveedor` varchar(30) NOT NULL,
  `Tipo` varchar(25) NOT NULL,
  `Linea` varchar(25) NOT NULL,
  `Aroma_Salida` varchar(150) NOT NULL,
  `Aroma_Corazon` varchar(150) NOT NULL,
  `Aroma_Fondo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perfumes`
--

INSERT INTO `perfumes` (`id`, `Nombre`, `Precio`, `Cantidad`, `Marca`, `Proveedor`, `Tipo`, `Linea`, `Aroma_Salida`, `Aroma_Corazon`, `Aroma_Fondo`) VALUES
(12345, 'Nautilus', 500, 6, 'Nautilus', 'Proveedor Ejemplo', 'Agua de tocador', 'Hombre', 'Aroma de salida ejemplo', 'Aroma corazon ejemplo', 'Aroma de fondo ejemplo'),
(67890, 'Perfume 2', 650.5, 3, 'Perfumessss', 'Proveedor Ejemplo 2', 'Agua de tocador', 'Recta', 'Aroma de salida ejemplo 2', 'Aroma corazon ejemplo 2', 'Aroma de fondo ejemplo 2');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `perfumes`
--
ALTER TABLE `perfumes`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

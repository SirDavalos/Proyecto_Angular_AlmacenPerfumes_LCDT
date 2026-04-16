-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-04-2026 a las 06:56:33
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
  `nombre` varchar(50) NOT NULL,
  `precio` float NOT NULL,
  `cantidad` int(11) NOT NULL,
  `marca` varchar(25) NOT NULL,
  `proveedor` varchar(30) NOT NULL,
  `tipo` varchar(25) NOT NULL,
  `linea` varchar(25) NOT NULL,
  `aroma_salida` varchar(150) NOT NULL,
  `aroma_corazon` varchar(150) NOT NULL,
  `aroma_fondo` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `perfumes`
--

INSERT INTO `perfumes` (`id`, `nombre`, `precio`, `cantidad`, `marca`, `proveedor`, `tipo`, `linea`, `aroma_salida`, `aroma_corazon`, `aroma_fondo`) VALUES
(1, 'Nautilus', 500, 6, 'Nautilus', 'Proveedor Ejemplo', 'Agua de tocador', 'Hombre', 'Aroma de salida ejemplo', 'Aroma corazon ejemplo', 'Aroma de fondo ejemplo'),
(2, 'Perfume 2', 650.5, 3, 'Perfumessss', 'Proveedor Ejemplo 2', 'Agua de tocador', 'Recta', 'Aroma de salida ejemplo 2', 'Aroma corazon ejemplo 2', 'Aroma de fondo ejemplo 2');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedores`
--

CREATE TABLE `proveedores` (
  `idProveedor` int(11) NOT NULL,
  `nombre` varchar(64) NOT NULL,
  `correo` varchar(64) NOT NULL,
  `telefono` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedores`
--

INSERT INTO `proveedores` (`idProveedor`, `nombre`, `correo`, `telefono`) VALUES
(1, 'Bellaroma', 'contacto@bellaroma.mx\r\n', '9931310889');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `perfumes`
--
ALTER TABLE `perfumes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  ADD PRIMARY KEY (`idProveedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `perfumes`
--
ALTER TABLE `perfumes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `proveedores`
--
ALTER TABLE `proveedores`
  MODIFY `idProveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

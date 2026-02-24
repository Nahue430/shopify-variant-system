# 📦 Natulim – Desafío Técnico Shopify - ESPAÑOL

## 📌 Descripción General

Este repositorio contiene mi implementación de un desafío técnico realizado en Shopify.

El objetivo fue desarrollar un sistema dinámico de manejo de variantes de producto utilizando **Shopify Liquid** y **JavaScript Vanilla**, asegurando:

- Selección correcta de variantes
- Actualización de precio en tiempo real
- Validación antes de agregar el producto al carrito

La solución fue implementada directamente dentro de un entorno de tema Shopify.

---

## 🚀 Funcionalidades Implementadas

- Detección y matching dinámico de variantes
- Actualización automática de precio según la opción seleccionada
- Validación previa al envío del formulario de compra
- Sincronización entre los datos del producto (`product.variants`) y el estado del frontend
- Manejo estructurado de eventos del DOM

---

## 🧠 Enfoque Técnico

### 🔹 Capa Liquid

- Serialización de `product.variants` en formato JSON
- Inyección de datos del producto al frontend
- Estructuración del marcado para permitir selección dinámica de opciones

### 🔹 Capa JavaScript

- Algoritmo de búsqueda y matching de variantes
- Manejo del estado de las opciones seleccionadas
- Actualización dinámica de precio y disponibilidad
- Lógica de validación para evitar combinaciones inválidas

---

## 🛠 Tecnologías Utilizadas

- Shopify Liquid  
- JavaScript (Vanilla)  
- HTML  
- CSS  

---

## 🧩 Contexto

La implementación se realizó respetando las limitaciones propias de Shopify (estructura de tema, objeto `product`, comportamiento del carrito, etc.), priorizando claridad, mantenimiento y comportamiento predecible del sistema.

No se utilizó ningún framework externo, manteniendo la solución liviana y alineada con la arquitectura nativa de Shopify.

---

## 👨‍💻 Autor

Nahuel González  
Desarrollador Full-Stack  
React | Shopify | .NET | Automatización con IA


# 📦 Natulim – Shopify Technical Challenge - ENGLISH

## 📌 Overview

This repository contains my implementation of a Shopify technical challenge.

The objective was to develop a dynamic product variant management system using **Shopify Liquid** and **Vanilla JavaScript**, ensuring:

- Accurate variant selection  
- Real-time price updates  
- Validation before adding the product to the cart  

The solution was implemented directly within a Shopify theme environment.

---

## 🚀 Implemented Features

- Dynamic variant detection and matching  
- Automatic price update based on selected options  
- Pre-submit validation of purchase form  
- Synchronization between product data (`product.variants`) and frontend state  
- Structured DOM event handling  

---

## 🧠 Technical Approach

### 🔹 Liquid Layer

- Serialization of `product.variants` into JSON format  
- Injection of product data into the frontend  
- Structured markup to enable dynamic option selection  

### 🔹 JavaScript Layer

- Variant search and matching algorithm  
- Selected options state management  
- Dynamic update of price and availability  
- Validation logic to prevent invalid combinations  

---

## 🛠 Technologies Used

- Shopify Liquid  
- JavaScript (Vanilla)  
- HTML  
- CSS  

---

## 🧩 Context

The implementation was developed while respecting Shopify’s inherent constraints (theme structure, `product` object, cart behavior, etc.), prioritizing clarity, maintainability, and predictable system behavior.

No external frameworks were used, keeping the solution lightweight and aligned with Shopify’s native architecture.

---

## 👨‍💻 Author

Nahuel González  
Full-Stack Developer  
React | Shopify | .NET | AI Automation

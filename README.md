# 📦 Natulim – Desafío Técnico Shopify - ESPAÑOL

## 📌 Descripción General

Este repositorio contiene mi implementación de un desafío técnico realizado en Shopify.

El objetivo fue extender el sistema nativo de variantes de Shopify para mostrar contenido dinámico específico por variante, utilizando **Shopify Liquid** y **JavaScript Vanilla**, asegurando:

- Renderizado dinámico de contenido según la variante seleccionada  
- Actualización automática del contenido al cambiar la variante  
- Comportamiento consistente con el sistema nativo del tema  

La solución fue implementada directamente dentro de un entorno de tema Shopify, sin alterar la lógica interna de selección de variantes.

---

## 🚀 Funcionalidades Implementadas

- Renderizado dinámico de características asociadas a cada variante  
- Uso de **metafields personalizados por variante**  
- Sincronización con el selector nativo de variantes de Shopify  
- Actualización automática del contenido ante cambios reales de variante  
- Manejo estructurado y seguro del DOM  

---

## 🧠 Enfoque Técnico

### 🔹 Capa Liquid

- Iteración sobre `product.variants`
- Extracción de metafields personalizados (`variant.metafields.custom.variant_features`)
- Serialización controlada de los metafields necesarios
- Construcción de un mapa estructurado `variantId → features`
- Inyección de dicha estructura en el frontend mediante `window.variantFeatures`

### 🔹 Capa JavaScript

- Escucha de eventos reales de cambio de variante (`input[name="id"]`)
- Renderizado dinámico del contenido asociado al `variantId` seleccionado
- Actualización segura del DOM
- Renderizado inicial al cargar la página para mantener consistencia visual

---

## 🛠 Tecnologías Utilizadas

- Shopify Liquid  
- JavaScript (Vanilla)  
- HTML  
- CSS  

---

## 🧩 Contexto

La implementación respeta completamente la arquitectura nativa de Shopify (estructura de tema, objeto `product`, selector de variantes y comportamiento del carrito).

No se implementó un sistema de matching manual de combinaciones de variantes, sino que se extendió el comportamiento nativo mediante el uso de metafields personalizados, manteniendo la solución liviana, mantenible y alineada con las mejores prácticas de Shopify.

No se utilizó ningún framework externo.

---

## 👨‍💻 Autor

Nahuel González  
Desarrollador Full-Stack  



---

# 📦 Natulim – Shopify Technical Challenge - ENGLISH

## 📌 Overview

This repository contains my implementation of a Shopify technical challenge.

The objective was to extend Shopify’s native variant system to dynamically render variant-specific content using **Shopify Liquid** and **Vanilla JavaScript**, ensuring:

- Dynamic rendering based on the selected variant  
- Automatic content updates on real variant changes  
- Full compatibility with Shopify’s native theme behavior  

The solution was implemented directly within a Shopify theme environment without modifying Shopify’s internal variant selection logic.

---

## 🚀 Implemented Features

- Dynamic rendering of variant-specific features  
- Usage of custom variant-level metafields  
- Synchronization with Shopify’s native variant selector  
- Automatic content updates on actual variant changes  
- Structured and safe DOM handling  

---

## 🧠 Technical Approach

### 🔹 Liquid Layer

- Iteration over `product.variants`
- Extraction of custom metafields (`variant.metafields.custom.variant_features`)
- Controlled serialization of required metafield data
- Creation of a structured `variantId → features` map
- Injection into the frontend via `window.variantFeatures`

### 🔹 JavaScript Layer

- Listening to real Shopify variant change events (`input[name="id"]`)
- Dynamic rendering based on selected `variantId`
- Safe DOM updates
- Initial render on page load to ensure visual consistency

---

## 🛠 Technologies Used

- Shopify Liquid  
- JavaScript (Vanilla)  
- HTML  
- CSS  

---

## 🧩 Context

The implementation fully respects Shopify’s native architecture (theme structure, `product` object, variant selector behavior, cart logic).

No manual variant matching algorithm was implemented. Instead, the native system was extended using custom metafields, keeping the solution lightweight, maintainable, and aligned with Shopify best practices.

No external frameworks were used.

---

## 👨‍💻 Author

Nahuel González  
Full-Stack Developer  


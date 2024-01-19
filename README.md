# Prueba

[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue.svg)](https://expressjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue.svg)](https://www.typescriptlang.org/)
[![dotenv](https://img.shields.io/badge/dotenv-Latest-yellow.svg)](https://www.npmjs.com/package/dotenv)
[![env-var](https://img.shields.io/badge/env--var-Latest-yellow.svg)](https://www.npmjs.com/package/env-var)
[![axios](https://img.shields.io/badge/axios-Latest-blue.svg)](https://www.npmjs.com/package/axios)

Crea una aplicación Node.js que consuma la API de GitHub y muestre los 10 repositorios
más populares del usuario "google".

## Instalación

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Ejecuta `npm run start` para iniciar.
4. Ir a la ruta `/repos` para obtener los repositorios

## Configuración

Asegúrate de configurar las variables de entorno antes de ejecutar la aplicación.

## Ejercicio 2

`function f(x, y, z) {
 let a = x + y;
 let b = a * z;
 let c = Math.sin(b);
 return c;
}`

# Resolucion

`function calculateSinusoidalValue(initialValue, amplitude, frequency) {
  let sumResult = initialValue + amplitude;
  let productResult = sumResult * frequency;
  let sinusoidalResult = Math.sin(productResult);
  return sinusoidalResult;
}`

## Ejercicio 3

Escribe una función que tome un número entero como entrada y devuelva un array con
todos los números enteros impares desde 1 hasta el número de entrada.

Por ejemplo, si el
número de entrada es 9, la función debería devolver `[1, 3, 5, 7, 9]`

# Resolucion

`function getOddNumbers(n) {
  let oddNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}`

## Ejercicio 4

Imagina que estás construyendo un sistema de gestión de vídeos. Diseña un modelo de base de datos que incluya tablas para vídeos, autores colaboradores, comentarios, reviews y usuarios. Asegúrate de incluir las claves primarias, las claves foráneas y las restricciones de integridad necesarias para que el sistema funcione correctamente.

# Resolucion

- Tabla de Usuarios:

  - user_id (Clave primaria)
  - username
  - email
  - password

- Tabla de Autores:

  - author_id (Clave primaria)
  - user_id (Clave foránea a la tabla de Usuarios)
  - name
  - bio
  - Tabla de Colaboradores:

* collaborator_id (Clave primaria)
  - user_id (Clave foránea a la tabla de Usuarios)
  - name

- Tabla de Vídeos:

  - video_id (Clave primaria)
  - author_id (Clave foránea a la tabla de Autores)
  - title
  - description
  - upload_date
  - url

- Tabla de Comentarios:

* comment_id (Clave primaria)
* user_id (Clave foránea a la tabla de Usuarios)
* video_id (Clave foránea a la tabla de Vídeos)
* text
* comment_date

- Tabla de Reviews:

  - review_id (Clave primaria)
  - user_id (Clave foránea a la tabla de Usuarios)
  - video_id (Clave foránea a la tabla de Vídeos)
  - rating
  - review_date`

## Ejercicio 5

# estructura de un backend

- Estructura de Carpetas:

  - src/controllers: Contendrá los controladores de Nest.js que gestionan las rutas HTTP y la lógica de presentación.
  - src/services: Aquí se ubicarán los servicios que encapsulan la lógica de negocio.
  - src/repositories: Contendrá los repositorios de TypeORM para interactuar con la base de datos.
  - src/entities: Aquí se colocarán las entidades de TypeORM que representan los modelos de la base de datos.
  - src/dto: Puedes tener objetos de transferencia de datos (DTO) para validar y dar forma a los datos que ingresan o salen de la aplicación.
  - src/interfaces: Incluye interfaces necesarias para definir contratos y tipos de datos utilizados en diferentes partes del sistema.
  - src/middleware: Para los middleware que pueden ser utilizados en la aplicación.
  - src/utils: Para utilidades y funciones auxiliares.
  - src/config: Puedes tener archivos de configuración aquí.

- Patrón de Diseño:
  Patrón Adaptador: Puedes utilizar el patrón adaptador para integrar con servicios externos, como pasarelas de pago, servicios de envío, etc. Crea adaptadores para estas integraciones y desacopla la lógica de negocio de los detalles de implementación de esos servicios.

- Organización del Código:

  - Capa de Presentación (Controladores):

    Gestionaria las solicitudes HTTP y llamaria a los servicios correspondientes.
    Utilizaria DTOs para validar y dar forma a los datos de entrada y salida.
    Desacoplaria la lógica de presentación de la lógica de negocio.

  - Capa de Lógica de Negocio (Servicios):

    Reservaria la lógica del negocio de la aplicación.
    Utilizaria repositorios para interactuar con la base de datos.
    Me comunicaria con la capa de presentación a través de interfaces y DTOs.

  - Capa de Acceso a Datos (Repositorios y TypeORM):

    Gestionaria la interacción con la base de datos.
    Definiria entidades para representar los modelos de la base de datos.
    Implementaria repositorios para realizar operaciones de CRUD.

  - Capa de Adaptadores:

    Para integraciones externas como pasarelas de pago, servicios de envío, etc.
    Desacoplaria la lógica de negocio de los detalles de implementación de los servicios externos.

- Tecnologías:
  Nest.js: Framework de Node.js que facilita la construcción de aplicaciones escalables y mantenibles.
  TypeORM: ORM para Node.js que facilita la interacción con bases de datos relacionales.
  JWT (JSON Web Tokens): Para la autenticación y autorización.
  Swagger: Para documentar la API de forma automática.
  Jest: Para realizar pruebas unitarias y de integración.

## Ejercicio 6

# Nomenclatura

## 1. Bases de Datos

- **Nombres de Bases de Datos:**

  - Deben ser descriptivos y relacionados con el propósito de la base de datos.
  - Evitar acrónimos o abreviaturas confusas.
  - Utilizar notación de mayúsculas y minúsculas para mejorar la legibilidad.

- **Nombres de Tablas:**

  - Ser singular y representar un conjunto de entidades relacionadas.
  - Utilizar notación camelCase o snake_case.

- **Nombres de Columnas:**
  - Ser descriptivos y representar claramente la información que almacenan.
  - Utilizar notación camelCase o snake_case.
  - Evitar nombres genéricos como "data" o "value".

## 2. Variables

- **Variables Locales:**

  - Ser descriptivas y representar la función de la variable.
  - Utilizar notación camelCase.

- **Variables Globales:**
  - Evitar en la medida de lo posible. Priorizar el uso de variables locales.
  - Si es necesario, utilizar notación SCREAMING_SNAKE_CASE.

## 3. Funciones

- **Nombres de Funciones:**

  - Ser descriptivos y representar la acción que realiza la función.
  - Utilizar notación camelCase.

- **Parámetros de Funciones:**
  - Ser descriptivos y representar claramente el propósito del parámetro.
  - Utilizar notación camelCase.

## 4. Clases

- **Nombres de Clases:**

  - Utilizar sustantivos que describan la entidad que representa la clase.
  - Utilizar PascalCase.

- **Métodos de Clases:**
  - Ser descriptivos y representar acciones específicas que realiza la clase.
  - Utilizar notación camelCase.

## 5. Git

- **Nombres de Ramas:**

  - Utilizar nombres descriptivos y relacionados con la tarea o característica que se está desarrollando.
  - Utilizar notación kebab-case.

- **Commits:**
  - Ser descriptivos y claros acerca de los cambios realizados.
  - Utilizar la estructura: "Añadido: [funcionalidad]", "Corregido: [problema]", "Mejorado: [aspecto]".

## 6. Documentación

- **Comentarios:**

  - Utilizar comentarios para explicar el código complejo o que no es inmediatamente obvio.
  - Mantener los comentarios actualizados.

- **Documentación de Código:**
  - Incluir documentación de funciones, clases y módulos utilizando herramientas como JSDoc o similar.

## 7. Archivos

- **Nombres de Archivos:**

  - Ser descriptivos y relacionados con el contenido del archivo.
  - Utilizar notación kebab-case o snake_case.

- **Estructura de Carpetas:**
  - Organizar los archivos de manera lógica y jerárquica.
  - Utilizar nombres que reflejen claramente el propósito de la carpeta.

## 8. Testing

- **Nombres de Pruebas:**
  - Ser descriptivos y representar el comportamiento esperado.
  - Utilizar notación camelCase.

```bash
cp .env.example .env
# Editar el archivo .env con tus valores
```

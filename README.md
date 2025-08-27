# 🔬 API de Elementos Químicos

Bienvenido a la **API de Elementos Químicos**, un proyecto desarrollado con **Node.js, Express y EJS**.  
Con esta API podrás acceder de forma rápida y sencilla a información detallada sobre los elementos de la **tabla periódica**, incluyendo propiedades como:

- Número atómico  
- Símbolo  
- Nombre  
- Grupo  
- Fase (estado físico)  
- Tipo (metal, no metal, metaloide, etc.)

---

## 🚀 Tecnologías utilizadas

- **Node.js** 
- **Express.js**
- **EJS**
- **TailwindCSS** 

---

## 📦 Instalación y ejecución

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/sebsolezzi88/Express-Api-Elementos.git
   cd Express-Api-Elementos
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Ejecutar en desarrollo:

   ```bash
   npm run dev
   ```

4. La API estará disponible en:

   ```
   http://localhost:3000
   ```

---

## 🔗 Rutas disponibles

### 📋 Todos los elementos
```
GET /api/v1/elements/all
```
Devuelve todos los elementos en formato JSON.

---

### 🔎 Buscar por símbolo
```
GET /api/v1/symbol/:symbol
```
Ejemplo:
```
/api/v1/symbol/H
```

---

### 🔎 Buscar por nombre
```
GET /api/v1/name/:name
```
Ejemplo:
```
/api/v1/name/oxygen
```

---

### 🔎 Buscar por número atómico
```
GET /api/v1/atomic-number/:number
```
Ejemplo:
```
/api/v1/atomic-number/8
```

---

### 🔎 Buscar por fase
```
GET /api/v1/phase/:phase
```
Valores posibles:  
- `solid`  
- `liquid`  
- `gas`

Ejemplo:
```
/api/v1/phase/gas
```

---

### 🔎 Buscar por tipo
```
GET /api/v1/type/:type
```
Ejemplo de tipos:  
- `metal`  
- `nonmetal`  
- `metalloid`

---

### 🔎 Buscar por grupo
```
GET /api/v1/group/:group
```
Ejemplo de grupos:  
- `metal`  
- `nonmetal`  
- `metalloid`  
- `noble-gas`  
- `alkali-metal`  
- `halogen`  
- `transition-metal`  
- `alkaline-earth-metal`  
- `other-metal`  
- `actinide`  
- `lanthanide`

---
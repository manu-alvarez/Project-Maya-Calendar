# Usamos la imagen oficial de Node.js versión 20
FROM node:20

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias (package.json y package-lock.json)
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código al contenedor
COPY . .

# Exponemos el puerto que usa tu app (cámbialo si usas otro)
EXPOSE 8080

# Comando para arrancar la aplicación
CMD ["npm", "start"]


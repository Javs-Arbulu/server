# server/Dockerfile

FROM node:20-alpine

WORKDIR /app

# Instala dependencias globales necesarias
RUN npm install -g @nestjs/cli

# Copia solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala todas las dependencias (incluye devDependencies)
RUN npm install

# Copia el resto del código
COPY . .

# Compila el código TypeScript
RUN npm run build

# Expone el puerto
EXPOSE 3000

# Comando para iniciar la app
CMD ["node", "dist/main"]

# Используем официальный образ Node.js
FROM node:22

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения
COPY  . .


RUN npm run build
# Указываем команду для запуска приложения

CMD ["npm", "start"]

# Открываем порт
EXPOSE 3000
FROM node:18-alpine

WORKDIR /app-frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000
# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
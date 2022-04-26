# Dockerfile para aplicação NodeJS com express
# Autor: "Edson Lourenço"

FROM node

WORKDIR /app

# Adiciona o pacote express

COPY ../app/ /app/

RUN npm install package.json --save

EXPOSE 8080

CMD [ "node", "app.js" ]


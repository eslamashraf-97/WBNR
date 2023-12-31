FROM node:20.5.0-alpine

WORKDIR /app

COPY ./package*.json /app/

RUN npm install 

COPY . .
RUN npm run build 

CMD ["npm", "run" ,"start"]

FROM node:12.18-slim
RUN apt-get update && apt-get install python build-essential make -y
WORKDIR /app/WebApp
COPY /WebApp/package.json /app/WebApp
RUN npm install
COPY /WebApp/src /app/WebApp/src
RUN npm run build

WORKDIR /app/Server
COPY Server/package.json /app/Server
RUN npm install
COPY Server/tsconfig.json /app/Server
COPY Server/src /app/Server/src
RUN npm run build
CMD ["npm", "run", "start"]
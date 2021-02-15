from node:13

#ENV http_proxy=http://192.168.47.128:3128

#ENV https_proxy=http://192.168.47.128:3128

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node","server.js"]

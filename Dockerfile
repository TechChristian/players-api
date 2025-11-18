FROM node:22-alpine3.21
WORKDIR /app

COPY package.json yarn.lock ./
RUN npm install
RUN yarn install --production --frozen-lockfile

COPY . .

RUN npx prisma generate

CMD ["node","server.js"]
EXPOSE 3000

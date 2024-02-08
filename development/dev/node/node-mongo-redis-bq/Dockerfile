#/app /usr /lib
####### STAGE: DEV ######
FROM node:19-alpine3.16 AS dev
# cd app
WORKDIR /app
#copy files package.json /app
COPY package.json ./
#install dependencies
RUN yarn install --frozen-lockfile
#command for image execution dev
CMD ["yarn", "start:dev"]

####### STAGE: DEV DEPS ######
FROM node:19-alpine3.16 AS dev-deps
# cd app
WORKDIR /app
#copy files package.json /app
COPY package.json package.json
#install dependencies
RUN npm install

####### STAGE: BUILDER ######
FROM node:19-alpine3.16 AS builder
# cd app
WORKDIR /app
#copy files to stage before
COPY --from=dev-deps /app/node_modules ./node_modules
#copy files
COPY . .
#test running
RUN npm run build

####### STAGE: DEPENDENCIES PROD ######
FROM node:19-alpine3.16 AS prod-deps
# cd app
WORKDIR /app
#copy files package.json /app
COPY package.json package.json
#install dependencies production
#RUN npm install --prod
RUN npm install --omit=dev

####### STAGE: BUILDER ######
FROM node:19-alpine3.16 AS prod

#expose port 3000
EXPOSE 3000
# cd app
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
#copy files to stage before
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY src ./src

#command for image execution
CMD ["node", "dist/main.js"]
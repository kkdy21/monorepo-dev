FROM node:18.12.0

WORKDIR /app

#COPY package* yarn.lock .pnp*     ./
#COPY .yarnrc.yml                  ./
#COPY .yarn                        ./.yarn
#COPY . .

EXPOSE 3000 5173 4000

RUN #yarn install



#CMD ["yarn","cmp","dev"]

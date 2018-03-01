FROM alpine:3.7
RUN apk update && apk upgrade
RUN apk add nodejs bash
RUN rm -rf /var/cache/apk/*

RUN mkdir -p /usr/src/cell
WORKDIR /usr/src/cell
COPY . /usr/src/cell
RUN npm install

EXPOSE 8080
CMD ["node", "index.js"]

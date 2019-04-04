FROM node:10.15.3

RUN npm install -g gatsby

WORKDIR /app

COPY start.sh .
RUN chmod +x ./start.sh

EXPOSE 9000

ENTRYPOINT ["sh", "./start.sh"]

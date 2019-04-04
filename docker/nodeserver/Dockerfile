FROM node
WORKDIR /app
ADD . .
RUN npm install -g serve
RUN npm install -g gatsby

WORKDIR /app
EXPOSE 80
RUN chmod +x ./start.sh

CMD ["./start.sh"]

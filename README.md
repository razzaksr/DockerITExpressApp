else after creating dockerfile and before compose you can create image for express app as following command:
docker built -t razzaksr/expressapp-express-api:latest .
then this could be added into compose.yaml as
#docker-compose.yaml
version: '3'
services:
  express-api:
    image: razzaksr/express-crud:latest
    ports:
      - "1234:1234"
    depends_on:
      - mongo
  mongo:
    image: mongo
    ports:
      - "27017:27017"

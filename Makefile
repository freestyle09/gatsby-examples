mongo-start:
	docker-compose -f docker/mongo.yml up -d

mongo-status:
	docker-compose -f docker/mongo.yml ps

mongo-stop:
	docker-compose -f docker/mongo.yml down

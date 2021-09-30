ENV DOCKER_VERSION 1.12.3
up-app:
	sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
	sudo chmod +x /usr/local/bin/docker-compose
	docker-compose --version
	docker-compose up -d --force-recreate app

logs:
	docker-compose logs -f

install-app:
	docker-compose run --rm app "npm install"

into-app:
	docker-compose exec app bash

unrootify:
	sudo chown -R $$(id -u):$$(id -g) . 
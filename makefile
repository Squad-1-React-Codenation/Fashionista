build-front:
	yarn run prettier
	yarn run stylelint
	yarn run eslint
	yarn run tsc

	yarn run test

	yarn run build

build-functions:
	mkdir -p functions

	go get ./...

	cd src/lambdas/catalog && go build -o ../../../functions/catalog ./...

content:
	cd ./src/cms && node index.js

build:
	make content

	make build-front

	make build-functions
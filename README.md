# test-man

a simple test manager web app

![Main View](https://github.com/tahsinozden/test-man/blob/main/docs/snapshots/main_page.JPG)
![Test Creation](https://github.com/tahsinozden/test-man/blob/main/docs/snapshots/create_test_modal.JPG)

## How to run via docker-compose

### Dependencies

- Docker
- Docker Compose

Go to the project root and run the following command

`docker-compose up --build`
When the application is up, go to the URL `http://localhost:3000` on your browser

## How to run via maven and npm

### Dependencies

- Node 14
- Maven 3x
- Java 11

#### Running API

Go to the API project root (/test-man-api) and run the following command

`mvn clean package -DskipTests spring-boot:run`
When the application is up, go to the next section to run UI.

#### Running UI

Go to the UI project root (/test-man-ui) and run the following command

`npm install && npm start`
When the application is up, go to the URL `http://localhost:3000` on your browser

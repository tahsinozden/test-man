FROM openjdk:11

WORKDIR /app
COPY target/test-man-api.jar .

ENTRYPOINT ["java", "-jar", "test-man-api.jar"]
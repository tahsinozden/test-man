#
# Build stage
#
FROM maven:3 AS build
WORKDIR /app
COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package -DskipTests

#
# Package stage
#
FROM openjdk:11
WORKDIR /app-run
COPY --from=build /app/target/test-man-api.jar .
EXPOSE 8080
ENTRYPOINT ["java","-jar","test-man-api.jar"]
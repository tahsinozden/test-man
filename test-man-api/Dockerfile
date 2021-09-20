#
# Build stage
#
FROM maven:3 AS build
COPY src /app/src
COPY pom.xml /app
RUN mvn -f /app/pom.xml clean package -DskipTests

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /app/target/test-man-api.jar /app
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/test-man-api.jar"]
FROM openjdk:11
MAINTAINER daniyal.ibrahim10@gmail.com

COPY target/backend-0.0.1-SNAPSHOT.jar  /app/
COPY target/classes/*                       /app/classes/
COPY src/main/resources/application.properties                 /app/application.properties

WORKDIR /app

ENTRYPOINT ["java","-jar","backend-0.0.1-SNAPSHOT.jar"]



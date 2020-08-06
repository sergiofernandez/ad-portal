FROM mongo

ENV MONGO_INITDB_DATABASE ad-portal

ADD ./data/*.js /docker-entrypoint-initdb.d/

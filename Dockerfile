FROM node:6.12.0-alpine

WORKDIR /usr/src/app

RUN npm i -g yarn@latest --quiet &&\
    npm i -g typescript@latest --quiet &&\
    npm i -g @angular/cli@latest --quiet &&\
    npm i -g protractor@latest --quiet &&\
    npm i -g webpack@latest --quiet &&\
    npm i -g webpack-dev-server@latest --quiet

RUN npm rebuild node-sass --force

CMD sh
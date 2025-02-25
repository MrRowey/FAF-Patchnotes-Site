FROM jekyll/jekyll:latest

WORKDIR /srv/jekyll

COPY . .

RUN jekyll build

CMD ["jekyll", "serve", "--host", "0.0.0.0"]
## Node + Docker Project Structure

> This intends to be a default project structure of using Docker in Node.js with all the local development and production features needed for smooth DevOps experience.

### Features:

- The goal is to have development environment be as close as test and production environment as possible while giving all the necessary tools required. `docker-compose` builds a local development image that is just like production image except for the dev-only features needed in image.

- Optimising for Docker cache layers; placing commands in the right order so that `npm install` is executed only when necessary. `npm install` is run once on container build and will re-run on build only if `package.json` is changed.

- Using nodemon for `Hot Reloading` during development. (The idea of hot reloading is to refresh only those files that were changed on host, without losing the state of the app.)

- By default, it points to `NODE_ENV=production` in Dockerfile and overrides to `development` in docker-compose for local dev.

### Getting Started:

**Running `docker-compose up` is all you need.**

It will:

- Build custom local image enabled for development (nodemon, `NODE_ENV=development`) and start container from that image on defined ports.
- Run `nodemon` so that the code is rebuilt whenever there is any change inside the app directory.

> If you need other services like databases, just add to compose file and they'll be added to the custom Docker network for this app on `docker-compose up`.

> If you want to add a package while `docker-compose` is running your app, simply execute `docker-compose exec -w /opt/node_app node npm install --save <package name>`. It will install the package inside the running container. `nodemon` will detect the change and restart the node. `--save` will add it to the package.json for the next `docker-compose build`.

> To execute the unit tests, run `docker-compose exec node npm test`. It will run a process `npm test` in the container node.

**Make sure to run `docker-compose down` after you are done with dev'ing.**

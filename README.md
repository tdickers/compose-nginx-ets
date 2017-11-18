Demo using Docker Compose with the ESI Test Server and the third-party
`akamai-nginx` NPM module.

# Setup
* You must have Docker and Docker Compose installed.
* Run `npm install`

# Usage
Running: `./generate-config.js && ./generate-certs.sh && docker-compose up`

Testing: 
* HTTP: `curl -v -H 'Host: www.site.test' 'http://localhost:8080/loop.html?sym=AKAM&sym=EMC&sym=MSFT'`
* HTTPS: `curl -k -v -H 'Host: www.site.test' 'https://localhost:8443/loop.html?sym=AKAM&sym=EMC&sym=MSFT'`

# Disclaimer
[akamai-nginx](https://github.com/wyvern8/akamai-nginx) is a third-party
component not developed or maintained by Akamai.
For support with it, please reach through that project's channels.

This repository exists as an informative example.

# Notes
* Variable support doesn't currently seem to be part of `akamai-nginx`;
many behaviors may not be supported, but those can be disabled/ignored
using `akamaiNginx.setSkipBehaviors([])`.

* References to `www.site.test` aren't centralized, sorry. `grep`/`sed` to use a different domain!

* Editing files in the `esi` directory should immediately trigger changes when they're not cached.

* To "purge", just delete files from the `cache` directory.

# Links
* https://github.com/wyvern8/akamai-nginx
* https://www.npmjs.com/package/akamai-nginx
* https://hub.docker.com/r/akamaiesi/ets-docker/

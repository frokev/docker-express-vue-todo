Prod build in docker:
docker build -t app .

Run in docker:
docker run -it -p 9000:3000 app

App is served from localhost:9000



---Not currently working---
Debug build in docker:
docker build -f Dockerfile.debug -t appdebug .

Run in docker mounted (linux):
docker run -it -p 9000:3000 -v $(pwd):/app/Server/src -v $(pwd):/app/WebApp/src appdebug

Run in docker mounted (PowerShell):
docker run -it -p 9000:3000 -v ${PWD}:/app/Server/src -v ${PWD}:/app/WebApp/src appdebug
---
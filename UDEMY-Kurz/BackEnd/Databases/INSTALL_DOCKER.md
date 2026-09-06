**JAK nainstalovat do dockeru**

    - proč? -> less pain

    1) nainstaluj docker desktop -> https://www.docker.com/products/docker-desktop/
    
    2) spust docker run script

        v CLI LINUX -> docker run -d  --name mongodb_kurz   -p 27017:27017   -v ./tutorialDB:/data/db   mongodb/mongodb-community-server:latest

        v CLI MACOS (tempoary fix)-> docker run -d --name mongodb_kurz -p 27017:27017 -v ./tutorialDB:/data/db -e GLIBC_TUNABLES=glibc.pthread.rseq=1 --entrypoint mongod mongodb/mongodb-community-server:latest --bind_ip_all

    3) nasledně až vše pojede, tak si spusť v terminalu mongosh přímo z containeru

        v CLI -> docker exec -it mongodb_kurz mongosh

    4) VOILÁ JE HOTOVKA + je i otevreny port 27017 (lze nastavit i jinný)
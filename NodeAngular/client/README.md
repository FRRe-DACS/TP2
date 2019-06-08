Para correr el proyecto es necesario tener mysql instalado. Y crear una base de datos descripta en el archivo de base de datos del proyecto. Para ver el contenido se deben realizar una carga/borrado/actualizacion desde el cliente una ves que este corriendo.

Tener instalado Node.

Tener instalado Angular 7.

Ademas es necesario instalar el copilador de Typescript.
npm install -g typescript

Arrastramos el proyecto a por ejemplo Visual Studio Code.

Para correr el proyecto:

Abrimos la primera terminar, posicionados en el proyecto:

nos posicionamos y lanzamos los siguientes comandos:

cd server
npm run build

Abrimos la segunda terminar, posicionados en el proyecto:

cd server
npm run dev

Abrimos la tercera terminar, posicionados en el proyecto:

cd client
ng serve

Para ingresar al cliente que esta corriendo vamos desde el browser:http://localhost:4200/

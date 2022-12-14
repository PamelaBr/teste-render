const server = jsonServer.create();
const router = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; 

server.use(middlewares);
server.use(router);

server.listen(port);					

//db.json
{
  "notas": [
    {
      "id": 1,
      "titulo": "Estudar JS",
      "status": true
    }
  ]											
}
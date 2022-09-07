//Route params
/\*
When we need receive a parameter in the URL using a Route Params, we need declared a special URL to use. IT'S REQUIRED pass the parameter!!
The url needs to know the name of variables, and for it we use the structure /:name for all variables. Ex: prouct/:id.

to get the value we use the property request.params
\*/
api.get('/message/:id/:user', (request, response) => {
response.send(`Mensagem ID: ${request.params.id}. Usuário:${request.params.user}`)
,
})

//Query params
/_ Diferent then Route params, in Query param we don't need to make a url with the variables, and ISN'T REQUIRED, its optional!!
We just need receive the value in the URL, and the format is ?name=value, more than one use & ex: /users?page=2&limit=7
to get the value we use the property request.query
_/
api.get('/users', (request, response) => {
const { page, limit } = request.query

response.send(`Páginas: ${page}. Limite:${limit}`)
})

# CRUD-DB
<p align="center"> # CRUD-DB
SEMANA 14 {REPROGRAMA}<p>

**CRUD** são as quatro operações básicas utilizadas em bases de dados relacionais fornecidas aos utilizadores do sistema. Outros acrônimos podem ser usados para definir as mesmas operações: ABCD: Add, Browse, Change and Delete BREAD: Browse, Read, Edit, Add and Delete VADE: View, Add, Delete, Edit

![Crud](./img/crud.png)


**DB** Bancos de dados ou bases de dados são conjuntos de arquivos relacionados entre si com registros sobre pessoas, lugares ou coisas. São coleções organizadas de dados que se relacionam de forma a criar algum sentido e dar mais eficiência durante uma pesquisa ou estudo cientifico.
![db](./img/db.jpg)

## Projeto 
* Criar uma Api de agenda para reunir contatos dos nossos usuários
* Criar uma representação da arquitetura

![ref](./img/ref.JPG)

## Dados para Collection

* id:autogerado e obrigatório
* nome:texto e obrigatório
* celular:texto e obrigatório
* dataNascimento:data e obrigatório
* fotoPerfil: texto e não obrigatório

# Api de retornar o seguinte "JSON"

````javascript
[
	{
		"_id": "5fa6128cb3afb1104017dd1a",
		"nome": "Ana lu",
		"celular": "912345678",
		"dataNascimento": "1996-10-10T02:00:00.000Z",
		"fotoPerfil": "<https://linkdafoto.com.br>"
	}
]
 ````



# Essa API deve ter as seguintes rotas:

[ ] "/" Retorna index com apresentação { mensagem: bem vinda a lista de contatinhos }

[ ] "/contatos" Retorna todos os dados do banco de dados

[ ] "/contatos/nome/[NOME]" Retorna contato por nome específico

[ ] "/contatos/id/[ID]" Retorna contato por id específico

[ ] "/contatos/criar" Cria novo contato e retorna mensagem amigável

[ ] "/contatos/deletar/[ID]" Deleta contato por id específico e retorna mensagem amigável

[ ] "/contatos/atualizar/telefone/[ID]" Atualiza somente telefone do contato por id específico e retorna mensagem amigável

[ ] "/contatos/atualizar/[ID]" Atualiza completamente contato e retorna mensagem amigável (id não pode ser modificado)


# Estrutura MVC

--📂 NOME-DO-SEU-SERVIDOR

	   |   server.js
	   |
		\--📂src
			    |   app.js
			    |
			    📂---controller
			    |       NOMEController.js
			    |
			    📂---model
			    |       NOME.json
			    |
			    📂---routes
			            NOMERoute.js



# Instalar/iniciar

* npm init
* npm nodemon
* npm express
* npm cors
* npm mongoose


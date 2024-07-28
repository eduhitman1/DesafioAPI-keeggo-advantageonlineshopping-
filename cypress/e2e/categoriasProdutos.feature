#utf-8
#language: pt
Funcionalidade: serviço de busca produto e upload de imagem

Contexto: inicializa aplicação
Dado que possuo um token de acesso

Cenario: GET produto: validar a busca de um produto via request
Quando acesso busca de um produto via request GET catalog
E verifico se a lista exibe somente produtos conforme a busca
Então valido o status code da resposta do serviço

Cenario: POST produto: validar que a imagem do produto foi atualizada
Quando acesso arquivo updade via request POST catalog
E verifico que o objeto foi atualização corretamente
E verifico o id da image nova inserida
Entao valido que o código de resposta da requisição é 200 

# Obs no documento o desafio está como put mas na documentação esta como post
# foi realizado também no POSTMAN
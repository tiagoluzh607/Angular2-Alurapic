# Angular2-Alurapic
Referente ao curso de angular 2 do alura


Preparação do ambiente
Nosso foco é o Angular, porém alguns recursos do framework necessitam de um servidor web rodando localmente em sua máquina. Para que você não caia em questões de infraestrutura que dizem respeito a isso, disponibilizamos o projeto Alurapic com tudo necessário para subir um servidor web localmente.

É importante destacar que o uso do projeto inicial alurapic não é opcional, pois ele já registra todos os endpoints que serão consumidos pela nossa aplicação em Angular. Além disso, é necessário ter o Node.js instalado em sua máquina para que o servidor funcione.

O Node.js é um ambiente JavaScript multiplataforma disponível para Linux, Mac e Windows. Para instalá-lo, siga as instruções referentes à sua plataforma:

Caso você já tenha o Node instalado
Se você já tem o Node instalado em sua máquina, verifique se ele está pelo menos na versão 4.X com o comando node -v no seu terminal. Precisamos de uma versão atualizada do mesmo para que não ocorram erros durante o projeto.

Instalação Node.js no Linux (Ubuntu)
No Ubuntu, através do terminal (permissão de administrador necessária) execute o comando abaixo:

sudo apt-get install -y nodejs
Atenção: em algumas distribuições Linux, pode haver um conflito de nomes quando o Node é instalado pelo apt-get. Neste caso específico, no lugar do binário ser node, ele passa a se chamar nodejs. Isso gera problemas, como a instrução npm start procura o binário node e não nodejs, ela não funcionará. Para resolver, use a seguinte instrução no terminal para subir o servidor:

nodejs server
Ou no Ubuntu:

sudo ln -s /usr/bin/nodejs /usr/bin/node
Depois, o comando npm start funcionará conforme esperado.


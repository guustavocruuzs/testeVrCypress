# *API Tests Automation*

## *Pré-Requisitos*
- Cypress

# Instalação

Siga os passos abaixo para instalação do projeto:

*Clone do Projeto*


git clone https://github.com/guustavocruuzs/testeVrCypress-Front.git


*Local do projeto*

cd testeVrCypress


*Instalar as dependências do projeto com o Bundle*

npm install

npm install cypress --save-dev

*Abrir o projeto*

npx cypress open

# Estrutura do Projeto de teste

```tree
.
├── cypres
│   ├── e2e - Contém a implementação dos scripts de testes
├   |── fixture - Contém os exemplos
|   |── screenshots - Contém evidencias de erro quando teste falha 
│   └── support - Contém os arquivos de suporte da automação
|   |── videos - Contém evidencias de execução dos teste 

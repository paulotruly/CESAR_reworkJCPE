# JCPE Rework

## Descrição do projeto

Este projeto apresenta uma proposta de plataforma mais leve, organizada e intuitiva para consumo de notícias, oferecendo uma experiência clara e agradável para o usuário. A ideia é facilitar o acesso às matérias, melhorar a navegação e garantir que o leitor encontre rapidamente o conteúdo que busca, com foco em fluidez, simplicidade e boa apresentação das informações.

---

## Contexto do desafio

O site atual do Jornal do Commercio (JC) apresenta diversos problemas que afetam a navegação, como excesso de anúncios, lentidão, dificuldade de uso em celulares, leitura prejudicada e vídeos que tocam automaticamente, tornando a experiência confusa e cansativa. Esses fatores afastam o usuário e diminuem o engajamento, criando a necessidade de uma solução moderna, mais limpa e centrada no leitor.

---

## Instalação e configuração

### Pré-requisitos
* **IDE** (por exemplo, Visual Studio Code)
* **Node.js**
* **Java +17+**
* **MySQL**
* Um cliente **Git**

Clone o repositório em uma pasta vazia
```bash
git clone https://github.com/paulotruly/CESAR_reworkJCPE/
```
Acesse a pasta do projeto
```bash
cd CESAR_reworkJCPE
```

Depois de criar o banco de dados, acesse a pasta
```bash
backend/src/main/resources
```
Abra o application.properties e configure para apontar para o banco que você criou
```bash
spring.application.name=demo

spring.datasource.url=jdbc:mysql://SEU_HOST_AQUI:3306/NOME_DO_SEU_BANCO?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=SEU_USUARIO
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```
Execute o processamento no PowerShell
```bash
$env:DB_PASSWORD="senha aqui" ; $env:JAVA_HOME="C:\Program Files\Java\jdk-21" ; mvn spring-boot:run
```

Em outro terminal, acesse a pasta do front-end
```bash
cd frontend
```
Então, instale as dependências
```bash
npm install
```
Execute o processamento
```bash
npm run dev
```

---

## Equipe

| Nome | Função | LinkedIn |
|------|------|-----------|
| Paulo Gomes | Full stack developer | [linkedin.com/in/paulotruly](https://www.linkedin.com/in/paulotruly) |
| (preencher) | (preencher) | (preencher) |
| (preencher) | (preencher) | (preencher) |
| (preencher) | (preencher) | (preencher) |

---

## Funcionalidades

- Componentes dinâmicos: interface construída de forma flexível, atualizando automaticamente conforme os dados
- Criação, leitura, atualização e exclusão de registros pelo servidor
- Categorização de conteúdos: organização dos itens por categorias para melhor navegação
- Roteamento: navegação entre páginas e categorias de forma dinâmica e intuitiva
  
---

## Technologias

### Front-end
- React.js  
- Vite.js  
- Tailwind CSS

### Back-end
- Java 17+
- Spring Boot
- Maven
- Banco relacional (MySQL)

---

## Arquitetura de sistema

| Camada | Tecnologia | Função |
| :--- | :--- | :--- |
| (preencher) | (preencher) | (preencher) |
| (preencher) | (preencher) | (preencher) |
| (preencher) | (preencher) | (preencher) |
| (preencher) | (preencher) | (preencher) |


# E-Art - Galeria de Arte Digital

Este repositório documenta a evolução do **E-Art**, um projeto de front-end para uma galeria de arte digital fictícia. Ele foi criado como um exercício acadêmico durante a matéria de Web Design no **IFB (Instituto Federal de Brasília)** e foi refeito várias vezes como uma forma de aplicar e aprimorar meus conhecimentos em desenvolvimento web.

As diferentes `branches` deste repositório representam marcos importantes na minha jornada de aprendizado, desde o primeiro contato com HTML e CSS até a transição para frameworks modernos como o Angular.

## 🚀 Acesso Rápido (Live Demo - Versão V3)

A versão mais completa e aprimorada (da branch `v3`) está disponível no GitHub Pages:

### **[https://edumoreiira.github.io/e-art/](https://edumoreiira.github.io/e-art/)**

## 🌳 Estrutura do Repositório e Versões

O projeto está dividido em três branches principais, cada uma representando uma etapa diferente do meu desenvolvimento:

### `Branch: v1`

Esta é a primeira versão do site, representando um dos meus contatos iniciais com desenvolvimento web. O foco aqui foi puramente na estruturação do conteúdo com HTML e na estilização básica com CSS.

  - **Destaque:** Implementação de layout e estilo visual a partir de um design.
  - **Limitação:** **Não possui responsividade**, sendo projetado apenas para visualização em desktop.

### `Branch: v3`

Esta é a versão mais aprimorada e funcional construída com tecnologias vanilla. Nela, apliquei conceitos mais avançados de CSS e JavaScript para criar uma experiência de usuário completa e interativa.

  - **Destaques:**
      - **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela (mobile-first).
      - **JavaScript Puro:** Toda a interatividade, incluindo o modal de login/registro, é controlada com JavaScript vanilla.
      - **Front-end Completo:** Apresenta a experiência final do site estático, sendo a versão que está no ar na demo.

### `Branch: main`

Esta branch representa o início da migração do projeto para uma arquitetura mais moderna e robusta utilizando Angular. É uma versão que demonstra meus estudos em frameworks de front-end.

  - **Destaque:** Utilização de Angular com TypeScript, componentização e arquitetura de SPA (Single Page Application).
  - **Status:** **Projeto inacabado.** A base com Angular foi iniciada, mas a implementação completa das funcionalidades ainda está pendente.

## ⚙️ Tecnologias Utilizadas por Versão

| Versão (Branch) | Tecnologias                               |
| ----------------| ----------------------------------------- |
| **v1** | HTML5, CSS3                               |
| **v3** | HTML5, CSS3, JavaScript (Vanilla)         |
| **main** | Angular, TypeScript, Tailwind CSS         |

## 🛠️ Como Executar

Para visualizar qualquer uma das versões localmente, primeiro clone o repositório e depois mude para a branch desejada.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/edumoreiira/e-art.git
    cd e-art
    ```

2.  **Mude para a branch de sua escolha:**

      - Para a versão 1: `git checkout v1`
      - Para a versão 3: `git checkout v3`
      - Para a versão Angular: `git checkout main`

3.  **Execute o projeto:**

      - **Para as branches `v1` e `v3`:**
        Basta abrir o arquivo `index.html` diretamente no seu navegador.

      - **Para a branch `main` (Angular):**

        ```bash
        # Instale as dependências
        npm install

        # Inicie o servidor de desenvolvimento
        ng serve
        ```

        Depois, acesse `http://localhost:4200/` no seu navegador.

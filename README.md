# 🚀 Personal Portfolio — Douglas Santos

Uma aplicação web moderna, responsiva e de alta performance desenvolvida para apresentar projetos, habilidades e trajetórias profissionais. O projeto adota uma arquitetura baseada em **componentização em Vanilla JavaScript**, permitindo o carregamento dinâmico e assíncrono da interface sem a necessidade de frameworks pesados.

---

## 🎨 Demonstração & Funcionalidades

- **Layout Dinâmico e Responsivo:** Interface fluida adaptada para dispositivos móveis e desktops via Bootstrap 5.
- **Arquitetura Baseada em Componentes:** Carregamento assíncrono de templates HTML isolados através do consumo de APIs nativas do navegador.
- **Hidratação Assíncrona de Eventos:** Acoplamento seguro de escutadores de eventos JS (*Event Listeners*) pós-injeção no DOM, eliminando apontamentos nulos (*null references*) e condições de corrida (*race conditions*).
- **Alternador de Tema (Dark/Light):** Gerenciamento de estado global de tema via atributo `data-theme` na raiz do documento HTML.
- **Indicador Deslizante Interativo:** Animação fluida de navegação ativa no menu desktop com recálculo automático em eventos de redimensionamento de tela (*resize*).
- **Controle de Navegação Mobile:** Fechamento automatizado do menu colapsável do Bootstrap ao selecionar qualquer seção.

---

## 📌 O que o Portfólio Apresenta

O portfólio é estruturado estrategicamente para demonstrar competência técnica, organização de código e visão de negócios através das seguintes seções:

- **Sobre:** Apresentação profissional, trajetória no desenvolvimento de software, princípios de engenharia e posicionamento de mercado.
- **Projetos em Destaque:** Exibição de aplicações reais desenvolvidas, destacando a arquitetura utilizada, tecnologias empregadas, links para o código-fonte no GitHub e demonstrações ao vivo (*live preview*).
- **Serviços & Soluções:** Detalhamento das soluções oferecidas ao mercado, como desenvolvimento de interfaces modernas, criação de landing pages de alta conversão, refatoração de código e arquitetura de componentes.
- **Skills & Tecnologias:** Mapeamento visual das competências técnicas e ferramentas do ecossistema web (HTML5, CSS3, JavaScript ES6+, Bootstrap 5, Git/GitHub, entre outras).
- **Contato:** Canal direto para oportunidades de trabalho, projetos freelancer, consultorias e networking profissional.

---

## 🛠️ Tecnologias Utilizadas

<p flex wrap="wrap" gap="5">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome" />
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white" alt="Google Fonts" />
</p>

---

## 🧱 Arquitetura e Engenharia de Software

A aplicação utiliza um carregador de componentes nativo baseado em promessas e fluxo assíncrono para buscar os fragmentos HTML e injetá-los nos contêineres correspondentes. 

Para garantir a integridade da aplicação, os eventos da interface só são acoplados após a confirmação da renderização dos elementos no DOM, aplicando o conceito de hidratação e evitando erros de execução em elementos ainda não carregados.

---

## 🚀 Como Executar o Projeto Localmente

Por utilizar a Fetch API para carregar componentes em arquivos separados, a aplicação requer um ambiente de servidor HTTP local para evitar restrições de política de mesma origem (**CORS**) impostas pelos navegadores.

### Pré-requisitos
- **Node.js** com utilitário `npx` instalado **OU**
- Extensão **Live Server** instalada no VS Code.

### Passo a Passo

```bash
# Clone o repositório
git clone https://github.com/91douglasfariasantos/douglas-portfolio-dev

# Entre na pasta do projeto
cd douglas-portfolio-dev

```


2. **Execute o servidor local:**
   - **Via VS Code:** Abra a pasta no editor e inicie a extensão Live Server.
   - **Via Terminal (Node.js):** Execute o comando `npx serve .` na raiz do projeto.

3. **Acesse no navegador:**
   Abra o endereço IP e porta indicados pelo servidor local (ex: `http://localhost:3000` ou `http://127.0.0.1:5500`).

---

## 📜 Convenção de Commits

Este projeto segue o padrão **Conventional Commits** para assegurar um histórico de alterações claro e rastreável:

- `feat`: Adição de novas funcionalidades e componentes.
- `fix`: Correção de erros ou falhas de comportamento.
- `docs`: Atualizações e melhorias na documentação do projeto.
- `refactor`: Reformulação de código sem alteração das regras de negócio.

---

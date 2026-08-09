# 🚀 Personal Portfolio — Douglas Santos

Uma aplicação web moderna, responsiva e de alta performance desenvolvida para apresentar projetos, habilidades e trajetória profissional. O projeto adota uma arquitetura baseada em **componentização em Vanilla JavaScript**, permitindo o carregamento dinâmico e assíncrono da interface sem a necessidade de frameworks pesados.

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white" alt="Font Awesome" />
  <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=googlefonts&logoColor=white" alt="Google Fonts" />
</div>

---

## 🎨 Demonstração & Funcionalidades

- **Layout Dinâmico e Responsivo:** Interface fluida adaptada para dispositivos móveis e desktops via Bootstrap 5.
- **Arquitetura Baseada em Componentes:** Carregamento assíncrono de templates HTML isolados através do consumo de APIs nativas do navegador (`fetch`).
- **Hidratação Assíncrona de Eventos:** Acoplamento seguro de escutadores de eventos JS (*Event Listeners*) pós-injeção no DOM, eliminando apontamentos nulos (*null references*) e condições de corrida (*race conditions*).
- **Alternador de Tema (Dark/Light):** Gerenciamento de estado global de tema via atributo `data-theme` na raiz do documento HTML.
- **Indicador Deslizante Interativo:** Animação fluida de navegação ativa no menu desktop com recálculo automático em eventos de redimensionamento de tela (*resize*).
- **Controle de Navegação Mobile:** Fechamento automatizado do menu colapsável do Bootstrap ao selecionar qualquer seção.

---

## 📌 O que o Portfólio Apresenta

O portfólio é estruturado estrategicamente para demonstrar competência técnica, organização de código e visão de negócios através das seguintes seções:

- **Sobre:** Apresentação profissional, trajetória no desenvolvimento de software, princípios de engenharia e posicionamento de mercado.
- **Tech Stack:** Mapeamento visual das tecnologias e ferramentas do ecossistema utilizadas no dia a dia (React, JavaScript, Bootstrap 5, OpenAI API, Figma).
- **Serviços & Soluções:** Detalhamento das soluções oferecidas ao mercado — desenvolvimento de interfaces modernas, plataformas para o setor imobiliário e integração de IA em produtos web.
- **Projetos em Destaque:** *(em construção)* Exibição de aplicações reais desenvolvidas, com arquitetura utilizada, tecnologias empregadas, link para o código-fonte no GitHub e demonstração ao vivo.
- **Contato:** Canais diretos (WhatsApp, e-mail, telefone, GitHub e LinkedIn) para oportunidades de trabalho, projetos freelancer e networking profissional.

---

## 🧱 Estrutura do Projeto

```
douglas-portfolio-dev/
├── components/
│   ├── navbar.html        # Cabeçalho e navegação
│   ├── sobre.html          # Seção "Sobre"
│   ├── stack.html          # Seção "Tech Stack"
│   ├── servicos.html       # Seção "Serviços & Soluções"
│   └── contato.html        # Seção "Contato"
├── css/
│   ├── style.css           # Tokens de identidade visual, navbar e layout base
│   └── about.css           # Estilos específicos das seções de conteúdo
├── js/
│   └── loadComponents.js   # Carregador assíncrono de componentes + eventos da navbar
├── index.html               # Shell da aplicação (containers + imports)
└── README.md
```

Cada seção do portfólio vive isolada em seu próprio arquivo `.html` dentro de `components/`, injetada dinamicamente no `index.html` através do `loadComponents.js`. Isso facilita manutenção, leitura de código e permite adicionar novas seções sem tocar nas já existentes.

---

## 🧩 Arquitetura e Engenharia de Software

A aplicação utiliza um carregador de componentes nativo (`loadComponents.js`), baseado em promessas e fluxo assíncrono, para buscar os fragmentos HTML de cada seção e injetá-los nos contêineres correspondentes no `index.html`.

Para garantir a integridade da aplicação, os eventos de interface (tema, navegação, menu mobile) só são acoplados **após a confirmação da renderização** dos elementos no DOM — aplicando o conceito de hidratação e evitando erros de execução em elementos ainda não carregados (*race conditions*).

---

## 🚀 Como Executar o Projeto Localmente

Por utilizar a Fetch API para carregar componentes em arquivos separados, a aplicação requer um ambiente de servidor HTTP local para evitar restrições de política de mesma origem (**CORS**) impostas pelos navegadores.

### Pré-requisitos
- **Node.js** com utilitário `npx` instalado **OU**
- Extensão **Live Server** instalada no VS Code.

### Passo a Passo

1. **Clone o repositório e entre na pasta do projeto:**

   ```bash
   git clone https://github.com/91douglasfariasantos/douglas-portfolio-dev
   cd douglas-portfolio-dev
   ```

2. **Execute o servidor local:**
   - **Via VS Code:** abra a pasta no editor e inicie a extensão Live Server.
   - **Via Terminal (Node.js):** execute `npx serve .` na raiz do projeto.

3. **Acesse no navegador:**

   Abra o endereço e porta indicados pelo servidor local (ex: `http://localhost:3000` ou `http://127.0.0.1:5500`).

---

## 📜 Convenção de Commits

Este projeto segue o padrão **Conventional Commits** para assegurar um histórico de alterações claro e rastreável:

- `feat`: Adição de novas funcionalidades e componentes.
- `fix`: Correção de erros ou falhas de comportamento.
- `docs`: Atualizações e melhorias na documentação do projeto.
- `refactor`: Reformulação de código sem alteração das regras de negócio.
- `style`: Ajustes de formatação, CSS ou identidade visual sem impacto funcional.
- `chore`: Tarefas de manutenção que não alteram código de produção (configs, dependências).

---

## 📬 Contato

- **WhatsApp:** [wa.me/message/XRTI7HE36NZWN1](https://wa.me/message/XRTI7HE36NZWN1)
- **E-mail:** douglasfariasantos91@gmail.com
- **LinkedIn:** [linkedin.com/in/faria-douglas-dos-santos-](https://www.linkedin.com/in/faria-douglas-dos-santos-)
- **GitHub:** [github.com/91douglasfariasantos](https://github.com/91douglasfariasantos)

---

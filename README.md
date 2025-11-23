# Amazon Best Sellers - Imersão Alura 📚

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🌐 Demonstração Online

Você pode acessar a versão web do projeto rodando diretamente no GitHub Pages:
👉 **[Acesse o Amazon Best Sellers aqui](https://leturnos.github.io/alura-amazonbs-gemini-immersion/)**

---
<img alt="Preview do Projeto" src="https://github.com/user-attachments/assets/1630d5cb-3126-4ab9-b6e9-c76a5d1e9559" />
*Visualização da listagem de livros mais vendidos*

## 💻 Sobre o projeto

Projeto desenvolvido durante a **Imersão Dev com Google Gemini 10ª Edição.** da **Alura**. A aplicação é uma interface que lista os livros e HQs mais vendidos da Amazon Brasil em tempo real.

O objetivo principal foi praticar o consumo de APIs externas, manipulação do DOM e criação de layouts responsivos utilizando o Gemini como apoio.

## ⚙️ Funcionalidades

- **Consumo de API Real:** Conexão com a "Real-Time Amazon Data" via RapidAPI para buscar dados atualizados.
- **Busca por Palavra-chave:** Filtragem dinâmica dos livros exibidos na tela pelo título.
<img alt="Exemplo de Busca" src="https://github.com/user-attachments/assets/90fad626-a4dc-45e3-aa44-991e0462fac5" />
*Filtragem dinâmica de títulos*

- **Categorias:** Alternância entre "Livros" e "HQs e Mangás".
- **Paginação:** Navegação entre as páginas de resultados da Amazon.
- **Modo de Demonstração (Fallback):** Caso o usuário não insira uma chave de API, o sistema carrega automaticamente dados fictícios (`data.json`) após 5 segundos para demonstrar o layout.
- **Layout Responsivo:** Grid de cards que se adapta a diferentes tamanhos de tela.

## 🛠 Tecnologias Utilizadas

- **HTML5:** Semântica e estrutura.
- **CSS3:** Estilização com uso de Variáveis (CSS Variables), Flexbox e Grid Layout.
- **JavaScript (ES6+):** Lógica de programação, `async/await` e manipulação do DOM.
- **Axios:** Biblioteca para requisições HTTP.

## 🚀 Como executar o projeto

### Pré-requisitos

Para ver os dados em tempo real, você precisará de uma chave de API (API Key) da RapidAPI.

1. Crie uma conta no [RapidAPI](https://rapidapi.com/hub).
2. Assine a API [Real-Time Amazon Data](https://rapidapi.com/letscrape-6bRBa3QguO5/api/real-time-amazon-data) (existe plano gratuito sem precisar de cartão).
3. Copie sua `X-RapidAPI-Key`.

### Rodando localmente

1. Clone este repositório:
 ```bash
 git clone https://github.com/Leturnos/alura-amazonbs-gemini-immersion.git
 ```

2. Abra o arquivo index.html no seu navegador.

3. Insira sua API Key no campo indicado na tela ("Sua Chave da API aqui").

4. Clique em buscar ou navegue pelas categorias.

Nota: Se você não inserir a chave, a aplicação carregará dados de exemplo automaticamente após alguns segundos.

## 📂 Estrutura de Arquivos
```
/
├── index.html          # Estrutura principal
├── data.json           # Dados fictícios para teste (fallback)
└── src/
    ├── scripts/
    │   ├── api.js      # Configuração do Axios e requisições
    │   └── script.js   # Lógica de renderização e eventos
    ├── styles/
    │   └── style.css   # Estilos globais e responsividade
    └── images/         # Capas dos livros para o modo demonstração
```

## 🎨 Layout

O design foi pensado no modo "Dark Theme", utilizando uma paleta de cores confortável para leitura e destaque para as capas dos livros.

## 🤝 Créditos

Instrutores da Alura pela excelente imersão.

RapidAPI e Real-Time Amazon Data pelo fornecimento dos dados.

--- 

Desenvolvido por Leandro

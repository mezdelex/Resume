import IProject from "@/models/IProject";

export const projectsData: IProject[] = [
  {
    id: "resume-rs",
    pushed_at: "",
    name: "Resume RS",
    image: require("@/assets/leptos.png"),
    repo: "https://github.com/mezdelex/resume-rs",
    app: "https://mezdelex-resume.netlify.app",
    description:
      "Portfolio app replica of the main resume to show my personal projects, setup, etc. using Rust and the Leptos WASM framework in CSR trunk mode, Thaw UI library, and a wide variety of crates like Serde, Tokio, Reqwest or Chrono. The deployment has been done using GitHub's CD pipeline against Netlify and hosted in the default domain. Coded with Neovim.",
  },
  {
    id: "unpack",
    pushed_at: "",
    name: "UnPack",
    image: require("@/assets/unpack.png"),
    repo: "https://github.com/mezdelex/unpack",
    app: "https://github.com/mezdelex/unpack",
    description:
      "A minimal layer on top of vim.pack API to allow single file plugin configurations. vim.pack is currently under development and only available in the Neovim's nightly branch. Allows deferring plugin load and managing dependencies in a simple yet convenient way via commands or exposed module methods. For a more detailed documentation, check the repository.",
  },
  {
    id: "CleanTemplate9",
    pushed_at: "",
    name: ".NET9 Clean Architecture Template",
    image: require("@/assets/clean9.png"),
    repo: "https://github.com/mezdelex/CleanTemplate8",
    app: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures",
    description:
      ".NET9 Clean Architecture template using DDD, Event Sourcing with MediatR library, Pub/Sub pattern with MassTransit library and RabbitMQ, Entity Framework Core's Identity, Redis cache, CQRS pattern, Specification pattern, Minimal API, Docker for SQLServer, RabbitMQ and WebApi containerization, FluentValidations, Unit of Work pattern, Serilog logging, CSharpier pre-commit hooks with Husky, Testing with xUnit and Moq, FluentAssertions, etc. Coded with Neovim",
  },
  {
    id: "AoC2023",
    pushed_at: "",
    name: "Advent of Code (2023)",
    image: require("@/assets/aoc2023.png"),
    repo: "https://github.com/mezdelex/AoC2023",
    app: "https://adventofcode.com/2023",
    description:
      "Algorithmic problem solving to achieve further Rust language proficiency with data structures, mutability and other language specific stuff. Also added CI pipeline via GitHub Actions to run testing jobs server side. Coded with Neovim.",
  },
  {
    id: "RustExamples",
    pushed_at: "",
    name: "Rust Examples",
    image: require("@/assets/rust.png"),
    repo: "https://github.com/mezdelex/RustExamples",
    app: "https://www.rust-lang.org/",
    description:
      "Rust repository containing examples on various topics related to the language, such as concurrency, mutability, borrowing, lifetimes, data structures, etc. Work in progress. Coded with Neovim.",
  },
  {
    id: "CleanTemplate",
    pushed_at: "",
    name: ".NET7 Clean Architecture Template",
    image: require("@/assets/clean.png"),
    repo: "https://github.com/mezdelex/CleanTemplate",
    app: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures",
    description:
      ".NET7 Clean Architecture template using DDD, Event Sourcing with MediatR library, Pub/Sub pattern with MassTransit library and RabbitMQ, CQRS pattern, Minimal API, Docker for PostgreSQL and RabbitMQ containerization, FluentValidations, Unit of Work pattern, Serilog logging, EditorConfig, Testing with xUnit, FluentAssertions, etc. Coded with Neovim",
  },
  {
    id: "TodoApp",
    pushed_at: "",
    name: "TodoApp API",
    image: require("@/assets/todoapp.png"),
    repo: "https://github.com/mezdelex/TodoApp",
    app: "https://github.com/users/mezdelex/projects/1",
    description:
      "RESTful API to learn Go using Fiber framework, following Clean Architecture principles with Domain Driven Design in mind, JWT authentication/authorization, GORM as ORM with automigrations and code first schema definition, PostgreSQL as database and GitHub Projects as task and time management platform. Coded with Neovim.",
  },
  {
    id: "Botchy",
    pushed_at: "",
    name: "Botchy",
    image: require("@/assets/botchy.png"),
    repo: "https://github.com/mezdelex/Botchy",
    app: "https://discord.com/",
    description:
      "A Discord bot written in Python to facilitate the sharing of information between guild members of the mobile game Mobile Legends: Adventure. The bot needs to be run either locally or hosted in a dedicated server so the commands can be recognized by Discord.",
  },
  {
    id: "WeztermPowerShellCoreConfig",
    pushed_at: "",
    name: "Wezterm",
    image: require("@/assets/wezterm.png"),
    repo: "https://github.com/mezdelex/WeztermPowerShellCoreConfig",
    app: "https://github.com/wez/wezterm",
    description:
      "Wezterm config with Cascadia Code NF variant, Powershell Core shell, custom prompt forked from patriksvensson's Oh My Posh theme, fuzzy finding via PSFzf, autocompletion via PSReadLine, fast directory navigation via zoxide, icon glyphs via Terminal Icons, Lazygit, Lazydocker, k9s, Yazi TUI file manager...",
  },
  {
    id: "NeovimConfig",
    pushed_at: "",
    name: "Neovim",
    image: require("@/assets/neovim.png"),
    repo: "https://github.com/mezdelex/NeovimConfig",
    app: "https://neovim.io/",
    description:
      "Fully functional daily driver Neovim config with LSP support, language server installation manager, debugger adapter, auto syntax highlighting parser installation, code actions, LLM integration through provided adapters, linting, suggestions, formatting, diagnostics, file search, live grep, file manager, git integration, code modification history, status line, autopairs, autotags...",
  },
  {
    id: "AoC2022",
    pushed_at: "",
    name: "Advent of Code (2022)",
    image: require("@/assets/aoc2022.png"),
    repo: "https://github.com/mezdelex/AoC2022",
    app: "https://adventofcode.com/2022",
    description:
      "Algorithmic problem solving to achieve further C# 11 language proficiency in declarative paradigm using LINQ, Lambdas and Expression-Bodied members. Also added CI pipeline via GitHub Actions to run testing jobs server side. Coded with VSCode.",
  },
  {
    id: "",
    pushed_at: "2023-11-08T07:40:47Z",
    name: "Touch Typing",
    image: require("@/assets/monkeytype.png"),
    repo: "https://github.com/monkeytypegame/monkeytype",
    app: "https://monkeytype.com/",
    description:
      "A journey started in May 2022 to improve my touch typing skills and eventually increase my productivity. My current best mark is at 125 WPM with 100% accuracy & 90% consistency @ monkeytype 15s typing test.",
  },
  {
    id: "Calculator",
    pushed_at: "",
    name: "Calculator",
    image: require("@/assets/calculator.png"),
    repo: "https://github.com/mezdelex/Calculator",
    app: "https://calculator-mezdelex.netlify.app",
    description:
      "A small project done with React 18 using hooks, functional components, context, context provider, props destructuring, children reserved word and kind of higher order component-ish approach to be able to reuse hook logic. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VSCode.",
  },
  {
    id: "LeetCode",
    pushed_at: "",
    name: "LeetCode",
    image: require("@/assets/leetcode.png"),
    repo: "https://github.com/mezdelex/LeetCode",
    app: "https://leetcode.com/mezdelex",
    description:
      "LeetCode exercises to keep algorithmic problem solving fresh and improve my expertise with C++, C# and Rust using cassert, .NET's xUnit and Rustlang's built in library for unit testing. Also added CI pipelines for each language via GitHub Actions to run testing jobs server side. Coded with Neovim.",
  },
  {
    id: "Resume",
    pushed_at: "",
    name: "Resume",
    image: require("@/assets/resume.png"),
    repo: "https://github.com/mezdelex/Resume",
    app: "https://www.mezdelex.com",
    description:
      "Vue 3 app to serve as an online portfolio to show my development experience. Used Vue 3 Composition API with Typescript. The deployment has been done using GitHub's CD pipeline against Netlify and hosted in a dedicated domain. Coded with Neovim.",
  },
  {
    id: "Concesionario-SPA",
    pushed_at: "",
    name: "Concesionario",
    image: require("@/assets/concesionario.jpg"),
    repo: "https://github.com/mezdelex/Concesionario-SPA",
    app: "https://www.youtube.com/watch?v=iDaF9cqdtz0&ab_channel=Mezdelex",
    description:
      "Technical test using Spring Boot 2.4.5, Vue 3 Composition API with PrimeVUE as UI library and IBM's FileNet service as automated document manager. Coded with VSCode. The project was not deployed anywhere so the link it's a YouTube demo.",
  },
  {
    id: "Recetario-SPA",
    pushed_at: "",
    name: "Recetario SPA",
    image: require("@/assets/recetario.jpg"),
    repo: "https://github.com/mezdelex/Recetario-SPA",
    app: "https://spa-recetario.netlify.app",
    description:
      "Vue 3 app to consume a RESTful API done with Spring Boot 2.4.5 and Java JDK 11+. Used PrimeVUE as UI library, Javascript ES6, Animate CSS, 2 way syncs, props, events, mixins, slots, etc. The deployment has been done using GitHub's CD pipeline against Netlify. Coded with VSCode. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot.",
  },
  {
    id: "Recetario-RESTful-API",
    pushed_at: "",
    name: "Recetario RESTful API",
    image: require("@/assets/recetario2.jpg"),
    repo: "https://github.com/mezdelex/Recetario-RESTful-API",
    app: "https://db-recetario.herokuapp.com/api/plato",
    description:
      "RESTful API done with Spring Boot 2.4.5, Gradle 6.8.2 and Java JDK 11+. Used MVC, Hibernate/JPA, QueryDSL, HATEOAS, JUnit, Mockito, custom mapper, common interfaces, dockerfile, docker-compose, YAML formatting, etc. MySQL DB is hosted by Heroku's JawsDB service. Coded with VSCode. JawsDB service shutsdown the DB after 30 min of inactivity, so if you don't see any content let it boot.",
  },
  {
    id: "AoC2020",
    pushed_at: "",
    name: "Advent of Code (2020)",
    image: require("@/assets/aoc2020.png"),
    repo: "https://github.com/mezdelex/AoC2020",
    app: "https://adventofcode.com/2020",
    description:
      "Algorithmic problem solving to achieve further Java's JDK 11+ language proficiency in declarative paradigm using streams, lambdas and functional interfaces. Coded with VSCode.",
  },
  {
    id: "HackerRank",
    pushed_at: "",
    name: "HackerRank",
    image: require("@/assets/hackerrank.png"),
    repo: "https://github.com/mezdelex/HackerRank",
    app: "https://www.hackerrank.com/alexcondegomez",
    description:
      "HackerRank exercises to keep algorithmic problem solving fresh and improve my expertise with Java's JDK 11+ declarative and imperative syntax and to learn functional programming paradigm using Haskell. Coded with VSCode.",
  },
  {
    id: "Trivia",
    pushed_at: "",
    name: "Trivia",
    image: require("@/assets/trivia.jpg"),
    repo: "https://github.com/mezdelex/Trivia",
    app: "https://mezdelex.github.io/Trivia/trivial_main.html",
    description:
      "My first Web App back in 2020 done with Javascript, HTML, CSS and Bootstrap consuming an external Trivia API that required token authorization to be accessed. Coded with VSCode.",
  },
];

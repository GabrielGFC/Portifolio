import React from 'react';
import { Github, Linkedin, Mail, Database, Server, Code2, Terminal, Cpu, BookOpen, Building2, Calendar, Award } from 'lucide-react';

function App() {
  const projects = [
    {
      title: 'Disponibilidade-BAAN-backend',
      description: 'API RESTful  sistema de disponibilidade',
      tech: ['Node.js', 'MYSQL','JWT','Postman'],
      github: 'https://github.com/GabrielGFC/Disponibilidade-BAAN-backend'
    },
    {
      title: 'Pasteur-BACKEND ',
      description: 'Backend do Sistema de Controle de Estoque para uma aplicação de gerenciamento de inventário.',
      tech: ['Node.js', 'MYSQL','JWT','Postman','SWEGGER'],
      github: 'https://github.com/GabrielGFC/pasteur-backend'
    },
    {
      title: 'teste-php-laravel',
      description: 'Projeto PHP usando Laravel e Docker! Este projeto foi configurado para rodar em containers Docker, facilitando o desenvolvimento e a implantação.',
      tech: ['PHP', 'Laravel', 'Docker', 'MYSQL'],
      github: 'https://github.com/GabrielGFC/teste-php-laravel'
    },
    {
      title: 'Tarefas de programação em C',
      description: 'Este repositório contém tarefas de programação em C realizadas durante o segundo semestre do terceiro período do curso de Engenharia de Software',
      tech: ['C'],
      github: 'https://github.com/GabrielGFC/Tarefa-Willan'
    }
  ];

  const skills = [
    {
      title: 'Backend',
      icon: Server,
      techs: 'PHP, Laravel, Node.js, Python, TypeScript, C#'
    },
    {
      title: 'Banco de Dados',
      icon: Database,
      techs: 'MySQL, PostgreSQL, SQLite, MongoDB'
    },
    {
      title: 'APIs',
      icon: Code2,
      techs: 'REST, JWT, SOLID'
    },
    {
      title: 'DevOps',
      icon: Cpu,
      techs: 'Git, Docker, Remote Work'
    },
    {
      title: 'Frontend',
      icon: Terminal,
      techs: 'React, Angular, Tailwind CSS, HTML, CSS'
    },
  ];

  const experiences = [
    {
      company: 'UniEVANGÉLICA',
      role: 'Estágio-AVA',
      period: 'outubro de 2024 - Presente',
      description: 'Desenvolvimento backend com PHP Laravel e suporte na manutenção de sistemas acadêmicos.'
    },
    {
      company: 'Fábrica de Tecnologias Turing (FTT)',
      role: 'Software Developer - Pleno',
      period: 'setembro de 2023 - Presente',
      description: 'Desenvolvimento de soluções backend e suporte técnico para diversos projetos.'
    },
    {
      company: 'Força Aérea Brasileira - FAB',
      role: 'Software Developer',
      period: 'janeiro de 2024 - dezembro de 2024',
      description: 'Desenvolvimento e aprimoramento de soluções tecnológicas para a instituição.'
    },
    {
      company: 'Tecpress tecnologia',
      role: 'Suporte técnico',
      period: 'janeiro de 2019 - dezembro de 2022',
      description: 'Atendimento e resolução de problemas técnicos, mantendo a infraestrutura de TI em pleno funcionamento'
    },
    {
      company: 'Leomed Drogarias',
      role: 'Analista e Assistente de compras',
      period: 'aneiro de 2023 - agosto de 2023',
      description: 'Análise de dados, controle de estoque e compras de medicamentos.'
    }
  ];

  const certifications = [
    {
      title: 'Fundamentos do C#',
      issuer: 'balta.io',
      date: 'novembro de 2024',
      credential: null
    },
    {
      title: 'Remote Work',
      issuer: 'Certiprof',
      date: 'novembro de 2024',
      expiry: 'novembro de 2027',
      credential: '101533123'
    },
    {
      title: 'Scrum Fundamentals Certified',
      issuer: 'SCRUMstudy',
      date: 'setembro de 2024',
      credential: '1047291'
    },
    {
      title: 'Criando APIs com Node',
      issuer: 'balta.io',
      date: 'janeiro de 2024',
      expiry: 'agosto de 2024'
    },
    {
      title: 'Certified Scrum Product Owner®',
      issuer: 'SCRUMstudy',
      date: 'março de 2024',
      credential: '1020960'
    },
    {
      title: 'Curso de Laravel 11 - Completo e Gratuito',
      issuer: 'EspecializaTi',
      credential: 'iuUL0yI4s5'
    },
  ];

  return (
    <div className="min-h-screen bg-custom-darkest text-white">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-custom-dark to-custom-darkest py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-custom-light">
              <img 
                src="https://avatars.githubusercontent.com/u/143818850?s=400&u=5ad052ecf4c1371445716efeac69bcefb6bab997&v=4" 
                alt="Gabriel F. Carvalho"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Gabriel De Carvalho</h1>
            <p className="text-xl text-gray-300 mb-8">Desenvolvedor Backend | PHP | NodeJS | Javascript | Python | MySQL</p>
            <p className="text-gray-400 max-w-2xl mb-8">
              Estudante de Engenharia de Software com experiência prática em desenvolvimento backend e suporte técnico. 
              Especializado em desenvolvimento de APIs RESTful, bancos de dados SQL/NoSQL e Docker.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/GabrielGFC" target="_blank" rel="noopener noreferrer" className="p-2 bg-custom-primary/50 rounded-full hover:bg-custom-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/gabrielgfc1/" target="_blank" rel="noopener noreferrer" className="p-2 bg-custom-primary/50 rounded-full hover:bg-custom-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:carvalhogabrielgfc1@gmail.com" className="p-2 bg-custom-primary/50 rounded-full hover:bg-custom-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="py-20 bg-custom-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Formação</h2>
          <div className="max-w-3xl mx-auto bg-custom-darkest p-6 rounded-lg border border-custom-primary/20">
            <div className="flex items-start gap-4">
              <BookOpen className="w-8 h-8 text-custom-light flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Bacharelado em Engenharia de Software</h3>
                <p className="text-gray-400">UniEVANGÉLICA - Universidade Evangélica de Goiás</p>
                <p className="text-gray-500">agosto de 2023 - agosto de 2027</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Certificações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-custom-darkest p-6 rounded-lg border border-custom-primary/20 hover:border-custom-light transition-colors">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-custom-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    {cert.date && (
                      <p className="text-gray-500 text-sm">
                        Emitido em {cert.date}
                        {cert.expiry && ` · Expira em ${cert.expiry}`}
                      </p>
                    )}
                    {cert.credential && (
                      <p className="text-gray-500 text-sm mt-1">
                        Credencial: {cert.credential}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-custom-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-6 bg-custom-darkest rounded-lg text-center hover:bg-custom-primary/10 transition-colors">
                <skill.icon className="w-12 h-12 mx-auto mb-4 text-custom-light" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.techs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experiência Profissional</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-custom-darkest p-6 rounded-lg border border-custom-primary/20">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-custom-light flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-custom-light">{exp.company}</p>
                    <div className="flex items-center text-gray-400 mt-1 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-custom-dark/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-custom-darkest rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-custom-primary/20">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-custom-primary/30 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-custom-light hover:text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver código
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-custom-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
          <p className="text-gray-400 mb-8">
            Estou sempre interessado em novos projetos e desafios tecnológicos.
          </p>
          <a
            href="mailto:carvalhogabrielgfc1@gmail.com"
            className="inline-flex items-center bg-custom-primary text-white px-6 py-3 rounded-lg hover:bg-custom-light transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            Entrar em Contato
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} - Desenvolvido com React e Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;

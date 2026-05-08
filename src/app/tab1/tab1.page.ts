import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  // Profile data 
  public nome = 'Gonçalo Sousa';
  public dataNascimento = '24/01/2003';
  public naturalidade = 'Portugal, Ponte de Lima';
  public fotografia = 'assets/foto.jpg';
  public biografia = 'Sou estudante de Engenharia Informática no Instituto Politécnico de Viana do Castelo (IPVC), onde frequento a licenciatura desde 2024, após concluir o CTeSP em Tecnologias e Programação de Sistemas de Informação. Antes disso, estudei na Escola Secundária de Ponte de Lima, no curso de Manutenção Industrial variante Eletromecânica. Durante o ensino secundário, participei no projeto F1 in Schools com a equipa rocKet, representando Portugal no Campeonato Mundial de 2020 e conquistando vários prémios a nível nacional e internacional.';
  public experiencia = 'Ao longo do meu percurso, desenvolvi competências em programação, maioritariamente no desenvolvimento web. Em 2024 realizei um estágio curricular na FTKode como desenvolvedor web, onde trabalhei no desenvolvimento de uma aplicação Shopify integrada com a API GESFaturação, utilizando tecnologias como React, TypeScript, Remix, Express.js, PostgreSQL e Prisma. Durante esta experiência, desenvolvi funcionalidades fullstack, autenticação, gestão de inventário, geração automática de documentos financeiros e dashboards analíticas.';
  public interesses = 'Nos meus tempos livres, gosto de desenvolver projetos próprios, especialmente nas áreas de desenvolvimento web e gamedev. Entre os projetos que desenvolvi destacam-se o EasyPeasyCV, uma plataforma open-source para criação de currículos ATS-friendly, e o GameHub Backlog, uma aplicação fullstack para gestão de bibliotecas de jogos.';
  constructor() { }

}

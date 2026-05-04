import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  public nome = 'Gonçalo Sousa';
  public dataNascimento = '24/01/2003';
  public naturalidade = 'Portugal, Ponte de Lima';
  public fotografia = 'assets/foto.jpg';
  public biografia = 'Sou estudante de Engenharia Informática no Instituto Politécnico de Viana do Castelo (IPVC) e concluí um CTeSP em Tecnologias e Programação de Sistemas de Informação. Antes disso, estudei na Escola Secundária de Ponte de Lima, no curso de Manutenção Industrial variante Eletromecânica, onde também tive a oportunidade de participar no projeto F1 in Schools.';
  public experiencia = 'Ao longo do meu percurso, desenvolvi competências em programação e desenvolvimento de software, incluindo experiência prática num estágio como desenvolvedor web, onde trabalhei com integração de sistemas e aplicações fullstack.';
  public interesses = 'Nos meus tempos livres, gosto de desenvolver projetos próprios, tanto na área web como em gamedev. Desenvolvi o EasyPeasyCV e o GameHub Backlog.';

  constructor() { }

}

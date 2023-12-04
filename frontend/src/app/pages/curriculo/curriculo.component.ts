import { Component, ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css']
})
export class CurriculoComponent {
  dados = [
    {
      id:0,
      nome: 'Pedro Costa da Silva',
      cargo: 'Data Analyst',
      email: 'pedropcs608',
      phone: '(11) 94749-2289',
      github: 'https://github.com/cuesta0900',
      lindekin: 'https://www.linkedin.com/in/pedro-costa-9b7618230/',
      foto: '../../../assets/eu.jpg'
    },{
      id:1,
      nome: 'Lucas Oliveira de Melo',
      cargo: 'Dev FullStack',
      email: 'lucaas1904',
      phone: '(11) 95972-0351',
      github: 'https://github.com/lucas-olmelo',
      lindekin: 'https://www.linkedin.com/in/lucas-ol-melo/',
      foto: '../../../assets/melo.jpg'
    },{
      id:2,
      nome: 'Lucas da Silva Lins',
      cargo: 'Aprendiz Mercedes',
      email: 'lucklins07',
      phone: '(11) 98574-6754',
      github: 'https://github.com/lucklins',
      lindekin: 'https://www.linkedin.com/in/lucas-lins-9418b9231/',
      foto: 'https://media.licdn.com/dms/image/D4D03AQHqPBl3ITbZZg/profile-displayphoto-shrink_100_100/0/1697902676229?e=1707350400&v=beta&t=MBwMtzYI4XsFhe5QbHrF9SRq8e78W3pGYydxQ8dSG7I'
    }
  ]

  resume: number | null = 0;

  trocaCurriculo(id: number): number {
    this.resume = id;
    return this.resume;
  }
}

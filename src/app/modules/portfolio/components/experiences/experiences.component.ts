import { Component, signal } from '@angular/core';

// Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Apresentação de Redes neurais convolucionais aplicada para classificação na faculdade',
        p: 'Uningá |  2023 ',
      },
      text: '<p>No meu primeiro ano fui chamado para fazer uma apresentação de redes neurais pelo meu professor, ele disse que por conta da minha dedicação fui chamado, assim, após a minha apresentação ganhei um certificado internacional para aplicar em meu currículo</p>',
    },
    {
      summary: {
        strong: 'Projetos ao longo de 2023',
        p: 'Udemy | 2023 ',
      },
      text: '<p>No começo do ano pesquisei mais sobre programação e me identifiquei nessa área, espero ter muitas possibilidades para mostrar meus conhecimentos, mas ao longo de 2023 fui gostando muito mais dessa área de front end, assim, pretendo me especializar nessa área.</p>',
    },
    {
      summary: {
        strong: 'Curso Java',
        p: 'Udemy |  2023 ',
      },
      text: '<p>Foi minha primeira Linguagem de programação</p>',
    },
    {
      summary: {
        strong: 'Curso Web moderno',
        p: 'Udemy |  2023 ',
      },
      text: '<p>Aprendi nesse curso várias coisas como: Javascript | React | Next | Vue | Node | HTML | CSS | jQuery | Bootstrap | Webpack | Gulp | MySQL</p>',
    },
  ]);
}

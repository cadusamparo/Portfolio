import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPaenlClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/calculadora.png',
      alt: 'Projeto Calculadora',
      title: 'Calculadora',
      with: '100px',
      height: '100px',
      description:
        '<p>Projeto feito ao longo do curso web moderno, com REACT.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cadusamparo/Calculadora-React',
        },
      ],
    },
    {
      src: 'assets/img/projects/qrcode.png',
      alt: 'Projeto Gerador de QRCODE',
      title: 'QRCODE',
      with: '100px',
      height: '100px',
      description:
        '<p>Projeto feito ao longo do curso web moderno, com VueJS. O objetivo do projeto é gerar o QRCode para cada link que for colocado na pesquisa</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cadusamparo/Gerador-de-qrcode',
        },
      ],
    },
    {
      src: 'assets/img/projects/cadastro.png',
      alt: 'Projeto Cadastro de Usuário',
      title: 'Cadastro de Usuário',
      with: '100px',
      height: '100px',
      description:
        '<p>Projeto feito ao longo do curso web moderno, com REACT. O objetivo é mexer mais com o front e o back end juntos, assim, tendo o melhor conhecimento com os dois trabalhando lado a lado.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cadusamparo/Cadastro-de-Usuario',
        },
      ],
    },
    {
      src: 'assets/img/projects/artigo.png',
      alt: 'Projeto com Site para Artigos',
      title: 'Site de Artigos',
      with: '100px',
      height: '100px',
      description:
        '<p>Projeto feito ao longo do curso web moderno, com VueJS. O objetivo do projeto é mexer com backend e frontend usando banco de dados.</p>',
      links: [
        {
          name: 'Conheça o projeto',
          href: 'https://github.com/cadusamparo/Cadastro-de-Usuario',
        },
      ],
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPaenlClass.PROJECTS
    })
  }
}

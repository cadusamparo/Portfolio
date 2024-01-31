import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'ícone de conhecimento de node'
    },
    {
      src: 'assets/icons/knowledge/vue.svg',
      alt: 'ícone de conhecimento de vue'
    },
    {
      src: 'assets/icons/knowledge/boostrap.svg',
      alt: 'ícone de conhecimento de bootstrap'
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'ícone de conhecimento de java'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'ícone de conhecimento de react'
    },
    {
      src: 'assets/icons/knowledge/gulp.svg',
      alt: 'ícone de conhecimento de gulp'
    },
  ])
}

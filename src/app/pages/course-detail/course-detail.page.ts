import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../interfaces/interfaces';
import { cursosData } from '../../data/cursos-data';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
  imports: [CommonModule, IonicModule]
})
export class CourseDetailPage {
  curso?: Curso;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if (id !== null) {
      this.curso = cursosData.find(c => c.id === id);
    }
  }
}

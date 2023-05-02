import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/s-proyecto.service';

@Component({
  selector: 'app-new-proye',
  templateUrl: './new-proye.component.html',
  styleUrls: ['./new-proye.component.css']
})

export class NewProyeComponent implements OnInit {
  nombreE: string = '';
  descripcionE: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proye = new Proyecto(this.nombreE, this.descripcionE);
    this.sProyecto.save(proye).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }

}
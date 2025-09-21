import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCardComponent } from './producto-card/producto-card.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista de Productos';
  fechaActual = new Date();

  productos: string[] = ['Manzanas', 'Peras', 'Naranjas'];
  mostrarLista = true;
  nuevoProducto = '';

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  agregarProducto() {
    if (this.nuevoProducto.trim()) {
      this.productos.push(this.nuevoProducto.trim());
      this.nuevoProducto = '';
    }
  }
}


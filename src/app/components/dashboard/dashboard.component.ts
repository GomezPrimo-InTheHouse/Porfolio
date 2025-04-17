import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  standalone:true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  formData = {
    name: '',
    organization: '',
    email: '',
    message: ''
  };

  // Método que se ejecuta cuando el formulario es enviado
  onSubmit() {
    if (this.formData.name && this.formData.organization && this.formData.email && this.formData.message) {
      console.log("Formulario enviado:", this.formData);
      alert('Mensaje enviado correctamente');
      // Aquí agregarías tu lógica para enviar los datos, por ejemplo, a través de un servicio HTTP
    } else {
      alert('Por favor, rellena todos los campos');
    }
  }

  
  downloadCV() {
    const cvUrl = './../../../assets/cv-julian.pdf'; 
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Curriculum_Vitae.pdf';
    link.click();
  }
  
  goToGithub() {
    window.open('https://github.com/GomezisInTheHouse?tab=repositories', '_blank');
  }
  

}

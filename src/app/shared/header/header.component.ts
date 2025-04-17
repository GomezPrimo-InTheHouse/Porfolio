import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const urlCv = './../../../assets/cv-julian.pdf'; // Cambia la ruta según la ubicación de tu archivo PDF
// importar inject

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
 

export class HeaderComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const typedTextElement = document.querySelector('.typed-text') as HTMLElement;
  
      // Mensajes sin etiquetas embebidas
      const messages = ['Hey! Hola, soy Julián', 'Bienvenido a mi portfolio'];
      const spanClass = 'purple';
  
      let messageIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
  
      const type = () => {
        const fullMessage = messages[messageIndex];
        let visibleText = fullMessage.substring(0, charIndex);
  
        // Añadimos color al final de escribir, según el mensaje
        if (!isDeleting && charIndex === fullMessage.length) {
          if (fullMessage.includes('Julián')) {
            visibleText = visibleText.replace('Julián', `<span class="${spanClass}">Julián</span>`);
          }
          if (fullMessage.includes('portfolio')) {
            visibleText = visibleText.replace('portfolio', `<span class="${spanClass}">portfolio</span>`);
          }
          typedTextElement.innerHTML = visibleText;
        } else {
          // Usamos textContent mientras escribe o borra
          typedTextElement.textContent = visibleText;
        }
  
        if (!isDeleting) {
          if (charIndex < fullMessage.length) {
            charIndex++;
            setTimeout(type, 70);
          } else {
            isDeleting = true;
            setTimeout(type, 1800);
          }
        } else {
          if (charIndex > 0) {
            charIndex--;
            setTimeout(type, 30);
          } else {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            setTimeout(type, 400);
          }
        }
      };
  
      type();
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/julian-cv.jpg'; // Ajustá si está en subcarpeta
    link.download = 'Julian_CV.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  
}
import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';


@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, DashboardComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

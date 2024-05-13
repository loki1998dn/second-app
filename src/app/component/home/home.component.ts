import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../../services/app.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private app: AppService) {}
  // ngOnInit(): void {
  //   this.app.products(6).subscribe((res: any) => {
  //     this.products = res;
  //   });
  // }
}

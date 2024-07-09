import { Component } from '@angular/core';
import { DividerComponent } from '../components/divider/divider.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}

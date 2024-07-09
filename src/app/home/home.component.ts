import { Component, OnInit } from '@angular/core';
import { DividerComponent } from "../components/divider/divider.component";
import { FetchService } from '../services/fetch.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  text: string = ""
  title: string = ""

  constructor(private fetchService: FetchService) { }

  ngOnInit(): void {
    const request = this.fetchService.fetchData()

    request.subscribe(result => {
      this.text = result.data.text;
      this.title = result.data.title;
    })
  }

}

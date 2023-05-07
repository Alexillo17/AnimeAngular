import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {

  searchTerm: string = '';

  darkmode={
    'dark-mode': false
   };

   

  constructor(private apiServices: ApiService) {

  }

  search()
  {this.apiServices.getAnimes(this.searchTerm).subscribe(result =>
    {
      this.apiServices.addResultAnime(result.data)
    })


  }


}

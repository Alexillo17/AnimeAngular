import { Component, OnInit } from '@angular/core';
import { AnimeJi, Status } from 'src/app/interfaces/api-anime';
import { ApiService} from 'src/app/service/api.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-result-anime',
  templateUrl: './result-anime.component.html',
  styleUrls: ['./result-anime.component.css']
})
export class ResultAnimeComponent implements OnInit{

   anime_results: AnimeJi[] = [];


   darkmode={
    'dark-mode': false
   };

   cardSeparacion = { 'margin-left': '55px' ,'margin-bottom': '10px', 'width': '300px', 'height': '400px'};

   CambiaraModoOscuro()
   {
    this.darkmode['dark-mode']= true;
   }

   page!: number;

   constructor(private animeService: ApiService, private http: HttpClient){

   }

  ngOnInit(): void {

    this.animeService.getResultAnime().subscribe(result =>{
      console.log(this.animeService)
      this.anime_results = result;
    })
  }

}

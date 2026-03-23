import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GitList } from "../../components/git-list/git-list";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page.component',
  imports: [GitList],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent { 

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string){
    this.gifService.searchGifs(query).subscribe(resp => {
      this.gifs.set(resp);
    });
  }
}

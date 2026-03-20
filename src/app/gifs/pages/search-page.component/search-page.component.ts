import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { GitList } from "../../components/git-list/git-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page.component',
  imports: [GitList],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent { 

  gifService = inject(GifService);

  onSearch(query: string){
    this.gifService.searchGifs(query);
  }
}

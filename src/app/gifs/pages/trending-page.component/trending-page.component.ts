import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GitList } from "../../components/git-list/git-list";

@Component({
  selector: 'app-trending-page.component',
  imports: [GitList],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent { }

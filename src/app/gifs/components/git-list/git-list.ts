import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';
import { GitListItem } from "./git-list-item/git-list-item";

@Component({
  selector: 'git-list',
  imports: [GitListItem],
  templateUrl: './git-list.html',
})
export class GitList { 
  // @Input() arrayUrls: string [] = [];

  gifs = input.required<string[]>();
}

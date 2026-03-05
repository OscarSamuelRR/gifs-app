import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GitListItem } from "./git-list-item/git-list-item";

@Component({
  selector: 'git-list',
  imports: [GitListItem],
  templateUrl: './git-list.html',
})
export class GitList { }

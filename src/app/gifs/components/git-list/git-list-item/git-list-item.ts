import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

@Component({
  selector: 'git-list-item',
  imports: [],
  templateUrl: './git-list-item.html',
})
export class GitListItem { 
  // @Input() url: string = '';
  url = input.required<string>();
}

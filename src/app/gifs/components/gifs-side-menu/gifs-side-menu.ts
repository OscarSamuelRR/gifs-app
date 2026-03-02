import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideMenuOptionsComponent } from "../side-menu-options.component/side-menu-options.component";
import { SideMenuHeaderComponent } from "../side-menu-header.component/side-menu-header.component";

@Component({
  selector: 'app-gifs-side-menu',
  imports: [SideMenuOptionsComponent, SideMenuHeaderComponent],
  templateUrl: './gifs-side-menu.html',
})
export class GifsSideMenu { }

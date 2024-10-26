import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CubesComponent } from './svg-components/cubes/cubes.component';
import { RocketComponent } from './svg-components/rocket/rocket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CubesComponent, RocketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'malkata-gradina';
}

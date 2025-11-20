import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TryList } from '../components/try-list/try-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TryList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('bool-pgia');
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{ title() }}!</h1>

    <h1 class="text-3xl font-bold underline">Hello world!</h1>

    <article class="prose">
      <h1>Your content here</h1>
      <p>Beautiful typography without any JavaScript.</p>
    </article>

    <!-- Size variants must be used with base prose class -->
    <article class="prose prose-lg">
      <h1>Larger typography</h1>
    </article>

    <router-outlet />
  `,
  styles: [],
})
export class App {
  protected readonly title = signal('tw-prose-demo');
}

import { Component, output } from '@angular/core';
import type { ProseSize, ProseLibrary } from './prose-content.component';

export interface ProseSettings {
  library: ProseLibrary;
  size: ProseSize;
  darkMode: boolean;
}

@Component({
  selector: 'app-prose-selector',
  template: `
    <div class="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Typography Settings</h2>
      
      <div class="space-y-4">
        <!-- Library Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Typography Library
          </label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input 
                type="radio" 
                name="library" 
                value="tw-prose" 
                [checked]="settings().library === 'tw-prose'"
                (change)="updateLibrary('tw-prose')"
                class="mr-2"
              >
              <span class="text-sm text-gray-900 dark:text-gray-100">tw-prose (CSS-only)</span>
            </label>
            <label class="flex items-center">
              <input 
                type="radio" 
                name="library" 
                value="tailwind-typography" 
                [checked]="settings().library === 'tailwind-typography'"
                (change)="updateLibrary('tailwind-typography')"
                class="mr-2"
              >
              <span class="text-sm text-gray-900 dark:text-gray-100">@tailwindcss/typography (Plugin)</span>
            </label>
          </div>
        </div>

        <!-- Size Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Size Variant
          </label>
          <select 
            [value]="settings().size"
            (change)="updateSize($event)"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          >
            <option value="base">Base (default)</option>
            <option value="sm">Small</option>
            <option value="lg">Large</option>
            <option value="xl">Extra Large</option>
            <option value="2xl">2X Large</option>
          </select>
        </div>

        <!-- Dark Mode Toggle -->
        <div>
          <label class="flex items-center">
            <input 
              type="checkbox" 
              [checked]="settings().darkMode"
              (change)="toggleDarkMode()"
              class="mr-2"
            >
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Dark Mode</span>
          </label>
        </div>

        <!-- Settings Display -->
        <div class="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded border text-xs">
          <div class="text-gray-600 dark:text-gray-400">Current Classes:</div>
          <div class="font-mono text-gray-800 dark:text-gray-200 mt-1">
            {{ getClassPreview() }}
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProseSelectorComponent {
  settingsChange = output<ProseSettings>();

  private _settings: ProseSettings = {
    library: 'tw-prose',
    size: 'base',
    darkMode: false,
  };

  settings = () => this._settings;

  protected updateLibrary(library: ProseLibrary) {
    this._settings = { ...this._settings, library };
    this.settingsChange.emit(this._settings);
  }

  protected updateSize(event: Event) {
    const size = (event.target as HTMLSelectElement).value as ProseSize;
    this._settings = { ...this._settings, size };
    this.settingsChange.emit(this._settings);
  }

  protected toggleDarkMode() {
    this._settings = { ...this._settings, darkMode: !this._settings.darkMode };
    this.settingsChange.emit(this._settings);
  }

  protected getClassPreview(): string {
    const baseClass = this._settings.library === 'tw-prose' ? 'prose' : 'legacy-prose';
    const sizeClass = this._settings.size !== 'base' ? `${baseClass}-${this._settings.size}` : '';
    const darkClass =
      this._settings.darkMode && this._settings.library === 'tw-prose' ? 'prose-invert' : '';

    return [baseClass, sizeClass, darkClass].filter(Boolean).join(' ');
  }
}

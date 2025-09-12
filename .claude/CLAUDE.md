# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Angular 20.2 application that demonstrates and compares typography libraries:

- **tw-prose**: CSS-only typography for Tailwind CSS v4
- **@tailwindcss/typography**: Official Tailwind typography plugin

The application uses modern Angular features including standalone components, signals, and zoneless change detection.

## Development Commands

- `ng serve` - Start development server
- `ng build` - Build for production
- `ng test` - Run unit tests with Karma
- `ng generate component <name>` - Generate new component (inline template/style by default)

## Architecture

### Core Structure

- **Standalone Architecture**: No NgModules, all components are standalone
- **Zoneless**: Uses `provideZonelessChangeDetection()` for better performance
- **Signal-based State**: Uses Angular signals for reactive state management

### Typography Setup

The project demonstrates dual typography approaches:

- **tw-prose**: Imported directly in `styles.css` as `@import 'tw-prose'`
- **@tailwindcss/typography**: Configured as plugin with `legacy-prose` classname to avoid conflicts

### Styling Configuration

- **Tailwind CSS v4**: Uses `@tailwindcss/postcss` plugin
- **PostCSS**: Configured in `.postcssrc.json`
- **Custom dark mode**: Uses custom variant `dark (&:where(.dark, .dark *))`

## Code Generation Defaults

Angular CLI schematics are configured to:

- Generate inline templates and styles for components
- Skip test files for all generated items
- Use `app` prefix for components

## TypeScript Configuration

Strict mode enabled with:

- `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`
- Angular strict templates and injection parameters
- Experimental decorators for Angular features

## Typography Usage Patterns

When working with typography in this project:

- Use `prose` class for tw-prose styling
- Use `legacy-prose` class for @tailwindcss/typography styling
- Size variants must be combined with base class: `prose prose-lg`, not just `prose-lg`
- Dark mode support available with `prose-invert` (tw-prose) or color variants (legacy-prose)

## Angular Best Practices

- Use standalone components (default)
- Use signals for state management
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Use native control flow (`@if`, `@for`, `@switch`)
- Use `inject()` function instead of constructor injection
- Do NOT use `ngClass`/`ngStyle`, use binding syntax instead
- Do NOT use `@HostBinding`/`@HostListener`, use `host` object instead

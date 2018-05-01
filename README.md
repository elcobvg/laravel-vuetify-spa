# Laravel-Vue SPA Starter

> A Laravel-Vue SPA starter project template with Vuetify frontend. 

Forked from https://github.com/cretueusebiu/laravel-vue-spa

## Features

- Laravel 5.6 + Vue + Vue Router + Vuex
- Frontend built with [Vuetify](https://github.com/vuetifyjs/vuetify) UI framework
- Pages with custom layouts 
- Examples for login, register and password reset
- Client-side form validation with [VeeValidate](https://github.com/baianat/vee-validate)
- Integration with [vform](https://github.com/cretueusebiu/vform)
- Authentication with [JWT](https://github.com/tymondesigns/jwt-auth)
- Webpack with [laravel-mix](https://github.com/JeffreyWay/laravel-mix)

## Installation

- `git clone https://github.com/elcobvg/laravel-vuetify-spa.git`
- `cd laravel-vue-spa`
- `cp .env.example .env`
- `composer install`
- `php artisan key:generate`
- `php artisan jwt:secret`
- Edit `.env` and set your database connection details
- `php artisan migrate`
- `npm install` / `yarn`

## Usage

#### Development

```bash
# build and watch
npm run watch

# serve with hot reloading
npm run hot
```

#### Production

```bash
npm run production
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


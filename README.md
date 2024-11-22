composer require nwidart/laravel-modules

composer require inertiajs/inertia-laravel
npm install vue@latest @inertiajs/inertia @inertiajs/inertia-vue3
npm install -D @vitejs/plugin-vue

php artisan vendor:publish --provider="Nwidart\Modules\LaravelModulesServiceProvider"

php artisan inertia:middleware

add
$middleware->web(append: [
        HandleInertiaRequests::class,
    ]);

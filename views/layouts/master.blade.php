<!DOCTYPE html>
<html>
<head lang="{{ LaravelLocalization::setLocale() }}">
    <meta charset="UTF-8">
    @section('meta')
        <meta name="description" content="{{ Setting::get('core::site-description') }}" />
        <meta property="og:sitename" content="{{ Setting::get('core::site-name') }}" />
        <meta property="og:image" content="{{ Theme::image('img/goat-thing.png') }}" />
        <meta property="og:description" content="{{ Setting::get('core::site-description') }}" />
    @show
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
        @section('title'){{ Setting::get('core::site-name') }}@show
    </title>
    <link rel="shortcut icon" href="{{ Theme::url('favicon.ico') }}">

    {!! Theme::style('css/app.css') !!}
</head>
<body>

@include('partials.header')

<div class="container">
    @yield('content')
</div>
@include('partials.footer')

{!! Theme::script('js/all.js') !!}
@yield('scripts')

<?php if (Setting::has('core::google-analytics')): ?>
    {{ Setting::get('core::google-analytics') }}
<?php endif; ?>
</body>
</html>

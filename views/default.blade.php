@extends('layouts.master')

@section('title')
    {{ $page->meta_title}} | @parent
@stop
@section('meta')
    <meta name="title" content="{{ $page->meta_title}}" />
    <meta name="description" content="{{ $page->meta_description }}" />
    <meta property="og:sitename" content="{{ $page->og_title }}" />
    <meta property="og:image" content="{{ $page->og_image }}" />
    <meta property="og:description" content="{{ $page->og_description }}" />
@stop

@section('content')
    <div class="row">
        <h1>{{ $page->title }}</h1>
        {!! $page->body !!}
    </div>
@stop

@extends('layouts.master')

@section('title')
    {{ $post->title }} | @parent
@stop

@section('content')
    <div class="blog-post text-center">
        <div class="blog-header" style="background-image: url({{$post->files()->first()->path}})">
            <div class="inner">
                <span class="linkBack">
                    <a href="{{ URL::route($currentLocale . '.blog') }}"><i class="glyphicon glyphicon-chevron-left"></i> Back to Posts</a>
                </span>
                <h1 class="blog-title">{{ $post->title }}</h1>
                <span class="date">{{ $post->created_at->format('j F Y') }}</span>
            </div>
        </div>
        <div class="row contained">
            <div class="col-md-12">
                <div class="blog-content">
                    {!! $post->content !!}
                </div>
                <p>
                    <?php if ($previous = $post->present()->previous): ?>
                        <a href="{{ route(locale() . '.blog.slug', [$previous->slug]) }}">Previous</a>
                    <?php endif; ?>
                    <?php if ($next = $post->present()->next): ?>
                        <a href="{{ route(locale() . '.blog.slug', [$next->slug]) }}">Next</a>
                    <?php endif; ?>
                </p>
            </div>
        </div>
    </div>
@stop

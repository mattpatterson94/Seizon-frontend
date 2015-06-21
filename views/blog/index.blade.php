@extends('layouts.master')

@section('title')
    Seizon Blog | Latest updates | @parent
@stop

@section('content')
    <div class="row contained blog-list">
        <div class="col-md-12">
            <h1>Blog</h1>
            <?php if (isset($posts)): ?>
            <ul>
                <?php foreach($posts as $post): ?>
                    <li>
                        <h4><a href="{{ URL::route($currentLocale . '.blog.slug', [$post->slug]) }}"><span class="date">{{ $post->created_at->format('d M Y') }}</span><span class="title">{{ $post->title }}</span></a></h4>
                    </li>
                    <div class="clearfix"></div>
                <?php endforeach; ?>
            </ul>
            <?php endif; ?>
        </div>
    </div>
@stop

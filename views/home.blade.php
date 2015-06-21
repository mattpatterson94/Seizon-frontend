@extends('layouts.master')

@section('title')
    {{ $page->meta_title}} | @parent
@stop
@section('meta')
    <meta name="title" content="{{ $page->meta_title}}" />
    <meta name="description" content="{{ $page->meta_description }}" />
@stop

@section('content')
    {!! $page->body !!}
@stop

<nav class="main-nav">
    <?php $items = Menu::instance('main')->getItems();?>
    <ul>
		@foreach($items as $item)
			<li class="{{ ($item->url == filterLocaleFromURL()) ? 'active' : '' }}">
			  <a href="{{ $item->getUrl() }}" {!! $item->getAttributes() !!}>
			  	{!! $item->getIcon() !!}
			    {{ $item->title }}
			  </a>
			</li>
	    @endforeach
    </ul>
</nav>

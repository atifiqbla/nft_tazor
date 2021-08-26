@include('layouts.header')
<!-- .cd-main-header -->
<main class="cd-main-content">
    @include('layouts.sidebar')
    <div class="cd-content-wrapper">
        <div class="card">
            <main>
                <div class="container">
                    <div class="row row--grid">
                        <!-- breadcrumb -->
                        <div class="col-12">
                            <ul class="breadcrumb">
                                <li class="breadcrumb__item"><a href="/">Back</a></li>
                            </ul>
                        </div>
                        <!-- end breadcrumb -->

                        <!-- title -->
                        <div class="col-12">
                            <div class="main__title main__title--page">
                                <h1 id="h1">Explore exclusive digital assets</h1>
                            </div>
                        </div>
                        <!-- end title -->

                        <!-- tabs nav -->
                        <div class="col-12">
                            <ul class="nav nav-tabs main__tabs" id="main__tabs" role="tablist">
                                <li class="nav-item">
                                    <button class="nav-link active" id='idAll' data-id='all'>All</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-id='2' id='id2'>Art</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-id='3' id='id3'>Animation</button>
                                </li>

                                <li class="nav-item">
                                    <button class="nav-link" data-id='5' id='id5'>Memes</button>
                                </li>

                            </ul>
                        </div>
                        <!-- end tabs nav -->
                    </div>

                    <!-- tabs content -->
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="tab-1" role="tabpanel">
                            <div class="row row--grid" id="img">
                                @foreach ($nftFiles as $key => $value)
                                <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                                    <!-- card -->
                                    <div class="card">
                                        <a href="/item/{{ $value['id'] }}" class="card__cover">
                                            <img id="image" src="/nft/{{ $value['file'] }}" alt="">
                                            <span class="card__time card__time--clock">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M8.46777,8.39453l-.00225.00183-.00214.00208ZM18.42188,8.208a1.237,1.237,0,0,0-.23-.17481.99959.99959,0,0,0-1.39941.41114,5.78155,5.78155,0,0,1-1.398,1.77734,8.6636,8.6636,0,0,0,.1333-1.50977,8.71407,8.71407,0,0,0-4.40039-7.582,1.00009,1.00009,0,0,0-1.49121.80567A7.017,7.017,0,0,1,7.165,6.87793l-.23047.1875a8.51269,8.51269,0,0,0-1.9873,1.8623A8.98348,8.98348,0,0,0,8.60254,22.83594.99942.99942,0,0,0,9.98,21.91016a1.04987,1.04987,0,0,0-.0498-.3125,6.977,6.977,0,0,1-.18995-2.58106,9.004,9.004,0,0,0,4.3125,4.0166.997.997,0,0,0,.71534.03809A8.99474,8.99474,0,0,0,18.42188,8.208ZM14.51709,21.03906a6.964,6.964,0,0,1-3.57666-4.40234,8.90781,8.90781,0,0,1-.17969-.96387,1.00025,1.00025,0,0,0-.79931-.84473A.982.982,0,0,0,9.77,14.80957a.99955.99955,0,0,0-.8667.501,8.9586,8.9586,0,0,0-1.20557,4.71777,6.98547,6.98547,0,0,1-1.17529-9.86816,6.55463,6.55463,0,0,1,1.562-1.458.74507.74507,0,0,0,.07422-.05469s.29669-.24548.30683-.2511a8.96766,8.96766,0,0,0,2.89874-4.63269,6.73625,6.73625,0,0,1,1.38623,8.08789,1.00024,1.00024,0,0,0,1.18359,1.418,7.85568,7.85568,0,0,0,3.86231-2.6875,7.00072,7.00072,0,0,1-3.2793,10.457Z" />
                                                </svg>
                                                <span class="card__clock card__clock--2"></span>
                                            </span>
                                        </a>
                                        <h3 class="card__title"><a href="/nft/item/{{ $value['id'] }}">{{ $value['name'] }}</a></h3>
                                        <div class="card__author">
                                            <img src="https://assets.tazor.io/images/avatar5.jpg" alt="">
                                            <a href="/nft/author/{{ $value['owner'] }}">{{ $value['owner'] }}</a>
                                        </div>
                                        <div class="card__info">
                                            <div class="card__price">
                                                <span id="one">Reserve price</span>
                                                <?php if ($value['price'] == null) { ?>
                                                    <span id="two">Free</span>
                                                <?php } else { ?>
                                                    <span id="two">{{ $value['price'] }}</span>
                                                <?php } ?>

                                            </div>
                                            <button class="card__likes" type="button">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
                                                </svg>
                                                <span id="three">189</span>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- end card -->
                                </div>
                                @endforeach
                            </div>
                            <!-- collapse -->
                            <div class="row" id="collapsemore">
                            </div>
                            <div class="row row--grid">
                                <div class="col-12" id="remove-row">
                                    <button id="btn-more" data-id="{{$value->id}}" class="main__load" type="button" data-toggle="collapse" aria-expanded="false" aria-controls="collapsemore">Load more</button>
                                </div>
                            </div>
                            <!-- end collapse -->
                        </div>
                    </div>

                </div>
                <!-- end tabs content -->
        </div>
</main>
</div>
<!-- end carousel -->
</section>
</div>
</main> <!-- .cd-main-content -->
<script src="https://assets.tazor.io/nft/js/main.js"></script>
<script src="/js/script.js"></script>
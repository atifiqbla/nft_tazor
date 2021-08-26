@include('layouts.header')
<main class="cd-main-content">
	@include('layouts.sidebar')
	<div class="cd-content-wrapper">
		<div class="card">
			<div class="">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="">
								<h1 class="home__title">The largest NFT marketplace</h1>
								<p class="home__text">Digital marketplace for crypto collectibles and non-fungible tokens. <br>Buy, sell, and discover exclusive digital assets.</p>
								<div class="">
									<a href="explore/" class="home__btn home__btn--clr">Explore</a>
									<a href="creatCollectable" class="home__btn">Create</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- end home -->

			<div class="container">
				<!-- live auctions -->
				<section class="row row--grid">
					<!-- title -->
					<div class="col-12">
						<div class="main__title">
							<h2>Live auctions</h2>
						</div>
					</div>
					<!-- end title -->

					<!-- carousel -->
					<div class="col-12">
						<div class="main__carousel-wrap">
							<div class="main__carousel main__carousel--live owl-carousel" id="live">
								@foreach ($nftFiles as $key => $value)
								<div class="card">
									<a href="item/{{ $value['id'] }}" class="card__cover">
										<img id="image" src="/nft/{{ $value['file'] }}" alt="">
										<span class="card__time">15 minutes left</span>
									</a>
									<h3 class="card__title"><a href="item/{{ $value['id'] }}">{{ $value['name'] }}</a></h3>
									<div class="card__author card__author--verified">
										<img src="https://assets.tazor.io/images/avatar5.jpg" alt="">
										<a href="author/{{ $value['owner'] }}">{{ $value['owner'] }}</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span id ="one">Current price</span>
											@if ($value['price'] == 0)
											<span id ="two">Free</span>
											@else
											<span id ="two">{{ $value['price']  }}</span>
											@endif
										</div>

										<button class="card__likes" type="button">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
											</svg>
											<span id ="three">189</span>
										</button>
									</div>
								</div>
								@endforeach
							</div>
						</div>
					</div>
					<!-- end carousel -->
				</section>
				<!-- end live auctions -->

				<!-- top sellers -->

				<!-- end top sellers -->

				<!-- explore -->
				<section class="row row--grid">
					<!-- title -->
					<div class="col-12">
						<div class="main__title">
							<h2><a href="explore/">Explore</a></h2>
						</div>
					</div>
					<!-- end title -->

					<!-- carousel -->
					<div class="col-12">
						<div class="main__carousel-wrap">
							<div class="main__carousel main__carousel--explore owl-carousel" id="explore">
								@foreach ($nftFiles as $key => $value)
								<div class="card">
									<a href="item/{{ $value['id'] }}" class="card__cover">
										<img id="image" src="/nft/{{ $value['file'] }}" alt="">
									</a>
									<h3 class="card__title"><a href="item/{{ $value['id'] }}">{{ $value['name'] }}</a></h3>
									<div class="card__author">
										<img src="https://assets.tazor.io/images/avatar5.jpg" alt="">
										<a href="author/{{ $value['owner'] }}">{{ $value['owner'] }}</a>
									</div>
									<div class="card__info">
										<div class="card__price">
											<span id ="one">Reserve price</span>
											@if ($value['price'] == 0)
											<span id ="two">Free</span>
											@else
											<span id ="two">{{ $value['price']  }}</span>
											@endif
										</div>

										<button class="card__likes" type="button">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
												<path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z" />
											</svg>
											<span id ="three">189</span>
										</button>
									</div>
								</div>
								@endforeach


							</div>
						</div>
					</div>
					<!-- end carousel -->
				</section>

			</div>
			<!-- end get started -->
</main>

<script src="https://assets.tazor.io/nft/js/main.js"></script>

</html>
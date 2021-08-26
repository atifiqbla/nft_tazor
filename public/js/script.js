$(document).ready(function () {
    // call function on #btn-more
    $(document).on('click', '#id2', function () {
        // set id value	
        var id = $(this).data('id');
        $("#idAll").removeClass("active");
        $("#id3").removeClass("active");
        $("#id5").removeClass("active");
        $(this).addClass("active");
        var content = "<div class='row row--grid'>"
        $.ajax({
            method: "GET",
            url: '/explore/' + id,
            dataType: "json",
            success: function (datas) { // ajax success
                if (datas == "") {
                    content += 'No Art Data Found!!';
                    $('#btn-more').hide();
                } else {
                    $.each(datas, function (index) {
                        $('#btn-more').show();
                        $('#btn-more').data("id", datas[index].id);
                        if (datas[index].price == 0) {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">Free</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        } else {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">' + datas[index].price + '</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        }
                    });
                }
                content += "</div>"
                $('#img').html(content);
                $('#collapsemore').html('');
                $('#remove-row').show();
                $('#btn-more').html("Load More data");
            }
        });
    });
});

$(document).ready(function () {
    // call function on #btn-more
    $(document).on('click', '#id3', function () {
        // set id value	
        var id = $(this).data('id');
        $("#id2").removeClass("active");
        $("#id5").removeClass("active");
        $("#idAll").removeClass("active");
        $(this).addClass("active");
        var content = "<div class='row row--grid'>"
        $.ajax({
            method: "GET",
            url: '/explore/' + id,
            dataType: "json",
            success: function (datas) { // ajax success
                if (datas == "") {
                    content += 'No Animation Data Found!!';
                    $('#btn-more').hide();
                } else {
                    $.each(datas, function (index) {
                        $('#btn-more').show();
                        $('#btn-more').data("id", datas[index].id);
                        if (datas[index].price == 0) {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">Free</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        } else {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">' + datas[index].price + '</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        }
                    });
                }
                content += "</div>"
                $('#img').html(content);
                $('#collapsemore').html('');
                $('#remove-row').show();
                $('#btn-more').html("Load More data");
            }
        });
    });
});

$(document).ready(function () {
    // call function on #btn-more
    $(document).on('click', '#id5', function () {
        // set id value	
        var id = $(this).data('id');
        $("#id3").removeClass("active");
        $("#id2").removeClass("active");
        $("#idAll").removeClass("active");
        $(this).addClass("active");
        var content = "<div class='row row--grid'>"
        $.ajax({
            method: "GET",
            url: '/explore/' + id,
            dataType: "json",
            success: function (datas) { // ajax success
                if (datas == "") {
                    content += 'No Memes Data Found!!';
                    $('#btn-more').hide();
                } else {
                    $.each(datas, function (index) {
                        $('#btn-more').show();
                        $('#btn-more').data("id", datas[index].id);
                        if (datas[index].price == 0) {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">Free</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        } else {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">' + datas[index].price + '</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        }
                    });
                }
                content += "</div>"
                $('#img').html(content);
                $('#collapsemore').html('');
                $('#remove-row').show();
                $('#btn-more').html("Load More data");
            }
        });
    });
});

$(document).ready(function () {
    // call function on #btn-more
    $(document).on('click', '#idAll', function () {
        $("#id3").removeClass("active");
        $("#id2").removeClass("active");
        $("#id5").removeClass("active");
        $(this).addClass("active");
        var content = "<div class='row row--grid'>"
        $.ajax({
            method: "GET",
            url: '/explore-filter',
            dataType: "json",
            success: function (datas) { // ajax success
                if (datas == "") {
                    content += 'No Data Found!!';
                    $('#btn-more').hide();
                } else {
                    $.each(datas, function (index) {
                        $('#btn-more').show();
                        $('#btn-more').data("id", datas[index].id);
                        if (datas[index].price == 0) {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">Free</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        } else {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">' + datas[index].price + '</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        }
                    });
                }
                content += "</div>"
                $('#img').html(content);
                $('#collapsemore').html('');
                $('#remove-row').show();
                $('#btn-more').html("Load More data");
            }
        });
    });
});

$(document).ready(function () {
    // call function on #btn-more
    $(document).on('click', '#btn-more', function () {
        // set id value	
        var id = $(this).data('id');
        var active = $(".active").attr('data-id');
        var content = " "
        $("#btn-more").html("Loading....");
        $.ajax({
            method: "GET",
            url: '/loadexplorefilter/' + active,
            data: {
                id: id,
                _token: "{{csrf_token()}}"
            },
            dataType: "json",
            success: function (datas) { // ajax success
                console.log(datas);
                if (datas != '') {
                    $.each(datas, function (index) {
                        if (datas[index].price == 0) {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">Free</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        } else {
                            content += '<div class="col-12 col-sm-6 col-lg-4 col-xl-3"><div class="card"><a href="/item/' + datas[index].id + '" class="card__cover"><img src="/nft/' + datas[index].file + '" alt="" style="height:300px !important;"><span class="card__clock card__clock--2"></span></a><h3 class="card__title"><a href="item/' + datas[index].id + '">' + datas[index].name + '</a></h3> <div class="card__author"><img src="https://wizz.network/public/nft/img/avatars/avatar.jpg" alt=""><a href="author/' + datas[index].owner + '">me</a></div> <div class="card__info"><div class="card__price"><span id="one">Reserve price</span><span id="two">' + datas[index].price + '</span></div><button class="card__likes" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"/></svg><span id="three">189</span></button></div></div></div>';
                        }
                        content += " ";
                        $('#collapsemore').html(content);
                        $('#remove-row').hide();
                        // append result 
                    });

                } else {
                    // nio data found
                    $('#btn-more').html("No Data");
                }
            }
        });
    });
});
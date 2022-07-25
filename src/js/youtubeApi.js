var key = 'AIzaSyAOrcr2nI9FoBHSvsUvSD7kBIB_7PDPkJA';
var playlistId = 'PLfXL1l9xwHtzUye_4Ls1tUFzRxHaNtWKt';
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

var options = {
    part: 'snippet',
    key: key,
    maxResults: 40,
    playlistId: playlistId,
};

loadVids();

function loadVids() {
    $.getJSON(URL, options, function(data) {
        var id = data.items[0].snippet.resourceId.videoId;
        mainVid(id, data);
        resultsLoop(data);
    });
}

// render video information
function resultsLoop(data) {
    $.each(data.items, function(i, item) {
        var thumb = item.snippet.thumbnails.medium.url;
        var title = item.snippet.title;
        var desc = item.snippet.description.substring(0, 100);
        var vid = item.snippet.resourceId.videoId;

        $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4 data-pointer-type="content" class="details-title">${title}</h4>
									<p data-pointer-type="content" class="details-paragraph">${desc}</p>
								</div>

							</article>
						`);
    });
}

function mainVid(id, data) {
    // const title = data.items.snippet.thumbnails.medium.url;
    $('#video').html(`
    			<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    		`);
}

$('main').on('click', 'article', function() {
    var id = $(this).attr('data-key');
    mainVid(id);
});
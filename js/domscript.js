$(function(){

	for (var i = 0; i < acts.length; i++) {
		var player = '';
		var meta = '';
		if(acts[i][2]) {
			meta = '<div class="meta"><ul><li><a href="'+acts[i][2]+'" target="_blank">In Spotify</a></li><li><a href="'+acts[i][1]+'" target="_blank">Auf MS DOCKVILLE</a></li></ul></div>';
			//player = '<iframe src="https://embed.spotify.com/?uri='+acts[i][3]+'" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>';
		} else {
			meta = '<div class="meta"><ul><li><a href="'+acts[i][4]+'" target="_blank">Auf Soundcloud</a></li><li><a href="'+acts[i][1]+'" target="_blank">Auf MS DOCKVILLE</a></li></ul></div>';
			//player = acts[i][4];
		}
		$('.artists').append('<section class="artist"><h2><a href="'+acts[i][1]+'" target="_blank">'+acts[i][0]+'</a></h2><div class="player" id="player'+i+'"><span data-act="'+i+'" class="playerbutton glyphicon glyphicon-play"></span></div>'+meta+'</section>');
	};

  $('iframe[src*="embed.spotify.com"]').each( function() {
    $(this).css('width',$(this).parent().width()-20);
    $(this).attr('src',$(this).attr('src'));
  });
  $('iframe[src*="w.soundcloud.com"]').each( function() {
    	$(this).css('width',$(this).parent().width()-20);
    	//$(this).attr('src',$(this).attr('src'));
  	});

  $('.playerbutton').on('click', function(){
  	var i = $(this).data('act');
  	$(this).hide();
  	if(acts[i][2]) {
  		$('#player'+i).append('<iframe src="https://embed.spotify.com/?uri='+acts[i][3]+'" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>');
  	} else {
  		$('#player'+i).append(acts[i][3]);
  	}
  	resizePlayer();
  });


});

$(window).resize(function() {
  $('iframe[src*="embed.spotify.com"]').each( function() {
    $(this).css('width',$(this).parent().width()-20);
    //$(this).attr('src',$(this).attr('src'));
  });
  $('iframe[src*="w.soundcloud.com"]').each( function() {
    	$(this).css('width',$(this).parent().width()-20);
    	//$(this).attr('src',$(this).attr('src'));
  	});
});

function resizePlayer() {
	$('iframe[src*="embed.spotify.com"]').each( function() {
    	$(this).css('width',$(this).parent().width()-20);
    	//$(this).attr('src',$(this).attr('src'));
  	});
  	$('iframe[src*="w.soundcloud.com"]').each( function() {
    	$(this).css('width',$(this).parent().width()-20);
    	//$(this).attr('src',$(this).attr('src'));
  	});
}


// <section class="artist">
// 		<h2><a href="http://www.msdockville.de/festival_act/festival/music/DIE_ANTWOORD">DIE ANTWOORD</a></h2>
// 		<iframe src="https://embed.spotify.com/?uri=spotify:artist:6urkHDoIVO1WO8vNIwcJmM" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
// 		<div class="meta">
// 			<ul>
// 				<li><a href="http://open.spotify.com/artist/6urkHDoIVO1WO8vNIwcJmM">In Spotify</a></li>
// 				<li><a href="http://www.msdockville.de/festival_act/festival/music/DIE_ANTWOORD">Auf MS DOCKVILLE</a></li>
// 			</ul>
// 		</div>
// 	</section>

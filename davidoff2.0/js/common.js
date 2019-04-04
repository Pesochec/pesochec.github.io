$(function() {
	/*$.magnificPopup.open({
		items: {
		  src: '#thanks'
		},
		mainClass: 'mfp-fade'
	  });*/
	$('.open-popup').magnificPopup({
		removalDelay: 300,
		mainClass: 'mfp-fade'
	  });
	$('.service a[href="#zakaz"]').on('click', function(){
		let servname = $(this).data('servname');
		$('#serv').val(servname)
	})
	$('.popup .close').on('click', function(){
		$.magnificPopup.close();
	})
});

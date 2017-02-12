

	//document.getElementById('codeBlock').innerHTML = '<pre>' + document.getElementById('codeBlock').innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</pre>';



$(document).ready(function() {

	//////////
	//Tabs code, taken from http://www.jacklmoore.com/notes/jquery-tabs/
	//////////
	$('ul.tabs').each(function(){
	// For each set of tabs, we want to keep track of
	// which tab is active and it's associated content
	var $active, $content, $links = $(this).find('a');

	// If the location.hash matches one of the links, use that as the active tab.
	// If no match is found, use the first link as the initial active tab.
	$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
	$active.closest('li').addClass('active');

	$content = $($active[0].hash);

	// Hide the remaining content
	$links.not($active).each(function () {
	  $(this.hash).hide();
	});

	// Bind the click event handler
	$(this).on('click', 'a', function(e){
	  // Make the old tab inactive.
	  $active.closest('li').removeClass('active');
	  $content.hide();

	  // Update the variables with the new link and content
	  $active = $(this);
	  $content = $(this.hash);

	  // Make the tab active.
	  $active.closest('li').addClass('active');
	  $content.show();

	  // Prevent the anchor's default click action
	  e.preventDefault();
	});
	});
	//////////
	//end tabs
	//////////
});
// Usage: The actions_bar will be loaded on all elements with class otb_actions_bar
// Example: <div class='otb_actions_bar' id='drop_55'></div>
// ActionsBar will receive the data-id value to configure actions
// Make syre you use jQuery

function GenerateActionBar(data)
{
  var actions_bar = $('<div><a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-thumbtack"> </i> </a> <a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-thumbs-up"> </i> </a> <a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-copy"> </i> </a> <a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-edit"> </i> </a> <a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-share-alt"> </i> </a>
            </a></div>');
  return actions_bar;
}

// Display actions bar
$(function () { 
	$('.otb_actions_bar').append(GenerateActionBar({ "Id": 1 }));
})

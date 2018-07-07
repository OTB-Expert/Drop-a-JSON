// Usage: The actions_bar will be loaded on all elements with class otb_actions_bar
// Example: <div class='otb_actions_bar' id='drop_55'></div>
// ActionsBar will receive the data-id value to configure actions
// Make syre you use jQuery
// Usage example: https://otb.expert/Drop-a-JSON/

function OtbGenerateActionBar(data)
{
  var actions_bar = $('<div> <a class="fa-lg p-2 m-2 it-ic" alt="Report bug"> <i class="fas fa-bug"> </i> </a> | <a class="fa-lg p-2 m-2 dribbble-ic" alt="Pin on your board"> <i class="fas fa-thumbtack"> </i> </a> <a class="fa-lg p-2 m-2 li-ic" alt="Like it"> <i class="fas fa-thumbs-up"> </i> </a> <a class="fa-lg p-2 m-2 so-ic"> <i class="fas fa-copy" alt="Creative Commons use"> </i> </a> <a class="fa-lg p-2 m-2 slack-ic"> <i class="fas fa-edit" alt="Edit under Creative Commons license"> </i> </a> | <a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-share-alt" alt="Share on Facebook"> </i> </a></div>');
  return actions_bar;
}

function OtbActionShare(data)
{
  
}

function OtbActionPin(data)
{
  
}

function OtbActionLike(data)
{
  
}

function OtbActionEdit(data)
{
  
}

function OtbActionReport(data)
{
  
}

function OtbActionCopy(data)
{
  
}

// Display actions bar
$(function () { 
	$('.otb_actions_bar').append(OtbGenerateActionBar({ "Id": 1 }));
})

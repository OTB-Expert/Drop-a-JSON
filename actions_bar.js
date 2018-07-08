// Usage: The actions_bar will be loaded on all elements with class otb_actions_bar
// Example: <div class='otb_actions_bar' id='drop_55'></div>
// ActionsBar will receive the data-id value to configure actions
// Make syre you use jQuery
// Usage example: https://otb.expert/Drop-a-JSON/

function OtbGenerateActionBar(data)
{
  var actions_bar = $('<div style="border: 1px solid #DDD; border-radius: 5px; padding: 5px 0px 5px 0px"> <a class="fa-lg p-2 m-2 it-ic" alt="Report bug"> <i class="fas fa-bug"> </i> </a> | <a class="fa-lg p-2 m-2 dribbble-ic" alt="Pin on your board"> <i class="fas fa-thumbtack"> </i> </a> <a class="fa-lg p-2 m-2 li-ic" alt="Like it"> <i class="fas fa-thumbs-up"> </i> </a> <a class="fa-lg p-2 m-2 so-ic"> <i class="fas fa-copy" alt="Creative Commons use"> </i> </a> <a class="fa-lg p-2 m-2 slack-ic"> <i class="fas fa-edit" alt="Edit under Creative Commons license"> </i> </a> | <a class="fa-lg p-2 m-2 fb-ic"> <i class="fas fa-share-alt" alt="Share on Facebook"> </i> </a></div>');
  return actions_bar;
}

function OtbInjectFacebook()
{
	
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
$(function (){ 
	$('body').append(`<head>
  <title>Searching for Drops ?</title>
  <meta property="og:url"           content="https://otb.expert/drops/" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="JSON Drops" />
  <meta property="og:description"   content="Add drops to your code to transform JSON into beautifull UI" />
  <meta property="og:image"         content="https://otb.expert/img/SmallJsonDrops.png" />
</head>
<body>

  <!-- Load Facebook SDK for JavaScript -->
  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>

  <!-- Your share button code -->
  <div class="fb-share-button" 
    data-href="https://www.your-domain.com/your-page.html" 
    data-layout="button_count">
  </div>`);
	$('.otb_actions_bar').append(OtbGenerateActionBar({ "Id": 1 }));
})

function DropAJSON(json){
	var json = JSON.parse(json);
	if(json === undefined)
	{
		return;
	}
	
	var resulted_ui = '';//JSON.stringify(json);
	
	var table = $('#resulted_ui');
	table.html("");

	$.each( json, function( label, item ) {
		if(item.length ==undefined)
		{
			table = addProperty(table, label, item);
		}
		else
		{
			addArray(table, label, item);
		}
	});
	
	// $('#resulted_ui').html(resulted_ui);
}

function addArray(table, label, item)
{
	var tr = $('<tr>').addClass('bar');				
	var tdLabel = $('<td>').addClass('bar').text(label+':');	
	$(tdLabel).attr('title', item.Info);	
	// if(item.Tag!==undefined)
	{
		var textarea = $('<'+item.Tag+'>').addClass('bar').val(item.Value);	
		var childTable = $('<table>').addClass('bar').text(item.Value);
	}
	var tdValue = $('<td>').addClass('bar').append(childTable);
	
	if(typeof(item)===typeof({}))
	$.each( item, function( index, childItem ) {
		if(childItem.length == undefined)
		{
			addObject(childTable, index, childItem);
		}
		else
		{
			addArray(childTable, childLable, childItem);
		}
		//td.innerHTML = "content";
		//tr.append(tdLabel);
		//tr.append(tdValue);
		//childTable.append(tr);
	});
	//td.innerHTML = "content";
	tr.append(tdLabel);
	tr.append(tdValue);
	table.append(tr);
	return childTable;
}

function addProperty(parent, label, item)
{
	var tr = $('<tr>').addClass('bar');				
	var tdLabel = $('<td>').addClass('bar').text(label+':');	
	$(tdLabel).attr('title', item.Info);	
	if(item.isPrototypeOf(Object))
	{
	}
	else
	{
		if(item.Tag!==undefined)
		{
			var textarea = $('<'+item.Tag+'>').addClass('bar').val(item.Value);			
		}
		else
		{
			var textarea = $('<textarea>').addClass('bar').text(item);			
		}
	}
	var tdValue = $('<td>').addClass('bar').append(textarea);
	//td.innerHTML = "content";
	tr.append(tdLabel);
	tr.append(tdValue);
	parent.append(tr);
	return parent;
}

function addObject(parent, label, object)
{
	var tr = $('<tr>').addClass('bar');				
	var tdLabel = $('<td>').addClass('bar').text(label+':');	
	$(tdLabel).attr('title', object.Info);	
	var childTable = $('<table>').addClass('bar').text(object.Value);
	var tdValue = $('<td>').addClass('bar').append(childTable);
	$.each( object, function( label, item ) {		
		if(item.isPrototypeOf(Array))
		{
			addArray(childTable, label, item);
		}
		else if(typeof(item) == "object")
		{
			addObject(childTable, label, item);
		}
		else
		{
			addProperty(childTable, label, item);
		}
	});
	//td.innerHTML = "content";
	tr.append(tdLabel);
	tr.append(tdValue);
	parent.append(tr);
	return parent;
}

$( document ).ready(function (){
	DropAJSON($('#user_input').val());
});

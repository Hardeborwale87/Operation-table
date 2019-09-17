function generator()
{
	var r = row.value;
	var c = column.value;
	var ss = sPoint.value;
	var product = "";
	product = "<table border=2><tr>";


	for(var i = ss; i <= r; i++)	
	{

			product += "<td>";
			product += i + " " + selct.value + " " + "by";
			product += "<table>";

				for(w = 1; w <=c; w++)
				{
					
					if (selct.value == 'Multiply') 

					product += "<tr><td>" + i + " *  " + w + "=" + i * w + "</td></tr>";	
				};

				
			for (w = 1; w <= c; w++) 
				{
					if (selct.value == 'Divide')

					product += "<tr><td maxlength=5>" + i + " /  " + w + "=" + Math.floor(i / w) + "</td></tr>";

				};

				for (w = 1; w <= c; w++) 
				{
					if (selct.value == 'Sum')

					product += "<tr><td>" + i + " +  " + w + "=" + Number(i + w) + "</td></tr>";

				};

				for (w = 1; w <= c; w++) 
				{
					if (selct.value == 'Subtract')

					product += "<tr><td>" + i + " -  " + w + "=" + Number(i - w) + "</td></tr>";

				};
				
				product += "</td></table>"	
	}


	product += "</tr></table>"
	display.innerHTML = product;

		if (selct.value == 'Multiply') {
			title.innerHTML = "Multiplication Table";
		}

		else if (selct.value == 'Divide') {
			title.innerHTML = "Division Table";
		}

		else if (selct.value == 'Sum') {
			title.innerHTML = "Addition Table";
		}

		else if (selct.value == 'Subtract') {
			title.innerHTML = "Subtraction Table";
		}
		
}
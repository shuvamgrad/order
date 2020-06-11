var counter = 0;
var divparent = document.createElement("div");
var divParentItemType = document.getElementById("parent");

if (counter == 0){
	itemType();
	counter += 1;
}

function addItem(){
	itemType();
	counter +=1;
}



//GET ITEM TYPE
function itemType(){
	const divItemType = document.createElement("div");
	const select = document.createElement("select");
	const optionlong = document.createElement("option");
	const optiona4 = document.createElement("option");
	const optionexam = document.createElement("option");
	const optiondiary = document.createElement("option");
	const optionregister = document.createElement("option");
	const optionspiral = document.createElement("option");

	select.append(optionlong);
	select.append(optiona4);
	select.append(optionexam);
	select.append(optiondiary);
	select.append(optionregister);
	select.append(optionspiral);

	select.setAttribute("onchange","getChoosenItem(this.options[this.selectedIndex].text);");

	divItemType.append(select);

	optionlong.innerHTML = "Long Copy";
	optiona4.innerHTML = "A4 Copy";
	optionexam.innerHTML = "Exam Copy";
	optiondiary.innerHTML = "School Diary";
	optionregister.innerHTML = "Register";
	optionspiral.innerHTML = "Spiral Notebook";

	divParentItemType.append(divItemType);
	divItemType.setAttribute("class","form-group");
}

function getChoosenItem(selected){
	
	if (selected == "Long Copy"){
		clearParent(divparent);
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		addItemButton();
		divParentItemType.append(divparent);
	}
	else if (selected == "A4 Copy"){
		clearParent(divparent);
		a4Type();
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		addItemButton();
		divParentItemType.append(divparent);
	}
	else if (selected == "Exam Copy"){
		clearParent(divparent);
		itemQuantity();
		itemNoOfPages();
		addItemButton();
		divParentItemType.append(divparent);
	}
	else if (selected == "School Diary"){
		clearParent(divparent);
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		addItemButton();
		divParentItemType.append(divparent);
	}
	else if (selected == "Register"){
		clearParent(divparent);
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		addItemButton();
		divParentItemType.append(divparent);
	}
	else if (selected == "Spiral Notebook"){
		clearParent(divparent);
		spiralType();
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		addItemButton();
		divParentItemType.append(divparent);
	}
	else{
		clearParent(divparent);
		error("Item Not Found");
		divParentItemType.append(divparent);
	}
}

function clearParent(p){
	p.querySelectorAll('*').forEach(n => n.remove());
}

//GET ITEM QUANTITY
function itemQuantity(){
	const divItemQuantity = document.createElement("div");
	const inputQtyLabel = document.createElement("label");
	const inputQuantity = document.createElement("input");
	inputQtyLabel.innerHTML = "Quantity of your order : ";
	inputQtyLabel.setAttribute("for","inputQuantity");
	inputQuantity.setAttribute("type","number");
	inputQuantity.setAttribute("name","inputQuantity");
	inputQuantity.setAttribute("id","inputQuantity");
	inputQuantity.setAttribute("list","defaultQnumbers");

	const QnumData = document.createElement("datalist");
	QnumData.setAttribute("id","defaultQnumbers");
	const o500 = document.createElement("option");
	const o1000 = document.createElement("option");
	const o2000 = document.createElement("option");
	const o5000 = document.createElement("option");
	const o10000 = document.createElement("option");
	const o15000 = document.createElement("option");

	o500.innerHTML = "500";
	o1000.innerHTML = "1000";
	o2000.innerHTML = "2000";
	o5000.innerHTML = "5000";
	o10000.innerHTML = "10000";
	o15000.innerHTML = "20000";

	o500.setAttribute("value","500");
	o1000.setAttribute("value","1000");
	o2000.setAttribute("value","2000");
	o5000.setAttribute("value","5000");
	o10000.setAttribute("value","10000");
	o15000.setAttribute("value","20000");

	QnumData.append(o500);
	QnumData.append(o1000);
	QnumData.append(o2000);
	QnumData.append(o5000);
	QnumData.append(o10000);
	QnumData.append(o15000);

	divItemQuantity.setAttribute("class","form-group");

	divItemQuantity.append(inputQtyLabel);
	divItemQuantity.append(inputQuantity);
	divItemQuantity.append(QnumData);

	divparent.append(divItemQuantity);
}




/*<div class="form-group">
	<label for="orderPage">Number of pages:</label>
	<span id="orderpagehint">Please type number of pages in each notebook.For example, if you want 200 pages(i.e 100panna) inside cover, type 204 pages.</span>	
	<input type="number" name="orderPage" id="orderPage" min="4" max="2000" step="4" value="0">	
</div>*/

//GET ITEM NO OF PAGES
function itemNoOfPages(){
	const divItemNoPages = document.createElement("div");
	const inputNoPagesLabel = document.createElement("label");
	const inputNopages = document.createElement("input");
	inputNoPagesLabel.innerHTML = "Please type number of pages in item";
	inputNoPagesLabel.setAttribute("for","inputNopages");
	inputNopages.setAttribute("type","number");
	inputNopages.setAttribute("name","inputNopages");
	inputNopages.setAttribute("id","inputNopages");
	inputNopages.setAttribute("min","4");
	inputNopages.setAttribute("max","2000");
	inputNopages.setAttribute("step","4");
	inputNopages.setAttribute("value","0");

	divItemNoPages.setAttribute("class","form-group");

	divItemNoPages.append(inputNoPagesLabel);
	divItemNoPages.append(inputNopages);

	divparent.append(divItemNoPages);
}



/*<div class="form-group">
	<label for="coverColor">Cover Design:</label>	
	<input type="radio" name="coverColor" id="single" value="1" checked>
	<label for="single">Single Color</label>
	<input type="radio" name="coverColor" id="two" value="2">
	<label for="two">Two Color</label>
	<input type="radio" name="coverColor" id="multi" value="4">
	<label for="multi">Multi Color</label>
</div>*/

//GET COVER DESIGN NO. OF COLOR
function itemNoOfColor(){
	const divCoverNoColor = document.createElement("div");
	const inputCoverColorLabel = document.createElement("label");
	const inputSingleColor = document.createElement("input");
	const inputSingleColorLabel = document.createElement("label");
	const inputTwoColor = document.createElement("input");
	const inputTwoColorLabel = document.createElement("label");
	const inputMultiColorLabel = document.createElement("label");
	const inputMultiColor = document.createElement("input");

	inputCoverColorLabel.innerHTML = "No. of color in cover design : ";
	inputCoverColorLabel.setAttribute("for","coverColor");
	inputSingleColorLabel.innerHTML = "Single Color";
	inputSingleColorLabel.setAttribute("for","singleColor");
	inputTwoColorLabel.innerHTML = "Two Color";
	inputTwoColorLabel.setAttribute("for","twoColor");
	inputMultiColorLabel.innerHTML = "Multi Color";
	inputMultiColorLabel.setAttribute("for","multiColor");

	inputSingleColor.setAttribute("type","radio");
	inputSingleColor.setAttribute("name","coverColor");
	inputSingleColor.setAttribute("id","singleColor");
	inputSingleColor.setAttribute("value","1");
	inputSingleColor.setAttribute("checked","True");

	inputTwoColor.setAttribute("type","radio");
	inputTwoColor.setAttribute("name","coverColor");
	inputTwoColor.setAttribute("id","twoColor");
	inputTwoColor.setAttribute("value","2");


	inputMultiColor.setAttribute("type","radio");
	inputMultiColor.setAttribute("name","coverColor");
	inputMultiColor.setAttribute("id","multiColor");
	inputMultiColor.setAttribute("value","4");

	divCoverNoColor.setAttribute("class","form-group");

	divCoverNoColor.append(inputCoverColorLabel);
	divCoverNoColor.append(inputSingleColor);
	divCoverNoColor.append(inputSingleColorLabel);
	divCoverNoColor.append(inputTwoColor);
	divCoverNoColor.append(inputTwoColorLabel);
	divCoverNoColor.append(inputMultiColor);
	divCoverNoColor.append(inputMultiColorLabel);

	divparent.append(divCoverNoColor);

} 


/*<div class="form-group">
	<label for="coverLam">Do you want lamination in cover:</label>	
	<input type="radio" name="coverLam" id="lamYes" value="yes" checked>
	<label for="lamYes">Yes</label>
	<input type="radio" name="coverLam" id="lamNo" value="no">
	<label for="lamNo">No</label>
</div>*/

//GET LAMINATION YES OR NO
function itemLam() {
	const divCoverLam = document.createElement("div");
	const inputCoverLamLabel = document.createElement("label");
	const inputLamYes = document.createElement("input");
	const inputLamYesLabel = document.createElement("label");
	const inputLamNo = document.createElement("input");
	const inputLamNoLabel = document.createElement("label");


	inputCoverLamLabel.innerHTML = "Do you want lamination in cover: ";
	inputCoverLamLabel.setAttribute("for","coverLam");
	inputLamYesLabel.innerHTML = "Yes";
	inputLamYesLabel.setAttribute("for","lamYes");
	inputLamNoLabel.innerHTML = "No";
	inputLamNoLabel.setAttribute("for","lamNo");

	inputLamYes.setAttribute("type","radio");
	inputLamYes.setAttribute("name","coverLam");
	inputLamYes.setAttribute("id","lamYes");
	inputLamYes.setAttribute("value","True");
	inputLamYes.setAttribute("checked","True");

	inputLamNo.setAttribute("type","radio");
	inputLamNo.setAttribute("name","coverLam");
	inputLamNo.setAttribute("id","lamNo");
	inputLamNo.setAttribute("value","False");

	divCoverLam.setAttribute("class","form-group");

	divCoverLam.append(inputCoverLamLabel);
	divCoverLam.append(inputLamYes);
	divCoverLam.append(inputLamYesLabel);
	divCoverLam.append(inputLamNo);
	divCoverLam.append(inputLamNoLabel);

	divparent.append(divCoverLam);

}


/*<div class="form-group" id="moreA4" style="display: none">
	<label for="a4type">Which A4 copy:</label>	
	<input type="radio" name="a4type" id="a4normal" value="a4normal" checked>
	<label for="a4normal">A4</label>
	<input type="radio" name="a4type" id="a4flat" value="a4flat">
	<label for="a4flat">A4 Flat</label>
</div>*/

//GET A4 Type
function a4Type() {
	const divA4Type = document.createElement("div");
	const inputA4TypeLabel = document.createElement("label");
	const inputA4 = document.createElement("input");
	const inputA4Label = document.createElement("label");
	const inputA4Flat = document.createElement("input");
	const inputA4FlatLabel = document.createElement("label");


	inputA4TypeLabel.innerHTML = "Type of A4 Notebook: ";
	inputA4TypeLabel.setAttribute("for","a4type");
	inputA4Label.innerHTML = "A4";
	inputA4Label.setAttribute("for","a4");
	inputA4FlatLabel.innerHTML = "A4 Flat";
	inputA4FlatLabel.setAttribute("for","a4Flat");

	inputA4.setAttribute("type","radio");
	inputA4.setAttribute("name","a4type");
	inputA4.setAttribute("id","a4");
	inputA4.setAttribute("value","normal");
	inputA4.setAttribute("checked","True");

	inputA4Flat.setAttribute("type","radio");
	inputA4Flat.setAttribute("name","a4type");
	inputA4Flat.setAttribute("id","a4flat");
	inputA4Flat.setAttribute("value","flat");

	divA4Type.setAttribute("class","form-group");

	divA4Type.append(inputA4TypeLabel);
	divA4Type.append(inputA4);
	divA4Type.append(inputA4Label);
	divA4Type.append(inputA4Flat);
	divA4Type.append(inputA4FlatLabel);

	divparent.append(divA4Type);

}
	

/*<div class="form-group" id="moreSpiral" style="display: none">
	<label for="spiralsize">Size of Spiral:</label>

	<select class="form-control" name="spiralsize" id="spiralsize">
		<option value="a4spiral">A4 Spiral</option>
		<option value="a5spiral">A5 Spiral</option>
		<option value="b5spiral">B5 Spiral</option>
	</select>
</div>*/
//Get Spiral Type
function spiralType() {
	const divSpiralType = document.createElement("div");
	const inputSpiralTypeLabel = document.createElement("label");
	const selectSpiral = document.createElement("select");
	const optionA4spiral = document.createElement("option");
	const optionA5spiral = document.createElement("option");
	const optionB5spiral = document.createElement("option");

	selectSpiral.append(optionA4spiral);
	selectSpiral.append(optionA5spiral);
	selectSpiral.append(optionB5spiral);

	inputSpiralTypeLabel.innerHTML = "Type of Spiral Notebook: ";
	inputSpiralTypeLabel.setAttribute("for","sprialType");

	divSpiralType.append(inputSpiralTypeLabel);
	divSpiralType.append(selectSpiral);

	optionA4spiral.innerHTML = "A4 Spiral";
	optionA5spiral.innerHTML = "A5 Spiral";
	optionB5spiral.innerHTML = "B5 Spiral";

	divparent.append(divSpiralType);
	divSpiralType.setAttribute("class","form-group");
}
	
//for error
function error(errorMessage) {
	const diverror = document.createElement("div");
	const h1error = document.createElement("h1");
	h1error.innerHTML = errorMessage;
}

//add item button
function addItemButton() {
	const divAddItemButton = document.createElement("div");
	const buttonAddItem = document.createElement("button");

	buttonAddItem.innerHTML = "Add another Item";
	buttonAddItem.setAttribute("type","button");
	buttonAddItem.setAttribute("id","addButtonItem");
	buttonAddItem.setAttribute("onclick","addItem();");

	divAddItemButton.append(buttonAddItem);
	divparent.append(divAddItemButton);
}
var counter = 0;
var divParent = [];
var orderItemsArray = [];
var divParentItemType = document.getElementById("parent");
var addButtonItem = document.getElementById("addItemButton");
addButtonItem.setAttribute("onclick","incrementCounter();");

var flag = false;


function addItem(c){

	//counter = this.counter;
	const count = c;
	orderItemsArray[count] = {};
	orderItemsArray[count].id = count;
	flag = false;
	itemType(count);
}

function itemType(c){
	const count = c;
	// console.log("counter : " + counter);
	// console.log("this.counter : " + this.counter);
	// console.log("count : " + count);
	const divItemType = document.createElement("div");
	divItemType.setAttribute("class","itemTypeCard")
	const select = [];
	select[count] = document.createElement("select");
	select[count].id = count;
	//const select = document.createElement("select");
	const optionlong = document.createElement("option");
	const optiona4 = document.createElement("option");
	const optionexam = document.createElement("option");
	const optiondiary = document.createElement("option");
	const optionregister = document.createElement("option");
	const optionspiral = document.createElement("option");

	select[count].append(optionlong);
	select[count].append(optiona4);
	select[count].append(optionexam);
	select[count].append(optiondiary);
	select[count].append(optionregister);
	select[count].append(optionspiral);

	

	divItemType.append(select[count]);
	select[count].setAttribute("onchange","getChoosenItem(this.options[this.selectedIndex]);");
	//select[count].setAttribute("onchange",getChoosenItem(this));
	optionlong.innerHTML = "Long Copy";
	optiona4.innerHTML = "A4 Copy";
	optionexam.innerHTML = "Exam Copy";
	optiondiary.innerHTML = "School Diary";
	optionregister.innerHTML = "Register";
	optionspiral.innerHTML = "Spiral Notebook";

	divParentItemType.append(divItemType);
	//divItemType.setAttribute("class","form-group");

}


//GET ITEM TYPE
function getChoosenItem(selected){
	//console.log(selected.parentElement.id);
	const count = selected.parentElement.id;
	//const count = this.counter;
	const value = selected.text;
	orderItemsArray[count].itemType = value;
	divParent[count] = document.createElement("div");
	divParent[count].setAttribute("class","card");

	if (value == "Long Copy"){
		itemQuantity(count);
		itemNoOfPages(count);
		itemNoOfColor(count);
		itemLam(count);
		removeItemFun(count);
	}
	else if (value == "A4 Copy"){
		a4Type(count);
		itemQuantity(count);
		itemNoOfPages(count);
		itemNoOfColor(count);
		itemLam(count);
		removeItemFun(count);
	}
	else if (value == "Exam Copy"){
		itemQuantity(count);
		itemNoOfPages(count);
		removeItemFun(count);
	}
	else if (value == "School Diary"){
		itemQuantity(count);
		itemNoOfPages(count);
		itemNoOfColor(count);
		itemLam(count);
		removeItemFun(count);
	}
	else if (value == "Register"){
		itemQuantity(count);
		itemNoOfPages(count);
		itemNoOfColor(count);
		itemLam(count);
		removeItemFun(count);
	}
	else if (value == "Spiral Notebook"){
		spiralType(count);
		itemQuantity(count);
		itemNoOfPages(count);
		itemNoOfColor(count);
		itemLam(count);
		removeItemFun(count);
	}
	else{
		error("Item Not Found");
	}

	if(divParentItemType.childNodes[(count*2)+2]){
		divParentItemType.replaceChild(divParent[count],divParentItemType.childNodes[(count*2)+2]);
		flag = true;
	}
	else{
		divParentItemType.append(divParent[count]);
		flag = true;
	}

	// if(count!=0){
	// 	removeItem(count);
	// }
	//removeItemFun(count);

	
	console.log(divParentItemType);
	console.log("divParent[count] : ", divParent[count]);
	console.log("count : ", count);
}

function removeItemFun(c){
	const count = c;
	if (count!=0) {
		removeItem(count);
	}
}

//GET ITEM QUANTITY
function itemQuantity(c){
	const count = c;
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


	divItemQuantity.setAttribute("class","itemDivHead");

	divItemQuantity.append(inputQtyLabel);
	divItemQuantity.append(inputQuantity);
	divItemQuantity.append(QnumData);

	orderItemsArray[count].itemQuantity = inputQuantity.value;

	divParent[count].append(divItemQuantity);

	//console.log(divParentItemType);
	//console.log(divParent);
}




/*<div class="form-group">
	<label for="orderPage">Number of pages:</label>
	<span id="orderpagehint">Please type number of pages in each notebook.For example, if you want 200 pages(i.e 100panna) inside cover, type 204 pages.</span>	
	<input type="number" name="orderPage" id="orderPage" min="4" max="2000" step="4" value="0">	
</div>*/

//GET ITEM NO OF PAGES
function itemNoOfPages(c){
	const count = c;
	const divItemNoPages = document.createElement("div");
	const inputNoPagesLabel = document.createElement("label");
	const inputNopages = document.createElement("input");
	inputNoPagesLabel.innerHTML = "Please type number of pages in item: ";
	inputNoPagesLabel.setAttribute("for","inputNopages");
	inputNopages.setAttribute("type","number");
	inputNopages.setAttribute("name","inputNopages");
	inputNopages.setAttribute("id","inputNopages");
	inputNopages.setAttribute("min","4");
	inputNopages.setAttribute("max","2000");
	inputNopages.setAttribute("step","4");
	inputNopages.setAttribute("value","0");

	divItemNoPages.setAttribute("class","itemDivHead");

	divItemNoPages.append(inputNoPagesLabel);
	divItemNoPages.append(inputNopages);

	orderItemsArray[count].itemNoOfPages = inputNopages.value;
	divParent[count].append(divItemNoPages);
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
function itemNoOfColor(c){
	const count = c;
	const divCoverNoColor = document.createElement("div");
	const inputCoverColorLabel = document.createElement("label");
	const inputSingleColor = document.createElement("input");
	const inputSingleColorLabel = document.createElement("label");
	const inputTwoColor = document.createElement("input");
	const inputTwoColorLabel = document.createElement("label");
	const inputMultiColorLabel = document.createElement("label");
	const inputMultiColor = document.createElement("input");

	inputCoverColorLabel.innerHTML = "No. of color in cover design : ";
	inputCoverColorLabel.setAttribute("for","coverColor" + count);
	inputSingleColorLabel.innerHTML = "Single Color";
	inputSingleColorLabel.setAttribute("for","singleColor");
	inputTwoColorLabel.innerHTML = "Two Color";
	inputTwoColorLabel.setAttribute("for","twoColor");
	inputMultiColorLabel.innerHTML = "Multi Color";
	inputMultiColorLabel.setAttribute("for","multiColor");

	inputSingleColor.setAttribute("type","radio");
	inputSingleColor.setAttribute("name","coverColor" + count);
	inputSingleColor.setAttribute("id","singleColor");
	inputSingleColor.setAttribute("value","1");
	inputSingleColor.setAttribute("checked","True");

	inputTwoColor.setAttribute("type","radio");
	inputTwoColor.setAttribute("name","coverColor" + count);
	inputTwoColor.setAttribute("id","twoColor");
	inputTwoColor.setAttribute("value","2");


	inputMultiColor.setAttribute("type","radio");
	inputMultiColor.setAttribute("name","coverColor" + count);
	inputMultiColor.setAttribute("id","multiColor");
	inputMultiColor.setAttribute("value","4");

	divCoverNoColor.setAttribute("class","itemDivHead");

	divCoverNoColor.append(inputCoverColorLabel);
	divCoverNoColor.append(inputSingleColor);
	divCoverNoColor.append(inputSingleColorLabel);
	divCoverNoColor.append(inputTwoColor);
	divCoverNoColor.append(inputTwoColorLabel);
	divCoverNoColor.append(inputMultiColor);
	divCoverNoColor.append(inputMultiColorLabel);

	orderItemsArray[count].itemNoOfColor = document.getElementsByName("coverColor" + count).value;

	divParent[count].append(divCoverNoColor);

} 


/*<div class="form-group">
	<label for="coverLam">Do you want lamination in cover:</label>	
	<input type="radio" name="coverLam" id="lamYes" value="yes" checked>
	<label for="lamYes">Yes</label>
	<input type="radio" name="coverLam" id="lamNo" value="no">
	<label for="lamNo">No</label>
</div>*/

//GET LAMINATION YES OR NO
function itemLam(c) {
	const count = c;
	const divCoverLam = document.createElement("div");
	const inputCoverLamLabel = document.createElement("label");
	const inputLamYes = document.createElement("input");
	const inputLamYesLabel = document.createElement("label");
	const inputLamNo = document.createElement("input");
	const inputLamNoLabel = document.createElement("label");


	inputCoverLamLabel.innerHTML = "Do you want lamination in cover: ";
	inputCoverLamLabel.setAttribute("for","coverLam"+count);
	inputLamYesLabel.innerHTML = "Yes";
	inputLamYesLabel.setAttribute("for","lamYes");
	inputLamNoLabel.innerHTML = "No";
	inputLamNoLabel.setAttribute("for","lamNo");

	inputLamYes.setAttribute("type","radio");
	inputLamYes.setAttribute("name","coverLam"+count);
	inputLamYes.setAttribute("id","lamYes");
	inputLamYes.setAttribute("value","True");
	inputLamYes.setAttribute("checked","True");

	inputLamNo.setAttribute("type","radio");
	inputLamNo.setAttribute("name","coverLam"+count);
	inputLamNo.setAttribute("id","lamNo");
	inputLamNo.setAttribute("value","False");

	divCoverLam.setAttribute("class","itemDivHead");

	divCoverLam.append(inputCoverLamLabel);
	divCoverLam.append(inputLamYes);
	divCoverLam.append(inputLamYesLabel);
	divCoverLam.append(inputLamNo);
	divCoverLam.append(inputLamNoLabel);

	orderItemsArray[count].itemLam = document.getElementsByName("coverLam"+count).value;

	divParent[count].append(divCoverLam);

}


/*<div class="form-group" id="moreA4" style="display: none">
	<label for="a4type">Which A4 copy:</label>	
	<input type="radio" name="a4type" id="a4normal" value="a4normal" checked>
	<label for="a4normal">A4</label>
	<input type="radio" name="a4type" id="a4flat" value="a4flat">
	<label for="a4flat">A4 Flat</label>
</div>*/

//GET A4 Type
function a4Type(c) {
	const count = c;
	const divA4Type = document.createElement("div");
	const inputA4TypeLabel = document.createElement("label");
	const inputA4 = document.createElement("input");
	const inputA4Label = document.createElement("label");
	const inputA4Flat = document.createElement("input");
	const inputA4FlatLabel = document.createElement("label");


	inputA4TypeLabel.innerHTML = "Type of A4 Notebook: ";
	inputA4TypeLabel.setAttribute("for","a4type"+count);
	inputA4Label.innerHTML = "A4";
	inputA4Label.setAttribute("for","a4");
	inputA4FlatLabel.innerHTML = "A4 Flat";
	inputA4FlatLabel.setAttribute("for","a4Flat");

	inputA4.setAttribute("type","radio");
	inputA4.setAttribute("name","a4type"+count);
	inputA4.setAttribute("id","a4");
	inputA4.setAttribute("value","normal");
	inputA4.setAttribute("checked","True");

	inputA4Flat.setAttribute("type","radio");
	inputA4Flat.setAttribute("name","a4type"+count);
	inputA4Flat.setAttribute("id","a4flat");
	inputA4Flat.setAttribute("value","flat");

	divA4Type.setAttribute("class","itemDivHead");

	divA4Type.append(inputA4TypeLabel);
	divA4Type.append(inputA4);
	divA4Type.append(inputA4Label);
	divA4Type.append(inputA4Flat);
	divA4Type.append(inputA4FlatLabel);

	orderItemsArray[count].a4Type = document.getElementsByName("a4type".count).value;
	//console.log(count);
	//console.log(counter);
	//console.log(divParent[0]);

	divParent[count].append(divA4Type);

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
function spiralType(c) {
	const count = c;
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

	orderItemsArray[count].spiralType = selectSpiral.value;
	divParent[count].append(divSpiralType);
	divSpiralType.setAttribute("class","itemDivHead");
}
	
//for error
function error(errorMessage) {
	const h1error = document.createElement("h1");
	h1error.innerHTML = errorMessage;
	alert(h1error.innerHTML);
}


function removeItem(c){
	const count = c;
	const divRemoveItemButton = document.createElement("div");
	const buttonRemoveItem = document.createElement("button");

	buttonRemoveItem.innerHTML = "Remove Item";
	buttonRemoveItem.setAttribute("type","button");
	buttonRemoveItem.setAttribute("id","removeItemButton");
	buttonRemoveItem.setAttribute("class","removeButton");
	//buttonRemoveItem.setAttribute("onclick","decrementCounter(\'' + count + '\');");
	buttonRemoveItem.addEventListener('click',function(){
		decrementCounter(count);
	});

	divRemoveItemButton.append(buttonRemoveItem);
	divParent[count].append(divRemoveItemButton);

}

//add item button
// function addItemButton(counter) {
// 	let count = this.counter;
// 	const divAddItemButton = document.createElement("div");
// 	const buttonAddItem = document.createElement("button");

// 	buttonAddItem.innerHTML = "Add another Item";
// 	buttonAddItem.setAttribute("type","button");
// 	buttonAddItem.setAttribute("id","addButtonItem");
// 	buttonAddItem.setAttribute("onclick","incrementCounter();");

// 	divAddItemButton.append(buttonAddItem);
// 	divParent[count].append(divAddItemButton);
// }

function decrementCounter(c){
	const count = c;
	if (divParentItemType.childNodes[(count*2)+2]){
		divParentItemType.removeChild(divParentItemType.childNodes[(count*2)+2]);
	}
	if (divParentItemType.childNodes[(count*2)+1]){
		divParentItemType.removeChild(divParentItemType.childNodes[(count*2)+1]);
	}
	counter -= 1;
}




function incrementCounter(){
	if (flag){
		counter += 1;
		addItem(counter);
	}
	else
		error("Please enter previous item details before adding another");
	
}


if (counter == 0){
	addItem(counter);
}
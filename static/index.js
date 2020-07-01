var counter = 0;
var orderItemsArray = [];
var divParent = document.getElementById("parent");

function submitFormFun(){
	if (validateInput()) {
		orderItemsArray[counter] = orderItems;
		console.log(orderItemsArray[counter]);
		counter++;
		document.getElementById("itemForm").submit();
	}
	else
		alert("Input is not correct, please check");
	// orderItems.itemQuantity = inputQuantity.value;
	// orderItems.itemNoOfPages = inputNopages.value;
	

	//document.getElementById("itemForm").submit();
}


function itemCheckNoColor(){
	singleColor = document.getElementById("singleColor");
	twoColor = document.getElementById("twoColor");
	multiColor = document.getElementById("multiColor");

	if (singleColor.checked) {
		orderItems.itemNoColor = singleColor.value;
	}
	else if (twoColor.checked) {
		orderItems.itemNoColor = twoColor.value;
	}
	else if (multiColor.checked) {
		orderItems.itemNoColor = multiColor.value;
	}
	else return false;
}


function itemCheckLam(){
	lamYes = document.getElementById("lamYes");
	lamNo = document.getElementById("lamNo");

	if (lamYes.checked) {
		orderItems.itemLam = lamYes.value;
	}
	else if (lamNo.checked) {
		orderItems.itemLam = lamNo.value;
	}
	else return false;
}

function itemCheckA4Type(){
	a4Normal = document.getElementById("a4");
	a4Flat = document.getElementById("a4flat");

	if (a4Normal.checked) {
		orderItems.a4type = a4Normal.value;
	}
	else if (a4Flat.checked) {
		orderItems.a4type = a4Flat.value;
	}
	else return false;
}



function validateInput(){

	const custName = document.getElementById("contactname").value;
	const custNum = document.getElementById("contactnumber").value;

	const itemType = document.getElementById("orderType").value;
	const itemQuantity = parseInt(inputQuantity.value);
	const itemNoOfPages = parseInt(inputNopages.value);
	
	if (custName == "" || custNum == "") {
		return false;
	}

	if (itemQuantity == "" || itemQuantity < 500) {
			return false;
		}
	if (itemNoOfPages == "") {
			return false;
		}
	orderItems = {};
	orderItems.id = counter;
	// singleColor = document.getElementById("singleColor");
	// twoColor = document.getElementById("twoColor");
	// multiColor = document.getElementById("multiColor");
	// lamYes = document.getElementById("lamYes");
	// lamNo = document.getElementById("lamNo");

	if (itemType == "Long Copy") {
		orderItems.itemType = itemType;
		orderItems.itemQuantity = itemQuantity;
		orderItems.itemNoOfPages = itemNoOfPages;
		itemCheckNoColor();
		itemCheckLam();
		return true;
	}
	else if (itemType == "A4 Copy") {
		orderItems.itemType = itemType;
		orderItems.itemQuantity = itemQuantity;
		orderItems.itemNoOfPages = itemNoOfPages;
		itemCheckNoColor();
		itemCheckLam();
		itemCheckA4Type();
		return true;
	}
	else if (itemType == "Exam Copy") {
		orderItems.itemType = itemType;
		orderItems.itemQuantity = itemQuantity;
		orderItems.itemNoOfPages = itemNoOfPages;
		return true;
	}
	else if (itemType == "School Diary") {
		orderItems.itemType = itemType;
		orderItems.itemQuantity = itemQuantity;
		orderItems.itemNoOfPages = itemNoOfPages;
		itemCheckNoColor();
		itemCheckLam();
		return true;
	}
	else if (itemType == "Register") {
		orderItems.itemType = itemType;
		orderItems.itemQuantity = itemQuantity;
		orderItems.itemNoOfPages = itemNoOfPages;
		itemCheckNoColor();
		itemCheckLam();
		return true;
	}
	else if (itemType == "Spiral Notebook") {
		orderItems.itemType = itemType;
		orderItems.itemQuantity = itemQuantity;
		orderItems.itemNoOfPages = itemNoOfPages;
		itemCheckNoColor();
		itemCheckLam();
		orderItems.sprialType = document.getElementById("spiralType").value;
		return true;
	}
	else {
		return false;
	}
}

function moreOptions(){
	const value = document.getElementById("orderType").value;
	//orderItemsArray[count].itemType = value;
	//orderItems = {};
	//orderItems.id = counter;
	//orderItems.itemType = value;
	divParent.innerHTML = "";
	console.log(value);

	if (value == "Long Copy"){
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		//removeItemFun(count);
	}
	else if (value == "A4 Copy"){
		a4Type();
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		//removeItemFun(count);
	}
	else if (value == "Exam Copy"){
		itemQuantity();
		itemNoOfPages();
		//removeItemFun(count);
	}
	else if (value == "School Diary"){
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		//removeItemFun(count);
	}
	else if (value == "Register"){
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		//removeItemFun(count);
	}
	else if (value == "Spiral Notebook"){
		spiralType();
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		//removeItemFun(count);
	}
	else{
		error("Item Not Found");
	}
}


function itemQuantity(){
	//const count = c;
	const divItemQuantity = document.createElement("div");
	const inputQtyLabel = document.createElement("label");
	const inputQuantity = document.createElement("input");
	inputQtyLabel.innerHTML = "Quantity of your order : ";
	inputQtyLabel.setAttribute("for","inputQuantity");
	inputQuantity.setAttribute("type","number");
	inputQuantity.setAttribute("name","inputQuantity");
	inputQuantity.setAttribute("id","inputQuantity");
	inputQuantity.setAttribute("list","defaultQnumbers");
	//inputQuantity.setAttribute("value","{{ orderQuantity }}");
	//inputQuantity.setAttribute("required",true);
	// const p = document.createElement("p");
	// p.innerHTML = "{{ orderQuantity }}"
	// divItemQuantity.append(p);
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

	//orderItems.itemQuantity = inputQuantity.value;

	divParent.append(divItemQuantity);

	//console.log(divParentItemType);
	//console.log(divParent);
}




/*<div class="form-group">
	<label for="orderPage">Number of pages:</label>
	<span id="orderpagehint">Please type number of pages in each notebook.For example, if you want 200 pages(i.e 100panna) inside cover, type 204 pages.</span>	
	<input type="number" name="orderPage" id="orderPage" min="4" max="2000" step="4" value="0">	
</div>*/

//GET ITEM NO OF PAGES
function itemNoOfPages(){
	//const count = c;
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
	inputNopages.setAttribute("value","{{ noOfPages }}");

	divItemNoPages.setAttribute("class","itemDivHead");

	divItemNoPages.append(inputNoPagesLabel);
	divItemNoPages.append(inputNopages);

	//orderItems.itemNoOfPages = inputNopages.value;
	divParent.append(divItemNoPages);
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
	//const count = c;
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

	divCoverNoColor.setAttribute("class","itemDivHead");

	divCoverNoColor.append(inputCoverColorLabel);
	divCoverNoColor.append(inputSingleColor);
	divCoverNoColor.append(inputSingleColorLabel);
	divCoverNoColor.append(inputTwoColor);
	divCoverNoColor.append(inputTwoColorLabel);
	divCoverNoColor.append(inputMultiColor);
	divCoverNoColor.append(inputMultiColorLabel);

	//orderItems.itemNoOfColor = document.getElementsByName("coverColor").value;

	divParent.append(divCoverNoColor);

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
	//const count = c;
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
	inputLamYes.setAttribute("value","true");
	inputLamYes.setAttribute("checked","True");

	inputLamNo.setAttribute("type","radio");
	inputLamNo.setAttribute("name","coverLam");
	inputLamNo.setAttribute("id","lamNo");
	inputLamNo.setAttribute("value","false");

	divCoverLam.setAttribute("class","itemDivHead");

	divCoverLam.append(inputCoverLamLabel);
	divCoverLam.append(inputLamYes);
	divCoverLam.append(inputLamYesLabel);
	divCoverLam.append(inputLamNo);
	divCoverLam.append(inputLamNoLabel);

	//orderItems.itemLam = document.getElementsByName("coverLam").value;

	divParent.append(divCoverLam);

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
	//const count = c;
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

	divA4Type.setAttribute("class","itemDivHead");

	divA4Type.append(inputA4TypeLabel);
	divA4Type.append(inputA4);
	divA4Type.append(inputA4Label);
	divA4Type.append(inputA4Flat);
	divA4Type.append(inputA4FlatLabel);

	//orderItems.a4Type = document.getElementsByName("a4type").value;
	//console.log(count);
	//console.log(counter);
	//console.log(divParent[0]);

	divParent.append(divA4Type);

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
	//const count = c;
	const divSpiralType = document.createElement("div");
	const inputSpiralTypeLabel = document.createElement("label");
	const selectSpiral = document.createElement("select");
	selectSpiral.setAttribute("id","spiralType");
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

	//orderItems.spiralType = selectSpiral.value;
	divParent.append(divSpiralType);
	divSpiralType.setAttribute("class","itemDivHead");
}
	
//for error
function error(errorMessage) {
	const h1error = document.createElement("h1");
	h1error.innerHTML = errorMessage;
	alert(h1error.innerHTML);
}
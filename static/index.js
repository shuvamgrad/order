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
		specialQuery();
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


//GET COVER DESIGN NO. OF COLOR
function itemNoOfColor(){
	const noOfColorRadioArray = [{"id":"coverColor","message":"No. of color in cover design :"},
								{"value":1,"id":"singleColor","message":"Single Color","checked":true},
								{"value":2,"id":"twoColor","message":"Two Color","checked":false},
								{"value":4,"id":"multiColor","message":"Multi Color","checked":false}
								];
	divParent.append(createRadioButtons(noOfColorRadioArray));
} 

//GET LAMINATION YES OR NO
function itemLam() {

	const lamRadioArray = [{"id":"coverlam","message":"Do you want lamination in cover :"},
								{"value":true,"id":"lamYes","message":"Yes","checked":true},
								{"value":false,"id":"lamNo","message":"No","checked":false},
								];
	divParent.append(createRadioButtons(lamRadioArray));
}

//GET A4 Type
function a4Type() {
	const a4TypeRadioArray = [{"id":"a4Type","message":"Type of A4 Notebook :"},
								{"value":"a4normal","id":"a4normal","message":"A4","checked":true},
								{"value":"a4flat","id":"a4flat","message":"A4 Flat","checked":false},
								];
	divParent.append(createRadioButtons(a4TypeRadioArray));
}

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


//GET SPECIAL QUERYS
function specialQuery(){
	//const count = c;
	// const divSpecialQuery = document.createElement("div");
	// const inputSpecialQueryLabel = document.createElement("label");
	// const inputSpecialQueryButton = document.createElement("input");

	specialQueryList = {"message":"Check box of additional features :","id":"specialQueryButton","onclick":"specialQueryFun();"}
	divParent.append(createCheckbox(specialQueryList));

	// inputSpecialQueryLabel.innerHTML = "Check box for additional features :";
	// inputSpecialQueryLabel.setAttribute("for","specialQueryButton");
	// inputSpecialQueryButton.setAttribute("type","checkbox");
	// inputSpecialQueryButton.setAttribute("onclick","specialQueryFun();");
	// inputSpecialQueryButton.setAttribute("id","specialQueryButton");
	// inputSpecialQueryButton.setAttribute("name","specialQueryButton");

	// divSpecialQuery.append(inputSpecialQueryLabel);
	// divSpecialQuery.append(inputSpecialQueryButton);

	// divParent.append(divSpecialQuery);
}



function specialQueryFun(){
	const specialQueryButton = document.getElementById("specialQueryButton");
	const divAddSpecialQuery = document.createElement("div");



	if (specialQueryButton.checked == true) {
		divAddSpecialQuery.innerHTML = "";
		const itemType = document.getElementById("orderType").value;
		if (itemType == "Long Copy") {
			divAddSpecialQuery.append(longCopySpecialQuery());
		}
	}
	else {
		divAddSpecialQuery.innerHTML = "";
		divParent.lastElementChild.remove();
	}

	divParent.append(divAddSpecialQuery);



}


function longCopySpecialQuery(){
	var divSpecialQueryLongCopy = document.createElement("div");
	
	//index
	indexList = {"message":"Index","id":"indexCheckBox"}
	divSpecialQueryLongCopy.append(createCheckbox(indexList))

	//inside page offset print
	insideOffsetList = {"message":"Inside pages offset print","id":"insideOffsetCheckBox"}
	divSpecialQueryLongCopy.append(createCheckbox(insideOffsetList));

	//is full size copy
	fullSizeList = {"message":"Is copy full size","id":"fullSizeCheckBox"}
	divSpecialQueryLongCopy.append(createCheckbox(fullSizeList));

	//paper gsm
	const papergsmRadioArray = [{"id":"paperGSM","message":"Paper GSM :"},
								{"value":48,"id":"48gsm","message":"48 GSM","checked":false},
								{"value":58,"id":"58gsm","message":"58 GSM","checked":true},
								{"value":64,"id":"64gsm","message":"64 GSM","checked":false},
								{"value":68,"id":"68gsm","message":"68 GSM","checked":false},
								{"value":70,"id":"70gsm","message":"70 GSM","checked":false},
								{"value":80,"id":"80gsm","message":"80 GSM","checked":false}];
	divSpecialQueryLongCopy.append(createRadioButtons(papergsmRadioArray));

	//coverType
	const coverTypeRadioArray = [{"id":"coverType","message":"Cover Type :"},
								{"value":"duplex","id":"duplex","message":"Duplex Cover","checked":true},
								{"value":"tuffcoat","id":"tuffcoat","message":"Tuffcoat Cover","checked":false},
								{"value":"artboard","id":"artboard","message":"Artboard Cover","checked":false}];
	divSpecialQueryLongCopy.append(createRadioButtons(coverTypeRadioArray));

	//cover gsm
	const covergsmRadioArray = [{"id":"coverGsm","message":"Cover Gsm :"},
								{"value":200,"id":"200gsm","message":"200 GSM","checked":true},
								{"value":250,"id":"250gsm","message":"250 GSM","checked":false},
								{"value":300,"id":"300gsm","message":"300 GSM","checked":false}];
	divSpecialQueryLongCopy.append(createRadioButtons(covergsmRadioArray));
	
	//copy making style
	const makingRadioArray = [{"id":"stitchType","message":"Making Type :"},
								{"value":"stitch","id":"stitch","message":"Stitch Copy","checked":true},
								{"value":"stitchport","id":"stitchport","message":"Stitch & Port","checked":false},
								{"value":"stitchpasting","id":"stitchpasting","message":"Stitch & Pasting","checked":false},
								{"value":"fullpasting","id":"fullpasting","message":"Full Pasting","checked":false}];
	divSpecialQueryLongCopy.append(createRadioButtons(makingRadioArray));

	return divSpecialQueryLongCopy;
}



function createCheckbox(value){
	const divCheckBox = document.createElement("div");
	const label = document.createElement("label");
	const checkbox = document.createElement("input");
	label.innerHTML = value.message;
	checkbox.setAttribute("id",value.id);
	checkbox.setAttribute("name",value.id);
	checkbox.setAttribute("type","checkbox");
	label.setAttribute("for",value.id);
	checkbox.setAttribute("onclick",value.onclick);

	divCheckBox.append(label);
	divCheckBox.append(checkbox);

	return divCheckBox;
}

function createRadioButtons(value){
	const divRadio = document.createElement("div");
	const inputRadio = [];
	const inputLabel = [];
	inputLabelRadioParent = document.createElement("label");
	inputLabelRadioParent.setAttribute("for",value[0].id);
	inputLabelRadioParent.innerHTML = value[0].message;
	divRadio.append(inputLabelRadioParent);
	for (var i = 1; i < value.length; i++) {
		inputLabel[i] = document.createElement("label");
		inputRadio[i] = document.createElement("input");
		inputLabel[i].innerHTML = value[i].message;
		inputLabel[i].setAttribute("for",value[i])
		inputRadio[i].setAttribute("for",value[0].id);
		inputRadio[i].setAttribute("type","radio");
		inputRadio[i].checked = value[i].checked;
		inputRadio[i].setAttribute("name",value[0].id);
		inputRadio[i].setAttribute("id",value[i].id);
		inputRadio[i].setAttribute("value",value[i].value);
		
		divRadio.append(inputRadio[i]);
		divRadio.append(inputLabel[i]);
	}

	divRadio.setAttribute("class","itemDivHead");

	return divRadio;
}
var counter = 0;
var divParent = document.getElementById("parent");

function submitFormFun(){
	validateInputsArray = ["contactname","orderType","inputQuantity","inputNopages"];
	if (validateInput(validateInputsArray)) {
		counter++;
		document.getElementById("itemForm").submit();
	}
	else
		alert("Input is not correct, please check");
}

function validateInput(value){
	for (var i = 1; i < value.length; i++) {
		const element = document.getElementById(value[i]).value;
		if(element == ""){
			return false;
		}
	}
	return true;
}	

//DOM Starts here after user selects type option
function moreOptions(){
	const value = document.getElementById("orderType").value;
	divParent.innerHTML = "";
	console.log(value);

	if (value == "Long Copy"){
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		specialQuery();
	}
	else if (value == "A4 Copy"){
		a4Type();
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		specialQuery();
	}
	else if (value == "Exam Copy"){
		itemQuantity();
		itemNoOfPages();
		specialQuery();
	}
	else if (value == "School Diary"){
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		specialQuery();
	}
	else if (value == "Register"){
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		specialQuery();
	}
	else if (value == "Spiral Notebook"){
		spiralType();
		itemQuantity();
		itemNoOfPages();
		itemNoOfColor();
		itemLam();
		specialQuery();
	}
	else{
		error("Item Not Found");
	}
}
//9865351295

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
	inputQuantity.setAttribute("value","0");
	
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


	divItemQuantity.setAttribute("class","textInputDiv");

	divItemQuantity.append(inputQtyLabel);
	divItemQuantity.append(inputQuantity);
	divItemQuantity.append(QnumData);

	divParent.append(divItemQuantity);
}

//GET ITEM NO OF PAGES
function itemNoOfPages(){
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
	inputNopages.setAttribute("value","4");
	//inputNopages.setAttribute("value","{{ noOfPages }}");

	divItemNoPages.setAttribute("class","textInputDiv");

	divItemNoPages.append(inputNoPagesLabel);
	divItemNoPages.append(inputNopages);
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

	const lamRadioArray = [{"id":"coverLam","message":"Do you want lamination in cover :"},
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
	specialQueryList = {"message":"Check box of additional features :","id":"specialQueryButton","onclick":"specialQueryFun();"}
	divParent.append(createCheckbox(specialQueryList));
}

function specialQueryFun(){
	const specialQueryButton = document.getElementById("specialQueryButton");
	const divAddSpecialQuery = document.createElement("div");

	if (specialQueryButton.checked == true) {
		divAddSpecialQuery.innerHTML = "";
		const itemType = document.getElementById("orderType").value;
		if (itemType == "Long Copy" || itemType == "A4 Copy") {
			divAddSpecialQuery.append(checkBoxList("Index","indexCheckBox"));
			divAddSpecialQuery.append(checkBoxList("Inside pages offset print","insideOffsetCheckBox"));
			divAddSpecialQuery.append(checkBoxList("Is copy full size","fullSizeCheckBox"));
			
			const papergsmRadioArray = [{"id":"splpaperGsm","message":"Paper Gsm :"},
								{"value":48,"id":"48gsm","message":"48 GSM","checked":false},
								{"value":58,"id":"58gsm","message":"58 GSM","checked":true},
								{"value":60,"id":"60gsm","message":"60 GSM","checked":false},
								{"value":64,"id":"64gsm","message":"64 GSM","checked":false},
								{"value":68,"id":"68gsm","message":"68 GSM","checked":false},
								{"value":70,"id":"70gsm","message":"70 GSM","checked":false},
								{"value":80,"id":"80gsm","message":"80 GSM","checked":false}];

			const coverTypeRadioArray = [{"id":"covertypespl","message":"Cover Type :"},
								{"value":"duplex","id":"duplex","message":"Duplex Cover","checked":true},
								{"value":"tuffcoat","id":"tuffcoat","message":"Tuffcoat Cover","checked":false},
								{"value":"artboard","id":"artboard","message":"Artboard Cover","checked":false}];

			const covergsmRadioArray = [{"id":"splcoverGsm","message":"Cover Gsm :"},
								{"value":200,"id":"200gsm","message":"200 GSM","checked":true},
								{"value":250,"id":"250gsm","message":"250 GSM","checked":false},
								{"value":300,"id":"300gsm","message":"300 GSM","checked":false}];

			const makingRadioArray = [{"id":"splstitchType","message":"Making Type :"},
								{"value":"stitch","id":"stitch","message":"Stitch Copy","checked":true},
								{"value":"stitchport","id":"stitchport","message":"Stitch & Port","checked":false},
								{"value":"stitchpasting","id":"stitchpasting","message":"Stitch & Pasting","checked":false},
								{"value":"fullpasting","id":"fullpasting","message":"Full Pasting","checked":false}];

			divAddSpecialQuery.append(createRadioButtons(papergsmRadioArray));
			divAddSpecialQuery.append(createRadioButtons(coverTypeRadioArray));
			divAddSpecialQuery.append(createRadioButtons(covergsmRadioArray));
			divAddSpecialQuery.append(createRadioButtons(makingRadioArray));
		}


		else if (itemType == "Exam Copy") {
			const papergsmRadioArray = [{"id":"paperGSM","message":"Paper GSM :"},
								{"value":48,"id":"48gsm","message":"48 GSM","checked":false},
								{"value":58,"id":"58gsm","message":"58 GSM","checked":true},
								{"value":64,"id":"60gsm","message":"60 GSM","checked":false}];
			const examTypeArray = [{"id":"examType","message":"Choose type :"},
								{"value":"printed","id":"printedexam","message":"Printed","checked":false},
								{"value":"rulled","id":"rulledexam","message":"Rulled","checked":true}];
			divAddSpecialQuery.append(createRadioButtons(papergsmRadioArray));
			divAddSpecialQuery.append(createRadioButtons(examTypeArray));
			divAddSpecialQuery.append(checkBoxList("Inside pages offset print","insideOffsetCheckBox"));
		}

		else if (itemType == "Register") {

			const papergsmRadioArray = [{"id":"splpaperGSM","message":"Paper GSM :"},
								{"value":48,"id":"48gsm","message":"48 GSM","checked":false},
								{"value":58,"id":"58gsm","message":"58 GSM","checked":true},
								{"value":60,"id":"60gsm","message":"60 GSM","checked":false},
								{"value":64,"id":"64gsm","message":"64 GSM","checked":false},
								{"value":68,"id":"68gsm","message":"68 GSM","checked":false},
								{"value":70,"id":"70gsm","message":"70 GSM","checked":false},
								{"value":80,"id":"80gsm","message":"80 GSM","checked":false}];
			divAddSpecialQuery.append(createRadioButtons(papergsmRadioArray));


			const divKuthExt = document.createElement("div");
			divKuthExt.setAttribute("id","extKuthDiv");

			const coverTypeRadioArray = [{"id":"covertypespl","message":"Cover Type :"},
								{"value":"kuth","id":"kuth","message":"Kuth Cover","checked":true,"onclick":"kuthExtFun();"},
								{"value":"duplex","id":"duplex","message":"Duplex Cover","checked":false,"onclick":"noKuthExtFun();"},
								{"value":"tuffcoat","id":"tuffcoat","message":"Tuffcoat Cover","checked":false,"onclick":"noKuthExtFun();"},
								{"value":"artboard","id":"artboard","message":"Artboard Cover","checked":false,"onclick":"noKuthExtFun();"}];
			divAddSpecialQuery.append(createRadioButtons(coverTypeRadioArray));


			const registerTypeRadioArray = [{"id":"rType","message":"Register Type :"},
								{"value":"ordinaryRegister","id":"ordinaryRegister","message":"Ordinary Register","checked":true},
								{"value":"canvasRegister","id":"canvasRegister","message":"Canvas-Binding Register","checked":false}];
			divKuthExt.append(createRadioButtons(registerTypeRadioArray));
			divKuthExt.append(checkBoxList("Index","indexCheckBox"));
			divKuthExt.append(checkBoxList("Inside pages offset print","insideOffsetCheckBox"));

			divAddSpecialQuery.append(divKuthExt);

		}

		else if (itemType == "Spiral Notebook") {
			const papergsmRadioArray = [{"id":"splpaperGSM","message":"Paper GSM :"},
								{"value":48,"id":"48gsm","message":"48 GSM","checked":false},
								{"value":58,"id":"58gsm","message":"58 GSM","checked":true},
								{"value":60,"id":"60gsm","message":"60 GSM","checked":false},
								{"value":64,"id":"64gsm","message":"64 GSM","checked":false},
								{"value":68,"id":"68gsm","message":"68 GSM","checked":false},
								{"value":70,"id":"70gsm","message":"70 GSM","checked":false},
								{"value":80,"id":"80gsm","message":"80 GSM","checked":false}];

			const coverTypeRadioArray = [{"id":"covertypespl","message":"Cover Type :"},
								{"value":"duplex","id":"duplex","message":"Duplex Cover","checked":true},
								{"value":"tuffcoat","id":"tuffcoat","message":"Tuffcoat Cover","checked":false},
								{"value":"artboard","id":"artboard","message":"Artboard Cover","checked":false}];

			const covergsmRadioArray = [{"id":"splcoverGsm","message":"Cover Gsm :"},
								{"value":200,"id":"200gsm","message":"200 GSM","checked":true},
								{"value":250,"id":"250gsm","message":"250 GSM","checked":false},
								{"value":300,"id":"300gsm","message":"300 GSM","checked":false}];

			const spiralChuriArray = [{"id":"splchuriType","message":"Type of Spiral :"},
								{"value":"iron","id":"ironchuri","message":"Iron Spiral","checked":false},
								{"value":"plastic","id":"plastichuri","message":"Plastic Spiral","checked":true}];

			divAddSpecialQuery.append(createRadioButtons(papergsmRadioArray));
			divAddSpecialQuery.append(createRadioButtons(coverTypeRadioArray));
			divAddSpecialQuery.append(createRadioButtons(covergsmRadioArray));
			divAddSpecialQuery.append(createRadioButtons(spiralChuriArray));
			divAddSpecialQuery.append(checkBoxList("Inside pages offset print","insideOffsetCheckBox"));

		}

		else if (itemType == "School Diary") {
			const papergsmRadioArray = [{"id":"splpaperGSM","message":"Paper GSM :"},
								{"value":60,"id":"60gsm","message":"60 GSM","checked":false},
								{"value":70,"id":"70gsm","message":"70 GSM","checked":true},
								{"value":80,"id":"80gsm","message":"80 GSM","checked":false}];

			const coverTypeRadioArray = [{"id":"covertypespl","message":"Cover Type :"},
								{"value":"duplex","id":"duplex","message":"Duplex Cover","checked":true},
								{"value":"tuffcoat","id":"tuffcoat","message":"Tuffcoat Cover","checked":false},
								{"value":"artboard","id":"artboard","message":"Artboard Cover","checked":false}];

			const covergsmRadioArray = [{"id":"splcoverGsm","message":"Cover Gsm :"},
								{"value":200,"id":"200gsm","message":"200 GSM","checked":true},
								{"value":250,"id":"250gsm","message":"250 GSM","checked":false},
								{"value":300,"id":"300gsm","message":"300 GSM","checked":false}];

			divAddSpecialQuery.append(createRadioButtons(papergsmRadioArray));
			divAddSpecialQuery.append(createRadioButtons(coverTypeRadioArray));
			divAddSpecialQuery.append(createRadioButtons(covergsmRadioArray))

		}
		else
			return false;
	}
	else {
		divAddSpecialQuery.innerHTML = "";
		divParent.lastElementChild.remove();
	}

	divParent.append(divAddSpecialQuery);
}

function kuthExtFun(){
	const div = document.getElementById("extKuthDiv");

	div.innerHTML = "";

	const registerTypeRadioArray = [{"id":"rType","message":"Register Type :"},
						{"value":"ordinaryRegister","id":"ordinaryRegister","message":"Ordinary Register","checked":true},
						{"value":"canvasRegister","id":"canvasRegister","message":"Canvas-Binding Register","checked":false}];
	div.append(createRadioButtons(registerTypeRadioArray));
	div.append(checkBoxList("Index","indexCheckBox"));
	div.append(checkBoxList("Inside pages offset print","insideOffsetCheckBox"));
}

function noKuthExtFun(){
	const div = document.getElementById("extKuthDiv");

	div.innerHTML = "";

	const covergsmRadioArray = [{"id":"coverGsm","message":"Cover Gsm :"},
						{"value":200,"id":"200gsm","message":"200 GSM","checked":true},
						{"value":250,"id":"250gsm","message":"250 GSM","checked":false},
						{"value":300,"id":"300gsm","message":"300 GSM","checked":false}];

	const makingRadioArray = [{"id":"stitchType","message":"Making Type :"},
						{"value":"stitch","id":"stitch","message":"Stitch Copy","checked":true},
						{"value":"stitchport","id":"stitchport","message":"Stitch & Port","checked":false},
						{"value":"stitchpasting","id":"stitchpasting","message":"Stitch & Pasting","checked":false},
						{"value":"fullpasting","id":"fullpasting","message":"Full Pasting","checked":false}];

	div.append(createRadioButtons(covergsmRadioArray));
	div.append(createRadioButtons(makingRadioArray));
	
	div.append(checkBoxList("Index","indexCheckBox"));
	div.append(checkBoxList("Inside pages offset print","insideOffsetCheckBox"));
}



function checkBoxList(msg,id){
	list = {"message":msg,"id":id}
	return createCheckbox(list);
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
	divCheckBox.setAttribute("class","textInputDiv");

	return divCheckBox;
}

function createRadioButtons(value){
	const divRadio = document.createElement("div");
	const val = [];
	const span = [];
	const inputRadio = [];
	const inputLabel = [];
	inputLabelRadioParent = document.createElement("label");
	inputLabelRadioParent.setAttribute("for",value[0].id);
	inputLabelRadioParent.innerHTML = value[0].message;
	div = document.createElement("div");
	div.setAttribute("class","radioSpanGrid");
	divRadio.append(inputLabelRadioParent);
	for (var i = 1; i < value.length; i++) {
		span[i] = document.createElement("span");
		val[i] = document.createElement("i");
		span[i].setAttribute("class","radioSpan");
		inputLabel[i] = document.createElement("label");
		inputLabel[i].setAttribute("class","radioSpan");
		inputRadio[i] = document.createElement("input");
		val[i].innerHTML = value[i].message;
		//inputLabel[i].setAttribute("for",value[i])
		//inputRadio[i].setAttribute("for",value[0].id);
		inputRadio[i].setAttribute("type","radio");
		inputRadio[i].checked = value[i].checked;
		inputRadio[i].setAttribute("name",value[0].id);
		inputRadio[i].setAttribute("id",value[i].id);
		inputRadio[i].setAttribute("value",value[i].value);
		inputRadio[i].setAttribute("onclick",value[i].onclick);
		
		inputLabel[i].append(inputRadio[i]);
		inputLabel[i].append(val[i]);
		/*span[i].append(inputLabel[i]);
		/*span[i].setAttribute("class","radioSpan");*/
		div.append(inputLabel[i]);
	};

	divRadio.append(div);
	divRadio.setAttribute("class","itemDivHead");
	return divRadio;
}
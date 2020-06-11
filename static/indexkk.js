const divItemType = document.createElement("div");
const select = document.createElement("select");
const optionlong = document.createElement("option");
const optiona4 = document.createElement("option");
const optionexam = document.createElement("option");
const optiondiary = document.createElement("option");
const optionregister = document.createElement("option");
const optionspiral = document.createElement("option");

//console.log("Hello world");

const divparent = document.getElementById("parent");

select.append(optionlong);
select.append(optiona4);
select.append(optionexam);
select.append(optiondiary);
select.append(optionregister);
select.append(optionspiral);

divItemType.append(select);

//div.setAttribute("class", "itemcard");

optionlong.innerHTML = "Long Copy";
optiona4.innerHTML = "A4 Copy";
optionexam.innerHTML = "Exam Copy";
optiondiary.innerHTML = "School Diary";
optionregister.innerHTML = "Register";
optionspiral.innerHTML = "Spiral Notebook";

divparent.append(divItemType);

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

divItemQuantity.append(inputQtyLabel);
divItemQuantity.append(inputQuantity);
divItemQuantity.append(QnumData);

divparent.append(divItemQuantity);
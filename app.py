import os
import math

from flask import Flask, render_template, request
from models1 import *
from sqlalchemy import create_engine, and_
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


@app.route("/")
def index():
	customers = Customer.query.all()
	return render_template("index.html", customers=customers)

@app.route("/confirmOrder", methods=["POST"])
def confirmOrder():
	orderType = request.form.get("orderType")

	if orderType == "Long Copy":
		item = {"paperGsm":58,"coverGsm":200,"paperLength":47,"paperBreath":71,"paperLengthFull":20*2.54,"paperBreathFull":30*2.54,
				"coverLengthFull":21*2.54,"coverBreathFull":31*2.54,"coverLength":48,"coverBreath":72,"noOfCoverPerSheet":4,
				"maplitho":135,"duplex":110,"artboard":150,"tuffcoat":170,"noOfPagesPerSheet":16,"coverType":"duplex","paperType":"maplitho"}
		LongCopyList = ["customername","customernumber","orderType","inputQuantity","inputNopages","coverColor","coverLam",
						"specialQueryButton","indexCheckBox","insideOffsetCheckBox","fullSizeCheckBox","splpaperGsm",
						"splcoverGsm","splstitchType","covertypespl"]
		itemLongCopy(LongCopyList,item)

	elif orderType == "A4 Copy":
		item = {"paperGsm":58,"coverGsm":200,"paperLength":60,"paperBreath":84,"paperLengthFull":24*2.54,"paperBreathFull":36*2.54,
				"coverLengthFull":25*2.54,"coverBreathFull":36*2.54,"coverLength":61,"coverBreath":86,"noOfCoverPerSheet":4,
				"maplitho":135,"duplex":110,"artboard":150,"tuffcoat":170,"noOfPagesPerSheet":16,"coverType":"duplex",
				"a4Type":"a4normal","paperType":"maplitho"}
		a4List = ["customername","customernumber","orderType","inputQuantity","inputNopages","coverColor","coverLam",
						"specialQueryButton","indexCheckBox","insideOffsetCheckBox","fullSizeCheckBox","splpaperGsm",
						"splcoverGsm","splstitchType","covertypespl","a4Type"]
		itemA4Copy(a4List,item)
	elif orderType == "Exam Copy":
		item = {"paperGsm":58,"paperLength":44,"paperBreath":55,
				"maplitho":135,"dwp":105,"noOfPagesPerSheet":8,"paperType":"maplitho"}
		examCopyList = ["customername","customernumber","orderType","inputQuantity","inputNopages",
						"specialQueryButton","splpaperGsm","splExamType","splpaperType","insideOffsetCheckBox"]
		itemExamCopy(examCopyList,item)

	print("item :",item)
	return render_template("success.html", item=item);


def itemLongCopy(listitem,item):	
	getAllFormElement(listitem,item)
	nowCalculate(item)

def itemA4Copy(listitem,item):	
	getAllFormElement(listitem,item)
	getA4Size(item)
	nowCalculate(item)

def itemExamCopy(listitem,item):
	getAllFormElement(listitem,item)
	nowCalculateExam(item)


def getAllFormElement(list,item):
	for itemElement in list:
		item[itemElement] = request.form.get(itemElement);

def getA4Size(item):
	if item["a4Type"]=="a4flat":
		item["paperLength"] = 44
		item["paperBreath"] = 55
		item["coverLength"] = 45
		item["coverBreath"] = 56
		item["noOfCoverPerSheet"] = 2
		item["noOfPagesPerSheet"] = 8


def nowCalculate(item):
	calculateInsidePaperCost(item)
	calculateCoverCost(item)
	calculatePrintingPlateCost(item)
	calculateLaminationCost(item)
	# calculateLabourCost()

def nowCalculateExam(item):
	calculateInsidePaperCost(item)
	calculatePrintingPlateCost(item)

def calculateInsidePaperCost(item):
	if item["specialQueryButton"]:
		item["paperGsm"] = item["splpaperGsm"]
		if item[splpaperType]:
			item["paperType"] = item["splpaperType"]
		if item["fullSizeCheckBox"]:
			item["paperLength"] = item["paperLengthFull"]
			item["paperBreath"] = item["paperBreathFull"]

	print("paperLength:",item["paperLength"])
	print("paperBreath:",item["paperBreath"])
	print("paperGsm:",item["paperGsm"])

	item["paperWeight"] = (int(item["paperLength"]) * int(item["paperBreath"]) * int(item["paperGsm"]))/20000
	item["paperReamRate"] = item["paperWeight"] * item[item["paperType"]]
	item["insidePaperCost"] = (item["paperReamRate"]/(item["noOfPagesPerSheet"] * 500))*(int(item["inputNopages"])-4)


def calculateCoverCost(item):
	if item["specialQueryButton"]:
		item["coverGsm"] = int(item["splcoverGsm"])
		item["coverType"] = item["covertypespl"]
		if item["fullSizeCheckBox"]:
			item["coverLength"] = item["coverLengthFull"]
			item["coverBreath"] = item["coverBreathFull"]

	item["coverWeight"] = (item["coverLength"] * item["coverBreath"] * item["coverGsm"])/20000
	print("item[coverType:",item[item["coverType"]])
	item["coverReamRate"] = item["coverWeight"] * item[item["covertypespl"]]
	item["coverCost"] = (item["coverReamRate"]/(item["noOfCoverPerSheet"] * 500))



def calculatePrintingPlateCost(item):
	item["plateCost"] = 0
	item["printingCost"] = 0
	if item["specialQueryButton"]:
		if item["indexCheckBox"]:
			item["indexPlateCost"] = 400
			item["indexImpression"] = (int(item["inputQuantity"])/item["noOfCoverPerSheet"])*1.05*2
			item["indexPrinting"] = math.ceil(item["indexImpression"]/1000)*200
			item["plateCost"] += item["indexPlateCost"]
			item["printingCost"] += item["indexPrinting"]
		if item["insideOffsetCheckBox"]:
			item["insidePlateCost"] = 400
			item["insidePagesImpression"] = ((int(item["inputQuantity"])*(int(item["inputNopages"])-4))/item["noOfPagesPerSheet"])*2*2
			item["insidePagesPrinting"] = math.ceil(item["insidePagesImpression"]/1000)*200
			item["plateCost"] += item["insidePlateCost"]
			item["printingCost"] += item["insidePagesPrinting"]

	item["coverPlateCost"] = 400 * int(item["coverColor"])
	print("qty",item["inputQuantity"])
	print("cps",item["noOfCoverPerSheet"])
	print("color",item["coverColor"])
	item["noOfCoverSheetReq"] = (int(item["inputQuantity"])/int(item["noOfCoverPerSheet"]))*1.05
	item["coverImpression"] = item["noOfCoverSheetReq"]*2*int(item["coverColor"])
	item["coverPrinting"] = math.ceil(item["coverImpression"]/1000)*300
	item["plateCost"] += item["coverPlateCost"]
	item["printingCost"] += item["coverPrinting"]

def calculateLaminationCost(item):
	if item["coverLam"]:
		item["laminationCost"] = (item["coverLength"]/2.54) * (item["coverBreath"]/2.54) * 0.01 * 0.6 * item["noOfCoverSheetReq"]
	else:
		item["laminationCost"] = 0


@app.route("/editItem", methods=["GET"])
def editItem():
	orderType = request.form.get("orderType");
	orderQuantity = request.form.get("inputQuantity");
	noOfPages = request.form.get("inputNopages");
	print(orderType);

	return render_template("index.html", orderTypeName=orderType, orderQuantity=orderQuantity, noOfPages=noOfPages);



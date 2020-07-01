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

# engine = create_engine(os.getenv("DATABASE_URL"))
# db = scoped_session(sessionmaker(bind=engine))


@app.route("/")
def index():
	#flights = Flight.query.all()
	#flights = db.execute("SELECT * FROM flight").fetchall()

	#return render_template("index.html", flights=flights)
	customers = Customer.query.all()
	return render_template("index.html", customers=customers)

@app.route("/confirmOrder", methods=["POST"])
def confirmOrder():
	"""BOOK a flight."""

	#GEt form information
	custName = request.form.get("contactname")
	custNum = request.form.get("contactnumber")

	itemType = request.form.get("orderType")
	itemQuantity = int(request.form.get("inputQuantity"))
	itemnoOfPages = int(request.form.get("inputNopages"))


	if(itemType == "Long Copy"):
		itemnoOfColor = int(request.form.get("coverColor"));
		itemLam = request.form.get("coverLam");

		#paper costing
		paperLength = 47;
		paperBreath = 70;
		paperGsm = 58;
		paperWeight = (paperLength * paperBreath * paperGsm)/20000;
		paperRatePerKg = 135;
		paperReamRate = paperWeight * paperRatePerKg;
		noOfPagesPerSheet = 16;
		itemcostingOfpaper = (paperReamRate/(noOfPagesPerSheet * 500))*(itemnoOfPages-4);

		#cover costing
		coverLength = 48;
		coverBreath = 72;
		coverGsm = 200;
		coverWeight = (coverLength * coverBreath * coverGsm)/20000;
		coverRatePerKg = 110;
		coverReamRate = coverWeight * coverRatePerKg;
		noOfCoverPerSheet = 4;
		itemCostingOfCover = (coverReamRate/(noOfCoverPerSheet * 500)) * 1.05

		#printing costing
		noOfCoverSheetReq = (itemQuantity/noOfCoverPerSheet)*1.05
		noOfImpression = noOfCoverSheetReq*2*itemnoOfColor
		costOfPrinting = math.ceil(noOfImpression/1000)*200

		print("Cost OF printing : ", costOfPrinting)

		costOfPlates = 400*itemnoOfColor

		#Lamination cost
		if(itemLam):
			LamCost = int((coverLength/2.54) * (coverBreath/2.54) * 0.01 * 0.6 * noOfCoverSheetReq)
		else:
			LamCost = 0 

		print("lamCOst:",LamCost)

		#labour cost
		labour = Labour.query.filter(and_(Labour.no_of_pages==itemnoOfPages,Labour.type==itemType)).first()
		labourCost = float(labour.cost)

		print("labourCost : ",labourCost)

		finalCost = itemcostingOfpaper + itemCostingOfCover + (costOfPrinting + costOfPlates + LamCost)/itemQuantity + labourCost

		quotation = finalCost * 1.32


	elif(itemType == "A4 Copy"):
		itemnoOfColor = request.form.get("coverColor");
		itemLam = request.form.get("coverLam");
		itema4Type = request.form.get("a4type");
		paperLength = 60;
		paperBreath = 84;
		paperGsm = 58;
		paperWeight = (paperLength * paperBreath * paperGsm)/20000;
		paperRatePerKg = 135;
		paperReamRate = paperWeight * paperRatePerKg;
		noOfPagesPerSheet = 16;
		itemcostingOfpaper = (paperReamRate/(noOfPagesPerSheet * 500))*(itemnoOfPages-4);
	elif(itemType == "Exam Copy"):
		paperLength = 44;
		paperBreath = 55;
		paperGsm = 58;
		paperWeight = (paperLength * paperBreath * paperGsm)/20000;
		paperRatePerKg = 135;
		paperReamRate = paperWeight * paperRatePerKg;
		noOfPagesPerSheet = 8;
		itemcostingOfpaper = (paperReamRate/(noOfPagesPerSheet * 500))*(itemnoOfPages);
	else:
		itemcostingOfpaper = None;

	
	cust = Customer.query.filter_by(name=custName).first()

	#item = OrderItem(itemType,itemQuantity,itemnoOfPages)

	if cust is None:
		#return render_template("error.html",error="No Such Customer")
		customer = Customer(name=custName,phone=custNum)
		db.session.add(customer)
		db.session.commit()
		customer.add_item(itemType,itemQuantity,itemnoOfPages)
	else:
		cust.add_item(itemType,itemQuantity,itemnoOfPages)

	
	

	# db.execute("INSERT INTO apolloorder (type,quantity,pages) VALUES (:type, :quantity, :pages)",
	# 		{"type": itemType, "quantity": itemQuantity, "pages": itemnoOfPages})
	# db.commit()



#	if request.method == 'POST':
		#if request.form['edit_item'] == 'edititem':
#		return render_template("index.html",orderType=orderType, orderQuantity=orderQuantity, noOfPages=noOfPages);


	return render_template("success.html", itemType=itemType, itemQuantity=itemQuantity, itemnoOfPages=itemnoOfPages, itemcostingOfpaper=quotation);



@app.route("/editItem", methods=["GET"])
def editItem():
	orderType = request.form.get("orderType");
	orderQuantity = request.form.get("inputQuantity");
	noOfPages = request.form.get("inputNopages");
	#flights = Flight.query.all()
	#flights = db.execute("SELECT * FROM flight").fetchall()

	#return render_template("index.html", flights=flights)
	print(orderType);

	return render_template("index.html", orderTypeName=orderType, orderQuantity=orderQuantity, noOfPages=noOfPages);
#@app.route("/flights")
#def flights():
	"""list all the flights"""
	#flights = db.execute("SELECT * FROM flight").fetchall()
	#flights = Flight.query.all()
	#return render_template("flights.html", flights=flights)


#@app.route("/flights/<int:flight_id>")
#def flight(flight_id):
	"""detail of one particular flight"""
	#flight = db.execute("SELECT * FROM flight WHERE id=:id",{"id":flight_id}).fetchone()
	#flight = Flight.query.get(flight_id)

	#if flight is None:
	#	return render_template("error.html", message="No such Flight")

	#passengers = db.execute("SELECT name FROM passengers WHERE flight_id = :flight_id",{"flight_id":flight_id}).fetchall()
	#passengers = Passenger.query.filter_by(flight_id=flight_id).all()
	#return render_template("flight.html", flight=flight, passengers=passengers)"""



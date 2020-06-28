import os

from flask import Flask, render_template, request
#from models import *
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
#app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL_1")
#app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
#db.init_app(app)

engine = create_engine(os.getenv("DATABASE_URL"))
db = scoped_session(sessionmaker(bind=engine))


@app.route("/")
def index():
	#flights = Flight.query.all()
	#flights = db.execute("SELECT * FROM flight").fetchall()

	#return render_template("index.html", flights=flights)

	return render_template("index.html")

@app.route("/confirmOrder", methods=["POST"])
def confirmOrder():
	"""BOOK a flight."""

	#GEt form information
	itemType = request.form.get("orderType");
	itemQuantity = int(request.form.get("inputQuantity"));
	itemnoOfPages = int(request.form.get("inputNopages"));


	if(itemType == "Long Copy"):
		itemnoOfColor = request.form.get("coverColor");
		itemLam = request.form.get("coverLam");
		paperLength = 47;
		paperBreath = 70;
		paperGsm = 58;
		paperWeight = (paperLength * paperBreath * paperGsm)/20000;
		paperRatePerKg = 135;
		paperReamRate = paperWeight * paperRatePerKg;
		noOfPagesPerSheet = 16;
		itemcostingOfpaper = (paperReamRate/(noOfPagesPerSheet * 500))*(itemnoOfPages-4);
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
		itemcostingOfpaper = (paperReamRate/(noOfPagesPerSheet * 500))*(itemsnoOfPages-4);
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


		db.execute("INSERT INTO apolloorder (type,quantity,pages) VALUES (:type, :quantity, :pages)",
			{"type": itemType, "quantity": itemQuantity, "pages": itemnoOfPages})
		db.commit()



#	if request.method == 'POST':
		#if request.form['edit_item'] == 'edititem':
#		return render_template("index.html",orderType=orderType, orderQuantity=orderQuantity, noOfPages=noOfPages);


	return render_template("success.html", itemType=itemType, itemQuantity=itemQuantity, itemnoOfPages=itemnoOfPages, itemcostingOfpaper=itemcostingOfpaper);



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



#import os

from flask import Flask, render_template, request
#from models import *
#from sqlalchemy import create_engine
#from sqlalchemy.orm import scoped_session, sessionmaker

app = Flask(__name__)
#app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL_1")
#app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
#db.init_app(app)

#engine = create_engine(os.getenv("DATABASE_URL"))
#db = scoped_session(sessionmaker(bind=engine))


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
	#name = request.form.get("name")
	#try:
	#	flight_id = int(request.form.get("flight_id"))
	#except ValueError:
	#	return render_template("error.html", message="Invalid Flight number.")

	#flight = Flight.query.get(flight_id)
	#if db.execute("SELECT * FROM flight WHERE id = :id", {"id":flight_id}).rowcount == 0:
	#if flight is None:
		#return render_template("error.html", message="No such Flight")
	#db.execute("INSERT INTO passengers(name, flight_id) VALUES (:name,:flight_id)",
		#{"name":name, "flight_id":flight_id})
	#db.commit()
	#passenger = Passenger(name=name,flight_id=flight_id)
	#db.session.add(passenger)
	#db.session.commit()
	#flight.add_passenger(name)
	return render_template("success.html")

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


#app.run(debug=True)
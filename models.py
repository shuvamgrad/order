import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Customer:

	counter = 1

	def __init__(self, name, phone):
		self.id = Customer.counter
		counter +=1

		self.name = name
		self.phone = phone


		self.orders = []


	def add_item(self,item):
		self.orders.append(item)
		item.custID = self.id



class OrderItem:

	def __init__(self, itemType, itemQuantity, itemNoOfPages):
		self.itemType = itemType
		self.itemQuantity = itemQuantity
		self.itemNoOfPages = itemNoOfPages



# class Flight(db.Model):
# 	__tablename__ = "flights"
# 	id = db.Column(db.Integer, primary_key=True)
# 	origin = db.Column(db.String, nullable=False)
# 	destination = db.Column(db.String, nullable=False)
# 	duration = db.Column(db.Integer, nullable=False)

# 	def add_passenger(self,name):
# 		p = Passenger(name=name, flight_id=self.id)
# 		db.session.add(p)
# 		db.session.commit()


# class Passenger(db.Model):
# 	__tablename__ = "passengers"
# 	id = db.Column(db.Integer, primary_key=True)
# 	name = db.Column(db.String, nullable=False)
# 	flight_id = db.Column(db.Integer, db.ForeignKey("flights.id"), nullable=False)
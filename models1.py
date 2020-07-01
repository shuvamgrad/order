import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Customer(db.Model):
	__tablename__ = "customers"
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String, nullable=False)
	phone = db.Column(db.String, nullable=False)

	# def __init__(self, name, phone):
	# 	self.name = name
	# 	self.phone = phone


	def add_item(self, itemType,itemQuantity,itemNoOfPages):
		item = OrderItem(itemtype=itemType, itemquantity=itemQuantity, itemnoofpages=itemNoOfPages, custid = self.id)
		db.session.add(item)
		db.session.commit()



class OrderItem(db.Model):
	__tablename__ = "apaiorder"
	id = db.Column(db.Integer, primary_key=True)
	itemtype = db.Column(db.String, nullable=False)
	itemquantity = db.Column(db.Integer, nullable=False)
	itemnoofpages = db.Column(db.Integer, nullable=False)
	custid = db.Column(db.Integer, db.ForeignKey("customers.id"), nullable=False)


	# def __init__(self, itemType, itemQuantity, itemNoOfPages):
	# 	self.itemType = itemType
	# 	self.itemQuantity = itemQuantity
	# 	self.itemNoOfPages = itemNoOfPages



class Labour(db.Model):
	__tablename__ = "labourcost"
	id = db.Column(db.Integer, primary_key=True)
	type = db.Column(db.String, nullable=False)
	no_of_pages = db.Column(db.Integer, nullable=False)
	cost = db.Column(db.Integer, nullable=False)

	
		
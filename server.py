#!/usr/local/bin/python3.7
#! _*_ coding:utf-8 _*_
from flask import Flask, request, render_template, send_file,jsonify
import requests
import json

app = Flask(__name__)

@app.route('/')
def welcome():
	return send_file('templates/index.html')

@app.route('/second/details', methods=['post','get'])
def details(name=None):
	username = request.args.get('name')

	fin_result = []

	url = "http://localhost:8983/solr/search/select?q=contents:"+username
	r = requests.get(url)
	response = json.loads(r.text)

	result = response['response']['docs']
	json_dirc = {}
	index = 1
	#fin_result = []

	for i in result:
		del i['id']
		del i['_version_']
		for key, value in i.items():
			temp = "".join(value)
			i[key] = temp
		fin_result.append(i)

		#json_list.append(json.dumps(i,ensure_ascii=False))
		json_dirc[index]=i
		index = index + 1
		json_result = json.dumps(json_dirc,ensure_ascii=False)
	#return json_result
	#return jsonify(json_dirc)

	if username==None:
		print("is None")
	else:
		print(username)

	for i in fin_result:
		if i['name'] == username:
			temp = i
	return render_template('third.html', title = username ,dict = temp)

@app.route('/second/', methods=['post','get'])
def second_html():
	username = request.form.get('search_contents')

	fin_result = []

	url = "http://localhost:8983/solr/search/select?q=contents:"+username
	r = requests.get(url)
	response = json.loads(r.text)

	result = response['response']['docs']
	json_dirc = {}
	index = 1
	#fin_result = []

	for i in result:
		del i['id']
		del i['_version_']
		for key, value in i.items():
			temp = "".join(value)
			i[key] = temp
		fin_result.append(i)

		#json_list.append(json.dumps(i,ensure_ascii=False))
		json_dirc[index]=i
		index = index + 1
		json_result = json.dumps(json_dirc,ensure_ascii=False)
	#return json_result
	#return jsonify(json_dirc)
	return render_template('second.html', List = fin_result)

if __name__ == '__main__':
	# app.run(host = '0.0.0.0',port = 5000)
	app.run(debug = True)
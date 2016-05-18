build:
	node build > body.html
	cat header.html body.html footer.html > index.html
	rm body.html
run:
	http-server
build:
	docker build -t eri4ka/sdaem-site .
run:
	docker run -p 3000:3000 --rm --name sdaem-site eri4ka/sdaem-site
stop:
	docker stop sdaem-site
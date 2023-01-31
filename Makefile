run:
	docker run -p 3000:3000 --rm --name sdaem-site sdaem-site
stop:
	docker stop sdaem-site
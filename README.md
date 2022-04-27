Para ejecutar los containers del proyecto, ejecutar en consola desde la raiz 'docker-compose build' y luego 'docker-compose up'

Atutomaticamente se les crearan dos carpetas mas en la raiz del proyecto, que son la carpetas de 'volumes' de rabbitMq y Mongo para que los datos persistan y no se borren cuando apaguen los containers.

La primera vez que lo ejecuten el consumer dara errores porque no hay ninguna cola creada, pero luego que manden el primer request, que la cola se cree por primera vez, no dara mas ese error, y quedara guardado porque los datos se estan persistiendo.

Pueden mandar el primer request con Postman de este tipo, ya que fue el schema que diseñe en la api, que luego se cambiara:

(o con insomnia que es mucho mas sencillo mandar un JSON, a su gusto...)

{
	
		"uuid": "0123-456-7890",
	
		"process": "Reserve",
	
		"processStep": "creatingNewReservation",
	
		"isPaid": false,
	
		"label": "Label",
	
		"data": {
			
			"rawAmount": 2.2,
			"totalAmount": 2.2,
			"discount": 2.2,
			"taxesAmount": 0,
			"shippingAmount": 0,
			"site": "www.mercadolibre.com.ar",
			"shippingType": "HD",
			"storePickupId": "dsf67s8f678sdf6",
			"deliveryType": "ED",
			"estimatedDeliveryDate": "YYYY-MM-DD",
			"scheduleId": "6sad76as7d8sa67d8a",
			"salesChannelId": "as8d8as97d89sa89as8",
			"systemId": "asd7897a8sd79as89",
			"billingAddress": {
					"country": "Argentina",
					"city": "Buenos Aires",
					"address": "La boca",
					"location": "Carrera 9 # 12-23"
			},
			"shippingAddress": {
					"country": "Argentina",
					"address": "Carrera 9 # 12-23",
					"location": {
							"communeId": "h3j424h4h323j12"
					},
					"city": "Buenos Aires",
					"contact": {
							"name": "Alan",
							"email": "alansm9790@gmail.com",
							"phone": "3005715778"
					}
			},
			"items": [
					{
							"sku": "434-665-665",
							"name": "Televisor 99,99 pulgadas",
							"quantity": 1,
							"rawPrice": 2.2,
							"listPrice": 2.2,
							"salePrice": 2.2,
							"discount": 0,
							"barcodes": [
									"345435436433"
							],
							"detailLink": "www.mercadolibre.ar/tele99inch",
							"color": {
									"code": "0",
									"name": "black"
							},
							"size": {
									"code": "0",
									"name": "99inch"
							},
							"model": {
									"code": "0",
									"description": "Samsung"
							},
							"brand": "0"
					}
			],
			"customer": {
					"id ": "1143161688",
					"name ": "Alan Solano Macias",
					"email ": "alansm9790@gmail.com",
					"phone ": "3005715778",
					"systemId": "asd7897a8sd79as89"
			},
			"paymentInfo ": [
					{
							"type ": "CC",
							"amount": 2.2
					}
			]
		}	
	
}

Ya cuando manden este primer request, el consumer no da mas errores en las siguientes ejecuciones. 

El puerto de mongo es el 27017
Y el de la interfaz grafica de rabbit 15672
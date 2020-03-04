# On Call Taxi
## On Call Taxi Service Restful APIs in Node.js
### Problem
You are the proprietor of füber, an on call taxi service.
* You have a fleet of cabs at your disposal, and each cab has a location, determined by it’s latitude and longitude.
* A customer can call one of your taxis by providing their location, and you must assign the nearest taxi to the customer.
* Some customers are particular that they only ride around in pink cars, for hipster reasons. You must support this ability.
* When the cab is assigned to the customer, it can no longer pick up any other customers
* If there are no taxis available, you reject the customer's request.
* The customer ends the ride at some location. The cab waits around outside the customer’s house, and is available to be assigned to another customer.

### Prerequisites
- Node v11.2.0

### Depencies (npm packages)
- express 4.17.1
- @hapi/joi 17.1.0
- jest
### Installing npm packages
```
npm install express
```
```
npm install @hapi/joi
```
```
npm install jest
```
### Application Structure

There are 3 objects in this system:

- A Car
- A CarFleetManager
- A Trip

The primary goal of Cab Manager is to act as a broker while booking the car for a user. The Trip object has all the info about the trip, like "distance travelled", "total fare" etc.

### Run the Project
```
npm start
```

### API End-Points
* Book a Taxi (Post Request) /api/book
```
{
	"latitude": "15.00",
	"longitude": "13.75",
	"color": "black"
}
```
Response 
```
{
    "tripId": 1,
    "carColor": "black"
}
```
* End a Trip (Post Request) /api/trips/:id/end
```
{
	"latitude": "13.00",
	"longitude": "12.25"
}
```
Response
```
No response. The fare and distance would be printed in the logs
```

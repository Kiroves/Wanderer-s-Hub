//expedia search html
//https://www.expedia.com/Hotel-Search?adults=2&airlineCode&cabinClass=COACH&children=1_14&destination=Cancun%2C%20Quintana%20Roo%2C%20Mexico&directFlights=false&dropOffTime=1030&endDate=2024-04-14&infantsInSeats=0&misId=Agjlh-Xq9onBxFsQwoi71KO68tCAASDM07VO~ARIHGgUIAhIBDhoxCAESFgoDWVZSGNnZ9gIqCjIwMjQtMDQtMDcSFQoDQ1VOGJv-CioKMjAyNC0wNC0xNCIA&origin=Vancouver%2C%20BC%2C%20Canada%20%28YVR-Vancouver%20Intl.%29&packageType=fhc&partialStay=false&pickUpTime=1030&regionId=179995&searchProduct=hotel&semdtl=&sort=RECOMMENDED&startDate=2024-04-07&theme=&tripType=ROUND_TRIP&useRewards=false&userIntent=

//children must include age
const createUrl=(origin, destination, adults, children=0, cabinClass, departureDate, returnDate)=>{
    let url=`https://www.expedia.com/Hotel-Search?adults=${adults}&airlineCode&cabinClass=${cabinClass}&children=${children}&destination=${destination}&directFlights=false&endDate=${returnDate}&misId=Agjlh-Xq9onBxFsQwoi71KO68tCAASDM07VO~ARIHGgUIAhIBDhoxCAESFgoDWVZSGNnZ9gIqCjIwMjQtMDQtMDcSFQoDQ1VOGJv-CioKMjAyNC0wNC0xNCIA&origin=${origin}&packageType=fhc&partialStay=false&searchProduct=hotel&semdtl=&startDate=${departureDate}&tripType=ROUND_TRIP`;
}
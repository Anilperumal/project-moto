const sampleListings = [
    {
        "title": "Eco E-Rickshaw",
        "description": "Efficient and eco-friendly e-rickshaw for city rides.",
        "image": "",
        "price": 3500,
        "location": "Varanasi, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Commuter Bike",
        "description": "Lightweight electric bike, perfect for city commuting.",
        "image": "",
        "price": 1200,
        "location": "Gorakhpur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Farm Tractor",
        "description": "Compact electric tractor for small-scale farming.",
        "image": "",
        "price": 9000,
        "location": "Aligarh, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Solar-Powered Scooter",
        "description": "Solar-charged scooter for eco-conscious riders.",
        "image": "",
        "price": 1400,
        "location": "Meerut, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Pickup Vehicle",
        "description": "Electric mini pickup for small goods transportation.",
        "image": "",
        "price": 5000,
        "location": "Noida, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Cycle",
        "description": "Electric cycle ideal for daily city travel.",
        "image": "",
        "price": 800,
        "location": "Jhansi, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Urban Electric Scooter",
        "description": "Stylish and compact electric scooter for city rides.",
        "image": "",
        "price": 950,
        "location": "Allahabad (Prayagraj), Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Passenger Van",
        "description": "Eco-friendly van designed for passenger transport.",
        "image": "",
        "price": 12000,
        "location": "Bareilly, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Sports Bike",
        "description": "High-performance electric bike for enthusiasts.",
        "image": "",
        "price": 2000,
        "location": "Moradabad, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Rickshaw Loader",
        "description": "Designed for cargo transport with electric efficiency.",
        "image": "",
        "price": 4500,
        "location": "Saharanpur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Delivery Bike",
        "description": "Electric bike with extended battery for delivery services.",
        "image": "",
        "price": 1500,
        "location": "Lucknow, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Quad Bike",
        "description": "Rugged electric quad bike for rural terrains.",
        "image": "",
        "price": 3000,
        "location": "Etawah, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Vintage Car",
        "description": "Classic car style with modern electric engineering.",
        "image": "",
        "price": 25000,
        "location": "Firozabad, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Cargo Van",
        "description": "Designed for urban logistics and goods delivery.",
        "image": "",
        "price": 8500,
        "location": "Kanpur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric SUV",
        "description": "Family-sized electric SUV with great mileage.",
        "image": "",
        "price": 32000,
        "location": "Agra, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Autorickshaw",
        "description": "Electric autorickshaw for low-emission city transport.",
        "image": "",
        "price": 2800,
        "location": "Ballia, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Dirt Bike",
        "description": "Electric dirt bike for off-road and adventure rides.",
        "image": "",
        "price": 3800,
        "location": "Gonda, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Wheelchair",
        "description": "Battery-powered wheelchair for enhanced mobility.",
        "image": "",
        "price": 1800,
        "location": "Rampur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Farm Vehicle",
        "description": "Eco-friendly vehicle for efficient farming.",
        "image": "",
        "price": 10000,
        "location": "Faizabad, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Mini Truck",
        "description": "Compact electric truck for small businesses.",
        "image": "",
        "price": 7500,
        "location": "Muzaffarnagar, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Scooter Classic",
        "description": "Efficient city commuting electric scooter.",
        "image": "",
        "price": 750,
        "location": "Delhi",
        "country": "India"
    },
    {
        "title": "Eco-Boost Electric Car",
        "description": "Compact, eco-friendly electric car for daily use.",
        "image": "",
        "price": 18000,
        "location": "New York City",
        "country": "USA"
    },
    {
        "title": "Electric Cargo Bike",
        "description": "Cargo bike designed for urban goods delivery.",
        "image": "",
        "price": 1300,
        "location": "Amsterdam",
        "country": "Netherlands"
    },
    {
        "title": "Solar-Powered SUV",
        "description": "Family-sized SUV running on solar and electric power.",
        "image": "",
        "price": 29000,
        "location": "Toronto",
        "country": "Canada"
    },
    {
        "title": "Hybrid Electric Sedan",
        "description": "Hybrid sedan with premium interior and smooth drive.",
        "image": "",
        "price": 25000,
        "location": "Sydney",
        "country": "Australia"
    },
    {
        "title": "Electric Commuter Bicycle",
        "description": "Lightweight bicycle for electric-assisted commuting.",
        "image": "",
        "price": 900,
        "location": "London",
        "country": "UK"
    },
    {
        "title": "Luxury Electric SUV",
        "description": "All-electric luxury SUV with extended range.",
        "image": "",
        "price": 40000,
        "location": "Dubai",
        "country": "UAE"
    },
    {
        "title": "Solar Electric Tuk-Tuk",
        "description": "Eco-friendly, solar-powered tuk-tuk for urban rides.",
        "image": "",
        "price": 5000,
        "location": "Bangkok",
        "country": "Thailand"
    },
    {
        "title": "Zero-Emission Motorbike",
        "description": "Futuristic motorbike with zero emissions.",
        "image": "",
        "price": 3500,
        "location": "Berlin",
        "country": "Germany"
    },
    {
        "title": "Hydrogen-Powered Car",
        "description": "Eco-friendly car running on hydrogen fuel cells.",
        "image": "",
        "price": 45000,
        "location": "Tokyo",
        "country": "Japan"
    },
    {
        "title": "Compact Electric Van",
        "description": "Ideal for small businesses with electric efficiency.",
        "image": "",
        "price": 12000,
        "location": "Cape Town",
        "country": "South Africa"
    },
    {
        "title": "Electric Snowmobile",
        "description": "Environmentally-friendly snowmobile for winter sports.",
        "image": "",
        "price": 15000,
        "location": "Reykjavik",
        "country": "Iceland"
    },
    {
        "title": "All-Terrain Electric Quad Bike",
        "description": "Durable quad bike for off-road adventures.",
        "image": "",
        "price": 5000,
        "location": "Auckland",
        "country": "New Zealand"
    },
    {
        "title": "Electric Canoe",
        "description": "Electric-powered canoe for eco-friendly boating.",
        "image": "",
        "price": 2000,
        "location": "Rio de Janeiro",
        "country": "Brazil"
    },
    {
        "title": "Electric Vintage Car",
        "description": "Classic vintage car reimagined with electric power.",
        "image": "",
        "price": 32000,
        "location": "Paris",
        "country": "France"
    }
]

module.exports = {data: sampleListings};
const sampleListings = [
    {
        "title": "Eco E-Rickshaw",
        "description": "Efficient and eco-friendly e-rickshaw for city rides.",
        "image": "https://5.imimg.com/data5/EZ/KA/DT/SELLER-636959/electric-rickshaw.jpg",
        "price": 3500,
        "location": "Varanasi, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Commuter Bike",
        "description": "Lightweight electric bike, perfect for city commuting.",
        "image": "https://m.media-amazon.com/images/I/71amSyd-2OL._AC_UF894,1000_QL80_.jpg",
        "price": 1200,
        "location": "Gorakhpur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Farm Tractor",
        "description": "Compact electric tractor for small-scale farming.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6kkj3fQvs43ZKw7IHRLAqL6_8F7guldKuQ&s",
        "price": 9000,
        "location": "Aligarh, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Solar-Powered Scooter",
        "description": "Solar-charged scooter for eco-conscious riders.",
        "image": "https://cdn11.bigcommerce.com/s-r5k51kqrix/images/stencil/1280x1280/products/2722/8616/solar-ff-2.0-limited-edition-4000w-dual-motor-electric-scooter__13218.1716287900.jpg?c=1?imbypass=on",
        "price": 1400,
        "location": "Meerut, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Pickup Vehicle",
        "description": "Electric mini pickup for small goods transportation.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9sOHGA_zZkjiQ-uvhY4ShpnYjUo03rvqg-w&s",
        "price": 5000,
        "location": "Noida, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Cycle",
        "description": "Electric cycle ideal for daily city travel.",
        "image": "https://www.herolectro.com/on/demandware.static/-/Sites-hero-lectro-master/default/dw2bbb145c/lectro/Lectro/H7+/Grey/2.png",
        "price": 800,
        "location": "Jhansi, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Urban Electric Scooter",
        "description": "Stylish and compact electric scooter for city rides.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ8-IYzaDUI8mGA3Kuv1bfETru1yUgLNy6Ag&s",
        "price": 950,
        "location": "Allahabad (Prayagraj), Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Passenger Van",
        "description": "Eco-friendly van designed for passenger transport.",
        "image": "https://cmv360.s3.ap-southeast-1.amazonaws.com/Force_Traveller_3050_07d559c9b6.webp",
        "price": 12000,
        "location": "Bareilly, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Sports Bike",
        "description": "High-performance electric bike for enthusiasts.",
        "image": "https://imgd.aeplcdn.com/1280x720/n/cw/ec/156743/roadster-right-side-view-8.jpeg?isig=0",
        "price": 2000,
        "location": "Moradabad, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Rickshaw Loader",
        "description": "Designed for cargo transport with electric efficiency.",
        "image": "https://truckcdn.cardekho.com/in/mini-metro/white-e-rickshaw-loader/mini-metro-white-e-rickshaw-loader.jpg",
        "price": 4500,
        "location": "Saharanpur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Delivery Bike",
        "description": "Electric bike with extended battery for delivery services.",
        "image": "https://bd.gaadicdn.com/processedimages/hcd-india/nps-cargo/640X309/nps-cargo600509c3dce87.jpg",
        "price": 1500,
        "location": "Lucknow, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Quad Bike",
        "description": "Rugged electric quad bike for rural terrains.",
        "image": "https://www.cartoq.com/wp-content/uploads/2017/10/Powerland-900-Featured.jpg",
        "price": 3000,
        "location": "Etawah, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Vintage Car",
        "description": "Classic car style with modern electric engineering.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2E2qOeibAjj6v_evIryRxnakJep8GsKup5A&s",
        "price": 25000,
        "location": "Firozabad, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Cargo Van",
        "description": "Designed for urban logistics and goods delivery.",
        "image": "https://www.mini-bus.com.cn/wp-content/uploads/2021/12/mini-van-price-in-India.jpg",
        "price": 8500,
        "location": "Kanpur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric SUV",
        "description": "Family-sized electric SUV with great mileage.",
        "image": "https://www.rushlane.com/wp-content/uploads/2024/09/byd-atto2-electric-suv-india-launch-2025-battery-range-specs-price-3.jpg",
        "price": 32000,
        "location": "Agra, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Autorickshaw",
        "description": "Electric autorickshaw for low-emission city transport.",
        "image": "https://5.imimg.com/data5/SELLER/Default/2023/6/313213073/SL/TE/AH/51315/electric-auto-rickshaw-passenger-three-wheeler-tuk-tuk-500x500.jpg",
        "price": 2800,
        "location": "Ballia, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Dirt Bike",
        "description": "Electric dirt bike for off-road and adventure rides.",
        "image": "https://images-cdn.ubuy.co.in/64dbbd38eabda827f614fc7e-mototec-48v-pro-electric-dirt-bike-1500w.jpg",
        "price": 3800,
        "location": "Gonda, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Wheelchair",
        "description": "Battery-powered wheelchair for enhanced mobility.",
        "image": "https://3.imimg.com/data3/EQ/XR/GLADMIN-27855/electric-wheel-chair-250x250.jpg",
        "price": 1800,
        "location": "Rampur, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Farm Vehicle",
        "description": "Eco-friendly vehicle for efficient farming.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXnga303esaWNVgNjqGSbkWaSzlVv7ugJAIQ&s",
        "price": 10000,
        "location": "Faizabad, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Mini Truck",
        "description": "Compact electric truck for small businesses.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrT1SJgFf8FpObZ7A9aZKE-YINVEJcMmZzQ&s",
        "price": 7500,
        "location": "Muzaffarnagar, Uttar Pradesh",
        "country": "India"
    },
    {
        "title": "Electric Scooter Classic",
        "description": "Efficient city commuting electric scooter.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1-Mhkpi8mFuhxwDzklltK40SP-YhMMKIMA&s",
        "price": 750,
        "location": "Delhi",
        "country": "India"
    },
    {
        "title": "Eco-Boost Electric Car",
        "description": "Compact, eco-friendly electric car for daily use.",
        "image": "https://www.cnet.com/a/img/resize/5fc280c1d64d7b25f491cc298e5cb219d8dfd88e/hub/2023/06/28/d5d3e204-8245-44d1-a86a-9e8aab9ad0e5/2024-kia-ev9-first-drive-734312.jpg?auto=webp&fit=crop&height=360&width=640",
        "price": 18000,
        "location": "New York City",
        "country": "USA"
    },
    {
        "title": "Electric Cargo Bike",
        "description": "Cargo bike designed for urban goods delivery.",
        "image": "https://c8.alamy.com/comp/2RB7A29/electric-cargo-bike-in-amsterdam-netherlands-2RB7A29.jpg",
        "price": 1300,
        "location": "Amsterdam",
        "country": "Netherlands"
    },
    {
        "title": "Solar-Powered SUV",
        "description": "Family-sized SUV running on solar and electric power.",
        "image": "https://gaadiwaadi.com/humble-one-is-the-worlds-first-solar-powered-electric-suv/humble-one-electric-suv-8/",
        "price": 29000,
        "location": "Toronto",
        "country": "Canada"
    },
    {
        "title": "Hybrid Electric Sedan",
        "description": "Hybrid sedan with premium interior and smooth drive.",
        "image": "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/story/hero_image/byd-seal-my24-adv-hero-1001x565-(1).jpg",
        "price": 25000,
        "location": "Sydney",
        "country": "Australia"
    },
    {
        "title": "Electric Commuter Bicycle",
        "description": "Lightweight bicycle for electric-assisted commuting.",
        "image": "https://eskute.co.uk/cdn/shop/files/37d3b4d45f9aedda798585a9d11cb997_ef85f90a-11eb-4217-9172-a21278c91886.png?v=1724637724&width=1200",
        "price": 900,
        "location": "London",
        "country": "UK"
    },
    {
        "title": "Luxury Electric SUV",
        "description": "All-electric luxury SUV with extended range.",
        "image": "https://www-cdn.eu.nio.com/officialsite/editor/upload/stg/ccea0d3e-d37a-4add-ace3-dfeaacd383fe/20241023-155500.jpg",
        "price": 40000,
        "location": "Dubai",
        "country": "UAE"
    },
    {
        "title": "Solar Electric Tuk-Tuk",
        "description": "Eco-friendly, solar-powered tuk-tuk for urban rides.",
        "image": "https://thailanddiscovery.info/wp-content/uploads/2015/10/solar-energy-on-tuktuk.jpg",
        "price": 5000,
        "location": "Bangkok",
        "country": "Thailand"
    },
    {
        "title": "Zero-Emission Motorbike",
        "description": "Futuristic motorbike with zero emissions.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZkGttaYHBTyY-ATXwfGPoAnoiah-xVcLZA&s",
        "price": 3500,
        "location": "Berlin",
        "country": "Germany"
    },
    {
        "title": "Hydrogen-Powered Car",
        "description": "Eco-friendly car running on hydrogen fuel cells.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyqe2ZhNRn_TAXOhhGhKtD9FtJC97GIuz86w&s",
        "price": 45000,
        "location": "Tokyo",
        "country": "Japan"
    },
    {
        "title": "Compact Electric Van",
        "description": "Ideal for small businesses with electric efficiency.",
        "image": "https://boxcutter.co.za/wp-content/uploads/2024/05/DFSK-EC75-profile.jpg",
        "price": 12000,
        "location": "Cape Town",
        "country": "South Africa"
    },
    {
        "title": "Electric Snowmobile",
        "description": "Environmentally-friendly snowmobile for winter sports.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8dVasx0AeAWxgq8hzVrCwqm61K54pnmSfw&s",
        "price": 15000,
        "location": "Reykjavik",
        "country": "Iceland"
    },
    {
        "title": "All-Terrain Electric Quad Bike",
        "description": "Durable quad bike for off-road adventures.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ376T356_yRCz28Z-iz8Jkk7eSfuhJH0CxOA&s",
        "price": 5000,
        "location": "Auckland",
        "country": "New Zealand"
    },
    {
        "title": "Electric Canoe",
        "description": "Electric-powered canoe for eco-friendly boating.",
        "image": "https://static.wixstatic.com/media/c771f2_8850c2c3a45e4568b6961a251dcc8158~mv2.jpg/v1/fill/w_640,h_602,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c771f2_8850c2c3a45e4568b6961a251dcc8158~mv2.jpg",
        "price": 2000,
        "location": "Rio de Janeiro",
        "country": "Brazil"
    },
    {
        "title": "Electric Vintage Car",
        "description": "Classic vintage car reimagined with electric power.",
        "image": "https://revolve.media/wp-content/uploads/2023/08/ev_vintage1.jpg",
        "price": 32000,
        "location": "Paris",
        "country": "France"
    }
]

module.exports = {data: sampleListings};
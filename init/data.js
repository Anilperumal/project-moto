const sampleListing = [
    {
      "title": "Maruti Suzuki Swift",
      "discription": "Compact and fuel-efficient hatchback, perfect for city drives and short trips.",
      "image": "https://example.com/images/swift.jpg",
      "price": 2000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Hyundai Creta",
      "discription": "A stylish and comfortable SUV, great for family trips and long drives.",
      "image": "https://example.com/images/creta.jpg",
      "price": 3500,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Tata Nexon",
      "discription": "Compact SUV with top-notch safety features, ideal for all kinds of travel.",
      "image": "https://example.com/images/nexon.jpg",
      "price": 3000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Honda City",
      "discription": "Sleek and comfortable sedan, great for business trips and smooth rides.",
      "image": "https://example.com/images/city.jpg",
      "price": 2500,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Ford EcoSport",
      "discription": "A sporty and versatile SUV, ideal for both city driving and weekend getaways.",
      "image": "https://example.com/images/ecosport.jpg",
      "price": 2800,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Toyota Innova Crysta",
      "discription": "A reliable and spacious 7-seater MPV, perfect for long trips with the whole family.",
      "image": "https://example.com/images/innova.jpg",
      "price": 4500,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Mahindra XUV500",
      "discription": "A premium 7-seater SUV with ample seating and advanced features. Great for both city and off-road drives.",
      "image": "https://example.com/images/xuv500.jpg",
      "price": 4000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Maruti Suzuki Ertiga",
      "discription": "Compact yet spacious 7-seater MPV, ideal for family outings and group travels.",
      "image": "https://example.com/images/ertiga.jpg",
      "price": 3000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Tata Hexa",
      "discription": "Rugged 7-seater SUV with a luxurious interior and powerful performance. Great for all terrains.",
      "image": "https://example.com/images/hexa.jpg",
      "price": 4200,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Renault Triber",
      "discription": "Versatile and affordable 7-seater MPV, perfect for urban and suburban journeys.",
      "image": "https://example.com/images/triber.jpg",
      "price": 2500,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
          "title": "Royal Enfield Classic 350",
          "discription": "A classic ride with a powerful engine and great comfort. Perfect for long trips and city rides.",
          "image": "https://example.com/images/royal_enfield.jpg",
          "price": 1500,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "Bajaj Pulsar 220F",
          "discription": "Sporty design with advanced features and excellent performance. Ideal for thrill-seekers.",
          "image": "https://example.com/images/pulsar.jpg",
          "price": 1200,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "Honda Activa 6G",
          "discription": "A reliable and fuel-efficient scooter, perfect for daily commutes and short trips.",
          "image": "https://example.com/images/activa.jpg",
          "price": 800,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "Hero Splendor Plus",
          "discription": "A highly popular bike known for its mileage and low maintenance. Great for city rides.",
          "image": "https://example.com/images/splendor.jpg",
          "price": 700,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "KTM Duke 390",
          "discription": "A high-performance bike with stunning looks and incredible speed. Perfect for adventure enthusiasts.",
          "image": "https://example.com/images/duke.jpg",
          "price": 2000,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
        {
            "title": "Yamaha FZ-S",
            "discription": "A stylish bike with a sporty look and great performance, ideal for both city and highway rides.",
            "image": "https://example.com/images/fz-s.jpg",
            "price": 1300,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "Suzuki Gixxer",
            "discription": "A sporty bike with a powerful engine and comfortable ride, perfect for long journeys.",
            "image": "https://example.com/images/gixxer.jpg",
            "price": 1400,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "TVS Apache RTR 160",
            "discription": "A high-performance bike with great handling and speed, ideal for young riders.",
            "image": "https://example.com/images/apache.jpg",
            "price": 1100,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "Honda Unicorn 160",
            "discription": "A reliable bike with good mileage and comfortable ride, perfect for daily commutes.",
            "image": "https://example.com/images/unicorn.jpg",
            "price": 900,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "Kawasaki Ninja 300",
            "discription": "A sportbike with a powerful engine and sleek design, perfect for thrill-seekers.",
            "image": "https://example.com/images/ninja.jpg",
            "price": 2200,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
    },
    {
          "title": "12 Seater Tempo Traveller",
          "discription": "A spacious and comfortable 12-seater vehicle, perfect for group travel, family outings, and business trips.",
          "image": "https://example.com/images/tempo_traveller.jpg",
          "price": 5000,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "12 Seater Mini Bus",
          "discription": "A reliable mini bus with ample seating and air conditioning, ideal for school trips and large group transportation.",
          "image": "https://example.com/images/mini_bus.jpg",
          "price": 4800,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "12 Seater Luxury Coach",
          "discription": "A luxurious coach with comfortable seating and entertainment options, perfect for long trips and special occasions.",
          "image": "https://example.com/images/luxury_coach.jpg",
          "price": 5500,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        }      
  ]



  module.exports = {data : sampleListing};
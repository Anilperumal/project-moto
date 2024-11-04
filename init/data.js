const sampleListing = [
    {
      "title": "Maruti Suzuki Swift",
      "description": "Compact and fuel-efficient hatchback, perfect for city drives and short trips.",
      "image": "https://th.bing.com/th/id/OIP.V5ei8R-J5sl5PPzsM-gf1QHaEl?w=273&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 2000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Hyundai Creta",
      "description": "A stylish and comfortable SUV, great for family trips and long drives.",
      "image": "https://th.bing.com/th/id/OIP.l3XPWA-KQbn2s4Q24Q17aQHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 3500,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Tata Nexon",
      "description": "Compact SUV with top-notch safety features, ideal for all kinds of travel.",
      "image": "https://th.bing.com/th/id/OIP.CijL3lpdqOeQmLMrIPB-SAHaFL?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 3000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Honda City",
      "description": "Sleek and comfortable sedan, great for business trips and smooth rides.",
      "image": "https://th.bing.com/th/id/OIP.iAYT3yuCaXL6Mt805kQAAgHaCZ?w=308&h=113&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 3000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Ford EcoSport",
      "description": "A sporty and versatile SUV, ideal for both city driving and weekend getaways.",
      "image": "https://th.bing.com/th/id/OIP.h0b2JBeAPDoeuLDi6F-yaAHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 2800,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Toyota Innova Crysta",
      "description": "A reliable and spacious 7-seater MPV, perfect for long trips with the whole family.",
      "image": "https://th.bing.com/th/id/OIP.Nd0JXuzjX_fjyzHT_RtXJgHaEG?rs=1&pid=ImgDetMain",
      "price": 4500,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Mahindra XUV500",
      "description": "A premium 7-seater SUV with ample seating and advanced features. Great for both city and off-road drives.",
      "image": "https://th.bing.com/th/id/OIP.5n9lCZXtDZnajpLrRF2TmgHaEj?rs=1&pid=ImgDetMain",
      "price": 4000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Maruti Suzuki Ertiga",
      "description": "Compact yet spacious 7-seater MPV, ideal for family outings and group travels.",
      "image": "https://th.bing.com/th/id/OIP.smI9S-b43Die6VVmGSC25wHaE6?w=310&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 3000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Tata Hexa",
      "description": "Rugged 7-seater SUV with a luxurious interior and powerful performance. Great for all terrains.",
      "image": "https://th.bing.com/th/id/OIP.CmRjzC0NacgZHCYj9Hx7eQHaEo?w=300&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 4200,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
      "title": "Renault Triber",
      "description": "Versatile and affordable 7-seater MPV, perfect for urban and suburban journeys.",
      "image": "https://th.bing.com/th/id/OIP.ofJ9tfkUiJfTXE695qtaNwHaE6?w=277&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      "price": 3000,
      "location": "Allahabad, Uttar Pradesh",
      "country": "India"
    },
    {
          "title": "Royal Enfield Classic 350",
          "description": "A classic ride with a powerful engine and great comfort. Perfect for long trips and city rides.",
          "image": "https://th.bing.com/th/id/OIP.jpNuFy0Bm81_6YbVMPQnUwAAAA?w=294&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 1500,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "Bajaj Pulsar 220F",
          "description": "Sporty design with advanced features and excellent performance. Ideal for thrill-seekers.",
          "image": "https://th.bing.com/th/id/OIP.qVRL1O4O8EukFogJbIBvYAHaEj?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 1200,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "Honda Activa 6G",
          "description": "A reliable and fuel-efficient scooter, perfect for daily commutes and short trips.",
          "image": "https://th.bing.com/th/id/OIP.BdPPEuB0wd24Zci8jFfQPwHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 800,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "Hero Splendor Plus",
          "description": "A highly popular bike known for its mileage and low maintenance. Great for city rides.",
          "image": "https://th.bing.com/th/id/OIP.G9Vx3-hXsPSb6wdPh8_utQHaEK?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 700,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "KTM Duke 390",
          "description": "A high-performance bike with stunning looks and incredible speed. Perfect for adventure enthusiasts.",
          "image": "https://th.bing.com/th/id/OIP.YB-vof8vQPvZztAeadAHIAHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 2000,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
        {
            "title": "Yamaha FZ-S",
            "description": "A stylish bike with a sporty look and great performance, ideal for both city and highway rides.",
            "image": "https://th.bing.com/th/id/OIP.MNA4blBo5tCGdwEN-83xlQHaDt?w=343&h=174&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price": 1000,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "Suzuki Gixxer",
            "description": "A sporty bike with a powerful engine and comfortable ride, perfect for long journeys.",
            "image": "https://th.bing.com/th/id/OIP.OeEhhClK15m7cth-oj06AQHaF8?w=196&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price": 1400,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "TVS Apache RTR 160",
            "description": "A high-performance bike with great handling and speed, ideal for young riders.",
            "image": "https://th.bing.com/th/id/OIP.om0cSeQRoZj-pvvxMaGehQAAAA?w=240&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price": 1100,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "Honda Unicorn 160",
            "description": "A reliable bike with good mileage and comfortable ride, perfect for daily commutes.",
            "image": "https://th.bing.com/th/id/OIP.Db0UWrmnpGmOECqU0M88WQHaGn?w=168&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price": 900,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
          },
    {
            "title": "Kawasaki Ninja 300",
            "description": "A sportbike with a powerful engine and sleek design, perfect for thrill-seekers.",
            "image": "https://th.bing.com/th/id/OIP.XtxdtdppH1PzMq2fbxVgFwHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            "price": 2200,
            "location": "Allahabad, Uttar Pradesh",
            "country": "India"
    },
    {
          "title": "12 Seater Tempo Traveller",
          "description": "A spacious and comfortable 12-seater vehicle, perfect for group travel, family outings, and business trips.",
          "image": "https://th.bing.com/th/id/OIP.pT0TeR9xd4FkluTdfhBilwHaE6?w=233&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 5000,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "12 Seater Mini Bus",
          "description": "A reliable mini bus with ample seating and air conditioning, ideal for school trips and large group transportation.",
          "image": "https://th.bing.com/th/id/OIP.Pp-9ZGUQXbAztAyKT37ywgHaFj?w=200&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 4800,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
    {
          "title": "12 Seater Luxury Coach",
          "description": "A luxurious coach with comfortable seating and entertainment options, perfect for long trips and special occasions.",
          "image": "https://th.bing.com/th/id/OIP.39bfd-ch-8uqjY4FmGRPSAHaES?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          "price": 5500,
          "location": "Allahabad, Uttar Pradesh",
          "country": "India"
        },
      {
        "title": "Toyota Hilux",
        "description": "A offroad SUV high performance truck",
        "image": "https://th.bing.com/th/id/OIP.RQwX5bnXNAww8mUkkpuZFgHaEK?w=311&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        "price": 5000,
        "location": "Allahabad, Uttar Pradesh",
        "country": "India"
      }      
  ]



  module.exports = {data : sampleListing};
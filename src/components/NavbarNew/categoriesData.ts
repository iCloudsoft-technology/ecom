interface categories {
    name: string;
    url: string;
    img: string;
    subcategory: {
        heading: string;
        items: {
            name: string;
            url: string;
            img: string;
        }

    }
}

const categories = [
    {
        name: "Electronics",
        url: "/electronics",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "TV & Visual",
                items: [
                    {
                        name: "LCD TV",
                        url: "/electronics/tv-and-visual/lcd-tv",
                    },
                    {
                        name: "LED TV",
                        url: "/electronics/tv-and-visual/led-tv",
                    },
                    {
                        name: "Curved TV",
                        url: "/electronics/tv-and-visual/curved-tv",
                    },
                    {
                        name: "Plasma TV",
                        url: "/electronics/tv-and-visual/plasma-tv",
                    },
                    {
                        name: "Satellite Decoders",
                        url: "/electronics/tv-and-visual/satellite-decoders",
                    },
                    {
                        name: "Tv Components",
                        url: "/electronics/tv-and-visual/tv-components",
                    },
                    {
                        name: "Projector",
                        url: "/electronics/tv-and-visual/projector",
                    },
                    {
                        name: "VR Headset",
                        url: "/electronics/tv-and-visual/vr-headset",
                    },
                    {
                        name: "Media Streamers",
                        url: "/electronics/tv-and-visual/media-streamers",
                    },
                    {
                        name: "Spares",
                        url: "/electronics/tv-and-visual/spares",
                    },
                ]

            },
            {
                heading: "Refrigerator",
                items: [
                    {
                        name: "Single Door Fridge",
                        url: "/electronics/refrigerator/single-door-fridge",
                    },
                    {
                        name: "Double Door Fridge",
                        url: "/electronics/refrigerator/double-door-fridge",
                    },
                    {
                        name: "Quad Door Fridge",
                        url: "/electronics/refrigerator/quad-door-fridge",
                    },
                    {
                        name: "Mini Fridge",
                        url: "/electronics/refrigerator/mini-fridge",
                    },
                    {
                        name: "Wine Fridge",
                        url: "/electronics/refrigerator/wine-fridge",
                    },
                    {
                        name: "Bar Fridge",
                        url: "/electronics/refrigerator/bar-fridge",
                    },
                    {
                        name: "Freezers",
                        url: "/electronics/refrigerator/freezers",
                    }
                ]

            },
            {
                heading: "Air Conditioner",
                items: [
                    {
                        name: "Air Humidifier",
                        url: "/electronics/air-conditioner/air-humidifier",
                    },
                    {
                        name: "Air Purifier",
                        url: "/electronics/air-conditioner/air-purifier",
                    },
                    {
                        name: "Air Conditioner Components",
                        url: "/electronics/air-conditioner/air-conditioner-components",
                    },
                    {
                        name: "Air Conditioner Filter",
                        url: "/electronics/air-conditioner/air-conditioner-filter",
                    },
                    {
                        name: "Electric Fan",
                        url: "/electronics/air-conditioner/electric-fan",
                    },
                    {
                        name: "Air Cooler",
                        url: "/electronics/air-conditioner/air-cooler",
                    }
                ]

            },
            {
                heading: "Computer",
                items: [
                    {
                        name: "Laptop",
                        url: "/electronics/computer/laptop",
                    },
                    {
                        name: "Notebook",
                        url: "/electronics/computer/notebook",
                    },
                    {
                        name: "Accessories & Peripherals",
                        url: "/electronics/computer/accessories-peripherals",
                    },
                    {
                        name: "Desktop",
                        url: "/electronics/computer/desktop",
                    },
                    {
                        name: "Printers",
                        url: "/electronics/computer/printers",
                    },
                    {
                        name: "WiFi & Networking",
                        url: "/electronics/computer/wifi-networking",
                    },
                    {
                        name: "Computer Components",
                        url: "/electronics/computer/computer-components",
                    },
                    {
                        name: "Monitor",
                        url: "/electronics/computer/monitor",
                    },
                    {
                        name: "Storage Devices",
                        url: "/electronics/computer/storage-devices",
                    },
                    {
                        name: "Scanners",
                        url: "/electronics/computer/scanners",
                    },
                    {
                        name: "Wiring & Cables",
                        url: "/electronics/computer/wiring-cables",
                    }
                ]

            },
            {
                heading: "Washing Machine",
                items: [
                    {
                        name: "Front Loading",
                        url: "/electronics/washing-machine/front-loading",
                    },
                    {
                        name: "Top Loading",
                        url: "/electronics/washing-machine/top-loading",
                    },
                    {
                        name: "Washer Dryer Combo",
                        url: "/electronics/washing-machine/washer-dryer-combo",
                    },
                    {
                        name: "Dish Washing Machine",
                        url: "/electronics/washing-machine/dish-washing-machine",
                    },
                    {
                        name: "Tumble Dryers",
                        url: "/electronics/washing-machine/tumble-dryers",
                    }
                ]

            },
            {
                heading: "Audio Systems",
                items: [
                    {
                        name: "Home Theatre",
                        url: "/electronics/audio-systems/home-theatre",
                    },
                    {
                        name: "Amplifier",
                        url: "/electronics/audio-systems/amplifier",
                    },
                    {
                        name: "Subwoofer & Woofer",
                        url: "/electronics/audio-systems/subwoofer-woofer",
                    },
                    {
                        name: "Midrange Speakers",
                        url: "/electronics/audio-systems/midrange-speakers",
                    },
                    {
                        name: "Tweeters",
                        url: "/electronics/audio-systems/tweeters",
                    },
                    {
                        name: "Full Range Driver Speakers",
                        url: "/electronics/audio-systems/full-range-driver-speakers",
                    },
                    {
                        name: "Outdoors Speakers",
                        url: "/electronics/audio-systems/outdoors-speakers",
                    },
                    {
                        name: "Sound Bar",
                        url: "/electronics/audio-systems/sound-bar",
                    },
                    {
                        name: "Piano & Keyboard",
                        url: "/electronics/audio-systems/piano-keyboard",
                    },
                    {
                        name: "Music Production Equipment",
                        url: "/electronics/audio-systems/music-production-equipment",
                    }
                ]

            },
            {
                heading: "Cameras Photo",
                items: [
                    {
                        name: "Digital Cameras",
                        url: "/electronics/cameras-photo/digital-cameras",
                    },
                    {
                        name: "Lenses & Photo",
                        url: "/electronics/cameras-photo/lenses-photo",
                    },
                    {
                        name: "Flash & Accessories",
                        url: "/electronics/cameras-photo/flash-accessories",
                    },
                    {
                        name: "Vintage Filmography",
                        url: "/electronics/cameras-photo/vintage-filmography",
                    },
                    {
                        name: "Camera Drones",
                        url: "/electronics/cameras-photo/camera-drones",
                    },
                    {
                        name: "Tripods & Supports",
                        url: "/electronics/cameras-photo/tripods-supports",
                    },
                    {
                        name: "Lighting & Studio",
                        url: "/electronics/cameras-photo/lighting-studio",
                    },
                    {
                        name: "Internet Cameras",
                        url: "/electronics/cameras-photo/internet-cameras",
                    },
                    {
                        name: "Binoculars & Telescopes",
                        url: "/electronics/cameras-photo/binoculars-telescopes",
                    },
                    {
                        name: "Video Editing Software",
                        url: "/electronics/cameras-photo/video-editing-software",
                    }
                ]

            },

        ]
    },

    {
        name: "Fashion Style",
        url: "/fashionstyle",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Accessories",
                items: [
                    {
                        name: "Shavers & Trimmers",
                        url: "/fashionstyle/accessories/shavers-trimmers",
                    },
                    {
                        name: "Gloves",
                        url: "/fashionstyle/accessories/gloves",
                    },
                    {
                        name: "Eyewear",
                        url: "/fashionstyle/accessories/eyewear",
                    },
                    {
                        name: "Scarves",
                        url: "/fashionstyle/accessories/scarves",
                    },
                    {
                        name: "Belts",
                        url: "/fashionstyle/accessories/belts",
                    },
                    {
                        name: "Wallets",
                        url: "/fashionstyle/accessories/wallets",
                    },
                    {
                        name: "Purses",
                        url: "/fashionstyle/accessories/purses",
                    },
                    {
                        name: "Headwear",
                        url: "/fashionstyle/accessories/headwear",
                    },
                    {
                        name: "Hairclips & Combs",
                        url: "/fashionstyle/accessories/hairclips-combs",
                    },
                    {
                        name: "Ties",
                        url: "/fashionstyle/accessories/ties",
                    },
                    {
                        name: "Umbrellas",
                        url: "/fashionstyle/accessories/umbrellas",
                    },
                    {
                        name: "Other Staff",
                        url: "/fashionstyle/accessories/other-staff",
                    }
                ]

            },
            {
                heading: "Bags",
                items: [
                    {
                        name: "Hand Bags",
                        url: "/fashionstyle/bags/hand-bags",
                    },
                    {
                        name: "School Bags",
                        url: "/fashionstyle/bags/school-bags",
                    },
                    {
                        name: "College Bags",
                        url: "/fashionstyle/bags/college-bags",
                    },
                    {
                        name: "Garment Bags",
                        url: "/fashionstyle/bags/garment-bags",
                    },
                    {
                        name: "Waist Bag",
                        url: "/fashionstyle/bags/waist-bag",
                    },
                    {
                        name: "Suitcases",
                        url: "/fashionstyle/bags/suitcases",
                    },
                    {
                        name: "Business Bags",
                        url: "/fashionstyle/bags/business-bags",
                    },
                    {
                        name: "Travel Bags",
                        url: "/fashionstyle/bags/travel-bags",
                    },
                    {
                        name: "Kids Luggage",
                        url: "/fashionstyle/bags/kids-luggage",
                    },
                    {
                        name: "Crossbody Bags",
                        url: "/fashionstyle/bags/crossbody-bags",
                    },
                    {
                        name: "Shoulder Bags",
                        url: "/fashionstyle/bags/shoulder-bags",
                    }
                ]

            },
            {
                heading: "Cosmetics",
                items: [
                    {
                        name: "Skin Care",
                        url: "/fashionstyle/cosmetics/skin-care",
                    },
                    {
                        name: "Hands & Nail Care",
                        url: "/fashionstyle/cosmetics/hands-nail-care",
                    },
                    {
                        name: "Make Ups",
                        url: "/fashionstyle/cosmetics/make-ups",
                    },
                    {
                        name: "Hair Care",
                        url: "/fashionstyle/cosmetics/hair-care",
                    },
                    {
                        name: "Body Cream",
                        url: "/fashionstyle/cosmetics/body-cream",
                    },
                    {
                        name: "After Shave",
                        url: "/fashionstyle/cosmetics/after-shave",
                    },
                    {
                        name: "Hair Removal Cream",
                        url: "/fashionstyle/cosmetics/hair-removal-cream",
                    },
                    {
                        name: "Oral Care",
                        url: "/fashionstyle/cosmetics/oral-care",
                    },
                    {
                        name: "Sanitizer",
                        url: "/fashionstyle/cosmetics/sanitizer",
                    },
                    {
                        name: "Wigs & Weaves",
                        url: "/fashionstyle/cosmetics/wigs-weaves",
                    },
                    {
                        name: "Eye Lashes",
                        url: "/fashionstyle/cosmetics/eye-lashes",
                    },
                    {
                        name: "Hair Styling Products",
                        url: "/fashionstyle/cosmetics/hair-styling-products",
                    },
                    {
                        name: "Fragrance Candles",
                        url: "/fashionstyle/cosmetics/fragrance-candles",
                    }
                ]

            },
            {
                heading: "Fragrances",
                items: [
                    {
                        name: "Perfume",
                        url: "/fashionstyle/fragrances/perfume",
                    },
                    {
                        name: "Cologne",
                        url: "/fashionstyle/fragrances/cologne",
                    },
                    {
                        name: "Eau De Parfum",
                        url: "/fashionstyle/fragrances/eau-de-parfum",
                    },
                    {
                        name: "Eau De Toilette",
                        url: "/fashionstyle/fragrances/eau-de-toilette",
                    },
                    {
                        name: "Eau De Cologne",
                        url: "/fashionstyle/fragrances/eau-de-cologne",
                    },
                    {
                        name: "Aerosol Spray",
                        url: "/fashionstyle/fragrances/aerosol-spray",
                    },
                    {
                        name: "Essential Oils",
                        url: "/fashionstyle/fragrances/essential-oils",
                    },
                    {
                        name: "Fragrance Oils",
                        url: "/fashionstyle/fragrances/fragrance-oils",
                    },
                    {
                        name: "Scented Candles",
                        url: "/fashionstyle/fragrances/scented-candles",
                    },
                    {
                        name: "Fragrance Diffuser",
                        url: "/fashionstyle/fragrances/fragrance-diffuser",
                    }
                ]

            },
            {
                heading: "Womens Fashion",
                items: [
                    {
                        name: "Dresses & Skirts",
                        url: "/fashionstyle/womens-fashion/dresses-skirts",
                    },
                    {
                        name: "Shorts",
                        url: "/fashionstyle/womens-fashion/shorts",
                    },
                    {
                        name: "Jeans & Pants",
                        url: "/fashionstyle/womens-fashion/jeans-pants",
                    },
                    {
                        name: "Formal Wear",
                        url: "/fashionstyle/womens-fashion/formal-wear",
                    },
                    {
                        name: "Jumpsuits & Playsuits",
                        url: "/fashionstyle/womens-fashion/jumpsuits-playsuits",
                    },
                    {
                        name: "T-Shirts & Vests",
                        url: "/fashionstyle/womens-fashion/t-shirts-vests",
                    },
                    {
                        name: "Leggings & Tights",
                        url: "/fashionstyle/womens-fashion/leggings-tights",
                    },
                    {
                        name: "Sweaters & Jackets",
                        url: "/fashionstyle/womens-fashion/sweaters-jackets",
                    },
                    {
                        name: "Blouses & Shirts",
                        url: "/fashionstyle/womens-fashion/blouses-shirts",
                    },
                    {
                        name: "Underwear & Sleepwear",
                        url: "/fashionstyle/womens-fashion/underwear-sleepwear",
                    },
                    {
                        name: "Leisure & Sportswear",
                        url: "/fashionstyle/womens-fashion/leisure-sportswear",
                    },
                    {
                        name: "Sneakers & Boots",
                        url: "/fashionstyle/womens-fashion/sneakers-boots",
                    },
                    {
                        name: "Heels & Sandals",
                        url: "/fashionstyle/womens-fashion/heels-sandals",
                    },
                    {
                        name: "Flats & Sleepers",
                        url: "/fashionstyle/womens-fashion/flats-sleepers",
                    }
                ]

            },
            {
                heading: "Mens Fashion",
                items: [
                    {
                        name: "Jeans & Trousers",
                        url: "/fashionstyle/mens-fashion/jeans-trousers",
                    },
                    {
                        name: "Jackets & Coats",
                        url: "/fashionstyle/mens-fashion/jackets-coats",
                    },
                    {
                        name: "Vests & T-Shirts",
                        url: "/fashionstyle/mens-fashion/vests-t-shirts",
                    },
                    {
                        name: "Bermudas & Shorts",
                        url: "/fashionstyle/mens-fashion/bermudas-shorts",
                    },
                    {
                        name: "Formal Attire",
                        url: "/fashionstyle/mens-fashion/formal-attire",
                    },
                    {
                        name: "Sportswear & Leisure",
                        url: "/fashionstyle/mens-fashion/sportswear-leisure",
                    },
                    {
                        name: "Shirts",
                        url: "/fashionstyle/mens-fashion/shirts",
                    },
                    {
                        name: "Sweaters And Hoodies",
                        url: "/fashionstyle/mens-fashion/sweaters-and-hoodies",
                    },
                    {
                        name: "Pajamas & Underwear",
                        url: "/fashionstyle/mens-fashion/pajamas-underwear",
                    },
                    {
                        name: "Formal Shoes",
                        url: "/fashionstyle/mens-fashion/formal-shoes",
                    },
                    {
                        name: "Boots & Sneakers",
                        url: "/fashionstyle/mens-fashion/boots-sneakers",
                    },
                    {
                        name: "Sleepers & Flats",
                        url: "/fashionstyle/mens-fashion/sleepers-flats",
                    }
                ]

            },
        ]
    },

    {
        name: "Art Crafts",
        url: "/artcrafts",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Art Crafts",
                items: [
                    {
                        name: "Paintings & Drawings",
                        url: "/fashionstyle/art-crafts/paintings-drawings",
                    },
                    {
                        name: "Sculptures & Molds",
                        url: "/fashionstyle/art-crafts/sculptures-molds",
                    },
                    {
                        name: "Antiques",
                        url: "/fashionstyle/art-crafts/antiques",
                    },
                    {
                        name: "Beading & Decorating",
                        url: "/fashionstyle/art-crafts/beading-decorating",
                    },
                    {
                        name: "Crafting",
                        url: "/fashionstyle/art-crafts/crafting",
                    },
                    {
                        name: "Knitting & Crochet",
                        url: "/fashionstyle/art-crafts/knitting-crochet",
                    },
                    {
                        name: "Collectibles",
                        url: "/fashionstyle/art-crafts/collectibles",
                    },
                    {
                        name: "Art Instruments",
                        url: "/fashionstyle/art-crafts/art-instruments",
                    },
                    {
                        name: "Art Accessories",
                        url: "/fashionstyle/art-crafts/art-accessories",
                    }
                ]

            },
        ]
    },

    {
        name: "Cell Phones Tablets",
        url: "/cellphonestablets",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Cell Phones Tablets",
                items: [
                    {
                        name: "Smartphones",
                        url: "/fashionstyle/cellphonestablets/smartphones",
                    },
                    {
                        name: "Tablets",
                        url: "/fashionstyle/cellphonestablets/tablets",
                    },
                    {
                        name: "Smart Watches",
                        url: "/fashionstyle/cellphonestablets/smart-watches",
                    },
                    {
                        name: "Mobile Accessories",
                        url: "/fashionstyle/cellphonestablets/mobile-accessories",
                    }
                ]

            },
        ]
    },

    {
        name: "Gadgets",
        url: "/gadgets",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Gadgets",
                items: [
                    {
                        name: "Drones",
                        url: "/fashionstyle/gadgets/drones",
                    },
                    {
                        name: "Personal Safety",
                        url: "/fashionstyle/gadgets/personal-safety",
                    },
                    {
                        name: "Secrete Surveillance",
                        url: "/fashionstyle/gadgets/secrete-surveillance",
                    },
                    {
                        name: "Smart Accessories",
                        url: "/fashionstyle/gadgets/smart-accessories",
                    },
                    {
                        name: "Wearables",
                        url: "/fashionstyle/gadgets/wearables",
                    }
                ]

            },
        ]
    },

    {
        name: "Jewelry & Watches",
        url: "/jewelrywatches",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Body Jewelry",
                items: [
                    {
                        name: "Wrist Watches",
                        url: "/fashionstyle/body-jewelry/wrist-watches",
                    },
                    {
                        name: "Necklaces & Pendants",
                        url: "/fashionstyle/body-jewelry/necklaces-pendants",
                    },
                    {
                        name: "Bracelets & Bangles",
                        url: "/fashionstyle/body-jewelry/bracelets-bangles",
                    },
                    {
                        name: "Rings",
                        url: "/fashionstyle/body-jewelry/rings",
                    },
                    {
                        name: "Ear Rings",
                        url: "/fashionstyle/body-jewelry/ear-rings",
                    },
                    {
                        name: "Cufflinks",
                        url: "/fashionstyle/body-jewelry/cufflinks",
                    },
                    {
                        name: "Anklets",
                        url: "/fashionstyle/body-jewelry/anklets",
                    },
                    {
                        name: "Bespoke Jewelry",
                        url: "/fashionstyle/body-jewelry/bespoke-jewelry",
                    }
                ]

            },
            {
                heading: "Ethnic & Tribal Jewelry",
                items: [
                    {
                        name: "Neck & Wrist Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/neck-wrist-jewelry",
                    },
                    {
                        name: "Head Gear & Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/head-gear-jewelry",
                    },
                    {
                        name: "Head Gear & Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/head-gear-jewelry",
                    },
                    {
                        name: "Waist Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/waist-jewelry",
                    },
                    {
                        name: "Artistic Handwork",
                        url: "/fashionstyle/ethnic-tribal-jewelry/artistic-handwork",
                    }
                ]

            },
            {
                heading: "Ethnic & Tribal Jewelry",
                items: [
                    {
                        name: "Neck & Wrist Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/neck-wrist-jewelry",
                    },
                    {
                        name: "Head Gear & Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/head-gear-jewelry",
                    },
                    {
                        name: "Head Gear & Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/head-gear-jewelry",
                    },
                    {
                        name: "Waist Jewelry",
                        url: "/fashionstyle/ethnic-tribal-jewelry/waist-jewelry",
                    },
                    {
                        name: "Artistic Handwork",
                        url: "/fashionstyle/ethnic-tribal-jewelry/artistic-handwork",
                    }
                ]

            },
        ]
    },

    {
        name: "Health",
        url: "/health",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Health",
                items: [
                    {
                        name: "Dietary Supplements",
                        url: "/fashionstyle/health/dietary-supplements",
                    },
                    {
                        name: "Natural Herbs",
                        url: "/fashionstyle/health/natural-herbs",
                    },
                    {
                        name: "Vitamin Supplements",
                        url: "/fashionstyle/health/vitamin-supplements",
                    },
                    {
                        name: "Energy Tonics",
                        url: "/fashionstyle/health/energy-tonics",
                    },
                    {
                        name: "Patent Medicine",
                        url: "/fashionstyle/health/patent-medicine",
                    },
                    {
                        name: "Antibacterial & Antiseptic",
                        url: "/fashionstyle/health/antibacterial-antiseptic",
                    },
                    {
                        name: "Sexual Health",
                        url: "/fashionstyle/health/sexual-health",
                    },
                    {
                        name: "Sports Nutrition",
                        url: "/fashionstyle/health/sports-nutrition",
                    },
                    {
                        name: "Pain Killers",
                        url: "/fashionstyle/health/pain-killers",
                    }
                ]
            },
        ]
    },

    {
        name: "Sports & Training",
        url: "/sportstraining",
        img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
        subcategory: [
            {
                heading: "Sports & Leisure Items",
                items: [
                    {
                        name: "Golf",
                        url: "/fashionstyle/sports-leisure-items/golf",
                    },
                    {
                        name: "Cycling",
                        url: "/fashionstyle/sports-leisure-items/cycling",
                    },
                    {
                        name: "Soccer And Rugby",
                        url: "/fashionstyle/sports-leisure-items/soccer-and-rugby",
                    },
                    {
                        name: "Netball And Tennis",
                        url: "/fashionstyle/sports-leisure-items/netball-and-tennis",
                    },
                    {
                        name: "MMA & Contact Sport",
                        url: "/fashionstyle/sports-leisure-items/mma-contact-sport",
                    },
                    {
                        name: "Skating And Skateboards",
                        url: "/fashionstyle/sports-leisure-items/skating-and-skateboards",
                    },
                    {
                        name: "Yoga Equipment",
                        url: "/fashionstyle/sports-leisure-items/yoga-equipment",
                    },
                    {
                        name: "Fishing Equipment",
                        url: "/fashionstyle/sports-leisure-items/fishing-equipment",
                    },
                    {
                        name: "Cricket And Hockey",
                        url: "/fashionstyle/sports-leisure-items/cricket-and-hockey",
                    },
                    {
                        name: "Indoor Sports",
                        url: "/fashionstyle/sports-leisure-items/indoor-sports",
                    },
                    {
                        name: "Other Sports",
                        url: "/fashionstyle/sports-leisure-items/other-sports",
                    }
                ]
            },
            {
                heading: "Equipments",
                items: [
                    {
                        name: "Exercising Equipment",
                        url: "/fashionstyle/equipments/exercising-equipment",
                    },
                    {
                        name: "Treadmill And Bikes",
                        url: "/fashionstyle/equipments/treadmill-and-bikes",
                    },
                    {
                        name: "Dumbells",
                        url: "/fashionstyle/equipments/dumbells",
                    },
                    {
                        name: "Home Gyms",
                        url: "/fashionstyle/equipments/home-gyms",
                    },
                    {
                        name: "Benches",
                        url: "/fashionstyle/equipments/benches",
                    },
                    {
                        name: "Barbells And Attachments",
                        url: "/fashionstyle/equipments/barbells-and-attachments",
                    },
                    {
                        name: "Sports Nutrition",
                        url: "/fashionstyle/equipments/sports-nutrition",
                    },
                    {
                        name: "Hand Grippers",
                        url: "/fashionstyle/equipments/hand-grippers",
                    },
                    {
                        name: "Gym Belts",
                        url: "/fashionstyle/equipments/gym-belts",
                    },
                    {
                        name: "Multi Purpose Training Machine",
                        url: "/fashionstyle/equipments/multi-purpose-training-machine",
                    },
                    {
                        name: "Electronic Training Tools",
                        url: "/fashionstyle/equipments/electronic-training-tools",
                    },
                    {
                        name: "Gym Accessories",
                        url: "/fashionstyle/equipments/gym-accessories",
                    },
                    {
                        name: "Weights",
                        url: "/fashionstyle/equipments/weights",
                    },
                    {
                        name: "Other Training Equipment",
                        url: "/fashionstyle/equipments/other-training-equipment",
                    }
                ]
            },
        ]
    },

]
export default categories;
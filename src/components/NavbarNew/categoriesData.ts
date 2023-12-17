interface categories {
    name:string;
    url:string;
    img:string;
    subcategory:{
        heading:string;
        items:{
            name:string;
            url:string;
            img:string;
        }

    }
}

const categories = [
    {
      name: "Electronics",
      url: "/electronics",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            },
            {
                name:"LED TV",
                url:"/electronics/tv-and-visual/led-tv",
            },
            {
                name:"Curved TV",
                url:"/electronics/tv-and-visual/curved-tv",
            },
            {
                name:"Plasma TV",
                url:"/electronics/tv-and-visual/plasma-tv",
            },
            {
                name:"Satellite Decoders",
                url:"/electronics/tv-and-visual/satellite-decoders",
            },
            {
                name:"Tv Components",
                url:"/electronics/tv-and-visual/tv-components",
            },
            {
                name:"Projector",
                url:"/electronics/tv-and-visual/projector",
            },
            {
                name:"VR Headset",
                url:"/electronics/tv-and-visual/vr-headset",
            },
            {
                name:"Media Streamers",
                url:"/electronics/tv-and-visual/media-streamers",
            },
            {
                name:"Spares",
                url:"/electronics/tv-and-visual/spares",
            },
        ]

    } 
    },
    {
      name: "Fashion & Style",
      url: "/fashionstyle",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    }   
    },
    {
      name: "Art & Crafts",
      url: "/artandcrafts",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    }   
    },
    {
      name: "Cell Phone & Tablets",
      url: "/cellphones",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Gadgets",
      url: "/gadgets",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Jewelry & Watches",
      url: "/jewelry-and-watches",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Health",
      url: "/health",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
      subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Sports & Training",
      url: "/sports-and-training",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Stationery & Books",
      url: "/stationery-and-books",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "NGOs & NPOs",
      url: "/ngos-and-npos",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Home & Outdoors",
      url: "/home-and-outdoors",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Baby & Toddler",
      url: "/baby-and-toddler",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Camping & Hiking",
      url: "/camping-and-hiking",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
    {
      name: "Liquor",
      url: "/liquor",
      img: "https://phpstack-1183211-4155182.cloudwaysapps.com/assets/images/categories/1664456483ashkan-forouzani-4Zlk5Sgy-_E-unsplash_50_1_20.png",
       subcategory:{
        heading:"TV & Visual",
        items:[
            {
                name:"LCD TV",
                url:"/electronics/tv-and-visual/lcd-tv",
            }
        ]
    } 
    },
  ];

  export default categories
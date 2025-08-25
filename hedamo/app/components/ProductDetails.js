const ProductDetails = [
    {
        "id": 1,
        "name": "Hedamo Organic Honey",
        "image": "/honey.jpg",
        "alt": "honey bottle",
        "category": "Food",
        "description": "Pure wild honey harvested from organic farms.",
        "shortDescription": "Natural wild honey from organic farms.",
        "longDescription": "Harvested sustainably from wild hives, our honey is rich in nutrients and completely unprocessed.",
        "features": ["Unprocessed", "Nutrient-rich", "Eco-friendly"],
        "nutrition": {"calories": 70, "sugar": "15g"},
        "traceability": {},
        "reviews": []
    },
    {
        "id": 2,
        "name": "Grass-Fed Beef Steak",
        "image": "/meat.jpg",
        "alt": "red meat image",
        "category": "Meat",
        "description": "Premium grass-fed beef steak, ethically raised and hormone-free.",
        "shortDescription": "Tender grass-fed beef steak.",
        "longDescription": "Ethically raised without hormones, this high-protein beef delivers premium taste and quality.",
        "features": ["Grass-fed", "No hormones", "High protein"],
        "nutrition": {
            "calories": 250,
            "protein": "26g",
            "fat": "18g",
            "carbohydrates": "0g"
        },
        "traceability": {
            "farm": "Green Pastures Ranch",
            "location": "Montana, USA",
            "harvest_date": "2025-08-10"
        },
        "reviews": []
    },
    {
        "id": 3,
        "name": "Organic Whole Milk",
        "image": "/milk.jpg",
        "alt": "milk packet",
        "category": "Dairy",
        "description": "Creamy whole milk from pasture-raised cows. No antibiotics or artificial hormones.",
        "shortDescription": "Fresh organic whole milk.",
        "longDescription": "Sourced from pasture-raised cows, our milk is creamy, healthy, and free from antibiotics or artificial hormones.",
        "features": ["Pasture-raised", "No antibiotics", "Calcium-rich"],
        "nutrition": {
            "calories": 150,
            "protein": "8g",
            "fat": "8g",
            "carbohydrates": "12g"
        },
        "traceability": {
            "farm": "Daisy Fields Dairy",
            "location": "Wisconsin, USA",
            "bottling_date": "2025-08-20"
        },
        "reviews": []
    },
    {
        "id": 4,
        "name": "BotaniGlow Facial Serum",
        "image": "/lip.jpg",
        "alt": "lip balm image",
        "category": "Beauty",
        "description": "Hydrating serum made from botanical extracts and essential oils.",
        "shortDescription": "Hydrating botanical facial serum.",
        "longDescription": "Packed with natural extracts and essential oils, this serum nourishes and rejuvenates your skin.",
        "features": ["Paraben-free", "Cruelty-free", "Vegan"],
        "nutrition": null,
        "traceability": {
            "manufacturer": "Glow Labs",
            "location": "California, USA",
            "batch_number": "BGF205"
        },
        "reviews": []
    },
    {
        "id": 5,
        "name": "Organic Kale Bunch",
        "image": "/eggs.jpg", // Update if needed
        "alt": "eggs image",   // Update alt if needed
        "category": "Veggies",
        "description": "Freshly harvested organic kale, rich in vitamins and antioxidants.",
        "shortDescription": "Fresh organic kale bunch.",
        "longDescription": "Handpicked and pesticide-free, our kale is rich in vitamins, antioxidants, and perfect for healthy meals.",
        "features": ["Non-GMO", "Pesticide-free", "Locally grown"],
        "nutrition": {
            "calories": 35,
            "fiber": "2g",
            "vitamin_C": "89mg",
            "iron": "1.6mg"
        },
        "traceability": {
            "farm": "Harvest Greens Co-op",
            "location": "Oregon, USA",
            "harvest_date": "2025-08-22"
        },
        "reviews": []
    },
    {
        "id": 6,
        "name": "Organic Blueberries",
        "image": "/blueberries.jpg",
        "alt": "blueberries image",
        "category": "Fruits",
        "description": "Juicy organic blueberries packed with antioxidants.",
        "shortDescription": "Fresh organic blueberries.",
        "longDescription": "Handpicked and antioxidant-rich, these blueberries are perfect for snacking, baking, or adding to smoothies.",
        "features": ["Handpicked", "No preservatives", "Rich in antioxidants"],
        "nutrition": {
            "calories": 57,
            "sugar": "10g",
            "fiber": "2.4g",
            "vitamin_C": "9.7mg"
        },
        "traceability": {
            "farm": "Berry Bliss Farms",
            "location": "Maine, USA",
            "harvest_date": "2025-08-18"
        },
        "reviews": []
    },
    {
        "id": 7,
        "name": "Plant-Based Multivitamins",
        "image": "/nuts.jpg",
        "alt": "packed nuts image",
        "category": "Supplements",
        "description": "Daily multivitamin tablets made from organic fruits and vegetables.",
        "shortDescription": "Organic plant-based multivitamins.",
        "longDescription": "Made from fruits and vegetables, these multivitamins support daily health and wellness naturally.",
        "features": ["Non-GMO", "Gluten-free", "No artificial additives"],
        "nutrition": {
            "vitamin_A": "900mcg",
            "vitamin_D": "25mcg",
            "iron": "8mg",
            "zinc": "11mg"
        },
        "traceability": {
            "manufacturer": "NutraPure Inc.",
            "location": "Utah, USA",
            "batch_number": "NPX458"
        },
        "reviews": []
    },
    {
        "id": 8,
        "name": "EcoCotton T-Shirt",
        "image": "/clothess.jpg",
        "alt": "clothes image",
        "category": "Clothes",
        "description": "Sustainable t-shirt made from 100% organic cotton.",
        "shortDescription": "Eco-friendly cotton t-shirt.",
        "longDescription": "Made from 100% organic cotton, this t-shirt is sustainable, comfortable, and ethically produced.",
        "features": ["Organic cotton", "Fair trade", "Biodegradable packaging"],
        "nutrition": null,
        "traceability": {
            "manufacturer": "EarthWear Apparel",
            "location": "India",
            "batch_number": "ECO-TSH2025"
        },
        "reviews": []
    }   
];

export default ProductDetails;

import { Link, Comment, Route, Notification, Product, ReceiptInterface } from "./types"

export const notificationData: Notification[] = [
    {
        title: "Stockouts",
        day: "Today",
    },
    {
        title: "Demand Required",
        day: "Today",
    },
    {
        title: "Orders Available",
        day: "Today",
    },
]


export const routeData: Route[] = [
    {
        routeName: "Route 1",
        text: "2 stops",
        source: "Kattangal",
        destination: "Mukkam"
    },
    {
        routeName: "Route 2",
        text: "3 stops",
        source: "Kozhikode",
        destination: "Kottayam"
    },
    {
        routeName: "Route 3",
        text: "4 stops",
        source: "New York",
        destination: "Washtington"
    },
    {
        routeName: "Route 4",
        text: "5 stops",
        source: "Antartica",
        destination: "Mt. Everest"
    }
]


export const commentData: Comment[] = [
    {
        header: "Current Routes",
        text: "Stockouts",
        link: "/dashboard/stockout"
    },
    {
        header: "Special Requests",
        text: "Find My Customer"
    }
]

export const linkData: Link[] = [
    {
        title: "#Research Survey Design"
    },
    {
        title: "#Strategy SWOT Analysis"
    },
    {
        title: "#Operations Structure Design"
    }
]


export const teamData = [
    {
        name: "Razik",
        role: "Project Manager",
        linkedin: "#"
    },
    {
        name: "Sarath",
        role: "General Manager",
        linkedin: "#"
    },
    {
        name: "Aswin",
        role: "Account Manager",
        linkedin: "#"
    },
    {
        name: "Vaisakh",
        role: "Digital Manager",
        linkedin: "#"
    },
]

export const productData: Product[] = [
    {
        name: "Product 1",
        category: "Category 1",
        brand: "Brand 1",
        demand: 123,
        priority: 1
    },
    {
        name: "Product 2",
        category: "Category 2",
        brand: "Brand 2",
        demand: 1234,
        priority: 2
    },
    {
        name: "Product 3",
        category: "Category 3",
        brand: "Brand 3",
        demand: 12345,
        priority: 3
    },
    {
        name: "Product 4",
        category: "Category 4",
        brand: "Brand 4",
        demand: 132456,
        priority: 4
    }
]


export const recieptData = [
    {
        route: routeData[0],
        product: productData[0],
        retailerName: "Retailer 1",
        status: "accept",
        description: "Product delivered successfully"
    },
    {
        route: routeData[1],
        product: productData[1],
        retailerName: "Retailer 2",
        status: "reject",
        description: "Product not delivered"
    },
    {
        route: routeData[2],
        product: productData[2],
        retailerName: "Retailer 3",
        status: "accept",
        description: "Product delivered successfully"
    },
    {
        route: routeData[3],
        product: productData[3],
        retailerName: "Retailer 4",
        status: "reject",
        description: "Product not delivered"
    }
]


export const orderData = [
    {
        product: productData[0],
        retailerName: "Retailer 1",
        required: 100,
        location: routeData[0].destination,
    },
    {
        product: productData[1],
        retailerName: "Retailer 2",
        required: 200,
        location: routeData[1].destination,
    },
    {
        product: productData[2],
        retailerName: "Retailer 3",
        required: 300,
        location: routeData[2].destination,
    },
    {
        product: productData[3],
        retailerName: "Retailer 4",
        required: 400,
        location: routeData[3].destination,
    },
    {
        product: productData[0],
        retailerName: "Retailer 5",
        required: 500,
        location: routeData[0].destination,
    },
    {
        product: productData[1],
        retailerName: "Retailer 6",
        required: 600,
        location: routeData[1].destination,
    },
    {
        product: productData[2],
        retailerName: "Retailer 7",
        required: 700,
        location: routeData[2].destination,
    },
    {
        product: productData[3],
        retailerName: "Retailer 8",
        required: 800,
        location: routeData[3].destination,
    }
]


export const retailerData = [
    {
        name: "Lulu Hypermarket",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 1",
        website: "https://www.luluhypermarket.com/"
    },
    {
        name: "Reliance Digital",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 2",
        website: "https://www.reliancedigital.com/"
    },
    {
        name: "Big Bazaar",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 3",
        website: "https://www.bigbazaar.com/"
    },
    {
        name: "D-Mart",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 4",
        website: "https://www.dmart.com/"
    },
    {
        name: "Walmart",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 5",
        website: "https://www.walmart.com/"
    },
    {
        name: "Target",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 6",
        website: "https://www.target.com/"
    },
    {
        name: "Costco",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 7",
        website: "https://www.costco.com/"
    },
    {
        name: "Amazon",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 8",
        website: "https://www.amazon.com/"
    },
    {
        name: "Flipkart",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 9",
        website: "https://www.flipkart.com/"
    },
    {
        name: "Snapdeal",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 10",
        website: "https://www.snapdeal.com/"
    }
]

export const distributorData = [
    {
        name: "Distributor 1",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 1",
        website: "https://www.distributor1.com/",
    },
    {
        name: "Distributor 2",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 2",
        website: "https://www.distributor2.com/",
    },
    {
        name: "Distributor 3",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 3",
        website: "https://www.distributor3.com/",
    },
    {
        name: "Distributor 4",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 4",
        website: "https://www.distributor4.com/",
    },
    {
        name: "Distributor 5",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 5",
        website: "https://www.distributor5.com/",
    },
    {
        name: "Distributor 6",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 6",
        website: "https://www.distributor6.com/",
    },
    {
        name: "Distributor 7",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 7",
        website: "https://www.distributor7.com/",
    },
    {
        name: "Distributor 8",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 8",
        website: "https://www.distributor8.com/",
    },
    {
        name: "Distributor 9",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 9",
        website: "https://www.distributor9.com/",
    },
    {
        name: "Distributor 10",
        logo: "/user.jpg",
        contact: "1234567890",
        address: "Address 10",
        website: "https://www.distributor10.com/",
    },
]



export const orderHistory = [
    {
        product: productData[0],
        required: 100,
        location: routeData[0].destination,
        accepted: false,
    },
    {
        product: productData[1],
        required: 200,
        location: routeData[1].destination,
        accepted: true,
        acceptedBy: "Distributor 1"
    },
    {
        product: productData[2],
        required: 300,
        location: routeData[2].destination,
        accepted: false,
    },
    {
        product: productData[3],
        required: 400,
        location: routeData[3].destination,
        accepted: true,
        acceptedBy: "Distributor 2"
    },
    {
        product: productData[0],
        required: 500,
        location: routeData[0].destination,
        accepted: true,
        acceptedBy: "Distributor 3"
    },
    {
        product: productData[1],
        required: 600,
        location: routeData[1].destination,
        accepted: false,
    },
    {
        product: productData[2],
        required: 700,
        location: routeData[2].destination,
        accepted: true,
        acceptedBy: "Distributor 4"
    },
    {
        product: productData[3],
        required: 800,
        location: routeData[3].destination,
        accepted: false,
    }
]
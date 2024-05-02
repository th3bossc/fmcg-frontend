import { Link, Comment, Route, Notification, Product } from "./types"

export const notificationData: Notification[] = [
]


export const routeData: Route[] = [
]


export const distributorCommentData: Comment[] = [
    {
        header: "Current Routes",
        text: "Reorder Point",
        link: "/dashboard/live-demand"
    },
    {
        header: "Special Requests",
        text: "Find My Customer"
    }
]

export const retailerCommentData: Comment[] = [
    {
        header: "Order Details",
        text: "Reorder Point",
        link: "/dashboard/reorder-point",
    },
    {
        header: "Special Requests",
        text: "Find My Customer",
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
]


export const retailerData = [
]

export const distributorData = [

]



export const orderHistory = [
]
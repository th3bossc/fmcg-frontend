export type User = {
    id: string,
    name: string,
    email: string,
    username: string,
    role: Role,
    randomKey: number,
}

export type Role = "retailer" | "distributor";

export interface UserDetails extends Omit<User, "randomKey" | "id"> {
    password: string,
    confirmPassword: string
}

export type Notification = {
    title: string,
    day: string,
}

export type Route = {
    routeName: string,
    text: string,
    source: string,
    destination: string
}

export type Comment = {
    header: string,
    text: string,
    link?: string,
}

export type Link = {
    title: string
}

export type Product = {
    name: string,
    category: string,
    brand: string,
    demand: "Low demand" | "Medium demand" | "High demand" | "Very high demand",
    priority: number,
}


export type StockOutData = {
    route: Route | null,
    retailerName: string,
    product: Product | null,
    status: "accept" | "reject",
    description: string,

}

export type ReceiptInterface = {
    route: Route | null,
    product: Product | null,
    retailerName: string,
    status: "accept" | "reject",
    description: string,
}
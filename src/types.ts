export type User = {
    id: string,
    name: string,
    email: string,
    role: Role,
    contact?: string,
    address?: string,
    website?: string,
    logo?: string,
}

export type Role = "RETAILER" | "DISTRIBUTOR";

export interface UserDetails extends Omit<User, "randomKey" | "id"> {
    password: string,
    confirmPassword: string
}

export type Notification = {
    id: string,
    title: string,
    day: string,
}

export type Route = {
    id: string,
    routeName: string,
    text: string,
    source: string,
    destination: string,
    location: string,
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
    id: string,
    name: string,
    category: string,
    brand: string,
    demand: number,
    priority: number,
}


export type StockOutData = {
    route: Route | null,
    retailerName: string,
    product: Product | null,
    status: "accept" | "reject",

}

export type Order = {
    id: string,
    status: "PENDING" | "ACCEPTED" | "REJECTED",
    retailer: User,
    product: Product,
    required: number,
    location: string,
    accepted_by?: User,
}

export type Receipt = {
    // 'id', 'product', 'retailer', 'accepted'
    id: string,
    product: Product,
    retailer: User,
    accepted: boolean,
}

export type Demand = {
    id: string,
    product: Product,
    retailer: User,
    required: number,
    location: string,
}

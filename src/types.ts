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
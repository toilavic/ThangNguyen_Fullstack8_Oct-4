type UserAddress = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: number,
        lng: number
    }
}

type UserCompany = {
    name: string,
    catchPhrase: string,
    bs: string
}

type UsersType = {
    id: number,
    name: string,
    username: string,
    email: string
    address: UserAddress,
    phone: string,
    website: string,
    company: UserCompany
}

type UserRes = {
    status: number,
    data: UsersType
}

export type {
    UserRes,
    UsersType
}
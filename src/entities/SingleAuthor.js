export class Name {
    constructor (image, name, username, email, phone) {
        this.image = image
        this.name = name
        this.username = username
        this.email = email
        this.phone = phone
    } 
}

export class Address {
    constructor (street, city, zipCode, geoLat, geoLong){
        this.street = street
        this.city = city
        this.zipCode = zipCode;
        this.geo = {
            lat: geoLat,
            long: geoLong
        }
    }
}

export class Company {
    constructor (name, slogan){
        this.name = name
        this.slogan = slogan
    }
}
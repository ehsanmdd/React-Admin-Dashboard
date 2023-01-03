let xAxisData = [
    {
        "name" : "Jan",
        "Sale" : 112_000
    },
    {
        "name" : "Feb",
        "Sale" : 99_000
    },
    {
        "name" : "Mar",
        "Sale" : 12_900
    },
    {
        "name" : "Apr",
        "Sale" : 99_000
    },
    {
        "name" : "May",
        "Sale" : 54_000
    },
    {
        "name" : "Jun",
        "Sale" : 85_000
    },
    {
        "name" : "Jul",
        "Sale" : 34_000
    },
    {
        "name" : "Agu",
        "Sale" : 18_000
    },
    {
        "name" : "Sep",
        "Sale" : 0
    },
    {
        "name" : "Oct",
        "Sale" : 73_000
    },
    {
        "name" : "Nov",
        "Sale" : 12_900
    },
    {
        "name" : "Des",
        "Sale" : 97_000
    },
]

const newMembers = [
    {
        id : 1 ,
        username : "Maryam Naeini",
        title : "UI/UX Designer",
        img : "./images/Avatar/UserImage-2.jpg"
    },
    {
        id : 2 ,
        username : "Freshte Haji",
        title : "Sales Director",
        img : "./images/Avatar/UserImage-1.jpg"
    },
    {
        id : 3 ,
        username : "Nazanin Moghimi",
        title : "HR Manager",
        img : "./images/Avatar/UserImage-3.jpg"
    },
    {
        id : 4 ,
        username : "Sahar Salehi",
        title : "Social Manager",
        img : "./images/Avatar/UserImage-5.jpg"
    },
]

const transaction = [
    {
        id : 1,
        customer : "Nasim OmidiFar",
        date : "12 May 2022",
        amount : "152.85",
        status : "Approved",
        img : "./images/Avatar/UserImage-7.jpg"
    },
    {
        id : 5,
        customer : "Ardeshir Keyhani",
        date : "25 Nov 2022",
        amount : "100.85",
        status : "Pending",
        img : "./images/Avatar/UserImage-11.jpg"
    },
    {
        id : 2,
        customer : "Ghazal Nemati",
        date : "22 Jan 2022",
        amount : "190.00",
        status : "Pending",
        img : "./images/Avatar/UserImage-8.jpg"
    },
    {
        id : 3,
        customer : "Tina AkhondTabar",
        date : "19 Jun 2022",
        amount : "100.85",
        status : "Declined",
        img : "./images/Avatar/UserImage-9.jpg"
    },
    {
        id : 4,
        customer : "Pedram Sobhani",
        date : "08 Sep 2022",
        amount : "280.85",
        status : "Approved",
        img : "./images/Avatar/UserImage-10.jpg"
    },
]

let userTable = [

    {
        id : 1,
        userName : "Sasan Sanei",
        avatar : "./images/Avatar/UserImage-11.jpg",
        status : "active",
        age : 25,
        transaction : "$129.00",
        email : "s.sanei@gmail.com"
    },
    {
        id : 2,
        userName : "Sara Zandi",
        avatar : "./images/Avatar/UserImage-12.jpg",
        status : "active",
        age : 27,
        transaction : "$130.00",
        email : "mohamadi.emad@yahoo.com"
    },
    {
        id : 3,
        userName : "Negin Pashaadeh",
        avatar : "./images/Avatar/UserImage-13.jpg",
        status : "disable",
        age : 22,
        transaction : "$111.00",
        email : "pashazadeh.n@gmail.com"
    },
    {
        id : 4,
        userName : "Pegah Ghadimi",
        avatar : "./images/Avatar/UserImage-14.jpg",
        status : "active",
        age : 24,
        transaction : "$120.00",
        email : "nr.motlagh@hotmail.com"
    },
    {
        id : 5,
        userName : "Donya Meshkat",
        avatar : "./images/Avatar/UserImage-16.jpg",
        status : "active",
        age : 24,
        transaction : "$580.00",
        email : "d.m@meshkat.com"
    },
]

const productItem = [
    {
        id : 1,
        productName : "Breitling Chronomat SilverBronz",
        productImg : "./images/Products/BreitlingChronomat-15.jpg",
        productId : "CB0110121C1C1",
        price : "$8.900.00"
    },
    {
        id : 2,
        productName : "Breitling Chronomat SilverGold",
        productImg : "./images/Products/BreitlingChronomat-10.jpg",
        productId : "CB0110121C1B2",
        price : "$13.000.00"
    },
    {
        id : 3,
        productName : "Breitling Chronomat GoldLetter",
        productImg : "./images/Products/BreitlingChronomat-12.jpg",
        productId : "CB0110121C1C2",
        price : "$11.564.20"
    },
    {
        id : 4,
        productName : "Breitling Chronomat NavyGold",
        productImg : "./images/Products/BreitlingChronomat-16.jpg",
        productId : "CB0110121C1A1",
        price : "$14.564.20"
    },
    {
        id : 5,
        productName : "Breitling Chronomat Black",
        productImg : "./images/Products/BreitlingChronomat-5.jpg",
        productId : "CB0110121C1A6",
        price : "$10,564.20"
    },
    {
        id : 6,
        productName : "Breitling Chronomat RoseGold",
        productImg : "./images/Products/BreitlingChronomat-21.jpg",
        productId : "CB0110121C1C3",
        price : "$12.564.20"
    },
]

export {xAxisData , newMembers , transaction , userTable , productItem}
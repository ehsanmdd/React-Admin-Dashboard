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

export {xAxisData , newMembers , transaction , userTable}
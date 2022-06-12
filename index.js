// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let convertBoolean=(props)=> {
    let answer
    if (props == true) {
        answer = "Yes"
    }
    else {
        answer = "No"
    }
    return answer
}

const favoriteColorFirstUser = [];
favoriteColorFirstUser.push("Yellow")
favoriteColorFirstUser.push("Pink")
favoriteColorFirstUser.push("White")
favoriteColorFirstUser.push("Purple")

const sdFirstUser = {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016
}

const smpFirstUser = {
    name: "SMP 02",
    city: "Jakarta",
    graduate: 2019
}

const smaFirstUser = {
    name: "SMA 03",
    city: "Tangerang"
}

const educationFirstUser = [];
educationFirstUser.push(sdFirstUser)
educationFirstUser.push(smpFirstUser)
educationFirstUser.push(smaFirstUser)

// const restauranSet = new Set ()
// restauranSet.add("Ramen")
// restauranSet.add("Tiramisu")
// restauranSet.add("Pangsit")
// restauranSet.add("Bajigur")
// restauranSet.add("Tektek")
// restauranSet.add("KueTiaw")
// restauranSet.add("Bihun")
// restauranSet.add("Rengginang")
// restauranSet.add("Sushi")
// restauranSet.add("Sushi")
// restauranSet.add("Tiramusi")


const firstUser = {
    name : "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: favoriteColorFirstUser,
    isHavePet: convertBoolean(true),
    education: JSON.stringify(educationFirstUser),
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Padang", "Tteok"]
};

const favoriteColorSecondUser = [];
favoriteColorSecondUser.push("Blue")
favoriteColorSecondUser.push("Black")
favoriteColorSecondUser.push("Grey")

const sdSecondUser ={
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010
}

const smpSecondUser = {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013
}

const smaSecondUser = {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016
}

const univSecondUser = {
    name: "Universitas Maju",
    city: "Tanggerang"
}

const educationSecondUser = [];
educationSecondUser.push(sdSecondUser)
educationSecondUser.push(smpSecondUser)
educationSecondUser.push(smaSecondUser)
educationSecondUser.push(univSecondUser)

//const restauranSecondUser = new Set()
//restauranSecondUser.add("Tempe")
//restauranSecondUser.add("Mendoan")
//restauranSecondUser.add("KueRangi")
//restauranSecondUser.add("NasiUduk")
//restauranSecondUser.add("Tahu")
//restauranSecondUser.add("Nasi")
//restauranSecondUser.add("CangCimen")
//restauranSecondUser.add("Rendang")
//restauranSecondUser.add("Sushi")

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    emai: "wendy@dingdong.com",
    favoritColor: favoriteColorSecondUser,
    isHavePet: convertBoolean(false),
    education: JSON.stringify(educationSecondUser),
    favoriteRestauran: ["Tempura", "Bento", "Sushi", "Padang", "Pancake", "Katsu", "Geprek", "Eggy"],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
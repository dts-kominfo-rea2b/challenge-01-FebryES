// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

let convertBoolean=(props)=> {
    let answer
    if (props == true) {
        answer = "yes"
    }
    else {
        answer = "No"
    }
    return answer
}

const favoriteColorFirstUser = [];
favoriteColorFirstUser.push("Red")
favoriteColorFirstUser.push("Blue")
favoriteColorFirstUser.push("Black")
favoriteColorFirstUser.push("Jingga")

const sdFirstUser = {
    name: "SD 01",
    city: "Jakarta",
    graduate: 2016
}
const smpFirstUser = {
    name : "SMP 02",
    city : "Jakarta",
    graduate : 2019
}
const smaFirstUser = {
    Name : "SMA 03",
    graduate : "Tanggerang"
}

const educationFirstUser = [];
educationFirstUser.push(sdFirstUser)
educationFirstUser.push(smpFirstUser)
educationFirstUser.push(smaFirstUser)

const restauranSet = new Set ()
restauranSet.add("Ramen")
restauranSet.add("Tiramisu")
restauranSet.add("Pangsit")
restauranSet.add("Bajigur")
restauranSet.add("Tektek")
restauranSet.add("KueTiaw")
restauranSet.add("Bihun")
restauranSet.add("Rengginang")
restauranSet.add("Sushi")
restauranSet.add("Sushi")
restauranSet.add("Tiramusi")



const firstUser = {
    name : "Monic",
    gender : "Female",
    age : 17,
    email : "monic@dingdong.com",
    favoriteColor : favoriteColorFirstUser,
    isHavetPet : convertBoolean(true),
    education : JSON.stringify(educationFirstUser),
    favoriterestauran : ["Ramen", "Tiramisu", "Pangsit", "Bajigur", "Tektek", "KueTiaw", "Bihun"]
};

const favoriteColorSecondUser = [];
favoriteColorSecondUser.push("dark")
favoriteColorSecondUser.push("Yelow")
favoriteColorSecondUser.push("White")

const sdSecoundUser ={
    name : "SD 02",
    city : "Jakarta",
    graduate : 2010
}

const smpSecoundUser = {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013
}

const smaSecoundUser = {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016
}

const univSecoundUser = {
    name: "Universitas Mundur",
    city: "Tanggerang"
}

const educationSecoundUser = [];
educationSecoundUser.push(sdSecoundUser)
educationSecoundUser.push(smpSecoundUser)
educationSecoundUser.push(smaSecoundUser)
educationSecoundUser.push(univSecoundUser)

const restauranSecondUser = new Set()
restauranSecondUser.add("Tempe")
restauranSecondUser.add("Mendoan")
restauranSecondUser.add("KueRangi")
restauranSecondUser.add("NasiUduk")
restauranSecondUser.add("Tahu")
restauranSecondUser.add("Nasi")
restauranSecondUser.add("CangCimen")
restauranSecondUser.add("Rendang")
restauranSecondUser.add("Sushi")

const secondUser = {
    name: "wendy",
    gender: "Male",
    age: 23,
    emai: "wendy@dingdong.com",
    favoritColor: favoriteColorSecondUser,
    isHavetPet: convertBoolean(false),
    education: JSON.stringify(educationSecoundUser),
    favoriterestauran: ["Tempe", "Mendoan", "KurRangi","NasiUduk", "Tahu", "Nasi", "CangCimen", "Rendang"],
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
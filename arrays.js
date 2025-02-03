// ----- opgave 1 -----
function opgave1() {
    let loke = {
        firstname: "Loke",
        lastname: "Lunde",
        age: 23,
        city: "Copenhagen"
    }

    console.log("Opgave 1:", loke.firstname);
    console.log("Opgave 1:", loke.lastname);
    console.log("Opgave 1:", loke["age"]);
    console.log("Opgave 1:", loke["city"]);
}
opgave1()


// ----- opgave 2 -----
function opgave2() {
    let loke = {
        firstname: "Loke",
        lastname: "Lunde",
        age: 23,
        city: "Copenhagen",
        married: false,
        hobbies: ["Musik", "Spil", "Pokemon"],
        favoriteAlbum: {
            artist: "Bladee",
            album: "Red Light"
        }
    }

    console.log("Opgave 2:", loke.firstname);
    console.log("Opgave 2:", loke.lastname);
    console.log("Opgave 2:", loke["age"]);
    console.log("Opgave 2:", loke["city"]);
    console.log("Opgave 2:", loke["married"]);

    console.log("Opgave 2: favoriteAlbum:", loke.favoriteAlbum.artist);
    console.log("Opgave 2: favoriteAlbum:", loke.favoriteAlbum.album);

    loke.hobbies.forEach(hobby => {
        console.log("Opgave 2: hobbies:", hobby);
    });
}
opgave2()


// ----- opgave 3 -----
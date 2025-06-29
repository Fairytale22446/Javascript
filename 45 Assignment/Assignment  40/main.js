"use strict";
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        album: album_title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Atif Aslam", "Album title 1");
let album2 = make_album("Ali Azmat", "Album title 2", 10);
let album3 = make_album("Haroon", "Album title 3", 15);
console.log(album1);
console.log(album2);
console.log(album3);

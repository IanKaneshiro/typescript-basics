// // Different ways to annotate Objects
// function printName(person: { first: string; last: string }): void {
//   console.log(`${person.first} ${person.last}`);
// }
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
function doublePoint(point) {
    return { x: point.x * 2, y: point.y * 2 };
}
var number = "hello";
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12312321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
calculatePayout(mySong);
printSong(mySong);

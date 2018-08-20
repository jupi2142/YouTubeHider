var keywords = [
    'Like stories of old',
    'UFC',
    'Judo',
    'Martial',
    'Anime',
    'Comic',
    'MMA',
    'Jeet',
    'Wisecrack',
    'Commentar',
    'Karate',
    'Kyoku',
    'Jutsu',
    'Jitsu',
    'BJJ',
    'Grappling',
    'Sambo',
    'Morty',
    'Rick',
    'Gaming',
    'Gameplay',
    'Maher',
    'Fallout',
    'Half-Life',
    'Half Life',
    'Avenger',
    'Captain America',
    'Spider Man',
    'Spider-Man',
    'Hulk',
    'Thanos',
    'ironman',
    'iron man',
    'iron-man',
    'Thor',
    'DC comics',
    'Marvel',
    'Batman',
    'Superman',
    'Trailer',
    'Chomsky',
    'Gamer',
    'Athlean',
    'Gameranx',
    'PieDiePie',
    'Aikido',
    'PUBG',
    'KungFu',
    'Kung Fu',
    'Kung-Fu',
    'Game theor',
    'Film theor',
    'watchmojo',
    'potter',
    'Foundation for Economic Education',
    'Teen titans',
    'Peterson',
    'Muay',
    'fighttips',
    'tony stark',
    'bruice wayne',
    'fortnite',
    'overwatch',
    'Quantum',
    'Sam harris',
    'WWE',
    'Screenrant',
    'Star craft',
    'Starcraft',
    'Naruto',
    'Atheist',
    'SJW',
    'Steven Segal',
    'Big Bang Theory',
    'Zizek',
    'Ichigo',
    'gracie',
    'bible',
    'krav maga',
    'kravmaga',
    'Kombat',
].map(keyword => keyword.toLowerCase())

console.log("In page-eater.js");

function hider(element){
    console.log('Hider')
    var applicable_keywords = keywords.filter(
        keyword => element.innerText.toLowerCase().indexOf(keyword) != -1
    )
    if (applicable_keywords.length) {
        console.log('Keywords: ', applicable_keywords);
        console.log('Text:', element.innerText)
        element.style.display = 'none';
    }
}

Array.prototype.forEach.call(document.getElementsByTagName("ytd-compact-radio-renderer"), hider);
Array.prototype.forEach.call(document.getElementsByTagName("ytd-compact-video-renderer"), hider);
Array.prototype.forEach.call(document.getElementsByTagName("ytd-grid-video-renderer"), hider);
Array.prototype.forEach.call(document.getElementsByTagName("ytd-notification-renderer"), hider);
// Array.prototype.forEach.call(document.getElementsByTagName("ytd-shelf-renderer"), hider);
Array.prototype.forEach.call(document.getElementsByTagName("ytd-video-renderer"), hider);
Array.prototype.forEach.call(document.getElementsByTagName("ytd-radio-renderer"), hider);
Array.prototype.forEach.call(document.getElementsByTagName("ytd-channel-renderer"), hider);

var keywords = [
  'Like stories of old',
  'UFC',
  'Wing chun',
  'Wingchun',
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
  'steven segal',
  'steven seagal',
  'Shaolin',
  'pewdiepie',
  'silat',
  'quinn',
  'Tyson',
  'Ferris',
].map(keyword => keyword.toLowerCase());

var remover = (function(keywords) {
  return function(element) {
    var applicable_keywords = keywords.filter(
      keyword => element.innerText.toLowerCase().match(new RegExp('(^|\\s)'+keyword+'(\\s|$)', 'gi'))
    );
    if (applicable_keywords.length) {
      element.remove();
      try {
        console.log('Tag name: ', element.tagName);
      } catch (e) {
        console.log('Tag name: ', '#text');
      }
      console.log('Text: \n', Array.prototype.map.call(element.querySelectorAll('a[title]'), (a, index) => index+1 + '. ' + a.title).join('\n'));
      console.log('Keywords: ', applicable_keywords.join(', '));
      return 1;
    } else {
      return 0;
    }
  };
})(keywords);

var tag_names = [
  'ytd-compact-radio-renderer',
  'ytd-compact-video-renderer',
  'ytd-grid-video-renderer',
  'ytd-notification-renderer',
  'ytd-video-renderer',
  'ytd-radio-renderer',
  'ytd-channel-renderer',
  'ytd-shelf-renderer',
];

var eat = function() {
  // console.log('Wipe!')
  var element_count = 0;
  tag_names.map(function(tag_name) {
    var elements = document.getElementsByTagName(tag_name);
    element_count += Array.prototype.filter.call(elements, remover).length;
    if (element_count !== 0) {
        console.log('Elements eaten: ', element_count);
    }
  });
};

var targetNode = document.getElementsByTagName('body')[0];
eat();

var config = {childList: true, subtree: true};
// var config = { attributes: true, childList: true, subtree: true };

var callback = function(mutationsList) {
  for (var mutation of mutationsList) {
    for (var added_node of mutation.addedNodes) {
      try {
        if (tag_names.indexOf(added_node.tagName.toLowerCase()) != -1) {
          eat();
          return;
        }
      } catch (e) {
        // console.log('Exception: ', e, added_node);
      }
    }
  }
};

var observer = new MutationObserver(callback);

observer.observe(targetNode, config);

// Later, you can stop observing

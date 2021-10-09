const titulo = baffle('.nombre-producto',
 {
    characters: ' █▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
    speed: 350
}), h2 =  baffle('.tagline-producto',
{
   characters: ' █▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█ ░█▒/ ▒▓░ █<░▒ ▓/░>',
   speed: 350
});

titulo.start();
h2.start();
titulo.reveal(3000);
h2.reveal(3000);

var t1 = new TimelineMax({repeat : 2 , repeatDelay : 1 , yoyo : true});

t1.from(".imagen-header", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});

function regresa(){
    t1.reversed(!t1.reversed());
}


$( ".imagen-header" ).hover( regresa);


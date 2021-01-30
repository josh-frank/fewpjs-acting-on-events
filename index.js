// Your code here

let dodger = document.getElementById( "dodger" )
let playfield = document.getElementById( "game" )

document.addEventListener( "keydown", function( event ) {
    if ( event.key == "ArrowLeft" ) { moveDodgerLeft(); }
    if ( event.key == "ArrowRight" ) { moveDodgerRight(); }
    if ( event.key == "ArrowUp" ) { moveDodgerUp(); }
    if ( event.key == "ArrowDown" ) { moveDodgerDown(); }
} );

function moveDodgerLeft() {
    let currentPosition = parseInt( dodger.style.left.slice( 0,-2 ) );
    if ( currentPosition > 0 ) { dodger.style.left = `${ currentPosition - 5 }px`; }
}

function moveDodgerRight() {
    let currentPosition = parseInt( dodger.style.left.slice( 0,-2 ) );
    if ( currentPosition < 380 ) { dodger.style.left = `${ currentPosition + 5 }px`; }
}

function moveDodgerUp() {
    let currentPosition = parseInt( dodger.style.bottom.slice( 0,-2 ) );
    if ( currentPosition < 380 ) { dodger.style.bottom = `${ currentPosition + 5 }px`; }
}

function moveDodgerDown() {
    let currentPosition = parseInt( dodger.style.bottom.slice( 0,-2 ) );
    if ( currentPosition > 0 ) { dodger.style.bottom = `${ currentPosition - 5 }px`; }
}

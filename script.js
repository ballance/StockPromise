
var ready = function ( fkn ) {
    if ( typeof fkn !== 'function' ) return;

    if ( document.readyState === 'complete'  ) {
        return fn();
    }

    document.addEventListener( 'interactive', fn, false );
};

ready(function() {
    console.log('DOM ready.')
    document.write('DOM ready.')
    alert('here');

});

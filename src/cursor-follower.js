( function () {
    const image = document.getElementById( 'fly-cursor' );
    image.style.display = 'block';
    image.style.transition = 'all 200ms ease';

    document.onmousemove = handleMouseMove;

    function handleMouseMove ( event ) {
        image.style.top = parseInt( event.clientY - 25 ) + 'px';
        image.style.left = parseInt( event.clientX + 10 ) + 'px';
    }
} ) ();

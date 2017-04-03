<?php


$.getJSON( "http://ncx.cl/cmedica/public/ws/15.653.148-0/getPersonaByRut/",{})
    .done(function( data, textStatus, jqXHR ) {
        if ( console && console.log ) {
            console.log( "La solicitud se ha completado correctamente." );
        }
    })
    .fail(function( jqXHR, textStatus, errorThrown ) {
        if ( console && console.log ) {
            console.log( "Algo ha fallado: " +  textStatus" );
        }
});

?>
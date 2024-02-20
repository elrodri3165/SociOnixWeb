<?php

if(isset($_POST['name'], $_POST['email'])){
    $cuerpo = null;
    $to = "elrodri205@gmail.com";
    foreach ($_POST as $clave => $valor){
        $cuerpo .= $clave." ".$valor;
    }

    $result = mail(
        $to,
        "Consult por SociOnix",
        $cuerpo
    );

    if($result != false){
        echo 'Enviado correctamente!';
    }
}
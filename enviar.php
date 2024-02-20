<?php

if(isset($_POST['name'], $_POST['email'])){
    $cuerpo = null;
    $to = "elrodri205@gmail.com";
    foreach ($_POST as $clave => $valor){
        $cuerpo = $cuerpo.$clave." ".$valor.'<br>';
    }

    $result = mail(
        $to,
        "Consult por SociOnix",
        $cuerpo
    );

    if($result != false){
        echo json_encode('Enviado correctamente!');
    }else{
        echo json_encode('Error');
    }
}else{
    echo json_encode('Falto post');
}

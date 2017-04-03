
<?php
  define('METHOD', 'GET');
  define('ENDPOINT', 'http://localhost');
  define('RESOURCE', '/horafacil/public/ws/');
  define('WS_PERFIL', '/getPerfil');
  define('WS_CONSULTA_HORA', '/consultaHora');
  define('WS_RESERVA_HORA', '/reservaHora');
  define('WS_CANCELA_HORA', '/cancelaHora');

 if(isset($_REQUEST["action"])){
  // si llega la condicion, y es igual a la condicion que necesitas para entrar ejecuta la función y devuelve el resultado
  if($_REQUEST["action"] == "call_perfil" ){    
     //echo $_REQUEST["rut"];
     echo send($_REQUEST["rut"],
               $_REQUEST['ani'],
               $_REQUEST['dnis'],
               $_REQUEST['callid'],
               WS_PERFIL);
     exit();
  } elseif($_REQUEST["action"] == "call_consulta" ){
     echo send($_REQUEST["rut"],
               $_REQUEST['ani'],
               $_REQUEST['dnis'],
               $_REQUEST['callid'],
               WS_CONSULTA_HORA);
     exit();
  } elseif($_REQUEST["action"] == "call_reserva" ){
     echo send($_REQUEST["rut"],
               $_REQUEST['ani'],
               $_REQUEST['dnis'],
               $_REQUEST['callid'],
               WS_RESERVA_HORA);
     exit();
  } elseif($_REQUEST["action"] == "call_cancela" ){
     echo sendx($_REQUEST["idres"],
               $_REQUEST["rut"],
               $_REQUEST['ani'],
               $_REQUEST['dnis'],
               $_REQUEST['callid'],
               WS_CANCELA_HORA);
     exit();
  } else {
     echo "otra funcion o respuesta";
     // salimos de la pagina php y devolvemos la respuesta
     exit();
  }
}

function send($rut,$callOrigen,$callDestino,$callId,$ws){
    $value = $rut.'/'.$callOrigen.'/'.$callDestino.'/'.$callId.$ws;
    $json = CallAPI(METHOD,ENDPOINT.RESOURCE.$value, $data = false);
  return  $json;
}
function sendx($idReserva,$rut,$callOrigen,$callDestino,$callId,$ws){
    $value = $idReserva.'/'.$rut.'/'.$callOrigen.'/'.$callDestino.'/'.$callId.$ws;
    $json = CallAPI(METHOD,ENDPOINT.RESOURCE.$value, $data = false);
  return  $json;
}
  
// Method: POST, PUT, GET etc
// Data: array("param" => "value") ==> index.php?param=value

function CallAPI($method, $url, $data = false)
{
    $curl = curl_init();

    switch ($method)
    {
        case "POST":
            curl_setopt($curl, CURLOPT_POST, 1);
            if ($data)
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            break;
        case "PUT":
            curl_setopt($curl, CURLOPT_PUT, 1);
            break;
        default:
            if ($data)
                $url = sprintf("%s?%s", $url, http_build_query($data));
    }

    // Optional Authentication:
    curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
    curl_setopt($curl, CURLOPT_USERPWD, "username:password");

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    $result = curl_exec($curl);

    curl_close($curl);

    return $result;
}

?>




function callAjaxPerfil(prut){
    var txt,rut,callid,ani,dnis ;

    rut = $("#rut").val();
    callid = $("#callid").val();
    ani = $("#ani").val();
    dnis = $("#dnis").val();
    if (rut=="") { alert ("Debe ingresar un Rut");} 
    else if (callid==""){ alert ("Debe ingresar un id de llamada");} 
    else if (ani==""){ alert ("Debe ingresar un numero de origen");} 
    else if (dnis==""){ alert ("Debe ingresar un numero de destino");} 
    else {
      $.ajax({ url: 'ws1.php',type: 'POST',dataType: 'html',
        data: { action: "call_perfil",rut: rut,ani: ani,dnis: dnis,callid: callid},
        success:function(resultado){
         // imprime "resultado Funcion"
          var obj = JSON.parse(resultado);

           txt = "";
           txt = txt.concat("Validacion   : ".concat(obj.Validacion));
           txt = txt.concat("<br>Sector   : ".concat(obj.sector));
           txt = txt.concat("<br>Edad     : ".concat(obj.edad));
           txt = txt.concat("<br>Sexo     : ".concat(obj.sexo));
           txt = txt.concat("<br>Móvil    : ".concat(obj.numeroMovil));
           txt = txt.concat("<br>Estado_paciente     : ".concat(obj.estado_paciente));
           //$("#result").html(resultado);                      
           $("#result").html(txt);  
            //alert(txt);                    
        }
      });      
    }
  }

  function callAjaxConsulta(prut){
    var txt,rut,callid,ani,dnis ;

    rut = $("#rut").val();
    callid = $("#callid").val();
    ani = $("#ani").val();
    dnis = $("#dnis").val();
    if (rut=="") { alert ("Debe ingresar un Rut");} 
    else if (callid==""){ alert ("Debe ingresar un id de llamada");} 
    else if (ani==""){ alert ("Debe ingresar un numero de origen");} 
    else if (dnis==""){ alert ("Debe ingresar un numero de destino");} 
    else {
      $.ajax({ url: 'ws1.php',type: 'POST',dataType: 'html',
        data: { action: "call_consulta",rut: rut,ani: ani,dnis: dnis,callid: callid},
        success:function(resultado){
         // imprime "resultado Funcion"
         txt=resultado.replace(/,/gi,'<br>');
         txt=txt.replace(/{/gi,'{<br>');
         txt=txt.replace(/}/gi,'<br>}');
         alert (txt);
          var obj = JSON.parse(resultado);

           // txt = "";
           // txt = txt.concat("Validacion   : ".concat(obj.Validacion));
           // txt = txt.concat("<br>Sector   : ".concat(obj.sector));
           // txt = txt.concat("<br>Edad     : ".concat(obj.edad));
           // txt = txt.concat("<br>Sexo     : ".concat(obj.sexo));
           // txt = txt.concat("<br>Móvil    : ".concat(obj.numeroMovil));
           // txt = txt.concat("<br>Estado_paciente     : ".concat(obj.estado_paciente));
           $("#result").html(txt);                      
           //$("#result").html(txt);                      
        }
      });      
    }
  }

  function callAjaxReserva(prut){
    var txt,rut,callid,ani,dnis ;
    
    rut = $("#rut").val();
    callid = $("#callid").val();
    ani = $("#ani").val();
    dnis = $("#dnis").val();
    if (rut=="") { alert ("Debe ingresar un Rut");} 
    else if (ani==""){ alert ("Debe ingresar un numero de origen");} 
    else if (dnis==""){ alert ("Debe ingresar un numero de destino");} 
    else if (callid==""){ alert ("Debe ingresar un id de llamada");} 
    else {
      $.ajax({ url: 'ws1.php',type: 'POST',dataType: 'html',
        data: { action: "call_reserva",rut: rut,ani: ani,dnis: dnis,callid: callid},
        success:function(resultado){
         // imprime "resultado Funcion"
          var obj = JSON.parse(resultado);
           txt = "";
           txt = txt.concat("Validacion   : ".concat(obj.Validacion));
           txt = txt.concat("<br>Sector   : ".concat(obj.sector));
           txt = txt.concat("<br>Edad     : ".concat(obj.edad));
           txt = txt.concat("<br>Sexo     : ".concat(obj.sexo));
           txt = txt.concat("<br>Móvil    : ".concat(obj.numeroMovil));
           txt = txt.concat("<br>Estado_paciente     : ".concat(obj.estado_paciente));
           //$("#result").html(resultado);                      
           $("#result").html(txt);                      
        }
      });      
    }
  }
  function callAjaxCancela(prut){
    var txt,rut,callid,ani,dnis,idres;

    idres = $("#idres").val();
    rut = $("#rut").val();
    callid = $("#callid").val();
    ani = $("#ani").val();
    dnis = $("#dnis").val();
    if (rut=="") { alert ("Debe ingresar un Rut");} 
    else if (ani==""){ alert ("Debe ingresar un numero de origen");} 
    else if (dnis==""){ alert ("Debe ingresar un numero de destino");} 
    else if (callid==""){ alert ("Debe ingresar un id de llamada");} 
    else if (idres==""){ alert ("Debe ingresar el id de Reserva");} 
    else {
      $.ajax({ url: 'ws1.php',type: 'POST',dataType: 'html',
        data: { action: "call_cancela",idres: idres,rut: rut,ani: ani,dnis: dnis,callid: callid},
        success:function(resultado){
         // imprime "resultado Funcion"
          var obj = JSON.parse(resultado);
           // txt = "";
           // txt = txt.concat("Validacion   : ".concat(obj.Validacion));
           // txt = txt.concat("<br>Sector   : ".concat(obj.sector));
           // txt = txt.concat("<br>Edad     : ".concat(obj.edad));
           // txt = txt.concat("<br>Sexo     : ".concat(obj.sexo));
           // txt = txt.concat("<br>Móvil    : ".concat(obj.numeroMovil));
           // txt = txt.concat("<br>Estado_paciente     : ".concat(obj.estado_paciente));
           $("#result").html(resultado);                      
           //$("#result").html(txt);                     
        }
      });      
    }
  }

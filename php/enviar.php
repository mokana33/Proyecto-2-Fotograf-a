<?php 

ini_set('display_errors', 1);

/* 1- recoger datos y comprobar*/

$destino = $_POST["m.ansazafra@gmail.com"]; /*correo de admin */
$nombre = $_POST["nombre"]; /*correo de admin */
$correo = $_POST["correo"]; /*correo de admin */
$telefono = $_POST["telefono"]; /*correo de admin */
$mensaje = $_POST["mensaje"]; /*correo de admin */


/*datos que cogemos de su cliente*/
/*ip*/
$ip = $_SERVER['REMOTE_ADDR'];

/*datos que cogemos del sistema */
/*fecha */
$datetime = date("Y-m-d H:i:s");

/*mensaje concatenado para enviar por correo */
$contenido = "Fecha de envío: ".datetime."\nIP: ".$ip."\nNombre: ".$nombre."\nCorreo: ".$correo."\nTeléfono: ".$telefono."\nMensaje: ".$mensaje;

$cabecera = 'From: info@webda.eus'."\r\n".'Reply-To: info@webda.eus'."\r\n".'X-Mailer: PHP/'.phpversion();

/*9- enviar correos de confirmación */
mail($destino,"Consulta de la Web",$contenido,$cabecera); /*correo que recibo yo */

mail($correo,"Hemos recibido tu consulta",$contenido,$cabecera); /*correo que recibe el cliente */

/*10- redirigir a gracias.html y salir de aquí */
header("location:../index.html?enviado=correo enviado!");










?>
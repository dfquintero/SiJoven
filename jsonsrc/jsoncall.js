

function _popup(id) {

    if (confirm(this.id)) {
        localStorage.setItem("id", id);



    }
}

function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function seccionIMG(seccion) {

    switch (seccion) {
        case 1: img = '1ico_edu.png';
            break;
        case 2: img = '2ico_emp.png';
            break;
        case 3: img = '3ico_pre.png';
            break;
        case 4: img = '4ico_rec.png';
            break;
        case 5: img = '5ico_vol.png';
            break;
        case 6: img = '6ico_des.png';
            break;
    }


   
    return img;
}

function filterResults(categoria, elemento) {
    $.ajax({
<<<<<<< HEAD

        dataType: "json",
        //url: 'ofertasServicio.json',
        url: 'http://poi.colombiajoven.gov.co/api/oferta',
    }).done(function (data) {
        var items = [];

        //var info = sortByKey(data, 'OPORTUNIDAD');

        $.each(data, function (key, val) {


            if (val.FkSeccion == categoria) {
                var img = seccionIMG(val.FkSeccion)

                if (val.Oportunidad.length > 0) {
                   
                    items.push("<li ><a href='#" + elemento + "_" + val.PkOferta + "_' value =" + val.PkOferta + " data-rel='popup' ><img src='img/ico/" + img + "' style='margin:10px; height: 60px; width: 60px;' /> <h1>" + val.Oportunidad + "</h1> <p>" + val.EntidadNombre + " - " + val.PoblacionObjetivo + " </p></a></li>");

                    items.push("<div data-role='popup' id='" + val.PkOferta + "_' data-theme='b' style='top: 5%; left: 5%; right: 5%; width: 90%; height: 90%; position: fixed; overflow-y:auto; overflow-x:hidden; background-color:rgba(0, 0, 0, 1);'>");

                    items.push("<center><img src='img/ico/" + img + "' style='max-width:25%; margin:5% 1px; ' /></center>");

                    items.push("<h2 style='text-wrap:normal; text-align:center'>" + val.Oportunidad + "</h2>");

                    items.push("<div data-role='collapsible-set' data-mini='true' class='ui-nodisc-icon ui-alt-icon' data-theme='a' style='width: 90%; margin-left:5%; margin-right:5%;'>");

                    items.push("<div data-role='collapsible' data-collapsed='false'>");
                    items.push("<h3>Información</h3>");
                    items.push("<p style='text-wrap:normal; text-align:center'><b>" + val.Seccion + "</b></p>");
                    items.push("<p style='text-wrap:normal; text-align:justify'>" + val.Informacion + "</p>");
                    items.push("</div>");

                    items.push("<div data-role='collapsible'>");
                    items.push("<h3>Entidad</h3>");
                    items.push("<p style='text-wrap:normal'><b>Nombre: </b>" + val.EntidadNombre + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Contacto: </b>" + val.Contacto + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Web: </b>" + val.EntidadUrl + "</p>");
                    items.push("</div>");

                    items.push("<div data-role='collapsible'>");
                    items.push("<h3>Requisitos</h3>");
                    items.push("<p style='text-wrap:normal; text-align:justify'>" + val.Requisitos + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Población Objetivo: </b>" + val.Requisitos + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Edad: </b>" + val.EdadMinima + " - " + val.EdadMaxima + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Fecha Inicio: </b>" + val.FechaInicio + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Fecha Fin: </b>" + val.FechaFin + "</p>");
                    items.push("</div>");
=======

        dataType: "json",
        //url: 'ofertasServicio.json',
        url: 'http://poi.colombiajoven.gov.co/api/oferta',
    }).done(function (data) {
        var items = [];

        //var info = sortByKey(data, 'OPORTUNIDAD');

        $.each(data, function (key, val) {


            if (val.FkSeccion == categoria) {
                var img = seccionIMG(val.FkSeccion)

                if (val.Oportunidad.length > 0) {
                   
                    items.push("<li ><a href='#" + elemento + "_" + val.PkOferta + "_' value =" + val.PkOferta + " data-rel='popup' ><img src='img/ico/" + img + "' style='margin:10px; height: 60px; width: 60px;' /> <h1>" + val.Oportunidad + "</h1> <p>" + val.EntidadNombre + " - " + val.PoblacionObjetivo + " </p></a></li>");

                    items.push(" <div data-role='popup' style ='position: fixed; position: fixed; top: 10px;left: 10%;right: 10%;width: 80%;' id='" + elemento + "_" + val.PkOferta + "_'>");
                    items.push("<center>");
                    items.push("<div data-role='header'>");
                    items.push(" <div data-role='navbar'>");
                    items.push(" <ul>");
                    items.push(" <li><a href='#' data-icon='user'></a></li>");
                    items.push(" <li><a href='#' data-icon='clock'></a></li>");
                    items.push(" <li><a href='#' data-icon='info'></a></li>");
                    items.push(" <li><a href='#popupcloseright' data-icon='delete'></a></li>");
                    items.push(" </ul>");
                    items.push(" </div>");
                    items.push(" </div>");
                    items.push(" <div data-role='content' id='popUpContent'>");
                    items.push(" <center>");
                    items.push(" <img src='img/ico/" + img + "' style=' max-height:80px' />");
                    items.push("</center>");
                    items.push("<h2 style='text-align:center; text-overflow: ellipsis;width: 200px;'>" + val.Oportunidad + "</h2>");
                    items.push("<p  style='text-align:justify; text-overflow: ellipsis; width: 200px; '>" + val.Informacion + "</p>");
                    items.push("</div>");
                    items.push("<div data-role='footer'>");
                    items.push("<div class='ui-grid-a'>");
                    items.push("<div class='ui-block-a' style='text-align: center; background-color:#55ACEE '>");
                    var twurl = "https://twitter.com/intent/tweet?text=";
                    items.push("<a href='" + twurl + val.Oportunidad + " " + val.UrlFuente + "' target='_blank'><img src='img/RS/twitter.png' style='max-height: 20px; padding: 5px; margin: 5px 5px;' /></a>");
                    items.push("</div>");
                    items.push("<div class='ui-block-b' style='text-align: center; background-color: #3b5998'>");

                    var fburl = "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=";
                    items.push("<a href='" + fburl + val.UrlFuente + "' target='_blank'><img src='img/RS/facebook.png' style='max-height: 20px; padding: 5px;  margin: 5px 5px;' /></a>");
                    items.push("</div>");
                    items.push("</div>");
                    items.push("<div class='ui-grid-b' style='text-align: center; background-color: #008511'>");
                    items.push("<h3 style='text-align:center; color:white'>");
                    items.push("<a style='text-decoration:none; color: white;' href='" + val.UrlFuente + "' target='_blank'>¡PARTICIPAR!</a>");
                    items.push("</h3>");
                    items.push("</div>");
                    items.push("</div>");
                    items.push("</center>");
                    items.push("</div>")
                }
            }
>>>>>>> origin/master

                    items.push("<div data-role='collapsible'>");
                    items.push("<h3>Ubicación</h3>");
                    items.push("<p style='text-wrap:normal'><b>País: </b>" + val.FkPais + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Región: </b>" + val.FkRegion + "</p>");
                    items.push("<p style='text-wrap:normal'><b>Ciudad: </b>" + val.FkCiudad + "</p>");
                    items.push("</div>");

                    items.push("</div>");

<<<<<<< HEAD

                    items.push("<div data-role='navbar' class='ui-nodisc-icon' style='margin:1% 5%;'>");
                    items.push("<ul data-mini='true'>");
                    items.push("<li><a href='" + val.UrlFuente + "'data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(0, 128, 0, 0.80); ' data-icon='check'>Ir A</a></li>"); ''
                    items.push("<li><a href='#' data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(0, 148, 255, 0.80); ' data-icon='comment' onclick='window.plugins.socialsharing.share('" + val.Oportunidad + "', null, null, '" + val.UrlFuente + "')'>Compartir</a></li>");
                    items.push("<li><a href='#' data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(139, 0, 0, 0.80); ' data-icon='delete' data-rel='back'>Cerrar</a></li>");
                    items.push("</ul>");
                    items.push("</div>");
                    items.push("</div>");
                    items.push("</div>");
                }
            }



=======
>>>>>>> origin/master
        });
        var container = document.getElementById(elemento)
        $("<ul/>", {
            "id": "eventList" + elemento, "data-role": "listview", "data-inset": "true", "data-filter": "true",
            html: items.join("")
        }).appendTo(container);
    });
}


function allResults(elemento) {
    $.ajax({
<<<<<<< HEAD

        dataType: "json",
        url: 'ofertasServicio.json',
        //url: 'http://poi.colombiajoven.gov.co/api/oferta',
    }).done(function (data) {
        var items = [];

        //var info = sortByKey(data, 'OPORTUNIDAD');

=======

        dataType: "json",
        //url: 'ofertasServicio.json',
        url: 'http://poi.colombiajoven.gov.co/api/oferta',
    }).done(function (data) {
        var items = [];

        //var info = sortByKey(data, 'OPORTUNIDAD');

>>>>>>> origin/master
        $.each(data, function (key, val) {
            var img = seccionIMG(val.FkSeccion)

            if (val.Oportunidad.length > 0) {
               
                items.push("<li ><a href='#" + val.PkOferta + "_' value =" + val.PkOferta + " data-rel='popup' ><img src='img/ico/" + img + "' style='margin:10px; height: 60px; width: 60px;' /> <h1>" + val.Oportunidad + "</h1> <p>" + val.EntidadNombre + " - " + val.PoblacionObjetivo + " </p></a></li>");

<<<<<<< HEAD
                items.push("<div data-role='popup' id='" + val.PkOferta + "_' data-theme='b' style='top: 5%; left: 5%; right: 5%; width: 90%; height: 90%; position: fixed; overflow-y:auto; overflow-x:hidden; background-color:rgba(0, 0, 0, 0.80);'>");

                items.push("<center><img src='img/ico/" + img + "' style='max-width:25%; margin:5% 1px; ' /></center>");

                items.push("<h2 style='text-wrap:normal; text-align:center'>" + val.Oportunidad + "</h2>");

                items.push("<div data-role='collapsible-set' data-mini='true' class='ui-nodisc-icon ui-alt-icon' data-theme='a' style='width: 90%; margin-left:5%; margin-right:5%;'>");

                items.push("<div data-role='collapsible' data-collapsed='false'>");
                items.push("<h3>Información</h3>");
                items.push("<p style='text-wrap:normal; text-align:center'><b>" + val.Seccion + "</b></p>");
                items.push("<p style='text-wrap:normal; text-align:justify'>" + val.Informacion + "</p>");
                items.push("</div>");
                
                items.push("<div data-role='collapsible'>");
                items.push("<h3>Entidad</h3>");
                items.push("<p style='text-wrap:normal'><b>Nombre: </b>" + val.EntidadNombre + "</p>");
                items.push("<p style='text-wrap:normal'><b>Contacto: </b>" + val.Contacto + "</p>");
                items.push("<p style='text-wrap:normal'><b>Web: </b>" + val.EntidadUrl + "</p>");
                items.push("</div>");

                items.push("<div data-role='collapsible'>");
                items.push("<h3>Requisitos</h3>");
                items.push("<p style='text-wrap:normal; text-align:justify'>" + val.Requisitos + "</p>");
                items.push("<p style='text-wrap:normal'><b>Población Objetivo: </b>" + val.Requisitos + "</p>");
                items.push("<p style='text-wrap:normal'><b>Edad: </b>" + val.EdadMinima + " - " + val.EdadMaxima + "</p>");
                items.push("<p style='text-wrap:normal'><b>Fecha Inicio: </b>" + val.FechaInicio + "</p>");
                items.push("<p style='text-wrap:normal'><b>Fecha Fin: </b>" + val.FechaFin + "</p>");
                items.push("</div>");

                items.push("<div data-role='collapsible'>");
                items.push("<h3>Ubicación</h3>");
                items.push("<p style='text-wrap:normal'><b>País: </b>" + val.FkPais + "</p>");
                items.push("<p style='text-wrap:normal'><b>Región: </b>" + val.FkRegion + "</p>");
                items.push("<p style='text-wrap:normal'><b>Ciudad: </b>" + val.FkCiudad + "</p>");
                items.push("</div>");
                
                items.push("</div>");
                

                items.push("<div data-role='navbar' class='ui-nodisc-icon' style='margin:1% 5%;'>");
                items.push("<ul data-mini='true'>");
                items.push("<li><a href='" + val.UrlFuente + "'data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(0, 128, 0, 0.80); ' data-icon='check'>Ir A</a></li>"); ''
                items.push("<li><a href='#' data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(0, 148, 255, 0.80); ' data-icon='comment' onclick='window.plugins.socialsharing.share('" + val.Oportunidad + "', null, null, '" + val.UrlFuente + "')'>Compartir</a></li>");
                items.push("<li><a href='#' data-theme='b' style='border: none; margin: 1px 5%; background-color: rgba(139, 0, 0, 0.80); ' data-icon='delete' data-rel='back'>Cerrar</a></li>");
                items.push("</ul>");
                items.push("</div>");
                items.push("</div>");
                items.push("</div>");
                
=======
                items.push(" <div data-role='popup' style ='position: fixed; position: fixed; top: 10px;left: 10%;right: 10%;width: 80%; max-height: 90%' id='" + val.PkOferta + "_'>");
                items.push("<center>");
                items.push("<div data-role='header' data-theme='b'>");
                items.push(" <div data-role='navbar'>");
                items.push(" <ul class='ui-nodisc-icon'>");
                items.push(" <li><a href='#' data-icon='user'></a></li>");
                items.push(" <li><a href='#' data-icon='clock'></a></li>");
                items.push(" <li><a href='#' data-icon='info'></a></li>");
                items.push(" <li style ='background-color: darkred;'><a href='#popupcloseright' data-icon='delete' style ='background-color: darkred;'></a></li>");
                items.push(" </ul>");
                items.push(" </div>");
                items.push(" </div>");
                items.push(" <div data-role='content' id='popUpContent'>");
                items.push(" <center>");
                items.push(" <img src='img/ico/" + img + "' style=' max-height:80px' />");
                items.push("</center>");
                items.push("<h2 style='text-align:center; '>" + val.Oportunidad + "</h2>");
                items.push("<p  style='text-align:justify; '>" + val.Informacion + "</p>");
                items.push("</div>");
                items.push("<div data-role='footer'>");
                //items.push("<div class='ui-grid-a'>");
                //items.push("<div class='ui-block-a' style='text-align: center; background-color:#55ACEE '>");
                //var twurl = "https://twitter.com/intent/tweet?text=";
                //items.push("<a href='" + twurl + val.Oportunidad + " " + val.UrlFuente + "' target='_blank'><img src='img/RS/twitter.png' style='max-height: 20px; padding: 5px; margin: 5px 5px;' /></a>");
                //items.push("</div>");
                //items.push("<div class='ui-block-b' style='text-align: center; background-color: #3b5998'>");
                //var fburl = "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=";
                //items.push("<a href='" + fburl + val.UrlFuente + "' target='_blank'><img src='img/RS/facebook.png' style='max-height: 20px; padding: 5px;  margin: 5px 5px;' /></a>");
                //items.push("</div>");
                //items.push("</div>");
                //items.push("<div class='ui-grid-b' style='text-align: center; background-color: #008511'>");
                //items.push("<h3 style='text-align:center; color:white'>");
                //items.push("<a style='text-decoration:none; color: white;' href='" + val.UrlFuente + "' target='_blank'>¡PARTICIPAR!</a>");
                //items.push("</h3>");
                //items.push("</div>");
                items.push("</div>");
                items.push("</div>")
>>>>>>> origin/master
            }




        });
        var container = document.getElementById(elemento)
        $("<ul/>", {
            "id": "eventList" + elemento, "data-role": "listview", "data-inset": "true", "data-filter": "true",
            html: items.join("")
        }).appendTo(container);
    });
}


//$.ajax({

//    dataType: "json",
//    url:'ofertasServicio.json',
//   // url: 'http://poi.colombiajoven.gov.co/api/oferta',
//}).done(function (data) {
//    var items = [];

//    //var info = sortByKey(data, 'OPORTUNIDAD');
//    //console.log("sort")
//    $.each(data, function (key, val) {

//        var img = 'ico_300.png';
//        console.log("each");
//        console.log(val.Seccion);
//        switch (val.Seccion) {

//            case 'Aprende y Crece': img = '1ico_edu.png';
//                break;
//            case 'Descubre y trabaja': img = '2ico_emp.png';
//                break;
//            case 'Cuídate y Denuncia': img = '3ico_pre.png';
//                break;
//            case 'Diviértete y Disfruta': img = '4ico_rec.png';
//                break;
//            case 'Involúcrate y Ayuda': img = '5ico_vol.png';
//                break;
//            case 'Anímate y Participa': img = '6ico_des.png';
//                break;


//        }
//        console.log(val.Oportunidad);
//        if (val.Oportunidad.length > 0) {
//            console.log("push");
//            items.push("<li ><a href='#" + val.PkOferta + "_' value =" + val.PkOferta + " data-rel='popup' ><img src='img/ico/" + img + "' style='margin:10px; height: 60px; width: 60px;' /> <h1>" + val.Oportunidad + "</h1> <p>" + val.EntidadNombre + " - " + val.PoblacionObjetivo + " </p></a></li>");

//            items.push(" <div data-role='popup' id='" + val.PkOferta + "_'>");
//            items.push("<center>");
//            items.push("<div data-role='header'>");
//            items.push(" <div data-role='navbar'>");
//            items.push(" <ul>");
//            items.push(" <li><a href='#' data-icon='user'></a></li>");
//            items.push(" <li><a href='#' data-icon='clock'></a></li>");
//            items.push(" <li><a href='#' data-icon='info'></a></li>");
//            items.push(" <li><a href='#popupcloseright' data-icon='delete'></a></li>");
//            items.push(" </ul>");
//            items.push(" </div>");
//            items.push(" </div>");
//            items.push(" <div data-role='content' id='popUpContent'>");
//            items.push(" <center>");
//            items.push(" <img src='img/ico/" + img + "' style=' max-height:80px' />");
//            items.push("</center>");
//            items.push("<h2 style='text-align:center; text-overflow: ellipsis;width: 200px;'>" + val.Oportunidad + "</h2>");
//            items.push("<p  style='text-align:justify; text-overflow: ellipsis; width: 200px; '>" + val.Informacion + "</p>");
//            items.push("</div>");
//            items.push("<div data-role='footer'>");
//            items.push("<div class='ui-grid-a'>");
//            items.push("<div class='ui-block-a' style='text-align: center; background-color:#55ACEE '>");
//            var twurl = "https://twitter.com/intent/tweet?text=";
//            items.push("<a href='" + twurl + val.Oportunidad + " " + val.UrlFuente + "' target='_blank'><img src='img/RS/twitter.png' style='max-height: 20px; padding: 5px; margin: 5px 5px;' /></a>");
//            items.push("</div>");
//            items.push("<div class='ui-block-b' style='text-align: center; background-color: #3b5998'>");

//            var fburl = "https://www.facebook.com/sharer/sharer.php?s=100&p[url]=";
//            items.push("<a href='" + fburl + val.UrlFuente + "' target='_blank'><img src='img/RS/facebook.png' style='max-height: 20px; padding: 5px;  margin: 5px 5px;' /></a>");
//            items.push("</div>");
//            items.push("</div>");
//            items.push("<div class='ui-grid-b' style='text-align: center; background-color: #008511'>");
//            items.push("<h3 style='text-align:center; color:white'>");
//            items.push("<a style='text-decoration:none; color: white;' href='" + val.UrlFuente + "' target='_blank'>¡PARTICIPAR!</a>");
//            items.push("</h3>");
//            items.push("</div>");
//            items.push("</div>");
//            items.push("</center>");
//            items.push("</div>")
//        }
//    });
//    var container = document.getElementById("allContent")
//    $("<ul/>", {
//        "id": "eventList", "data-role": "listview", "data-inset": "true", "data-filter": "true",
//        html: items.join("")
//    }).appendTo(container);
//});

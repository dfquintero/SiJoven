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
    console.log("seccion img")
    switch (seccion) {

        case 'Aprende y Crece': img = '1ico_edu.png';
            break;
        case 'Descubre y Trabaja': img = '2ico_emp.png';
            break;
        case 'Cuídate y Denuncia': img = '3ico_pre.png';
            break;
        case 'Diviértete y Disfruta': img = '4ico_rec.png';
            break;
        case 'Involúcrate y Ayuda': img = '5ico_vol.png';
            break;
        case 'Anímate y Participa': img = '6ico_des.png';
            break;


    }
    return img;
}

function allResults(elemento) {
    $.ajax({    
        dataType: "json",
        url: 'ofertasServicio.json',
        //url: 'http://poi.colombiajoven.gov.co/api/oferta',
    }).done(function (data) {
        var items = [];

        var info = sortByKey(data, 'OPORTUNIDAD');

        $.each(data, function (key, val) {
            var img = seccionIMG(val.Seccion)

            if (val.Oportunidad.length > 0) {
                console.log("push");

                items.push("<li ><a href='#" + elemento + "_" + val.PkOferta + "_' value =" + val.PkOferta + " data-rel='popup' ><img src='img/ico/" + img + "' style='margin:10px; height: 60px; width: 60px;' /> <h1>" + val.Oportunidad + "</h1> <p>" + val.EntidadNombre + " - " + val.PoblacionObjetivo + " </p></a></li>");
                
                items.push("<div data-role='popup' style='position:fixed; top: 10px;left: 10%;right: 10%;width: 80%;height:85%;id='" + val.PkOferta + "_'>");
                items.push("");
                items.push("<a class='ui-btn ui-corner-all ui-shadow ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right' href='#' data-rel='back' style='background-color:red'/>");
                items.push("<div data-role='content' data-theme='b' style='height:85%; overflow:auto'>");
                items.push("<center><img src='img/ico/" + img + "' style='max-width:30%'/></center>");
                items.push("<h2 style='text-wrap:normal; text-align:center'>" + val.Oportunidad+"</h2>");
                items.push("<div data-role='collapsible-set' data-theme='a' data-mini='true' class='ui-alt-icon ui-nodisc-icon'>");
                items.push("<div data-role='collapsible'>");
                items.push("<h3>Información</h3>");
                items.push("<p style='text-wrap:normal'>"+val.Informacion+"</p>");
                items.push("</div");

                items.push("<div data-role='collapsible'>");
                items.push("<h3>Requisitos</h3>");
                items.push("<p style='text-wrap:normal'>" + val.Informacion + "</p>");
                items.push("</div");

                items.push("");
                items.push("");
                items.push("");
                items.push("");
                items.push("");


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
                items.push("</div>");
                items.push("</div>")
            }




        });
        var container = document.getElementById(elemento)
        $("<ul/>", {
            "id": "eventList" + elemento, "data-role": "listview", "data-inset": "true", "data-filter": "true",
            html: items.join("")
        }).appendTo(container);
    });
}
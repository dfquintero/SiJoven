
    function Paises() {
        console.log("Pais");
        $.ajax({

            dataType: "json",
            //url: 'ofertasServicio.json',
            url: 'http://poi.colombiajoven.gov.co/api/pais',
        }).done(function (data) {
            var items = [];

            //var info = sortByKey(data, 'OPORTUNIDAD');
          
            $.each(data, function (key, val) {
                
                if (val.Nombre.length > 0) {
                    
                    items.push("<option value='" + val.CodigoNuemrico + "'>" + val.Nombre + " </option>");
                }
            });
         
            var container = document.getElementById("selectmenu4-button");
            $("<select/>", {
                "id": "selectmenu4", "data-mini": "true",
                html: items.join("")
            }).appendTo(container);

            console.log(container);
            
        });
        console.log("Fin Pais");
        
    }


    function Departamentos() {
        $.ajax({

            dataType: "json",
            //url: 'ofertasServicio.json',
            url: 'http://poi.colombiajoven.gov.co/api/departamento',
        }).done(function (data) {
            var items = [];

            //var info = sortByKey(data, 'OPORTUNIDAD');

            $.each(data, function (key, val) {
                if (val.CodigoPais == "CO") {

                    if (val.Nombre.length > 0) {

                        items.push("<option value='" + val.CodigoNuemrico + "'>" + val.Nombre + " </option>");
                    }
                }
            });

            var container = document.getElementById("selectmenu7-button");
            $("<select/>", {
                "id": "selectmenu7", "data-mini": "true",
                html: items.join("")
            }).appendTo(container);

            

        });
       

    }

    function Ciudades() {
        $.ajax({

            dataType: "json",
            //url: 'ofertasServicio.json',
            url: 'http://poi.colombiajoven.gov.co/api/departamento',
        }).done(function (data) {
            var items = [];

            //var info = sortByKey(data, 'OPORTUNIDAD');

            $.each(data, function (key, val) {
                if (val.CodigoPais == "CO") {
                    if (val.Nombre.length > 0) {

                        items.push("<option value='" + val.CodigoNuemrico + "'>" + val.Nombre + " </option>");
                    }
                }
               
            });

            var container = document.getElementById("selectmenu8-button");
            $("<select/>", {
                "id": "selectmenu8", "data-mini": "true",
                html: items.join("")
            }).appendTo(container);



        });


    }

 function toggle_visibility(id) {
     var e = document.getElementById(id);
     console.log(e);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
 }







$.ajax({
    dataType: "json",
    url: 'http://poi.colombiajoven.gov.co/api/oferta',
}).done(function (data) {
   
    var info = [];
    var user = 0, edu = 0, emp = 0, pre = 0, rec = 0,  vol = 0, des = 0, all = 0;

    $.each(data, function (key, val) {
         
        var img = '/img/ico/ico_300.png'

        switch (val.Seccion) {
            case '_***_': user++;
                break;
            case 'Aprende y Crece': edu++;
                break;
            case 'Descubre y trabaja': emp++;
                break;
            case 'Convocatorias': pre++;
                break;
            case 'Prevención': rec++;
                break;
            case 'Cultura, Recreación y tiempo libre': vol++;
                break;
            case 'Desarrollo y Voluntariado': des++;
                break;
        }
        all = edu + emp + pre + rec + vol + des;
    });
    
    $("#seccionUser").text(user);
    $("#seccionAll").text(all);
    $("#seccionEdu").text(edu);
    $("#seccionEmp").text(emp);
    $("#seccionPre").text(pre);
    $("#seccionRec").text(rec);
    $("#seccionVol").text(vol);
    $("#seccionDes").text(des);
});

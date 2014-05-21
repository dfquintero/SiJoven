$.ajax({
    dataType: "json",
    url: 'http://poi.colombiajoven.gov.co/api/oferta',
}).done(function (data) {
   
    var info = [];
    var user = 0, edu = 0, emp = 0, pre = 0, rec = 0,  vol = 0, des = 0, all = 0;

    $.each(data, function (key, val) {
         
        var img = '/img/ico/ico_300.png'

        switch (val.FkSeccion) {
            case '_***_': user++;
                break;
            case '1': edu++;
                break;
            case '2': emp++;
                break;
            case '3': pre++;
                break;
            case '4': rec++;
                break;
            case '5': vol++;
                break;
            case '6': des++;
                break;
        }
        all = edu + emp + pre + rec + vol + des;
    });
    
    $("#CountUser").text(user);
    $("#CountAll").text(all);
    $("#CountEdu").text(edu);
    $("#CountEmp").text(emp);
    $("#CountPre").text(pre);
    $("#CountRec").text(rec);
    $("#CountVol").text(vol);
    $("#CountDes").text(des);
});

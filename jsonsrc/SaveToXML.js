var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var FILENAME = 'Data.xml';


$('form').submit(function( ev ){
    ev.preventDefault(); //I keep form from submitting
    $( xmlDocument ).find('Person').attr({
        username: $("input[name=usrname]"),
            password: $("input[name=pswd]"),
            //and so on
            });

});

function SaveXML(UserData) {
    var file = fso.CreateTextFile(FILENAME, true);
    file.WriteLine('<?xml version="1.0" encoding="utf-8"?>\n');
    file.WriteLine('<PersonInfo>\n');

    for (countr = 0; countr < UserData.length; countr++) {
        file.Write('    <Info ');
        file.Write('Aprende="' + UserData[countr][0] + '" ');
        file.Write('Descubre="' + UserData[countr][1] + '" ');
        file.Write('Cuidate="' + UserData[countr][2] + '" ');
        file.Write('Diviertete="' + UserData[countr][3] + '" ');
        file.Write('Involucrate="' + UserData[countr][4] + '" ');
        file.Write('Animate="' + UserData[countr][5] + '" ');
        file.Write('Edad="' + UserData[countr][6] + '" ');
        file.Write('Ubicacion="' + UserData[countr][7] + '"');
        file.Write('Pais="' + UserData[countr][8] + '"');
        file.Write('Departamento="' + UserData[countr][9] + '"');
        file.Write('Ciudad="' + UserData[countr][10] + '"');
        file.WriteLine('></Info>\n');
    } // end for countr

    file.WriteLine('</PersonInfo>\n');
    file.Close();

} // end SaveXML function --------------------

//function LoadXML(xmlFile) {
//    xmlDoc.load(xmlFile);
//    return xmlDoc.documentElement;
//} //end function LoadXML()

//function initialize_array() {
//    var person = new Array();
//    var noFile = true;
//    var xmlObj;
//    if (fso.FileExists(FILENAME)) {
//        xmlObj = LoadXML(FILENAME);
//        noFile = false;
//    } // if
//    else {
//        xmlObj = LoadXML("Data.xml");
//        //alert("local" + xmlObj);
//    } // end if

//    var usrCount = 0;
//    while (usrCount < xmlObj.childNodes.length) {
//        var tmpUsrs = new Array(xmlObj.childNodes(usrCount).getAttribute("Usrname"),
//                                xmlObj.childNodes(usrCount).getAttribute("Pswd"),
//                    xmlObj.childNodes(usrCount).getAttribute("PersonID"),
//                                xmlObj.childNodes(usrCount).getAttribute("FirstName"),
//                                xmlObj.childNodes(usrCount).getAttribute("LastName"),
//                                xmlObj.childNodes(usrCount).getAttribute("Gender"),
//                                xmlObj.childNodes(usrCount).getAttribute("DOB"),
//                                xmlObj.childNodes(usrCount).getAttribute("Title"));
//        person.push(tmpUsrs);
//        usrCount++;
//    }   //end while
//    if (noFile == false)
//        fso.DeleteFile(FILENAME);
//    SaveXML(person);
//}   
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}


function ToJavaScriptDate(value) {
    var pattern = /Date\(([^)]+)\)/;
    var results = pattern.exec(value);
    var dt = new Date(parseFloat(results[1]));
    return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
}

function ToJsonDate(value) {

    var result = '';

    if (value != '') {
        var from = value.split('/');
        result = (from[2] - 543) + '-' + from[1] + '-' + from[0];
    }
    return result;
}

function ToJsonDate2(value) {
    if (value != null) {
        var result = '';

        if (value != '') {
            var from = value.split('/');
            result = (from[2]) + '-' + from[1] + '-' + from[0];
        }
    }
    return result;
}

function ToJsonDate3(value) {
    if (value != null) {
        var result = '';

        if (value != '') {
            var from = value.split('/');
            var from1 = from[2].split(' ');
            result = (from1[0]) + '-' + from[1] + '-' + from[0] + ' ' +  from1[1];
        }
    }
    return result;
}

function formatFullDate(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0, 10);
        var from = res.split('/');
        result = from[0] + "/" + from[1] + "/" + (parseInt(from[2]) + 543).toString() + ' ' + strTime;
    }
    return result + strTime;
}

function formatShortDate(date) {
    var result = '';
    if (date != null & date != '') {
        var from = date.split('-');
        result = from[2] + "/" + from[1] + "/" + from[0]
    }
    return result;
}

function formatDate(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0, 10);
        var from = res.split('-');
        result = from[2] + "/" + from[1] + "/" + (parseInt(from[0]) + 543).toString();
    }
    return result;
}


function formatDate2(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0, 10);
        var from = res.split('/');
        if (from.length == 3) {
            var d = new Date();
            var n = d.getFullYear();

            if (from[0].length == 1)
                from[0] = "0" + from[0]

            if (from[1].length == 1)
                from[1] = "0" + from[1]

            if (parseInt(from[2]) > (n + 443) && parseInt(from[1]) < 13 && parseInt(from[0]) < 31)
                result = from[0] + "/" + from[1] + "/" + from[2];
        }
    }
    return result;
}

function formatDate3(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0,date.length);
        var from = res.split('/');
        result = from[0] + "/" + from[1] + "/" + from[2]
    }
    return result;
}

function formatDate4(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0, 10);
        var from = res.split('/');
        result = from[0] + "/" + from[1] + "/" + (parseInt(from[2]) + 543).toString();
    }
    return result;
}

function formatDate5(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0, 10);
        var from = res.split('-');
        result = from[2] + "/" + from[1] + "/" + (parseInt(from[0]) ).toString();
    }
    return result;
}

function formatDate6(date) {
    var result = '';
    if (date != null & date != '') {
        var res = date.substring(0, 10);
        var from = res.split('/');
        result = from[0] + "/" + from[1] + "/" + (parseInt(from[2]) + 543).toString();
        var tis = date.substring(11, date.length - 1);
        result = result + ' ' + tis;
    }
    return result;
}

function gethourminute(date, type) {
    var result = '';
    if (date != null & date != '') {
        var time = date.substring(10, date.length).trim();
        var from = time.split(':');
        if (type == '1')
            result = from[0]
        else if (type == '2')
        result = from[1]
    }
    return result;
}

function GetDatetimeNow() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    var todayre = formatDate5(today);
    return todayre
}

function clearnotifications()
{ $('#noto').css("display", "none"); }

function vinotifications(txt, typ) {
    //danger //success //info //waring
    $.notify({ message: txt }, { type: typ });
}


function AFormatNumber(value, digit) {
    var myval = '';

    if (value != undefined && value != null && value !== '') {
        myval = value.toString();
        myval = myval.replace(/,/g, '');
        myval = Number(parseFloat(myval).toFixed(2)).toLocaleString('en', {
            minimumFractionDigits: digit
        });
    }

    return myval
}

function ConvertToDecimal(value)
{
    var val = ''
    if (value != undefined && value != null && value !== '') {
        val = value.toString();
        val = val.replace(/,/g, '');
        val = parseFloat(val);
    }
    return val;
}



function getFileExtension(filename) {
    return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function findchildnodesreturnvalue(elechildNodes, eleid) {
    var childNodes = elechildNodes,
        children = [],
        i = childNodes.length,
        id = '';

    while (i--) {
        if (childNodes[i].id == eleid) {
            id = childNodes[i].value;
        }
    }

    return id;
}
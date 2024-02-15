var a=+prompt('enter value 1')
var b=+prompt('enter value 2')

var add = a+b
var sub = a-b
var mul = a*b
var div = a/b


    document.write(
    '<br><br><br><center><table border=8px width=8% align=center cellpadding=3px  bgcolor=black color=white >'+
    '<tr bgcolor=darkred>'+
    '<th >'+'Addition'+'</th>'+ '<th>'+'Subtraction'+'</th>'+ '<th>'+'Multiplication'+'</th>'+ '<th>'+'Division'+'</th>'+
    '</tr>'+
    '<tr bgcolor=lightgreen height=80px>'+
    '<td>'+add+'</td>'+
    '<td>'+sub+'</td>'+
    '<td>'+mul+'</td>'+
    '<td>'+div+'</td>'+
    '</tr>'+
    '</table></center>'
)


var name='MARIYA MARKSHEET'
document.write(name)

var eng = +prompt('enter english mark')
var urdu = +prompt('enter urdu mark')
var math= +prompt('enter maths mark')
var com = +prompt('enter computer mark')
var sci= +prompt('enter sci mark')

document.write('<table border=10x>')
document.write('<tr>'+'<th>'+'<br>eng:'+eng+'</th>'+'</tr>')
document.write('<tr>'+'<th>'+'<br>urdu:'+urdu+'</th>'+'</tr>')
document.write('<tr>'+'<th>'+'<br>math:'+math+'</th>'+'</tr>')
document.write('<tr>'+'<th>'+'<br>com:'+com+'</th>'+'</tr>')
document.write('<tr>'+'<th>'+'<br>sci:'+sci+'</th>'+'</tr>')

var total=eng+urdu+math+com+sci 

document.write('<tr>'+'<th>'+'<br>obtained mark:'+total+'</th>'+'</tr>')

var per=total/500*100

document.write('<tr>'+'<th>'+'<br>percentage is :'+per+'</th>'+'</tr>')

if(per >=80){
    document.write('<tr>'+'<th>'+'<br>Grade:A+1'+'</th>'+'</tr>')
}
else if(per>=70){
document.write('<tr>'+'<th>'+'<br>Grade:A'+'</th>'+'</tr>')

}
else if(per >=60){
    document.write('<tr>'+'<th>'+'<br>Grade:B'+'</th>'+'</tr>')   
}
else if(per >=50){
    document.write('<tr>'+'<th>'+'<br>Grade:c'+'</th>'+'</tr>')   
}
else if(per >=40){
    document.write('<tr>'+'<th>'+'<br>Grade:Failed'+'</th>'+'</tr>')   
}
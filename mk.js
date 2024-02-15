let name ="<class=a1>Name: Mariya Khan"
let roll = '<br class=a1>Roll number: JS1-083'
let teacher = '<br><class=a1>Teacher Name:shafaq anees '
document.write(name+roll+teacher)

document.write('<br><br><br><br><br><br><table bgcolor=gray fontcolor=white border=40px bordercolor=darkgreen alignitem=center width=50% height=400px>')
let eng = 98
let math=50
let urdu =85
let com=90
let sci =99
document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>')
document.write('<tr><td>ENGLISH</td><td align=center>',eng,'</td><td align=center>100</td></tr>')
document.write('<tr><td>MATH</td><td align=center>',Math,'</td><td align=center>100</td></tr>')
document.write('<tr><td>URDU</td><td align=center>',urdu,'</td><td align=center>100</td></tr>')
document.write('<tr><td>COMPUTER</td><td align=center>',com,'</td><td align=center>100</td></tr>')
document.write('<tr><td>SCIENCE</td><td align=center>',sci,'</td><td align=center>100</td></tr>')
let total=eng+urdu+math+com+sci
document.write('<tr><td>Obtained Mark:</td><td align=center>',total,'</td><td align=center>500</td></tr>')

document.write('<table border=10px bordercolor=black bgcolor=gray width=50% height=40px item=center>')
let per= total /500*100
document.write('<tr><td>Percentage:</td><td align=center>',per,'</td><td align=center>OUT of 100%</td></tr>')


if(per>=80){
    grade ='A+1'
}
else if(per>=70){
    grade ='A'
}
else if(per>='60'){
    grade='B'
}
else if(per>='50'){
    grade='C'
}
else if(per>='40'){
    grade='Failed'
}
document.write('<br><tr><td>Grade:</td><td colspan=2 align=center>',grade,'</tr>')
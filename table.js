let userInput= +prompt('enter number')


let name='JAVA Multiple Table'
document.write(name)

document.write('<table border=5px bgcolor=gray cellpadding=3px bordercolor=black>')
document.write('<tr><th>[1]</th><th>[2]</th><th>[3]</th><th>[4]</th><th>[5]</th><th>[6]</th><th>[7]</th><th>[8]</th><th>[9]</th><th>[10]</th></tr>')

for(let i=1; i<=10; i++){

document.write('<tr><td>'+userInput+'x'+i+'='+userInput*i+'</td></tr>','<br>')
    }

 let userInput1= +prompt('enter number')
 for(let i=1; i<=10; i++){
    document.write('<tr><td>'+userInput1+'x'+i+'='+userInput1*i+'</td></tr>','<br>')
 }
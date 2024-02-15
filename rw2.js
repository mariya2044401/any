let userInput4 = +('Enter number')

let name1="Java Multiple Table"
document.write(name1)


 if( !isNaN(userInput4) && userInput4 !== null){
    let tableContent = '<table border=5px bgcolor=gray cellpadding=3px  bordercolor=black> '
    tableContent += '<tr><th colspan=" + userInput4 + ">Multiplication Table for '+ userInput4 +' + </th></tr>';
    tableContent +='<tr>'
    for(let i =1; i<=10; i++) {
        tableContent += '<th>  + i + </th>'
    } 
    tableContent += '</tr><tbody>'
    for( let i=1; i<= 10 ; i++) {
        tableContent +='<tr>'
        for (let j=1; j<=userInput4; j++ ) {
tableContent += '<td>' + j + 'x' + i + '=' + j*i +'</td>'
        }
        tableContent += '</tr>'
    } 
    // tableContent += '</tbody></table>'
    // document.write(tableContent)
 } 
 else {
alert("Invalid input.please enter a valid number")
 }


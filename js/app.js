const units=['одна', 'две', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
const teens=['десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const dozens=['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const hundreds=['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
const grivnas=['гривна', 'гривны', 'гривен'];
let number=prompt('Enter your number from 1 to 999: ');
number=String(number).split('');
console.log(number);
let gr=number[number.length-1]==1&&number[number.length-2]!=1?grivnas[0]:(number[number.length-2]!=1&&(number[number.length-1]==2||number[number.length-1]==3||number[number.length-1]==4)?grivnas[1]:grivnas[2]);
if(number.length===1)
    number=`${units[number[0]-1]} ${gr}`;
else if(number.length===2){
    if(number[0]==1)
        number=`${teens[number[1]]} ${gr}`;
    else
        number=`${number[0]!=0?dozens[number[0]-2]:''} ${number[1]!=0?units[number[1]-1]:''} ${gr}`;
}
else if(number.length===3){
    if(number[1]==1)
        number=`${number[0]!=0?hundreds[number[0]-1]:''} ${number[1]!=0?teens[number[2]]:''} ${gr}`;
    else
        number=`${number[0]!=0?hundreds[number[0]-1]:''} ${number[1]!=0?dozens[number[1]-2]:''} ${number[2]!=0?units[number[2]-1]:''} ${gr}`;
}
// number=number.length===1?`${units[number[0]-1]}`:(number.length===2?(number[0]==1?`${teens[number[1]]}`:`${number[0]!=0?dozens[number[0]-2]:''} ${number[1]!=0?units[number[1]-1]:''}`):(number.length===3?(number[1]==1?`${number[0]!=0?hundreds[number[0]-1]:''} ${number[1]!=0?teens[number[2]]:''}`:`${number[0]!=0?hundreds[number[0]-1]:''} ${number[1]!=0?dozens[number[1]-2]:''} ${number[2]!=0?units[number[2]-1]:''}`)));
console.log(number);
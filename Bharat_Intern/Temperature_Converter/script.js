let cel=document.getElementById("cel");
let far=document.getElementById("fah");
let kel=document.getElementById("kel");
let btn=document.getElementById("button"); 
cel.addEventListener("input",celcius)
far.addEventListener("input",fahrenheit)
kel.addEventListener("input",kelvin);
btn.addEventListener("click",function()
{
    cel.value=" ";
    far.value=" ";
    kel.value=" ";
})
function kelvin()
{
    let k=parseFloat(kel.value);
    let c=k-273.15;
    let f=((k-273)*(9/5))+32;
    cel.value=c;
    far.value=f;
}
function fahrenheit()
{
    let f=parseFloat(far.value);
    let c=(f-32)*(5/9);
    let k=(f-32)*(5/9)+273.15;
    cel.value=c;
    kel.value=k;
}
function celcius()
{
    let c=parseFloat(cel.value);
    let f=(c*(9/5))+32;
    let k=c+273.15;
    far.value=f;
    kel.value=k;
}
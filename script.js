var req=new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload=function(){
    var data=JSON.parse(this.response);
    for(var i=0;i<10;i++){
        console.log(data[i].name+ " "+data[i].capital+" "+data[i].flag);
        
    }
    


}
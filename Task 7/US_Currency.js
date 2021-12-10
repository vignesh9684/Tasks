// step1: Create xhr object/constructor
var request = new XMLHttpRequest();
//step2: open a connection
request.open('GET', 'https://restcountries.com/v3.1/all', true);
//step3:initiate a connection
request.send();
//step4: once the data loaded from server successfully
request.onload = function() {
    // here we are converting
    var result = JSON.parse(request.response);
    var US = result.filter((ele)=>ele?.currencies?.USD?.name === "United States dollar");
    console.log(US);
    
    ///////////
    // const datas = result
    //   .filter((item) => item?.currencies?.USD?.name === "United States dollar")
    //   .map((value) => value.name);
    // console.log('datas', datas);
}

const request=require('request');


var getWeather=(latitude,longitude,callback)=>{
    request({
        url:`https://api.darksky.net/forecast/bc831d3ebe873d3ec2c79ac074761506/${latitude},${longitude}`,
        json:true
    },(error,response,body)=>{
        if(!error && response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }else{
           callback("Could not get weather information");
        }
       
    });
};

module.exports.getWeather=getWeather;

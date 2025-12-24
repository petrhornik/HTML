// I often struggle to know whether I should wear shorts or pants on a given day.  
// Please help me decide by writing me a function called isShortsWeather. 
// It should accept a single number argument, which we will call temperature. 
// If temperature is greater than or equal to 75, return true. 
// Otherwise, return false.   
// This exercise assumes temperature is in Fahrenheit.

function isShortsWeather(temperature){
  if(temperature >= 75){
    return true;  
  };
  return false;
};

isShortsWeather(80)
isShortsWeather(48)
isShortsWeather(75)
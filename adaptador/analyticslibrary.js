
class AnalyticsLibrary{
  
    process(data){
        this.validateData(data);
        
        //TODO comple to generate data
    }
    validateData(d){
        if (d.includes('xml')){
            console.log("Data it's ok");
            console.log(d);
        }else{
            console.log("Data invalid");
            console.log(d);
        }
    }
}

export {AnalyticsLibrary}
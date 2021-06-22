import axios from 'axios'


var a = {
    dd:function(){
        console.log("sss")
        var url = 'https://yesno.wtf/api'
        axios.get(url)
        .then(function(response){
            console.log(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }
}


export default a
       
   

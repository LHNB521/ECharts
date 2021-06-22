<script>
import Axios from 'axios';
    export default{
        data(){
            return {               
                list:[]
            }
        },
        methods:{
            getData(){
                
                var api='http://127.0.0.1:8888/';
                Axios.get(api).then((response)=>{
                    this.list=response.data.result;
                }).catch((error)=>{
                    console.log(error);
 
                })
 
            }
        },
        mounted(){  /*生命周期函数*/
 
            this.getData();
 
        }      
}
</script>

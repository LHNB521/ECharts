<script>
import axios from 'axios'
 axios.defaults.baseURL = 'http://127.0.0.1:8888/';
        async function queryData(){
            // 使用await决定执行的顺序
            var info = await axios.get('async1');
            var ret = await axios.get('async2?info=' + info.data);
            return ret.data;
        }

        queryData().then(function(data){
            console.log(data);
})
</script>

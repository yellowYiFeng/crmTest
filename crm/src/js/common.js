// export default{
// 	data(){
// 		return {

// 		}
// 	},
// 	mounted() {
//       this.login();
//     },
// 		login(){
//         this.$axios.post('userRole/login', {"code": 'wangyx'}).then(response => {
//           token = response.data.token;
//         }).catch(error => {
//         })
//       },
// 	}
// }


const domain = '//192.168.1.117:1009/';

export default {
    testUrl: domain + '/cas/doc/docTypeList'
}
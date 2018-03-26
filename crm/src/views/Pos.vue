<template>
 <div class="pos">
    <div>
<!--         <el-row >
            <el-col :span='7' id="order-list">
                <el-tabs>
                    <el-tab-pane label="点餐">
                        <el-table :data="tableData" border show-summary style="width: 100%" >
                            <el-table-column prop="goodsName" label="商品" ></el-table-column>
                            <el-table-column prop="count" label="量" width="50"></el-table-column>
                            <el-table-column prop="price" label="金额" width="70"></el-table-column>
                            <el-table-column  label="操作" width="100" fixed="right">
                            <template scope="scope">
                                <el-button type="text" size="small">删除</el-button>
                                <el-button type="text" size="small">增加</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                        <div>
                            <el-button type="warning" >挂单</el-button>
                            <el-button type="danger" >删除</el-button>
                            <el-button type="success" >结账</el-button> 
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                  挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                  外卖
                 </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="15">
                <div class="often-goods">
                    <div class="title">常用商品</div>
                    <div class="often-goods-list">
                        <ul>
                            <li v-for="good in oftenGoods">
                                <span>{{good.goodsName}}</span>
                                <span class="o-price">{{good.price}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
        </el-row> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'Pos',
  data () {
    return { 
         tableData: [{
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {
          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {
          goodsName: '甜筒',
          price: 8,
          count:1
        }],
         oftenGoods:[
       
      ],

    }
  },
  created(){ 
    this.$axios.get('crmIndustry/crmIndustries')
    .then(response=>{
        console.log(response);
        this.oftenGoods=response.data;
    })
    .catch(error=>{
        console.log(error);
        alert('');
    });
  },
   mounted:function(){
      var orderHeight=document.body.clientHeight;
      // document.getElementById("order-list").style.height=orderHeight+'px';
  },

}
</script>
<style type="text/css">
    .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }
   .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;

   }
   .cookList li span{
       
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;

   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>

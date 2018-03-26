<template>
    <div>
        <div>
            <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 90%" @selection-change="handleSelectionChange" type="mini" @row-click="getBusinessDetail">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="customName" label="客户名称" width="300">
                </el-table-column>
                <el-table-column prop="productTypeName" label="主打产品" width="150">
                </el-table-column>
                <el-table-column prop="oppLevel" label="商机等级" width="120">
                </el-table-column>
                <el-table-column prop="forecastAmt" label="回款预测" width="120">
                </el-table-column>
                <el-table-column prop="graspDegree" label="回款信心" show-overflow-tooltip>
                </el-table-column>
                <el-table-column prop="lastLogTime" label="最后跟进时间" show-overflow-tooltip>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>
        <div class="nav-right" v-show="isShow">
            <div class="crm-d-layout">
                <div class="header d-top">
                    <div class="crm-d-comp-tit">
                        <span class="d-obj-icon d-leadsobj "></span>
                        <span class="obj-name">销售线索</span>
                        <div class="tit">
                            <div class="tit-wrap">
                                <em title="123">123</em>
                                <div class="ico-group">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-type="Operate" data-name="operate" class="operate">
                        <div class="crm-d-btn-operate">
                            <div class="b-item b-main-btn" data-action="Edit">编辑</div>
                            <el-dropdown trigger="click" class="b-item">
                                <el-button type="">更多<i class="el-icon-arrow-down el-icon--right"></i>
                                </el-button>
                                <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>黄金糕</el-dropdown-item>
                                <el-dropdown-item>狮子头</el-dropdown-item>
                                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                                <el-dropdown-item>双皮奶</el-dropdown-item>
                                <el-dropdown-item>蚵仔煎</el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="d-g-btns">
                        <i class="icon iconfont mr10">&#xe62e;</i>
                        <i class="icon iconfont cp" @click="changeIsshow">&#xe60d;</i>
                    </div>
                </div>

                <div class="scroll-wrapper layout-scroll ui-scrollbar" style="position:absolute">
                    <div class="layout-scroll ui-scrollbar scroll-content scroll-scrolly_visible" style="margin-bottom: 0px; margin-right: 0px; height: 270px;">
                        <div class="d-simplyinfo">
                            <ul class="crm-d-comp-simplyinfo">
                                <li class="item">
                                    <span class="title">公司</span>
                                    <div class="amount">哇哈哈</div>
                                </li>
                                <li class="item">
                                    <span class="title">公司</span>
                                    <div class="amount">哇哈哈</div>
                                </li>
                                <li class="item">
                                    <span class="title">公司</span>
                                    <div class="amount">哇哈哈</div>
                                </li>
                                <li class="item">
                                    <span class="title">公司</span>
                                    <div class="amount">哇哈哈</div>
                                </li>
                                <li class="item">
                                    <span class="title">公司</span>
                                    <div class="amount">哇哈哈</div>
                                </li>
                                <li class="item">
                                    <span class="title">公司</span>
                                    <div class="amount">哇哈哈</div>
                                </li>
                            </ul>
                        </div>
                        <div class="d-page">
                            <div class="d-navigation" style="width:926px">
                                <div class="crm-d-navigation">
                                   <el-tabs v-model="activeName" @tab-click="handleClick" class="nav-item j-nav-item">
                                        <el-tab-pane label="详细信息" name="first" >
                                            <EasyScrollbar>
                                                <div class="crm-d-comp-board" style="background-color:#fff;height:800px;width:100%">
                                                <div class="b-content" style="height:1000px;width:100%">
                                                    <div class="sec-tit"><h3>详细信息</h3></div>
                                                    <el-collapse v-model="activeNames" @change="handleChange">
                                                        <el-collapse-item title="转换信息" name="1">
                                                            <div class="row"> 
                                                                <div class="half-line">
                                                                    <label><span>客户类别:</span></label>
                                                                    <div class="panel-info">
                                                                        <div v-if="businessDetailData.custom.industryType == '0'" class="info_text fl">非行业客户
                                                                        </div>
                                                                        <div v-else class="info_text fl">
                                                                            {{businessDetailData.custom.industryTypeName}}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="half-line">
                                                                    <label><span></span><span>客户等级:</span></label>
                                                                    <div class="panel-info">
                                                                        <div class="info_text fl">123</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="all-line">
                                                                    <label><span></span><span>客户名称:</span></label>
                                                                    <div class="panel-info">
                                                                        <div class="info_text fl">{{businessDetailData.custom.name}}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="all-line">
                                                                    <label><span></span><span>企业简介:</span></label>
                                                                    <div class="panel-info">
                                                                        <div v-if="businessDetailData.custom.byName" class="info_text fl">{{businessDetailData.custom.byName}}
                                                                        </div>
                                                                        <div v-else class="info_text fl">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </el-collapse-item>
                                                        <el-collapse-item title="基本信息" name="2">
                                                            <div class="row">
                                                                <div class="all-line">
                                                                    <label><span>客户名称:</span></label>
                                                                    <div class="panel-info">
                                                                        <div class="info_text fl"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </el-collapse-item>
                                                        <el-collapse-item title="系统信息" name="3">
                                                            <div>简化流程：设计简洁直观的操作流程；</div>
                                                            <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                                                            <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                                                        </el-collapse-item>
                                                    </el-collapse>
                                                </div>
                                            </div>
                                            </EasyScrollbar>
                                            
                                        </el-tab-pane>
                                        <el-tab-pane label="摘要" name="second">摘要</el-tab-pane>
                                        <el-tab-pane label="相关团队" name="third">相关团队</el-tab-pane>
                                        <el-tab-pane label="流程列表" name="fourth">流程列表</el-tab-pane>
                                    </el-tabs>
                                 <!--    <div class="nav-items j-nav-items">
                                        <span data-name="summary" class="nav-item j-nav-item">摘要</span>
                                        <span data-name="board" class="nav-item j-nav-item nav-selected">详细信息</span>
                                        <span data-name="team" class="nav-item j-nav-item">相关团队</span>
                                        <span data-name="CRMEmail," class="nav-item j-nav-item">邮件</span>
                                        <span data-name="bpmlist" class="nav-item j-nav-item">流程列表</span>
                                        <span data-name="operatelog" class="nav-item j-nav-item">修改记录</span>
                                    </div> -->
                                </div>
                            </div>
                        <!--     <div class="d-container">
                                <div class="crm-d-comp-board">
                                    <div class="b-content">
                                        <div class="sec-tit"><h3>详细信息</h3></div>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script type="text/javascript">
    export default {
    data() {
      return {
        activeName: 'first',
        tableData3: [],
        multipleSelection: [],
        currentPage4: 1,
        limit: 10,
        offset: 0,
        dealUserIds: ['7d624ec8-0d24-4dba-9cb7-b4a52f308e9c'],
        isShow : false,
        activeNames: ['1'],
        businessDetailData : {
            custom: {}
        },
      };
    },
    components:{
    },
    mounted() {
      this.getClueTable();
    },
    computed : {
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      // 列表
      getClueTable() {
        let params = {
          dealUserIds: this.dealUserIds
        };
        this.$axios.post('business/myList?limit=' + this.limit + '&&offset=' + this.offset, params).then(response => {
            this.tableData3 = response.data.datas;

        }).catch(error => {
          console.log(error);
        });
      },
      handleSizeChange(val) {
        this.limit = val;
        this.getClueTable();
      },
      handleCurrentChange(val) {
        this.offset = (this.limit) * (val - 1);
        this.getClueTable();
      },
      handleChange(val) {
        console.log(val);
      },
      //详情
      getBusinessDetailData(pid){
        this.$axios.get('opportunity/get?pid='+pid).then(response => {
            this.businessDetailData = response.data;
            this.isShow = true;
        }).catch(error => {
            console.log(error);
        });
      },
    getBusinessDetail(row, event, column){
        console.log(row);
        this.getBusinessDetailData(row.pid)
    },
    handleClick(tab, event) {
        console.log(tab, event);
    },
    changeIsshow(){
        this.isShow = false;
    },
    },
  }
</script>
<style type="text/css">
    @import '../css/navRight.css';
      .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-button{
    padding: 10px 7px;
    border-radius: 2px
  }
  .el-button:focus, .el-button:hover{
    background-color: #fff;
    color: #606266
  }
</style>

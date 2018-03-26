  export default {
    data() {
      return {
        tableData3: [],
        multipleSelection: [],
        currentPage4: 1,
        limit: 10,
        offset: 0,
        dealUserIds: ['7d624ec8-0d24-4dba-9cb7-b4a52f308e9c'],
      };
    },
    mounted() {
      this.getClueTable();
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
      getClueTable() {
        let params = {
          dealUserIds: this.dealUserIds
        };
        this.$axios.post('opportunity/myList?limit=' + this.limit + '&&offset=' + this.offset, params).then(response => {
          this.tableData3 = response.data.datas;
          console.log(this.tableData3);
        }).catch(error => {
          console.log(error);
        });
      },
      
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.limit = val;
        this.getClueTable();
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.offset = (this.limit) * (val - 1);
        this.getClueTable();
      }
    },
  }
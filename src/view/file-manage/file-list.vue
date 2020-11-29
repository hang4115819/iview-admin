<template>
   <div class="file-contaner">
    <Table border :columns="columns12" :data="data6">
        <template slot-scope="{ row }" slot="name">
            <strong>{{ row.dataName }}</strong>
        </template>
        <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="upload(row.uploadName)">下载</Button>
            <Button type="error" size="small" @click="remove(row.id)">删除</Button>
        </template>
    </Table>
     <Page :total="total" @on-change="pageChange" :current="currentPage"/>
     </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      columns12: [
        {
          title: '资料名称',
          slot: 'name'
        },
        {
          title: '资料类型',
          key: 'typeName'
        },
        {
          title: '文件名',
          key: 'uploadName'
        },
        {
          title: '描述',
          key: 'dataDesc'
        },
        {
          title: '操作',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      currentPage: 1
    }
  },
  created () {
    this.getFilelist({
      pageNo: this.currentPage,
      pageSize: 10
    })
  },
  computed: {
    ...mapState({
      fileList: state => state.user.fileList
    }),
    data6 () {
      return this.fileList['list'] || []
    },
    total () {
      return this.fileList['total'] || 0
    }
  },
  methods: {
    ...mapActions(['getFilelist', 'deleteFile', 'uploadFile']),
    remove (index) {
      this.deleteFile({ id: index }).then(res => {
        if (res.code === '0') {
          this.$Message.success('删除成功')
          this.currentPage = 1
          this.getFilelist({
            pageNo: 0,
            pageSize: 10
          })
        } else {
          this.$Message.success('删除失败')
        }
      })
    },
    pageChange (page) {
      this.currentPage = page
      this.getFilelist({
        pageNo: page,
        pageSize: 10
      })
    },
    upload (name) {
      if (name) {
        this.uploadFile(name)
      }
    }
  }
}
</script>

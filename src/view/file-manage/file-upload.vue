
<template>
  <div class="form_container">
    <Form :model="formItem" :label-width="80">
        <FormItem label="资料名称">
            <Input v-model="formItem.input" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="所属方向">
            <Select v-model="formItem.select">
                <Option value="0">经济</Option>
                <Option value="1">计算机</Option>
                <Option value="2">金融</Option>
            </Select>
        </FormItem>
        <FormItem label="是否可删">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="文件上传">
        <Upload
        type="drag"
        action="//192.168.0.110:8888/api/data/uploadFile"
        :on-success="handleSuccess">
        <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或拖拽上传</p>
        </div>
        </Upload>
        </FormItem>
        <FormItem label="资料描述">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入描述..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="submitClik">提交</Button>
            <Button style="margin-left: 8px">取消</Button>
        </FormItem>
    </Form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      formItem: {
        input: '',
        select: '',
        switch: true,
        date: '',
        time: '',
        textarea: ''
      },
      filename: '',
      typeList: ['经济', '计算机', '金融']
    }
  },
  computed: {
    ...mapState({
      roleMsg: state => state.user.roleMsg
    })
  },
  methods: {
    ...mapActions(['addFileAction']),
    submitClik () {
      console.log('formItem', this.formItem)
      this.addFileAction({
        'createName': this.roleMsg.createName,
        'dataDesc': this.formItem.textarea,
        'dataName': this.formItem.input,
        'dataStatus': this.formItem.switch ? 0 : 1, //
        'typeId': this.formItem.select,
        'typeName': this.typeList[this.formItem.select],
        'updateName': 'admin',
        'uploadName': this.filename
      }).then(res => {
        if (res.code === '0') {
          this.$Message.success('新增成功')
        } else {
          this.$Message.warning('新增失败')
        }
      })
    },
    handleSuccess (res, file) {
      console.log('upload', res)
      if (res.code === '0') {
        this.filename = res && res.data
      }
    }
  }
}
</script>
<style lang="less">
 .form_container {
   width: 500px;
 }
</style>

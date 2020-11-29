<template>
  <div class="form_container">
    <Form :model="formItem" :label-width="80">
        <FormItem label="账号">
            <Input v-model="formItem.input" placeholder="请输入账号"></Input>
        </FormItem>
        <FormItem label="姓名">
            <Input v-model="formItem.username" placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="角色">
            <Select v-model="formItem.select">
                <Option value="admin">管理员</Option>
                <Option value="teacher">老师</Option>
                <Option value="student">学生</Option>
            </Select>
        </FormItem>
        <FormItem label="失效日期">
            <Row>
                <Col span="11">
                    <DatePicker type="datetime" placeholder="选择日期" v-model="formItem.date"></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="年龄">
             <Input v-model="formItem.age" placeholder="请输入年龄"></Input>
        </FormItem>
        <FormItem label="性别">
            <RadioGroup v-model="formItem.radio">
                <Radio label="男">男</Radio>
                <Radio label="女">女</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="密码">
           <Input v-model="formItem.password" placeholder="请输入密码" type='password'></Input>
        </FormItem>
        <FormItem label="备注">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入"></Input>
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
        radio: 'male',
        date: '',
        time: '',
        textarea: '',
        age: '',
        username: ''
      }
    }
  },
  computed: {
    ...mapState({
      roleMsg: state => state.user.roleMsg
    })
  },
  methods: {
    ...mapActions(['addUserAction']),
    submitClik () {
      console.log('formItem', this.formItem)
      this.addUserAction({
        'age': this.formItem.age,
        'createName': this.roleMsg.createName,
        'expiryDate': this.formItem.date,
        'gender': this.formItem.radio,
        'loginId': this.formItem.input,
        'password': this.formItem.password,
        'updateName': this.roleMsg.createName,
        'userDesc': this.formItem.textarea,
        'username': this.formItem.username,
        'roleCode': this.formItem.select
      }).then(res => {
        if (res.data.code === '0') {
          this.$Message.success('添加成功')
        } else {
          this.$Message.warning('添加失败')
        }
      })
    }
  }
}
</script>
<style lang="less">
 .form_container {
   width: 500px;
 }
</style>

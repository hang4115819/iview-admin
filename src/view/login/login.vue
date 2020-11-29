<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import LoginForm from '_c/login-form'
import { mapActions, mapMutations } from 'vuex'
export default {
  components: {
    LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    ...mapMutations([
      'setRoleMsg',
      'setHasGetInfo',
      'setAccess'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        console.log('res', res)
        // this.getUserInfo().then(res => {
        //   this.$router.push({
        //     name: this.$config.homeName
        //   })
        // })
        if (res.code === '0' && res.data) {
          const { status } = res.data
          this.setRoleMsg(res.data)
          this.setHasGetInfo(status)
          this.$router.push({
            name: this.$config.homeName
          })
        }
      })
    }
  }
}
</script>

<style>

</style>

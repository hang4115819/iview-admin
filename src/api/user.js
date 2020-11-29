import axios from '@/libs/api.request'
// import request from 'axios'
export const login = ({ userName, password }) => {
  const data = {
    userName,
    password,
    loginId: userName
  }
  return axios.request({
    url: '/api/user/login',
    data,
    method: 'post'
  })
  // return request({
  //   url: '192.168.0.110:8888//api/user/login',
  //   method: 'post',
  //   data
  // })
}

export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}

export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}

export const getUnreadCount = () => {
  return axios.request({
    url: 'message/count',
    method: 'get'
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}
// 获取用户列表
export const getUserlistinfo = (data) => {
  return axios.request({
    url: '/api/user/list',
    method: 'post',
    params: data
  })
}
// 删除用户
export const deteUserInfo = id => {
  return axios.request({
    url: '/api/user/delete',
    method: 'delete',
    params: id
  })
}
// 新增用户
export const addUserInfo = data => {
  return axios.request({
    url: '/api/user',
    method: 'post',
    data
  })
}
// 获取资料列表
export const getFilelistinfo = (data) => {
  return axios.request({
    url: '/api/data/list',
    method: 'post',
    params: data
  })
}
// 删除资料
export const deteFileInfo = id => {
  return axios.request({
    url: '/api/data/delete',
    method: 'delete',
    params: id
  })
}
// 新增资料
export const addFileInfo = data => {
  return axios.request({
    url: '/api/data',
    method: 'post',
    data
  })
}
// 资料上传
export const uploadFile = file => {
  return axios.request({
    url: '/api/data/uploadFile',
    method: 'post',
    data: {
      file
    }
  })
}
export const uploadFileInfo = filename => {
  return axios.request({
    url: '/api/data/download',
    method: 'get',
    params: {
      fileName: filename
    }
  })
}

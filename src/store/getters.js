const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,//头像
  name: state => state.user.name,
  id: state=>state.user.id
}
// 这个是系统全局变量吗所以是？

export default getters

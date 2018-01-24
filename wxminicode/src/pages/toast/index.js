import $BFToast from '../../components/Toast/index.js'

Page({
  data: {},
  onLoad() {},
  showToast() {
    $BFToast.show({
      type: 'success',
      timer: 1500,
      color: '#fff',
      text: '已完成',
      success: () => console.log('已完成')
    })
  },
  showToastCancel() {
    $BFToast.show({
      type: 'cancel',
      timer: 1500,
      color: '#fff',
      text: '取消操作',
      success: () => console.log('取消操作')
    })
  },
  showToastErr() {
    $BFToast.show({
      type: 'forbidden',
      timer: 1500,
      color: '#fff',
      text: '禁止操作',
      success: () => console.log('禁止操作')
    })
  },
  showToastText() {
    $BFToast.show({
      type: 'text',
      timer: 1500,
      color: '#fff',
      text: '文本提发的发送东方闪电示',
      success: () => console.log('文本提示')
    })
  },
})

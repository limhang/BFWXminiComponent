/**
 * Created by het on 2018/1/23.
 */
import Component from '../Component'



export default {
  /**
   * 初始化
   * 1.id 为组件的唯一标识
   * 2.opts为外界对组件的配置
   */
  init(id, opts={} ) {
    const options = Object.assign({
      animateCss: undefined,
    }, opts)

    // 实例化组件
    const component = new Component({
      scope: `$BF.SlideLineNav.${id}`,
      data: options,
      methods: {
        /**
         * 保持锁定
         */
        retain() {
          if (typeof this.backdropHolds !== `number` || !this.backdropHolds) {
            this.backdropHolds = 0
          }

          this.backdropHolds++

          if (this.backdropHolds === 1) {
            this.setVisible()
          }
        },
        /**
         * 释放锁定
         */
        release() {
          if (this.backdropHolds === 1) {
            this.setHidden()
          }
          this.backdropHolds = Math.max(0, this.backdropHolds - 1)
        },
      },
    })

    return component
  },
}

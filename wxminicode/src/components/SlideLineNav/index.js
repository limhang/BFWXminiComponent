/**
 * Created by het on 2018/1/23.
 */
import Component from '../Component'

export default {
  /**af
   * 初始化
   * 1.id 为组件的唯一标识
   * 2.opts为外界对组件的配置
   */
  init(id, opts={} ) {
    const options = Object.assign({
      animateCss: undefined,
      // 默认选中的item
      itemClassNameNormal: `bf-slide-line-nav-item-${id}__selected`,
      widthInfo: 50,
      selected: 0,
      id: id,
    }, opts);

    // 实例化组件
    const component = new Component({
      scope: `$BF.SlideLineNav.${id}`,
      data: options,
      methods: {
        selectedItem(e) {
          console.log(e);
        }
      },
    })

    return component;
  },
}


import Component from '../Component'

export default {
  /**
   * 初始化
   * 1.id 为组件的唯一标识
   * 2.opts为外界对组件的配置
   */
  init(id, opts={} ) {
    const options = Object.assign({
      //组件动画效果暂时保留
      animateCss: undefined,
      //组件最外层的className
      classNameNormal: `bf-slide-line-nav-${id}__normal`,
      //item被选中后的className
      itemClassNameSelected: `bf-slide-line-nav-item-${id}__selected`,
      //item没有被选中的className
      itemClassNameNormal: `bf-slide-line-nav-item-${id}__normal`,
      //当期选中的item，默认选中第一个
      selected: 0,
      //外界输入，组件实例后唯一标识
      id: id,
    }, opts);

    // 实例化组件
    const component = new Component({
      scope: `$BF.SlideLineNav.${id}`,
      data: options,
      methods: {
        selectedItem(e) {
          const index = e.currentTarget.dataset.info;
          //回调外界属性中的方法
          options.selectedItem(index);
        }
      },
    })

    return component;
  },
}

import React, {Component, Suspense} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default class DisplayLottie extends Component {
  render() {
    // 兼容旧用法：只传 animationData
    const {
      animationData,
      // 新增可选参数：高度 / 宽度（数字或字符串）
      height,
      width,
      // 新增可选参数：覆盖 loop / autoplay
      loop,
      autoplay,
      // 允许透传自定义样式和 className
      style,
      className,
      // 其他可能未来扩展的 props（比如 onComplete 等）
      ...restProps
    } = this.props;

    // 旧逻辑：默认 loop = true, autoplay = true
    const effectiveLoop = typeof loop === "boolean" ? loop : true;
    const effectiveAutoplay =
      typeof autoplay === "boolean" ? autoplay : true;

    // 组合样式：
    // - 如果你不传 height/width，则不设置这些字段，等同于旧行为
    // - 如果传了，就在 style 里叠加
    const combinedStyle = {
      ...(style || {}),
      ...(height !== undefined ? { height } : {}),
      ...(width !== undefined ? { width } : {})
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={animationData}
          loop={effectiveLoop}
          autoplay={effectiveAutoplay}
          // 只有在有任何样式时才传 style，避免多余的 inline style
          style={Object.keys(combinedStyle).length ? combinedStyle : undefined}
          className={className}
          {...restProps}
        />
      </Suspense>
    );
  }
}

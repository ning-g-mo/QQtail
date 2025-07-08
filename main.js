/**引入库, 生产环境建议用指定版本而不是latest */
import Qtail from 'https://cdn.jsdelivr.net/npm/qtail-js@latest/+esm';
// 类名首字母应该大写(

const qtail = new Qtail( " ", " " ,true);
// HTML里调用的一般都是全局变量，所以应该在这里声明

// 注册事件监听器，load 为加载完毕事件
// TIP: 建议用addEventListener，但是我觉得这样你更好理解
window.onload = function(){
  // 这里是整页面(window) 加载完毕
  // 从ID获取元素(页面内容)
  var nick = document.getElementById( 'qz' ); // 通过id获取元素
  var tail = document.getElementById( 'wb' );
  var output = document.getElementById( 'sc' );
  // 注册输入事件 input
  nick.oninput = tail.oninput = function(){
    // 通过value获取input元素值
    qtail.update( nick.value, tail.value );
    // textContent文本内容 innerHTML超文本内容
    output.textContent = qtail.generate();
  }

  // 如果你用mjs的话就不要用HTML绑定事件了，因为mjs是异步加载的
  var copy = document.getElementById( 'copy' );
  copy.onclick = function(){
    // 调用浏览器复制Api, 非本地需要https，有需要可以用Openssl自签一个
    // 这个属实是有点超纲了，你连Promise都不清楚让你写这个属于是(难说)
    navigator.clipboard.writeText( output.textContent ).then(() => {
      // then是如果成功执行的函数
      // 箭头函数多行要用{}，用return返回值
      alert( '复制成功！' );
      // 弹窗，这个你应该会，我就不细讲了
    })
  }
}

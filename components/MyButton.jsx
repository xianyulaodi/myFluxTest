var React = require('react');


var MyButton = function(props) {
  var items = props.items;
  var _this=this;
  var itemHtml = items.map(function (ele, i) {
    return <li key={i}>您增加的文本是：{ele.text}，它的id是 {ele.id}<a href="#" onClick={props.delFn.bind(_this,ele.id)} >点击删除</a></li>;
  });

  return <div>
    		<ul>{itemHtml}</ul>
    		<button onClick={props.onClick}>确认添加</button>
  		</div>;
};

module.exports = MyButton;

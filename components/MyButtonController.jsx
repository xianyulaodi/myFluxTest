var React = require('react');
// 引入数据层
var ListStore = require('../stores/ListStore');
// 引入动作层
var ButtonActions = require('../actions/ButtonActions');
var MyButton = require('./MyButton');

var MyButtonController = React.createClass({
  
  getInitialState: function () {
    return {
      items: ListStore.getAll()
    };
  },

  componentDidMount: function() {
    ListStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ListStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      items: ListStore.getAll()
    });
  },

  // view把用户的动作传给action。新增一个数据
  createNewItem: function (event) {

    var text=this.refs.myInput.value;

    if(text!==''){
      // 这个是action里面的函数 ，用户通过这个点击事件，告诉action,我点击了增加了按钮了
      ButtonActions.addNewItem(text);

      this.refs.myInput.value='';

    }else{

        alert('请输入内容');
    }
  },

  // 删除元素，告诉action，我点击了删除按钮
  deleteItem:function(id){

        ButtonActions.destroy(id);
  },

  render: function() {
    // 将事件传给这个组件的子组件，MyButton
     return (
              <div>
                <MyButton
                items={this.state.items}
                onClick={this.createNewItem}
                delFn={this.deleteItem}
                />
                <input type="text" ref="myInput" placeholder="请输入内容" style={{"height":"25px","width":"200px","border":"1px solid #ccc"}}></input>
              </div>
        )
     }

});

module.exports = MyButtonController;

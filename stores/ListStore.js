// 这里就是相当于MVC中的model,只用来生成数据

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

// Store 更新后（this.addNewItemHandler()）发出事件（this.emitChange()），
// 表明状态已经改变。 View 监听到这个事件，就可以查询新的状态，更新页面了。

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    // 新增一个元素
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var obj= {
      id: id,
      text: text
    };
    this.items.push(obj);
  },
  
  deleteItem:function(id){
    // 删除指定元素
    var myItems=this.items;
    for (var i =0;i<myItems.length;i++) {
      var delId=myItems[i].id;

      if(id==delId){
          this.items.splice(i,1); 
      }

    }
    
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

module.exports = ListStore;

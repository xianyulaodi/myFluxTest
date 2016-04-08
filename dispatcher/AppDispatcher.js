var Dispatcher = require('flux').Dispatcher;
var AppDispatcher = new Dispatcher();
var ListStore = require('../stores/ListStore');

// 用来接收action,并把它传递到store,有且只有一个action,而且是全局的
AppDispatcher.register(function (action) {
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
      case 'DELETE_ITEM':
      ListStore.deleteItem(action.id);
      ListStore.emitChange();
      break;
    default:
      // no op
  }
})

module.exports = AppDispatcher;

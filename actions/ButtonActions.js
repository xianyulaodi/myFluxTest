var AppDispatcher = require('../dispatcher/AppDispatcher');

var ButtonActions = {

	// 从用户那里传来的动作
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_ITEM',
      id: id
    });
  },

};

module.exports = ButtonActions;

'use strict';

require('bootstrap/less/bootstrap.less');

import React from 'react/addons';
import List from 'components/List';

React.render(<TodoList />, document.getElementsById('todo-list')

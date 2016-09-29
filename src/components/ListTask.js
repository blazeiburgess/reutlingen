import React from 'react/addons';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import ListStore from 'stores/List';
import ListTask from 'components/ListTask';

class List extends React.component {
  constructor(props) {
    super(props);

    let { shouldComponentUpdate } = React.addons.PureRenderMixin;

    this.shouldComponentUpdate = shouldComponentUpdate.bind(this);
    this.state = { tasks: ListStore.getState() };
    this.listChanged = this.listChanged.bind(this);
  }
  componentDidMount() { ListStore.listen(this.listChanged); }
  componentWillUnmount() { ListStore.unlisten(this.listChanged); }
  listChanged(taskList) { this.setState({ tasks: taskList }); }

  render() {
    let {tasks} = this.state;

    return (
      <Grid>
        <Row fluid="{true}">
	  <h1>Tasks:</h1>
	  <ListGroup>
	    { 
	      tasks.map(task =>
		<ListTask key={task.get('id')} task={task} />
	      ).toJS() 
	    }
	  </ListGroup>
	</Row>
      </Grid>
    );
  }
}

export default List;

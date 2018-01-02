import React, { Component,} from 'react';
import Store from './Store';
import { Panel } from 'react-bootstrap';
import AddModal from './AddModal';
import EditModal from './EditModal';
import DeleteModal from './DeleteModal';

class Notes extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            items: Store.getState().items,  
            total: Store.getState().total 
        };
  }    
    componentDidMount() {
        fetch('/notes', {
            method: "GET",
              headers: {
                "Accept": "application/json"
              }
        })
         .then(response => response.json())
          .then(response => {
          Store.dispatch({
              type: 'FETCH_DATA',
              items: response
        });
          })                                                               
         this.unsubscribe = Store.subscribe(() =>
         this.setState({
            items: Store.getState().items,  
            total: Store.getState().total    
            })
         );
    }
                   
   componentWillUnmount() {
     this.unsubscribe();
    }       
  render() {
    return (      
      <div className="container">           
            <AddModal></AddModal><br/> 
             {this.state.items.map((items, index) => {
                if (this.state.total===0)
                    return <div />
                else 
                    return (                   
                         <Panel className="Cardcss" header={items.header} bsStyle="info" key={index} >
                            <div>{items.message}</div><br/>
                            <EditModal index={index} header={items.header} message={items.message}></EditModal>
                            <DeleteModal index={index} header={items.header}></DeleteModal>
                        </Panel> 
              )})}                      
            Total number of Cards: {this.state.total}
        </div>    
    );
  }
}
export default Notes;
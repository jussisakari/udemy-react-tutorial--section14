import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAdded} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onPersonRemoved(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    prs: state.persons
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPersonAdded: () => dispatch({type: 'ADD_PERSON', payload: { name: 'Jussi', age: Math.floor( Math.random() * 40 ) } }),
    onPersonRemoved: (id) => dispatch({type: 'REMOVE_PERSON', personId: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
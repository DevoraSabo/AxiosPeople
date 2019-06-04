import React from 'react';
import { render } from 'react-dom';
import HeaderRow from './HeaderRow';
import PeopleTable from './PersonTable';
import axios from 'axios';

class App extends React.Component {

    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        selectChecked: false
    }

    //onInputChange = e => {
    //    const { person } = this.state;
    //    person[e.target.name] = e.target.value;
    //    this.setState({ person });
    //}

    onAddPerson = () => {

        axios.post('/api/home/person', { firstName, lastName, age }).then(({ data }) => {
            this.state.people.push(data);
            this.setState({ people: this.state.people });
        });
    }

    onAddClick = () => {
        const { people } = this.state;
        const copy = [...people];
        const { person } = this.state;
        copy.push(this.state.person);
        this.setState({
            people: copy, person: {
                firstName: '',
                lastName: '',
                age: ''
            }
        });
    }

    onClearClick = () => {
        this.setState({ people: [], selectChecked: false });
    }

    onDeleteClick = index => {
        console.log(index);
        const copy = [...this.state.people];
        copy.splice(index, 1);
        this.setState({ people: copy });
    }

    onSelectChanged = val => {
        this.setState({ addAsUpperCase: val });
    }

    render() {
        let table;
        if (this.state.people.length) {
            table = <PeopleTable onDeleteClick={this.onDeleteClick} people={this.state.people} />;
        } else {
            table = <h1>Loading....</h1>;
        }
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <HeaderRow onInputChange={this.onInputChange}
                    onAddClick={this.onAddClick}
                    onClearClick={this.onClearClick}
                    person={this.state.person}
                    selectChecked={this.state.selectChecked}
                    onSelectChanged={this.onUpperCaseChanged}
                />
                {table}
            </div>);
    }
}

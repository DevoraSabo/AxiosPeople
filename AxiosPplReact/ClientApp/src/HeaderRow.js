import React from 'react';
import PersonRow from './PersonRow';

class HeaderRow extends React.Component {
    render() {
        const {
            onInputChange,
            onAddClick,
            onClearClick,
            person,
            selectChecked,
            onSelectChanged
        } = this.props;
        return (
            <div className="row">
                <div className="col-md-3">
                    <input name="firstName" value={person.firstName} onChange={onAddPerson} className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-3">
                    <input name="lastName" value={person.lastName} onChange={onAddPerson} className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md-3">
                    <input name="age" value={person.age} onChange={onAddPerson} className="form-control" placeholder="Age" />
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" onClick={onAddClick}>Add</button>
                    <button className="btn btn-danger" onClick={onClearClick}>Clear</button>
                    <input type="checkbox"
                        checked={selectChecked}
                        onChange={() => onSelectChanged(!selectChecked)} />
                </div>
            </div>);
    }
}
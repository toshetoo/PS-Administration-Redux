import React, {PropTypes} from 'react';

class SelectInput extends React.Component {

    render() {
        let wrapperClass = 'form-group';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-error';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field">
                    <select
                           name={this.props.name}
                           className="form-control"
                           value={this.props.value}
                           onChange={this.props.onChange}>
                        <option value=''>{this.props.defaultOption}</option>
                        {this.props.options.map((option) => {
                            return <option key={option.value} value={option.value}>{option.text}</option>;
                        })}
                    </select>
                    <div className="alert alert-danger">{this.props.error}</div>
                </div>
            </div>
        );
    }
}

SelectInput.propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    defaultOption: React.PropTypes.string,
    error: React.PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
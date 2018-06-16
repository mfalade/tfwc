import React from 'react';

const CourseOptionContext = React.createContext()


class CourseOptionProvider extends React.Component {
  state = {
    selectedOption: 'optionOne'
  }

  updateSelectedOption = ev => {
    this.setState({ selectedOption: ev.target.value });
  }

  render() {
    const ctx = {
      selectedOption: this.state.selectedOption,
      updateSelectedOption: this.updateSelectedOption
    };

    return (
      <CourseOptionContext.Provider value={ctx}>
        {this.props.children}
      </CourseOptionContext.Provider>
    );
  }
}

export { CourseOptionContext, CourseOptionProvider };

import React from 'react';
import { moduleGoals } from './modules';

const CourseOptionContext = React.createContext()


class CourseOptionProvider extends React.Component {
  state = {
    selectedOption: 'optionOne',
    moduleGoal: {},
    courseModules: []
  }

  getModuleSummary = () => {
    const { moduleGoal } = this.state;
    if (typeof moduleGoal.summary === 'function') {
      return moduleGoal.summary;
    }
    return () => (<p> { moduleGoal.summary }</p>);
  }

  setModulesForSelectedOption = (selectedOption) => {
    const modulesMapping = {
      optionOne: ['lessonOne', 'lessonTwo', 'lessonThree', 'lessonFour', 'lessonFive'],
      optionTwo: ['lessonThree', 'lessonFour'],
      optionThree: ['lessonTwo', 'lessonThree'],
      optionFour: ['lessonOne', 'lessonTwo', 'lessonThree', 'lessonFour', 'lessonFive'],
    };

    this.setState({
      moduleGoal: moduleGoals[selectedOption],
      courseModules: modulesMapping[selectedOption]
    });
  }

  updateSelectedOption = ev => {
    this.setState({ selectedOption: ev.target.value }, this.setModulesForSelectedOption(ev.target.value));
  }

  componentWillMount() {
    this.setModulesForSelectedOption('optionOne');
  } 
  
  render() {
    const ctx = {
      moduleSummary: this.getModuleSummary(),
      moduleGoal: this.state.moduleGoal,
      courseModules: this.state.courseModules,
      selectedOption: this.state.selectedOption,
      updateSelectedOption: this.updateSelectedOption,
    };

    return (
      <CourseOptionContext.Provider value={ctx}>
        {this.props.children}
      </CourseOptionContext.Provider>
    );
  }
}

export { CourseOptionContext, CourseOptionProvider };

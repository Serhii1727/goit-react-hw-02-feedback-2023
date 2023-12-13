import { Component } from 'react';
import Feedback from './Feedback';
import Statistic from './Statistic';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  makeFeedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  makeFeedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  makeFeedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
    );
    const optionsButton = Object.keys(this.state);

    return (
      <div className={css.feedback__container}>
        <Feedback
          goodFeedback={this.makeFeedbackGood}
          neutralFeedback={this.makeFeedbackNeutral}
          badFeedback={this.makeFeedbackBad}
          optionsButton={optionsButton}
        />
        ;
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

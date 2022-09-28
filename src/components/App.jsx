import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onFeedbackBtnClick = e => {
    const {
      target: { innerText },
    } = e;
    switch (innerText) {
      case 'Good':
        this.setState(prevState => {
          return {
            good: prevState.good + 1,
          };
        });
        break;
      case 'Neutral':
        this.setState(prevState => {
          return {
            neutral: prevState.neutral + 1,
          };
        });
        break;

      default:
        this.setState(prevState => {
          return {
            bad: prevState.bad + 1,
          };
        });
        break;
    }
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => total + value, 0);

  countPositiveFeedbackPercentage = feedbackList => {
    console.log(feedbackList);
    const { good, neutral, bad } = feedbackList;
    let total = 0;
    let goodPercentage = 0;
    let neutralPercantage = 0;
    let badPercentage = 0;
    total = good + neutral + bad;
    if (good) {
      return (goodPercentage = (good * 100) / total);
    }
    if (neutral) {
      return (neutralPercantage = (neutral * 100) / total);
    }
    if (bad) {
      return (badPercentage = 100 - goodPercentage - neutralPercantage);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
          <ul>
            <li>
              <button type="button" onClick={this.onFeedbackBtnClick}>
                Good
              </button>
            </li>
            <li>
              <button type="button" onClick={this.onFeedbackBtnClick}>
                Neutral
              </button>
            </li>
            <li>
              <button type="button" onClick={this.onFeedbackBtnClick}>
                Bad
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good: {good}</p>
            </li>
            <li>
              <p>Neutral: {neutral}</p>
            </li>
            <li>
              <p>Bad: {bad}</p>
            </li>
            <li>
              <p>Total: {this.countTotalFeedback()}</p>
            </li>
            <li>
              <p>
                Percentage: {this.countPositiveFeedbackPercentage(this.state)}
              </p>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

import FeedbackOptions from 'components/FeedbackOptions';
import css from './Feedback.module.css';

export default function Feedback(props) {
  return (
    <>
      <h1 className={css.title}>Please leave feedback</h1>

      <FeedbackOptions options={props.optionsButton} onLeaveFeedback={props} />
    </>
  );
}

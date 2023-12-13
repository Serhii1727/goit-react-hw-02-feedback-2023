import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  const { goodFeedback, neutralFeedback, badFeedback } = onLeaveFeedback;
  const [good, neutral, bad] = options;

  return (
    <div className={css.button__container}>
      <button className={css.button} onClick={goodFeedback}>
        {good}
      </button>
      <button className={css.button} onClick={neutralFeedback}>
        {neutral}
      </button>
      <button className={css.button} onClick={badFeedback}>
        {bad}
      </button>
    </div>
  );
}

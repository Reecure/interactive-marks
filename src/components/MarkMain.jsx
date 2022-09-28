import { useState } from 'react';
import star from '../media/icon-star.svg';
import styles from './MarkMain.module.css';
import MarkButton from './UI/MarkButton';
import ThankYouBlock from './ThankYouBlock';

function MarkMain() {
  const mark = [
    { id: '1', mark: '1' },
    { id: '2', mark: '2' },
    { id: '3', mark: '3' },
    { id: '4', mark: '4' },
    { id: '5', mark: '5' },
  ];

  const [submited, setSubmited] = useState(false);
  const [markValue, setMarkValue] = useState('');
  const [active, setActive] = useState('0');

  const sumbitButtonHandler = (event) => {
    event.preventDefault();
    setSubmited(true);
  };

  const markValueHandler = (value) => {
    setMarkValue(value);
  };

  const handleClick = (e) => {
    setActive(e);
  };

  return (
    <div>
      {submited ? (
        <ThankYouBlock mark={markValue} />
      ) : (
        <form className={styles.mainBlock}>
          <div className={styles.starIcon}>
            <img src={star} alt="star" />
          </div>
          <div>
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>
          <div className={styles.MarkButtons}>
            {mark.map(({ mark, id }) => {
              return (
                <MarkButton
                  active={active}
                  toggle={handleClick}
                  setMarkValue={markValueHandler}
                  mark={mark}
                  id={id}
                  key={id}
                />
              );
            })}
          </div>

          <button onClick={sumbitButtonHandler} className={styles.submitBtn}>
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
}

export default MarkMain;

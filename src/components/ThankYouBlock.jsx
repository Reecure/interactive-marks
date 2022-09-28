import styles from './ThankYouBlock.module.css';
import thankYou from '../media/illustration-thank-you.svg';

function ThankYouBlock({ mark }) {
  return (
    <div>
      <div className={styles.thankYouBlock}>
        <div>
          <img src={thankYou} alt="thank-you-ico" />
        </div>
        <div>
          <p className={styles.markSelected}>You selected {mark} of 5</p>
        </div>
        <div>
          <h2>Thank you!</h2>
          <p className={styles.text}>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouBlock;

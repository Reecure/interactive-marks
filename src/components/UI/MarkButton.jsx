import styles from './MarkButton.module.css';

function MarkButton({ mark, id, setMarkValue, toggle, active }) {
  const markButtonOnClickHandler = (e) => {
    e.preventDefault();
    toggle(e.target.innerText);
    setMarkValue(e.target.textContent);
  };

  return (
    <div>
      <button
        onClick={markButtonOnClickHandler}
        className={
          active === id
            ? `${styles.MarkButton} ${styles.clickedButton}`
            : `${styles.MarkButton}`
        }
      >
        {mark}
      </button>
    </div>
  );
}

export default MarkButton;

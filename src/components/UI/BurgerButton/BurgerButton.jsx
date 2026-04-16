import s from './Burger.module.css';

const BurgerButton = ({menuOpen, setMenuOpen}) => {
  return (
    <div
      className={`${s.burger__button} ${menuOpen ? s.spin : ''}`}
      onClick={() => setMenuOpen((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setMenuOpen((prev) => !prev);
        }
      }}
    >
      <div className={s.line}></div>
      <div className={`${s.line} ${s.lineShort}`}></div>
      <div className={s.line}></div>
    </div>
  );
};

export default BurgerButton;

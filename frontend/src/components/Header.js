import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PAGES } from '../utils/constants';
import { UserEmailContext } from '../contexts/UserEmailContext';

export default function Header() {
  const userEmail = useContext(UserEmailContext);
  const location = useLocation();
  const navigate = useNavigate();
  let action = null;
  let actionName = 'Выйти';

  const handleLoginClick = () => {
    navigate(PAGES.login);
  };
  // FIX logout
  const handleLogoutClick = () => {
    localStorage.removeItem('jwt');
    navigate(PAGES.login);
  };
  const handleRegisterClick = () => {
    navigate(PAGES.register);
  };

  switch (location.pathname) {
    case PAGES.login:
      action = handleRegisterClick;
      actionName = 'Регистрация';
      break;
    case PAGES.register:
      action = handleLoginClick;
      actionName = 'Войти';
      break;

    case PAGES.index:
      action = handleLogoutClick;
      actionName = 'Выйти';
      break;

    default:
      action = handleLoginClick;
      actionName = 'Войти';
  }
  // console.log('userEmail:', userEmail);
  return (
    <header className="header">
      <div className="header__logo"></div>
      <div className="header__actions">
        {location.pathname === '/' && userEmail && <div className="header__email">{userEmail}</div>}
        <button className="button header__action-btn" onClick={action}>
          {actionName}
        </button>
      </div>
    </header>
  );
}

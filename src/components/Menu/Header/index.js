import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { BackIcon } from '../../Icon';

const cx = classNames.bind(styles);

function Header({ children, clickBack = () => {} }) {
    return (
        <div className={cx('wrapper')}>
            <BackIcon classes={cx('back-btn')} onClick={clickBack} />
            <span className={cx('title')}>{children}</span>
        </div>
    );
}

export default Header;

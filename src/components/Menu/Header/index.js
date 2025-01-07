import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../assets/images';

const cx = classNames.bind(styles);

function Header({ children, clickBack = () => {} }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('back-btn')} src={images.back} onClick={clickBack} alt="back-btn" />
            <span className={cx('title')}>{children}</span>
        </div>
    );
}

export default Header;

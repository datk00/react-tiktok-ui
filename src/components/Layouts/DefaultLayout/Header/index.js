import images from '../../../../assets/images';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Actions from './Actions';
import Search from './Search';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Logo Tiktok" />
            </div>
            <Search />
            <Actions></Actions>
        </header>
    );
}

export default Header;

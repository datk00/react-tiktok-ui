import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '../../../../assets/images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Logo Tiktok" />
            </div>
            <div className={cx('search')}>
                <input placeholder="Search" spellCheck={false} />
                <button className={cx('clear')}>
                    <img className={cx('clear-img')} src={images.clear} alt="Clear" />
                </button>
                <img className={cx('loading')} src={images.loading} alt="Clear" />
                <button className={cx('search-btn')}>
                    <img className={cx('search-img')} src={images.search} alt="Clear" />
                </button>
            </div>
            <div className={cx('actions')}></div>
        </header>
    );
}

export default Header;

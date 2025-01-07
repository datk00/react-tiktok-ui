import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

import images from '../../../../assets/images';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as SearchPopper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem/AccountItem';
import Actions from './Actions';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Logo Tiktok" />
            </div>
            <HeadlessTippy
                visible={true}
                interactive
                appendTo={document.body}
                render={(attrs) => (
                    <div className={cx('search-popper')} tabIndex="-1" {...attrs}>
                        <SearchPopper>
                            <span className={cx('title-search')}>Accounts</span>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </SearchPopper>
                    </div>
                )}
            >
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
            </HeadlessTippy>
            <Actions></Actions>
        </header>
    );
}

export default Header;

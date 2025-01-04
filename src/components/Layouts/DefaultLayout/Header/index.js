import Tippy from '@tippyjs/react/headless'; // different import path!

import images from '../../../../assets/images';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Wrapper as SearchPopper } from '../../../../components/Popper';
import { Wrapper as OptionMorePoppper } from '../../../../components/Popper';
import AccountItem from '../../../AccountItem/AccountItem';
import Button from '../../../Button';
import OptionItem from '../../../OptionItem';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="Logo Tiktok" />
            </div>
            <Tippy
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
            </Tippy>
            <div className={cx('actions')}>
                <Button primary>Log in</Button>

                <Tippy
                    // visible={true}
                    delay={[0, 700]}
                    interactive
                    appendTo={document.body}
                    render={(attrs) => (
                        <div className={cx('option-popper')} tabIndex="-1" {...attrs}>
                            <OptionMorePoppper FadeIn>
                                <div className={cx('container-options')}>
                                    <OptionItem icon="homePlay">Creator tools</OptionItem>
                                    <OptionItem icon="language">English</OptionItem>
                                    <OptionItem icon="question">Feedbacks and help</OptionItem>
                                    <OptionItem icon="darkMode">Dark Mode</OptionItem>
                                </div>
                            </OptionMorePoppper>
                        </div>
                    )}
                >
                    <i>
                        <img src={images.more} alt="more"></img>
                    </i>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;

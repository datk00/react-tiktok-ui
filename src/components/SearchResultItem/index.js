import HeadlessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './SearchResultItem.module.scss';
import { MoreIcon, NoCareIcon, ReportIcon, SearchIcon } from '../Icon';

import { Wrapper as MorePopper } from '../Popper';
import OptionItem from '../Menu/OptionItem';
const cx = classNames.bind(styles);
function SearchResultItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <SearchIcon classes={cx('icon-search')} width="15" height="15" />
                <span className={cx('content')}>{children}</span>
            </div>
            <HeadlessTippy
                // visible={true}
                delay={[0, 200]}
                interactive
                appendTo={document.body}
                placement="bottom-end"
                render={(attrs) => (
                    <div className={cx('wrapper-more')} tabIndex="-1" {...attrs}>
                        <div className={cx('arrow')}></div>
                        <MorePopper>
                            <div className={cx('inner-wrapper-more')}>
                                <div className={cx('pd')}>
                                    <OptionItem mgLeft nameBold IconElement={ReportIcon} name={'Report'} hoverText />
                                </div>
                                <div className={cx('pd', 'borderTop')}>
                                    <OptionItem
                                        mgLeft
                                        nameBold
                                        IconElement={NoCareIcon}
                                        name={'Mark as irrelevant'}
                                        hoverText
                                    />
                                </div>
                            </div>
                        </MorePopper>
                    </div>
                )}
            >
                <MoreIcon width="15" height="15" classes={cx('icon-more')} />
            </HeadlessTippy>
        </div>
    );
}

export default SearchResultItem;

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Actions.module.scss';
import classNames from 'classnames/bind';

import Button from '../../../../Button';
import Menu from '../../../../Menu';
import {
    CoinIcon,
    DarkModeIcon,
    HomePlayIcon,
    InboxIcon,
    LanguageIcon,
    LogoutIcon,
    MoreIcon,
    PlusIcon,
    QuestionIcon,
    SettingIcon,
    UserIcon,
} from '../../../../Icon';

const cx = classNames.bind(styles);
function Actions() {
    let dataMenuOptions = [
        {
            IconElement: HomePlayIcon,
            name: 'Creator tools',
        },
        {
            IconElement: LanguageIcon,
            name: 'English',
            childrenOptions: {
                title: 'Language',
                data: [
                    { type: 'nameNormal', code: 'en', name: 'English' },
                    { type: 'nameNormal', code: 'vi', name: 'Việt Nam' },
                ],
            },
        },
        {
            IconElement: QuestionIcon,
            name: 'Feedbacks and help',
        },
        {
            IconElement: DarkModeIcon,
            name: 'Dark Mode',
        },
    ];

    const isCurrentUser = true;

    if (isCurrentUser) {
        dataMenuOptions = [
            ...[
                { IconElement: UserIcon, name: 'View profile' },
                { IconElement: CoinIcon, name: 'Get coins' },
                { IconElement: SettingIcon, name: 'Settings' },
            ],
            ...dataMenuOptions,
            { IconElement: LogoutIcon, name: 'Log out', border: 'Top' },
        ];
    }
    console.log(dataMenuOptions);

    return (
        <div className={cx('actions')}>
            {isCurrentUser ? (
                <>
                    <Button className={cx('upload-btn')} IconElement={PlusIcon}>
                        Upload
                    </Button>
                    <Tippy delay={[0, 100]} content="Inbox">
                        <InboxIcon classes={cx('inbox')} numberNotify={23} />
                    </Tippy>
                </>
            ) : (
                <>
                    <Button primary>Log in</Button>
                </>
            )}
            <Menu data={dataMenuOptions} w={223}>
                <i>
                    {isCurrentUser ? (
                        <img
                            className={cx('user-avatar')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/21d7ea45f55a3a0374ebc8986ad0a4cd.jpeg?lk3s=a5d48078&nonce=48607&refresh_token=cd1bbc5f821aac82d0eae6716465205c&x-expires=1736406000&x-signature=MaYwTcweI5GSE35liRN4rjKLtV0%3D&shp=a5d48078&shcp=81f88b70"
                            alt="avatar"
                        ></img>
                    ) : (
                        <MoreIcon />
                        // <img src={images.more} alt="more"></img>
                    )}
                </i>
            </Menu>
        </div>
    );
}

export default Actions;

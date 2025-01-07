import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import images from '../../../../../assets/images';
import styles from './Actions.module.scss';
import classNames from 'classnames/bind';

import Button from '../../../../Button';
import Menu from '../../../../Menu';

const cx = classNames.bind(styles);
function Actions() {
    let dataMenuOptions = [
        {
            icon: 'homePlay',
            name: 'Creator tools',
        },
        {
            icon: 'language',
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
            icon: 'question',
            name: 'Feedbacks and help',
        },
        {
            icon: 'darkMode',
            name: 'Dark Mode',
        },
    ];

    const isCurrentUser = true;

    if (isCurrentUser) {
        dataMenuOptions = [
            ...[
                { icon: 'user', name: 'View profile' },
                { icon: 'coin', name: 'Get coins' },
                { icon: 'setting', name: 'Settings' },
            ],
            ...dataMenuOptions,
            { icon: 'logout', name: 'Log out', border: 'Top' },
        ];
    }
    console.log(dataMenuOptions);

    return (
        <div className={cx('actions')}>
            {isCurrentUser ? (
                <>
                    <Button className={cx('upload-btn')} icon="plus">
                        Upload
                    </Button>
                    <Tippy delay={[0, 100]} content="Inbox">
                        <img className={cx('inbox')} src={images.inbox} alt="inbox"></img>
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
                        <img src={images.more} alt="more"></img>
                    )}
                </i>
            </Menu>
        </div>
    );
}

export default Actions;

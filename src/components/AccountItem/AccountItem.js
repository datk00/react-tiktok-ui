import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

import { CheckIcon } from '../Icon';
import images from '../../assets/images';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const [avatar, setAvatar] = useState('');
    return (
        <Link to={`/user/@${data.nickname}`} className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={avatar || data.avatar}
                alt={data.avatar}
                onError={() => {
                    setAvatar(images.logoNoText);
                }}
            />
            <div className={cx('info')}>
                <div className={cx('username')}>
                    <h4>{data.nickname}</h4>
                    {data.tick && <CheckIcon width="14" height="14" classes={cx('check')} />}

                    {/* <img className={cx('check')} src={images.check} alt="check"></img> */}
                </div>
                <p className={cx('name')}>{data.full_name || 'noFullName'}</p>
            </div>
        </Link>
    );
}

export default AccountItem;

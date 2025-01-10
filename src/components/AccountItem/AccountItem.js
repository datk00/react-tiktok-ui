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
        <Link to={`/user/@${data.unique_id}`} className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={avatar || data.rich_sug_avatar_uri}
                alt={data.unique_id}
                onError={() => {
                    setAvatar(images.logoNoText);
                }}
            />
            <div className={cx('info')}>
                <div className={cx('username')}>
                    <h4>{data.unique_id}</h4>
                    {data.is_verified && <CheckIcon width="14" height="14" classes={cx('check')} />}

                    {/* <img className={cx('check')} src={images.check} alt="check"></img> */}
                </div>
                <p className={cx('name')}>{data.nickname || 'noFullName'}</p>
            </div>
        </Link>
    );
}

export default AccountItem;

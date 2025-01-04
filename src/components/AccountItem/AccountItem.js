import images from '../../assets/images';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff378af39120d4eb668eef664f92098a~c5_300x300.webp?lk3s=a5d48078&nonce=43087&refresh_token=2bbc2d9bcf8955361b862dbb7d6b0e9f&x-expires=1735981200&x-signature=MSZQO72XJcWvRYFuCqxLGOdAGg0%3D&shp=a5d48078&shcp=c1333099"
                alt="avt"
            ></img>
            <div className={cx('info')}>
                <div className={cx('username')}>
                    <h4>letuankhang2002</h4>
                    <img className={cx('check')} src={images.check} alt="check"></img>
                </div>
                <p className={cx('name')}>Lê Tuấn Khang</p>
            </div>
        </div>
    );
}

export default AccountItem;

import images from '../../assets/images';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ff378af39120d4eb668eef664f92098a~c5_300x300.webp?lk3s=a5d48078&nonce=81990&refresh_token=742e9bc8ab9a1351425ca4de9ea56999&x-expires=1736211600&x-signature=n3j8QdXsbslFOBJdxr11s476aAY%3D&shp=a5d48078&shcp=c1333099"
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

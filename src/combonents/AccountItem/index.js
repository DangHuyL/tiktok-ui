import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import style from './AccountItem.module.scss';

const cx = classNames.bind(style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/b9c3113f972f108b710c41d9bc44af04~c5_100x100.jpeg?x-expires=1660554000&x-signature=IPrcgYarrmoKi6dC%2F7GU8PCarZs%3D"
                alt="avatar"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Dang Huy</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>liendao</span>
            </div>
        </div>
    );
}

export default AccountItem;

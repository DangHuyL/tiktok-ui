import classNames from 'classnames/bind';
import Button from '~/combonents/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Proptypes from 'prop-types';

import styles from './AccountPreview.module.scss';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/combonents/Image';
const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    alt={data.nickname}
                    src={data.avatar}
                />
                <div>
                    <Button primary>Follow</Button>
                </div>
            </header>
            <div className={cx('body')}>
                <div className={cx('item-infor')}>
                    <p className={cx('name')}>
                        <strong>{`${data.first_name} ${data.last_name}`}</strong>
                        {data.tick && (
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                className={cx('check')}
                            />
                        )}
                    </p>
                    <p className={cx('nickName')}>{data.nickname} </p>
                </div>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>
                        {data.followers_count}
                    </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{data.likes_count}</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: Proptypes.object,
};
export default AccountPreview;

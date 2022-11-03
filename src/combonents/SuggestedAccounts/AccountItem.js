import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as PopperWrapper } from '~/combonents/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/combonents/Image';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div className="preview" tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                offset={[-20, 0]}
                delay={[800, 0]}
                placement="bottom"
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        alt={data.nickname}
                        src={data.avatar}
                    />
                    <div className={cx('item-infor')}>
                        <p className={cx('name')}>
                            <strong>{`${data.first_name} ${data.last_name} `}</strong>
                            {data.tick && (
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className={cx('check')}
                                />
                            )}
                        </p>
                        <p className={cx('nickName')}>{data.nickname}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: Proptypes.object,
};

export default AccountItem;

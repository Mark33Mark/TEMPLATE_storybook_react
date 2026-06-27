import { Button } from '../Button';
import { AcmeLogo } from '../../assets/images';

export const Header = props => {
    const { user, onLogin, onLogout, onCreateAccount } = props;

    return (
        <header>
            <div className='W8D-Header'>
                <div>
                    <AcmeLogo />
                    <h1>Acme</h1>
                </div>
                <div>
                    {user ?
                        <>
                            <span className='W8D-HeaderUserWelcome'>
                                Welcome, <b>{user.name}</b>!
                            </span>
                            <Button size='small' onClick={onLogout} label='Log out' />
                        </>
                    :   <>
                            <Button size='small' onClick={onLogin} label='Log in' />
                            <Button primary size='small' onClick={onCreateAccount} label='Sign up' />
                        </>
                    }
                </div>
            </div>
        </header>
    );
};

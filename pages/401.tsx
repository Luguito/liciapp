//import { User } from '@addi-domains/identity-management';
import { APP_ACTIONS, LogoutAction } from '../store/actions/app.actions';
import { GlobalState } from '../store/state';
//import { logoutUrl } from '@addi-domains/identity-management/loginApp';
import { connect, useDispatch } from 'react-redux';

interface UnauthorizedPageProps {
    user:any
    //user: User
}

const UnauthorizedPage = (props: UnauthorizedPageProps) => {
    const { user } = props;
    const storeDispatch = useDispatch();
    
    const logoutHandler = () => {
        storeDispatch<LogoutAction>({ type: APP_ACTIONS.LOGOUT });
        //window.location.href = logoutUrl({});
    };

    return <>
        <h1>Unauthorized user:</h1>
        <p>current rol: </p>
        <button onClick={logoutHandler}>LOGOUT</button>
    </>
};

UnauthorizedPage.getInitialProps = async (context) => {
    const { user } = context.store.getState().app;

    return {
        user
    }
};

export default connect(
    (state: GlobalState) => {
      return state
    },
)(UnauthorizedPage);


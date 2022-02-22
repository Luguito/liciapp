//import { User } from '@addi-domains/identity-management';
import { connect, useDispatch } from 'react-redux';
import { GlobalState } from '../store/state';
import { APP_ACTIONS, LogoutAction } from '../store/actions/app.actions';
//import { logoutUrl } from '@addi-domains/identity-management/loginApp';


interface ForbiddenPageProps {
    user: any
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
    const { user } = props;
    const storeDispatch = useDispatch();

    const logoutHandler = () => {
        storeDispatch<LogoutAction>({ type: APP_ACTIONS.LOGOUT });
        //window.location.href = logoutUrl({});
    };
    
    return <>
        <h1>Forbidden user: </h1>
        <p>current rol: </p>
        <button onClick={logoutHandler}>LOGOUT</button>
    </>
};

ForbiddenPage.getInitialProps = async (context) => {
    const { user } = context.store.getState().app;

    return {
        user
    }
};

export default connect(
    (state: GlobalState) => {
      return state
    },
)(ForbiddenPage);

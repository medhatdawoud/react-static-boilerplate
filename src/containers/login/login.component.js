import React from 'react';
import Layout from '../../components/Layout/Layout';
import s from './login.css';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Layout className={s.content}>
                <h1>Login Page</h1>
            </Layout>
        );
    }
}

export default Login;
import appConfig from '../../../config';
import Link from '../../atoms/link/Link';

import './Login.scss'

function Login() {

  return (
    <div className="Login">
        <Link href={`${appConfig.api.authEndpoint}?client_id=${appConfig.api.clientID}&redirect_uri=${appConfig.api.redirectURI}&response_type=${appConfig.api.responseType}`}>Login to Spotify</Link>
    </div>
  );
}

export default Login;

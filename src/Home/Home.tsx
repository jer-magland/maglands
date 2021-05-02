import { FunctionComponent } from "react";
import GoogleSignin from "../google/GoogleSignin";
import useGoogleApi from "../google/useGoogleApi";
import { useHistory, useLocation } from 'react-router-dom';
import MainPage from "../MainPage/MainPage";
import GroceriesPage from "../GroceriesPage/GroceriesPage";

type Props = {
}

const Home: FunctionComponent<Props> = () => {
    const {gapi, signedIn} = useGoogleApi()

    const location = useLocation()
    const history = useHistory()


    return (
        <div>
            <GoogleSignin />
            {
                signedIn && (
                    <div>
                        {
                            (location.pathname === '/') && (
                                <MainPage />
                            )
                        }
                        {
                            (location.pathname === '/groceries') && (
                                <GroceriesPage />
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Home
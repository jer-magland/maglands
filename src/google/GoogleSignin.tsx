import React, { useCallback } from 'react'
import { FunctionComponent } from "react";
import ReactGoogleButton from 'react-google-button'
import useGoogleApi from './useGoogleApi';

type Props = {
    
}

const GoogleSignin: FunctionComponent<Props> = () => {
    const {gapi, signedIn} = useGoogleApi()

    const handleSignIn = useCallback(() => {
        gapi.auth2.getAuthInstance().signIn();
    }, [gapi])
    const handleSignOut = useCallback(() => {
        gapi.auth2.getAuthInstance().signOut()
    }, [gapi])

    return <div>
        {
            <span>
                {
                    gapi ? (
                        signedIn ? (
                            <span>
                                <button onClick={handleSignOut}>Sign out</button>
                            </span>
                        ) : (
                            <span>
                                <button onClick={handleSignIn}>Sign in</button>
                            </span>
                            // <ReactGoogleButton onClick={handleSignIn} />
                        )
                    ) : gapi === undefined ? (
                        <div>Loading google api</div>
                    ) : (
                        <div>Unable to load google api</div>
                    )
                }
            </span>
        }
    </div>
}

export default GoogleSignin
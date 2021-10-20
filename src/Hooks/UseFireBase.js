import { useContext, useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, } from "firebase/auth";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../App";



initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useContext(UserContext);
    const [error, setError] = useState('');
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
                if (result) {
                    history.replace(from);
                }
            })
            .catch(error => {
                setError(error.massage);
            })

    }
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside', user);
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        logout
    }

}
export default useFirebase;
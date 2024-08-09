'use client';
import { getAuth, GoogleAuthProvider, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { socialAuthApp } from '@/config/firebase';
import { backendUrl } from '@/config/config';
import axios from 'axios';

const SignIn = () => {
    const router = useRouter();
    const auth = getAuth(socialAuthApp);
    const handleGoogleBtnClick = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' })
        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);
            console.log('resultFromGoogle', resultFromGoogle.user.providerData[0].uid)
            let payload = {
                uid: resultFromGoogle.user.providerData[0].uid,
                socialType: 'google'
            }
            let response = await axios.post(`${backendUrl}/auth/social-auth`, payload);
            console.log('response from api : ', response)
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1>Signup or Signin</h1>
            <div className="flex restore-box h-96 justify-center items-center">
                <div onClick={handleGoogleBtnClick} className="border-right pr-3">
                    <img src="/images/google.png" className="store-img" alt="/" />
                </div>
                <div className="pl-3">
                    <img src="/images/micro-soft.png" className="store-img" alt="/" />
                </div>
            </div>
        </div>
    )
}

export default SignIn

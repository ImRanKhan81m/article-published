// import React, { useContext, useEffect, useMemo, useState } from 'react';
// import { Link, useLocation, useNavigate, } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// import image from '../../../assets/icon/Google.png'
// import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import auth from '../../../firebase.init';
// import { async } from '@firebase/util';
// import { articleDataContext } from '../../../App';
// import useToken from '../../Hooks/useToken';
// import { updateProfile } from 'firebase/auth';

// const Register = () => {
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const [btnState, setBtnState] = useState(false);
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);
//     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const from = location.state?.from?.pathname || "/";
//     const [authUser] = useAuthState(auth);
//     const [userName, setUserName] = useState('');
//     const [token] = useToken(user || gUser, userName || gUser?.displayName);
//     // console.log(authUser?.email);

//     // console.log(gUser)

//     useEffect(() => {
//         if (token) {
//             navigate(from, { replace: true })
//         }
//     })

//     if (user || gUser) {
//         navigate(from, { replace: true })
//     }

//     let signUpError;
//     if (error || gError) {
//         signUpError = <p className='text-red-500 py-3'>{error?.message || gError?.message}</p>
//     }
//     let socialError
//     if (gError) {
//         socialError = <p className='text-red-500 py-3'>{gError?.message}</p>
//     }

//     let userInfo = {}
//     const onSubmit = async data => {
//         setBtnState(true);
//         //set display name in state for token and update name in firebase
//         const displayName = data.name;
//         // console.log(displayName);
//         await createUserWithEmailAndPassword(data.email, data.password);
//         setUserName(displayName);
//         // await updateProfile( {displayName} );

//         userInfo = {
//             email: data.email,
//             name: data.name,
//             password: data.password,
//             role: 'user',
//             ocupation: data.ocupation || "N/A",
//             dob: data.dob || "N/A",
//             phone: data.phone || "N/A",
//             address: data.address || "N/A",
//             photoURL: data.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
//         }
//         // console.log(userInfo)
//         // PUT API
//         fetch(`https://floating-ocean-13139.herokuapp.com/users/${data.email}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 userInfo
//             })
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//             }
//             )

//     }


//     const email = authUser?.email;

//     userInfo = {
//         email: authUser?.email,
//         name: authUser?.displayName,
//         photoURL: authUser?.photoURL,
//         role: 'user',
//         ocupation: "N/A",
//         dob: "N/A",
//         phone: "N/A",
//         address: "N/A"
//     }

//     //Handle google signing

//     const handleGoogleSigning = async () => {
//         await signInWithGoogle();
//     }

//     useEffect(() => {
//         //PUT API for updating users image
//         const url = `https://floating-ocean-13139.herokuapp.com/users/${email}`
//         // console.log(url)
//         if (email && !btnState) {
//             fetch(url, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     userInfo
//                 })
//             })
//         }
//     }, [userInfo, email, btnState])

//     // console.log(valueObj?.users)

//     return (
//         <div className='mid-container lg:my-10'>

//             <div className='flex justify-center items-center'>
//                 <div className="card flex-shrink-0 w-full lg:max-w-lg md:max-w-lg sm:max-w-lg max-w-sm shadow-2xl bg-base-100 ">
//                     <div className="card-body border rounded-2xl ">
//                         <h1 className='text-3xl text-center font-bold'>Sign-Up </h1>
//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     placeholder="Enter Your Name"
//                                     className="input input-bordered focus:outline-none"
//                                     {...register("name", {
//                                         required: {
//                                             value: true,
//                                             message: 'Name is Required'
//                                         }
//                                     })}
//                                 />
//                                 <label className="label">
//                                     {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
//                                 </label>
//                             </div>
//                             <div className="form-control ">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     placeholder="Enter Your Email"
//                                     className="input input-bordered focus:outline-none"
//                                     {...register("email", {
//                                         required: {
//                                             value: true,
//                                             message: 'Email is Required'
//                                         },
//                                         pattern: {
//                                             value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                                             message: 'Provide a valid Email'
//                                         }
//                                     })}
//                                 />
//                                 <label className="label">
//                                     {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//                                     {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
//                                 </label>
//                             </div>
//                             <div className="form-control ">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input
//                                     autoComplete='on'
//                                     type="password"
//                                     placeholder="Password"
//                                     className="input input-bordered focus:outline-none"
//                                     {...register("password", {
//                                         required: {
//                                             value: true,
//                                             message: 'Password is Required'
//                                         },
//                                         minLength: {
//                                             value: 6,
//                                             message: 'Must be 6 characters or longer'
//                                         }
//                                     })}
//                                 />
//                                 <label className="label">
//                                     {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
//                                     {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
//                                 </label>
//                             </div>
//                             {signUpError}
//                             <input className='btn w-full btn-primary font-bold' type="submit" value="Register" />
//                         </form>
//                         <p className='py-3 text-center '>Already have an Account?  <Link to="/login" ><span className=' link text-primary ml-1 '> Please Login</span></Link></p>
//                         <div className="divider">OR</div>
//                         <button onClick={handleGoogleSigning} className="btn btn-outline font-bold"> <img className='w-7 mr-2' src={image} alt="" /> Continue with google</button>
//                     </div>
//                     {socialError}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Register;





// import toast from 'react-hot-toast';
// import { sendEmailVerification } from 'firebase/auth';
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useUpdateProfile } from 'react-firebase-hooks/auth';

import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import { useForm } from "react-hook-form";
import image from '../../../assets/icon/Google.png'
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import { articleDataContext } from '../../../App';
import useToken from '../../Hooks/useToken';
import { updateProfile } from 'firebase/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';

const Signup = () => {
    // const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    // const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    // const [updateProfile] = useUpdateProfile(auth);

    // const onSubmitParam = async data => {
    //     await createUserWithEmailAndPassword(data.email, data.password);
    //     sendEmailVerification();
    //     await updateProfile({ displayName: data.name });
    //     reset();
    //     toast.success('Account created successfully. Please verify your email.')
    // }



    const { register, formState: { errors }, handleSubmit, trigger, reset } = useForm();
    const [btnState, setBtnState] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [authUser] = useAuthState(auth);
    const [userName, setUserName] = useState('');
    const [token] = useToken(user || gUser, userName || gUser?.displayName);
    // console.log(authUser?.email);

    // console.log(gUser)

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    })

    if (user || gUser) {
        navigate(from, { replace: true })
    }

    let signUpError;
    if (error) {
        signUpError = <p className='text-red-500 py-3'>{error?.message || gError?.message}</p>
    }

    let socialError
    if (gError) {
        socialError = <p className='text-red-500 py-3'>{gError?.message}</p>
    }

    let userInfo = {}
    const onSubmit = async data => {
        setBtnState(true);
        //set display name in state for token and update name in firebase
        const displayName = data.name;
        // console.log(displayName);
        await createUserWithEmailAndPassword(data.email, data.password);
        setUserName(displayName);
        // await updateProfile( {displayName} );


        userInfo = {
            email: data.email,
            name: data.name,
            password: data.password,
            role: 'user',
            ocupation: data.ocupation || "N/A",
            dob: data.dob || "N/A",
            phone: data.phone || "N/A",
            address: data.address || "N/A",
            photoURL: data.img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
        }
        // console.log(userInfo)
        // PUT API
        fetch(`https://floating-ocean-13139.herokuapp.com/users/${data.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userInfo
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            }
            )
        reset();
        toast.success('Account created successfully.')
    }



    const email = authUser?.email;

    userInfo = {
        email: authUser?.email,
        name: authUser?.displayName,
        photoURL: authUser?.photoURL,
        role: 'user',
        ocupation: "N/A",
        dob: "N/A",
        phone: "N/A",
        address: "N/A"
    }

    //Handle google signing

    const handleGoogleSigning = async () => {
        await signInWithGoogle();
    }

    useEffect(() => {
        //PUT API for updating users image
        const url = `https://floating-ocean-13139.herokuapp.com/users/${email}`
        // console.log(url)
        if (email && !btnState) {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userInfo
                })
            })
        }
    }, [userInfo, email, btnState])
    return (
        <div className="sign-up-container">
            <form className='toggle_form' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='custom_font'>Create Account</h1>
                <div className="social-links">
                    <div>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                </div>
                <span className='custom_font toggle_form_span'>or use your email for registration</span>
                <input type="text" placeholder="Name"
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3, message: 'Minimum 3 character required'
                        }
                    })}

                    onKeyUp={() => {
                        trigger('name')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font custom_font_size'>{errors?.name?.message}</small>


                <input type="email" placeholder="Email"
                    {...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Please enter a valid Email"
                        }
                    })}
                    onKeyUp={(e) => {
                        trigger('email')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font custom_font_size'>{errors?.email?.message}</small>


                <input type="password" placeholder="Password"
                    {...register('password', {
                        required: 'Password is required',
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: "Minimum eight characters, at least one uppercase and one number"
                        }
                    })}
                    onKeyUp={() => {
                        trigger('password')
                    }}
                />
                <small className='text-[#FF4B2B] custom_font custom_font_size'>{errors?.password?.message}</small>

                <small className='text-center'>{signUpError}</small>
                <button type="submit" className="toggle_form_button form_btn">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
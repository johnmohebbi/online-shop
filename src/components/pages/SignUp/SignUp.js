import React,{ useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { validate } from './validate';
import styles from './styles/Signup.module.css';
const SignUp = () => {
    const navigate = useNavigate()
    const [inputValues,setInputValues] = useState({
        userName:'', 
        email:'',
        password:''
    })

    const [thouched,setThouched] = useState({})
    const [errors,setErrors] = useState({})

    const ChangeHandler = (event)=>{
        setInputValues({
            ...inputValues,
            [event.target.name]:event.target.value
        })
    }
 
    const blurHandler = (event)=>{
        setThouched({...thouched,[event.target.name]:true})
    }
    const submitHandler =(e)=>{
        e.preventDefault()
        
        const resolve = new Promise(resolve =>setTimeout(resolve,2000));
        const regect = new Promise((resolve,regect) =>setTimeout(regect,2000));
        
        if (!Object.keys(errors).length) {
            toast.promise(resolve,{
                pending: 'Please Wait.',
                success: ' Successfully registered👌',
            })
            setTimeout(()=>{
                navigate('/')
            },4000)
          
        } else {
            toast.promise(regect,{
                pending: 'Please Wait.',
                error: 'Information is not valid.'
            })
            setThouched({
                userName:true,
                email:true,
                password:true,
                
            })
        }
    }
    useEffect(()=>{
        setErrors(validate(inputValues,'signup'))
    },[inputValues])
    
    return (
            <div className={styles.container}>
        <form onSubmit={submitHandler} className={styles.form}>
                <h2>Sign Up</h2>
                <section>
                <div className={styles.formContainerInput}>
                <input className=' w-full placeholder:text-gray-400 ' type="text" name='userName' value={inputValues.username} placeholder='userName' onChange={ChangeHandler} onBlur={blurHandler} autoComplete='off'/>
                <span className={styles.borderFocus}></span>
                {errors.userName && thouched.userName && <span>{errors.userName}</span>}
                </div>
                <div className={styles.formContainerInput}>
                <input className=' w-full placeholder:text-gray-400 ' type="text" name='email' value={inputValues.email} placeholder='email' onChange={ChangeHandler} onBlur={blurHandler} autoComplete='off'/>
                <span className={styles.borderFocus}></span>
                {errors.email && thouched.email && <span>{errors.email}</span>}
                </div>
                <div className={styles.formContainerInput}>
                <input className=' w-full placeholder:text-gray-400 ' type="password" name='password' value={inputValues.password} placeholder='password' onChange={ChangeHandler} onBlur={blurHandler} autoComplete='off'/>
                <span className={styles.borderFocus}></span>
                {errors.password && thouched.password && <span>{errors.password}</span>}

                </div>
                </section>
                <div className='w-full text-center'>
                    <button className={styles.btnSubmit} type='submit'> Sign Up</button>                
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
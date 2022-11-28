import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const SignIn = () => {

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        signIn()
      }

    const [allPlayers, setAllPlayers] = useState([]);
    const [userId, setUserId] = useState(0)

    const signIn = () => {
        localStorage.setItem("id", userId)
        console.log("signed in successfully with ID " + userId)
    }

    useEffect(() => {
        const getAllPlayers = () => {
            fetch("http://localhost:8080/")
            .then(response => response.json())
            .then(players => {
              const newPlayersArray = [];
              for (const p of players){
                newPlayersArray.push(p)
              }
                setAllPlayers(newPlayersArray)
              }) 
            .catch(error => console.error(error))
            }
        getAllPlayers()    
    }, [])

    const usernameExists = input => {
        for (let i=0; i<allPlayers.length;i++){
            if (input === allPlayers[i].username){
                return true
            }
        }
        return false
    }

    const passwordIsCorrect = input => {
        for (let i=0; i<allPlayers.length;i++){
            if (input === allPlayers[i].password){
                setUserId(allPlayers[i].ID)
                return true
            }
        }
        return false
    }

    return(
        <div className='basic-font'>
            <h3 className="text-center">Sign In</h3>
                <Form
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {}
                        if (!values.username) {
                        errors.username = 'Required'
                        }
                        if(!usernameExists(values.username)){
                        errors.username = 'User not found'    
                        }
                        if (!values.password) {
                        errors.password = 'Required'
                        }
                        if (!passwordIsCorrect(values.password)){
                        errors.password = 'Password incorrect'    
                        }
                        return errors
                    }}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                        <Field name="username">
                            {({ input, meta }) => (
                            <div>
                                <label>Username</label>
                                <input {...input} type="text" placeholder="Username" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <Field name="password">
                            {({ input, meta }) => (
                            <div>
                                <label>Password</label>
                                <input {...input} type="password" placeholder="Password" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                            Submit
                            </button>
                            <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                            >
                            Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    )}
                />
        </div>
    )
}

export default SignIn
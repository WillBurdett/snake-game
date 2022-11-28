import React, { useEffect, useState } from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const SignIn = () => {

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        await createUser({
            username: values.username,
            email: values.email,
            password: values.password
        })
      }

    const [allPlayers, setAllPlayers] = useState([]);

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

    const createUser =  async newUser => {
        fetch("http://localhost:8080/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // this block adds our submitted cake to the database
            },
            body: JSON.stringify(newUser), // this returns our new book object, so we can .then update the component live
        })
            .then((response) => response.json)
            //.then((data) => setAllUsers([allUsers]))
            .catch((error) => console.log(error));
    };

    const usernameExists = input => {
        for (let i=0; i<allPlayers.length;i++){
            if (input === allPlayers[i].username){
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
import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const SignUp = () => {

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        await createUser({
            username: values.username,
            email: values.email,
            password: values.password
        })
      }

    const [allUsers, setAllUsers] = useState([]);

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

    return(
        <div className='basic-font'>
            <h3 className="text-center">Sign Up if you're new</h3>
                <Form
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {}
                        if (!values.username) {
                        errors.username = 'Required'
                        }
                        if (!values.email) {
                        errors.email = 'Required'
                        }
                        if (!values.password) {
                        errors.password = 'Required'
                        }
                        if (!values.confirm) {
                        errors.confirm = 'Required'
                        } else if (values.confirm !== values.password) {
                        errors.confirm = 'Must match'
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
                        <Field name="email">
                            {({ input, meta }) => (
                            <div>
                                <label>Email</label>
                                <input {...input} type="text" placeholder="Email" />
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
                        <Field name="confirm">
                            {({ input, meta }) => (
                            <div>
                                <label>Confirm</label>
                                <input {...input} type="password" placeholder="Confirm" />
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

export default SignUp
import React from 'react'
import { Form, Field } from 'react-final-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const SignInScreen = () => {
    return(
        <div className="game-area">
        <div class="sign-in--container">
            <div class="sign-in--content basic-font">
        
                <h3 className="basic-font text-center">Sign Up if you're new</h3>
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
        </div>
        </div>
    )
}

export default SignInScreen
# React Stripe Hooks

## Introduction

This tiny package is a wrapper around ```react-stripe-elements``` enabling you to use Stripe as a hook without the boilerplate.

## Installation

```shell
npm i react-stripe-hooks
```

## Example

```javascript
import React, { useState } from 'react'
import { StripeProvider, useStripe } from 'react-stripe-hooks'
import { CardElement } from 'react-stripe-elements'

function PaymentForm() {
    return (
        <StripeProvider apiKey="yourstripeapikey">
            <Form />
        </StripeProvider>
    )
}

function Form() {
    const stripe = useStripe()

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const handleSubmit = event => {
        event.preventDefault()

        const paymentMethod = {
            payment_method_data: {
                billing_details: {
                    name: formState.name,
                    email: formState.email,
                }
            }
        }

        stripe.handleCardPayment(clientSecret, paymentMethod).then(result => {
            if (result.error) {
                console.error(result.error.message)
            } else {
                console.log(result.paymentIntent.payment_method)
            }
        });
    }

    return (
        <form onSubmit={event => handleSubmit(event)}>
            {/* Name input */}
            {/* Email input */}

            <CardElement />
        </form>
    )
}
```

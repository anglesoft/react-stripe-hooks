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

export function PaymentForm() {
    const stripe = useStripe()

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    })

    const submit = event => {
        event.preventDefault()

        const paymentMethod = {
            payment_method_data: {
                billing_details: {
                    name: formState.name,
                    email: formState.email,
                }
            }
        }

        stripe.handleCardPayment(clientSecret, paymentMethod).then(response => {
            if (response.error) {
                console.error(response.error.message)
            } else {
                console.log(response.paymentIntent.payment_method)
            }
        });
    }

    return (
        <StripeProvider apiKey="yourstripeapikey">
            <form onSubmit={event => submit(event)}>
                {/* Name input */}
                {/* Email input */}

                <CardElement />
            </form>
        </StripeProvider>
    )
}
```

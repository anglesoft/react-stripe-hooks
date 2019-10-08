import React, { useContext, createContext } from 'react'
import { StripeProvider as StripeBaseProvider, Elements, injectStripe } from 'react-stripe-elements'

const Context = createContext()

const useStripe = () => useContext(Context)

const HookProvider = ({ children, stripe }) => (
    <Context.Provider value={stripe}>
        {children}
    </Context.Provider>
)

const StripeHookProvider = injectStripe(HookProvider)

const StripeProvider = ({ apiKey, children, stripe }) => (
    <StripeBaseProvider apiKey={apiKey} stripe={stripe}>
        <Elements>
            <StripeHookProvider>
                {children}
            </StripeHookProvider>
        </Elements>
    </StripeBaseProvider>
)

export {
    useStripe,
    StripeHookProvider,
    StripeProvider,
}

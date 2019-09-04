import React, { useContext, createContext } from 'react'
import { StripeProvider as StripeBaseProvider, Elements, injectStripe } from 'react-stripe-elements'

const Context = createContext()

export const useStripe = () => useContext(Context)

const HookProvider = ({ children, stripe }) => (
    <Context.Provider value={stripe}>
        {children}
    </Context.Provider>
)

export const StripeHookProvider = injectStripe(HookProvider)

export const StripeProvider = ({ apiKey, children }) => (
    <StripeBaseProvider apiKey={apiKey}>
        <Elements>
            <StripeHookProvider>
                {children}
            </StripeHookProvider>
        </Elements>
    </StripeBaseProvider>
)

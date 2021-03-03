/* eslint-disable */
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

import Layout from 'components/Layout';

const Form = dynamic({
    loader: async () => {
        const { use_panic_hook, gen_form } = await import('../../pkg/next_wasm.js');

        return function form() {
            useEffect(() => {
                use_panic_hook()
                gen_form({ name: "", age: 0, permissions: "user" }, []);
            }, []);

            return <div id="page-root" />
        };
    },
})

export default function form() {
    return (
        <Layout title="WebAssembly Form">
            <Form />
            <style global jsx>
                {`
                    form {
                        width: 20rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        margin: 5rem auto;
                    }
                    form > h1 {
                        margin-bottom: 2rem;
                    }
                    section > p {
                        line-height: 100%;
                        font-weight: 600;
                    }
                    label {

                    }
                    input[type=text], input[type=number] {
                        margin: 12px 0;
                        border-radius: 0.5rem;
                        height: 1.5rem;
                        font-size: 1rem;
                        padding: 0.5rem;
                        border: solid;
                        border-color: lightgrey;
                        border-width: 1px;
                    }
                    input[type=submit] {
                        height: 2.25rem;
                        border-radius: 0.5rem;
                        background-color: rgba(0,0,0,0.92);
                        border: none;
                        color: white;
                        font-size: 1rem;
                        margin-top: 2rem;
                        width: 100%;
                    }
                `}
            </style>
        </Layout>
    );
}

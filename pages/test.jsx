import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'



export default function Home({ testData }) {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const router = useRouter();

    const addTest = () => {
        axios.post("http://localhost:3000/api/test/add", {
            name,
            email
        }).then(async(response) => {
            // this refreshes the props/data without actually refreshing the page
            router.replace(router.asPath);
        })
    };

    return (
        <>
            <div>
                <input type="text" name="name" id="name" placeholder='Name' onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <input type="text" name="email" id="email" placeholder='Email' onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
                <button onClick={addTest}>Add</button>

            </div>
            <div className={styles.container}>
                {testData.map(item => (
                    <div key={item._id}>
                        <h1>{item.name}</h1>
                        <p>{item.email} </p>
                    </div>
                ))}
            </div>
        </>

    )
}

export const getServerSideProps = async () => {
    var response = await axios.get("http://localhost:3000/api/test/getAll");

    return {
        props: {
            testData: response.data.testData
        }
    }

}

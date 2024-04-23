import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import Side from '../../Components/Side';


function Themes(props) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    //const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3800/api/themes');
            if (!response.ok) {
            throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            console.log(result.themes)
            setData(result);
        } catch (error) {
            setError(error);
        }
        };

        fetchData();
    }, []);

    if (error) {
        console.log(error)
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='lg:flex'>
            <div className=''>
                <Side></Side>
            </div>
            <div className="overflow-x-auto w-full pt-5">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Identificador</Table.HeadCell>
                        <Table.HeadCell>Descripción</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {data.themes.map((theme, i) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {theme._id}
                            </Table.Cell>
                            <Table.Cell>{theme.description}</Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                            </a>
                            </Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default Themes;
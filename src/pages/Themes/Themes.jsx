import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";
import Side from '../../Components/Side';
import { HiOutlinePlus, HiOutlinePencilAlt, HiOutlineTrash } from "react-icons/hi";


function Themes() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [adminRol, setRol] = useState(null);
    const [user, setUser] = useState(null);
    //const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3800/api/themes');
            if (!response.ok) {
            throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        }
    };

        fetchData();
    }, []);

    useEffect(() => {
        const tpmuser = sessionStorage.getItem('user');
        if (tpmuser) {
          setUser(JSON.parse(tpmuser));
        }
      }, []);

      useEffect(() => {
        if (user) {
            setRol([3].includes(user.rol.id) ?
             true: false)
        }
      }, [user]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className='lg:flex'>
            <div className=''>
            </div>
            <div className="overflow-x-auto w-full p-2">
                <div className="flex flex-wrap gap-2">
                    <Button>
                        Agregar tematica
                        <HiOutlinePlus   className="mr-2 h-5 w-5" />
                    </Button>
                </div>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Identificador</Table.HeadCell>
                        <Table.HeadCell>Descripción</Table.HeadCell>
                        <Table.HeadCell>
                            Acciones
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {data.themes.map((theme, i) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {theme._id}
                            </Table.Cell>
                            <Table.Cell>{theme.description}</Table.Cell>
                            <Table.Cell>
                                <div className="flex flex-wrap gap-2">
                                    <Button>
                                        <HiOutlinePencilAlt  className="mr-2 h-5 w-5" />
                                    </Button>
                                    {
                                        adminRol ? 
                                        <Button>
                                            <HiOutlineTrash  className="ml-2 h-5 w-5" />
                                        </Button> : ''
                                    }
                                </div>
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
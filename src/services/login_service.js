import React, { useState } from 'react';
import axios from 'axios';

export const login  = async (data) => {
    try {
        const response = await axios.post('http://localhost:3800/api/login', { data });
        console.log(response)
        alert('Data created successfully!');
      } catch (error) {
        console.error('Error al accesar:', error);
    }
} 
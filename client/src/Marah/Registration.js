import React,{useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Login from './Login';
import RegisterModal from '../components/RegisterModal/RegisterModal';

const Registration = () => {

  
    return (
      <>
        <h1>Register</h1>
        <RegisterModal/>
      </>
    );
  };

export default Registration;


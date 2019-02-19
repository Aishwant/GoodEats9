import React, { Component } from 'react'
import axios from "axios";
import { Redirect } from "react-router-dom";

//Authenticate

import {
  LOG_IN,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from './types';

//CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getState) => {

  //User Loading
  dispatch({ type: USER_LOADING });

  //Get token from state
  const token = getState().authReducer.token;

  if(token){
    dispatch({
      type: USER_LOADED
    });
  }

}



export const loginAuth = (credentials) => dispatch => {
    axios
      .post("/api/auth/login", credentials)
      .then(res => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        localStorage.removeItem('token');
        dispatch({
          type:LOGIN_FAIL
        })
      });
  };


//Register
export const register = (credentials) => dispatch => {
  axios
    .post("/api/auth/register", credentials)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type:AUTH_ERROR
      })
    });
};

//LOGOUT
export const logout = () => (dispatch, getState) => {

  //Get token from state
  const token = getState().authReducer.token;

  if(token){
    dispatch({
      type: LOGOUT_SUCCESS
    });
  }


}
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';


const initialColor = {
  color: '',
  code: {
    hex: ''
  }
};

function AddNewColor(props) {
  const [color, setColor] = useState(initialColor)
  const history = useHistory();
  const { updateColors } = props;
}

const addNewColor = e => {
  e.preventDefault();
  axiosWithAuth()
    .post()
}


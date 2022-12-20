import "./accountEdit.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import NavBar from "../../G-components/navBar";

const AccountEdit = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [errorPassword, setErrorPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/edit/${decoded._id}`)
      .then((response) => {
        // console.log(response.data[0]);
        const userData = response.data[0];
        setEmail(userData.email);
      });
  }, []);

  // vallidate signin form
  const validateForm = async () => {
    let passwordValid = true;
    let confirmValid = true;

    if (password.length >= 8) {
      setError("");
    } else {
      setErrorPassword("Password must be at least 8 characters");
      passwordValid = false;
    }

    if (password === confirm) {
      setError("");
    } else {
      setError("Confirm password is not matched");
      confirmValid = false;
    }
    return { passwordValid, confirmValid };
  };

  const editData = {
    password: password,
  };

  // validate and update user information
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formValidity = await validateForm();
    if (formValidity.passwordValid && formValidity.confirmValid) {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API}/edit/${decoded._id}`,
          editData
        );
        navigate("/dashboard");
      } catch (error) {
        if (error) {
          setError(error.response.data.message);
        }
      }
    } else {
      console.log("noooooooooooooo");
    }
  };

  return (
    <div>
    <NavBar />
      <div className='form-account rounded-lg'>
        <form className='shadow-xl p-5 rounded-md '>
          <h1 className='block text-3xl font-medium text-black-700 text-center'>
            Edit Account
          </h1>
          <div className='box-info'>
            <div>
              <label>
                E-mail:
                <br></br>
                <input
                  value={email}
                  type='email'
                  name='email'
                  className='relative mt-1 rounded-md w-full 
                  h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
                  p-2.5'
                />
              </label>
            </div>
            <div className='mt-5'>
              <label>
                Password:
                <br></br>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type='password'
                  placeholder='********'
                  name='email'
                  className='relative mt-1 rounded-md w-full 
          h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
          p-2.5'
                />
              </label>
            </div>
            <div className='mt-5'>
              <label>
                Confirm Password:
                <br></br>
                <input
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  type='password'
                  placeholder='********'
                  name='email'
                  className='relative mt-1 rounded-md w-full 
          h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
          p-2.5'
                />
              </label>

              {errorPassword && (
                <div className='text-center bg-red-400 rounded-sm p-2 mt-3 font-bold text-neutral-600'>
                  {errorPassword}
                </div>
              )}
              {error && (
                <div className='text-center bg-red-400 rounded-sm p-2 mt-3 font-bold text-neutral-600'>
                  {error}
                </div>
              )}

              <div className='mt-5 flex justify-center box-button'>
                <button
                  className='shadow bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded mr-10'
                  type='button'
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button
                  className='shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded'
                  type='button'
                >
                  <Link to='/dashboard'>Cancel</Link>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountEdit;

import "./accountEdit.css";
import { Link } from "react-router-dom";

const AccountEdit = () => {
  return (
    <div>
      <div className='form-account'>
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
                  type='password'
                  placeholder='********'
                  name='email'
                  className='relative mt-1 rounded-md w-full 
          h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
          p-2.5'
                />
              </label>


              <div className='mt-5 flex justify-center box-button'>
              <button
                className='shadow bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded mr-10'
                type='button'
              >
                <Link to='/dashboard'>Submit</Link>
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

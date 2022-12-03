import "./accountEdit.css";

const AccountEdit = () => {
  return (
    <div>
      <div className='form-account'>
        <form class='shadow-xl p-5  rounded-md '>
          <h1 class='block text-3xl font-medium text-black-700 text-center'>
            Edit Account
          </h1>
          <div class='' className='box-info'>
            <div>
              <label>
                E-mail:
                <br></br>
                <input
                  type='email'
                  name='email'
                  class='relative mt-1 rounded-md w-full 
                  h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
                  p-2.5'
                />
              </label>
            </div>
            <div class='mt-5'>
              <label>
                Password:
                <br></br>
                <input
                  type='password'
                  placeholder='******************'
                  name='email'
                  class='relative mt-1 rounded-md w-full 
          h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
          p-2.5'
                />
              </label>
            </div>
            <div class='mt-5'>
              <label>
                Confirm Password:
                <br></br>
                <input
                  type='password'
                  placeholder='******************'
                  name='email'
                  class='relative mt-1 rounded-md w-full 
          h-10 bg-gray-50  border-gray-300 first-letter:focus:ring-blue-500 focus:border-blue-500 block
          p-2.5'
                />
              </label>


              <div class='mt-5 flex justify-center' className='box-button'>
              <button
                class='shadow bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded'
                type='button'
              >
                Submit
              </button>
              <button
                class='shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded '
                type='button'
              >
                Cancel
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

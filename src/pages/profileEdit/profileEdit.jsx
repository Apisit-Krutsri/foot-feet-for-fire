import "./profileEdit.css";
import React, { useState } from "react";
import UploadAvatar from "./uploadAvatar/uploadAvatar";

const ProfileEdit = () => {
  const [date, setDate] = useState();
  console.log("date", date);
  return (
    <div className="content-pro">
      <div>
      <UploadAvatar />
      </div>
      <div className='box-profile'>
        <div className='box-one'>
          <div>
            <label
              for='first_name'
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              First name
            </label>
            <input
              type='text'
              id='first_name'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-72 p-2.5 '
              placeholder='Frist name'
              required
            />
          </div>
          <div>
            <label
              for='last_name'
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Last name
            </label>
            <input
              type='text'
              id='last_name'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-72 p-2.5  '
              placeholder='Last name'
              required
            />
          </div>
        </div>

        <div className='box-two'>
          <div>
            <label
              for='w-weight'
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Weight (Kg)
            </label>
            <input
              type='text'
              id='w-weight'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-72 p-2.5 '
              placeholder='0'
              required
            />
          </div>
          <div>
            <label
              for='h-height'
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Height (Cm)
            </label>
            <input
              type='text'
              id='h-height'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-72 p-2.5  '
              placeholder='0'
              required
            />
          </div>
        </div>

        <div className='box-three'>
          <div>
            <label
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
              for='grid-state'
            >
              Gender
            </label>
            <div class='relative'>
              <select
                class='block  w-72 bg-gray-50 border border-gray-200 text-gray-700 p-2.5 rounded-lg leading-tight '
                id='grid-state'
              >
                <option>Male</option>
                <option>Female</option>
              </select>

              {/* <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center  text-gray-700'>
                <svg
                  class='fill-current h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                >
                  <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                </svg>
              </div> */}
            </div>
          </div>

          <div className='calen'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-1'
              for='grid-state'
            >
              Date of Birth
            </label>
            <input
              type='date'
              onChange={(e) => setDate(e.target.value)}
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-72 p-2.5  '
            ></input>
            {/* <input
          
            type='date'
            id='birthday'
            name='birthday'
            class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-64 h-10 p-2.5  block '
          ></input> */}
          </div>
        </div>

        <div className='box-four'>
          <div>
            <label
              for='quote'
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Motivation quote for yourself
            </label>
            <input
              className='quote'
              type='text'
              id='quote'
              class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-72 p-2.5 '
              placeholder='Motivation quote for yourself'
              required
            />
          </div>
        </div>

        <div className='box-five' class=''>
          <div className="setGoal">
            <label
              for='quote'
              class='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
            >
              Set Goal
            </label>
            <div>
              <div>
                <div class='form-check' className='box-cal '>
                  <input
                    class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='radio'
                    name='flexRadioDefault'
                    id='flexRadioDefault1'
                  />
                  <label
                    class='form-check-label inline-block text-gray-800 mr-2 mt-1'
                    for='flexRadioDefault1'
                  >
                    Calories
                  </label>
                  <div class='relative'>
                    <select
                      class='block mr-2 w-24 mt-1 bg-gray-50 border border-gray-200 text-gray-700 p-2 rounded-lg leading-tight '
                      id='grid-state'
                    >
                      <option>Day</option>
                      <option>Week</option>
                    </select>
                  </div>

                  <input
                    type='text'
                    id='kcal'
                    class='bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-lg  w-80 p-2.5 '
                    placeholder='kcal'
                    required
                  />
                </div>

                <div class='form-check' className="box-time">
                  <input
                    class='form-check-input appearance-none rounded-full h-4 mt-1 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                    type='radio'
                    name='flexRadioDefault'
                    id='flexRadioDefault2'
                    
                  />
                  <label
                    class='form-check-label  mt-1 mr-2 inline-block text-gray-800'
                    for='flexRadioDefault2'
                  >
                    Time
                  </label>
                  <div class='relative'>
                    <select
                      class='block mr-2 w-24 mt-1 bg-gray-50 border border-gray-200 text-gray-700 p-2 rounded-lg leading-tight '
                      id='grid-state'
                    >
                      <option>Day</option>
                      <option>Week</option>
                    </select>
                  </div>

                  <input
                    type='text'
                    id='minutes'
                    class='bg-gray-50 border mt-1 border-gray-300 text-gray-900 text-sm rounded-lg  w-80 p-2.5 '
                    placeholder='minutes'
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='mt-5 ' className='box-button'>

        <button
                class='w-60 mt-3 shadow bg-emerald-500 hover:bg-emerald-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded'
                type='button'
              >
                Submit
              </button>

              <button
                class='w-60  mt-3 shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-8 rounded '
                type='button'
              >
                Cancel
              </button>

              
            </div>
      </div>


    </div>
  );
};

export default ProfileEdit;

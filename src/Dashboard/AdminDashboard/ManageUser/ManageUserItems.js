import React, { useContext, useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useForm } from 'react-hook-form';
import 'reactjs-popup/dist/index.css';
import './ManageUserItems.css';
import { articleDataContext } from '../../../App';

const ManageUserItems = ({ user }) => {
    const { register, handleSubmit, formState: { errors }, trigger, reset } = useForm();
    const valueObj = useContext(articleDataContext);
    const { users } = valueObj;
    const { admin, userInfo, _id } = user;
    const { email, name } = userInfo;
    const membershipPlan = userInfo?.membershipPlan;
    const [refetchAdminRole, setRefetchAdminRole] = useState(false);



    const onSubmitParam = async data => {
        setRefetchAdminRole(true);

        const user = {
            admin: true,
            userInfo: {
                ...userInfo,
                ocupation: data.possition,
            }
        }
        //update user by put api
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((res) => res.json())
            .then((data) => {
                //reset form
            });
        reset();
    }
    return (
        <tr>
            <td className='py-5 pl-5'>{name}</td>
            <td>{email}</td>
            <td>{admin || refetchAdminRole ? "Admin" : "User"}</td>
            <td>{membershipPlan ? "Premium" : `${admin || refetchAdminRole ? "All Access" : "Free"}`}</td>
            <td><button className='btn btn-neutral btn-xs text-warning'>Active</button></td>
            <td className='text-xl font-bold cursor-pointer'>
                <Popup className="popup_content" trigger={<button>...</button>} position="left center">
                    <form className='py-5 px-3' onSubmit={handleSubmit(onSubmitParam)}>
                        <input type="text" placeholder='Admin possition' className="input h-8 w-full max-w-xs"
                            {...register("possition", {
                                required: true,
                                minLength: {
                                    value: 3, message: 'Minimum 3 character required'
                                }
                            })}

                            onKeyUp={() => {
                                trigger('possition')
                            }}
                        />
                        <small className='text-[#FF4B2B] custom_font_size'>{errors?.name?.message}</small>

                        <button className='btn btn-outline btn-primary btn-sm mt-5' type="submit">Make Admin</button>
                    </form>
                </Popup>

            </td>
        </tr>
    );
};

export default ManageUserItems;
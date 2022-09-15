/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';

import SelectMultiple from "../../../components/UIs/SelectMultiple/SelectMultiple";

import axios from './../../../utils/axios';

import { useTranslation } from 'next-i18next';

import cls from './addAddress.module.scss'


const AddAddress = ({ setOpenNewAddress, addressDataToEdit }) => {
  // COMPONENT HOOKS
  const [type, setType] = useState(addressDataToEdit ? addressDataToEdit.type : '');
  const [city, setCity] = useState(addressDataToEdit ? addressDataToEdit.city : '');
  const [street, setStreet] = useState(addressDataToEdit ? addressDataToEdit.street : '');
  const [country, setCountry] = useState(addressDataToEdit ? addressDataToEdit.country : '');
  const [zipCode, setZipCode] = useState(addressDataToEdit ? addressDataToEdit.zipCode : '');

  const overlay = useRef()
  const { t, i18n } = useTranslation('common')

  const closeModal = (e) => {
    if(overlay.current === e.target) {
      setOpenNewAddress(false)
    }
  }
  const close = () => {
    setOpenNewAddress(false)
  }

  const addAddress = async() => {
    const addressData = { type, city, street, country, zipCode }

    if (countries.map(c => c.text).indexOf(country) === -1) return errorNotify("Error, country is not valid");

    if (countries.find(c => c.text === country).cities.indexOf(city) === -1) return errorNotify("Error, city is not valid");

    if(type && city && street && country && zipCode) {

      const res = await axios.post(`/user/${_id}/address`, {address: addressData}).catch(err => errorNotify(err?.response?.data?.err))
  
      if(!res) return;
  
      dispatch(userActions.updateUser({addresses: res.data.success}))

      successNotify(t('addNAddress'))
  
      setOpenNewAddress(false);

    } else {
      errorNotify(t('fillError'))
    }
  }

  const editAddress = async(addressId) => {
    const addressData = {
      id: addressId,
      address: {
        type,
        country,
        city,
        street,
        zipCode,
        isDefault: addressDataToEdit.isDefault
      }
    }

    const res = await axios.patch(`/user/${_id}/address`, addressData).catch(err => errorNotify(err?.response?.data?.err))

    if(!res) return;

    dispatch(userActions.updateUser({addresses: res.data.success}))

    successNotify(t('updatedAddress'))
  
    setOpenNewAddress(false);

  }

  // TOSTIFY ALERTS
  const successNotify = (msg) => toast.success(`${msg}`);
  const errorNotify = (msg) => toast.error(`${msg}`);

  const typeList = [
    'home',
    'work',
    'other'
  ]

  return (
    <div className={cls.overlay} ref={overlay} onClick={(e) => closeModal(e)}>
      <div className={cls.area}>

        <div className={cls.area__wrapper}>
          <div className={`${cls.close} ${cls[i18n.language]}`} onClick={close}>
            <i className="fa-solid fa-xmark"></i>
          </div>

          <div className={cls.area__content}>

            <h3>Add Address</h3>

            <div className={cls.field}>
              <label htmlFor="">Type</label>

              <SelectMultiple results={typeList} select={setType} value={type} placeholder="Type" />

            </div>

            <div className={cls.field}>
              <label htmlFor="">Country</label>
              <input placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>

            <div className={cls.field}>
              <label htmlFor="">City</label>
              <input list="cities" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className={cls.field}>
              <label htmlFor="">Street</label>
              <input type="text" placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className={cls.field}>
              <label htmlFor="">Zip Code</label>
              <input type="text" placeholder="Zip Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>

          </div>

          <div className={`${cls.actions} ${cls[i18n.language]}`}>

            <button className={cls.actions__cancel} onClick={close}>Cancel</button>

            <button className={cls.actions__add}>Add Address</button>
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddAddress;
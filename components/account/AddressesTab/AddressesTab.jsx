/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import AddAddress from '../../modals/AddAddress/AddAddress';

import Grid from '@mui/material/Grid';

import { toast } from 'react-toastify';

import { useTranslation } from 'next-i18next';

import cls from './addressesTab.module.scss';

const AddressesTab = () => {
  const [selectedAddress, setselectedAddress] = useState('one');
  const [openAddAddress, setOpenAddAddress] = useState(false);
  const { t, i18n } = useTranslation('common')

  const setAddressActive = (address) => {
    setselectedAddress(address);
    successNotify('Address set to default successfully')
  }

  const successNotify = (msg) => toast.success(msg)

  return (
    <div className={cls.addressesTab}>

      <div className={cls.addressesTab__addBtn}>
        <button onClick={() => setOpenAddAddress(true)}><i className="fa-light fa-plus"></i> {t('account.addAddress')}</button>
      </div>

      <Grid container spacing={3}>

        <Grid item xs={12} sm={6} md={4}>

          <div className={cls.address}>

            <i className={`fa-solid fa-star ${selectedAddress === 'one' ? cls.active : ''} ${cls[i18n.language]}`} onClick={() => setAddressActive('one')}></i>

            <p><i className="fa-light fa-print"></i> Home</p>
            <p><i className="fa-regular fa-location-dot"></i> Egypt, Sohag</p>
            <p><i className="fa-regular fa-phone"></i> 01025864313</p>
            <p><i className="fa-light fa-mailbox"></i> 123456</p>

            <div className={cls.addressActions}>
              <button><i className="fa-regular fa-trash-can-list"></i> {t('account.remove')}</button>
              <i className="fa-regular fa-pen-to-square" onClick={() => setOpenAddAddress(true)}></i>
            </div>

          </div>

        </Grid>

        <Grid item xs={12} sm={6} md={4}>

          <div className={cls.address}>

            <i className={`fa-solid fa-star ${selectedAddress === 'two' ? cls.active : ''} ${cls[i18n.language]}`} onClick={() => setAddressActive('two')}></i>

            <p><i className="fa-light fa-print"></i> Home</p>

            <p><i className="fa-regular fa-location-dot"></i> Egypt, Sohag</p>

            <p><i className="fa-regular fa-phone"></i> 01025864313</p>

            <p><i className="fa-light fa-mailbox"></i> 123456</p>

            <div className={cls.addressActions}>
              <button><i className="fa-regular fa-trash-can-list"></i> {t('account.remove')}</button>
              <i className="fa-regular fa-pen-to-square" onClick={() => setOpenAddAddress(true)}></i>
            </div>

          </div>

        </Grid>

      </Grid>

      {/* <div className='empty'>
        <img src="/imgs/account/noAddresses.png" alt="emptyImage" />
        <h6>You have no addresses</h6>
      </div> */}

      {openAddAddress && <AddAddress setOpenNewAddress={setOpenAddAddress} />}

    </div>
  )
}

export default AddressesTab
import React from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { DoctorContainer, DoctorProfile, DoctorSpeciality } from './styles';

export interface AccountDoctorProps {
  name: string;
  speciality: string;
  crm: string;
  avatar?: string;
}

const AccountDoctor: React.FC<AccountDoctorProps> = ({ name, speciality, crm }) => (
  <DoctorContainer>
    <DoctorProfile>
      <Avatar size={50} icon={<UserOutlined />} />
      <article>
        <span className="name">{name}</span>
        <span className="crm">CRM {crm}</span>
      </article>
    </DoctorProfile>

    <DoctorSpeciality>{speciality}</DoctorSpeciality>
  </DoctorContainer>
);

export default AccountDoctor;

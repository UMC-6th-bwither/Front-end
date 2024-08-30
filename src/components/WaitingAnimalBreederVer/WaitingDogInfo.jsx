import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as A from '../../pages/WaitingAnimalBreederVer/WaitingAnimalBreederVer.style';

const WaitingDogInfo = React.forwardRef(
  ({ animalData, isEditMode, handleInputChange, editedData }, ref) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [images, setImages] = useState({
      feedingImage: '',
      vaccinationImage: '',
      virusCheckImage: '',
      parasiticImage: '',
      healthCheckImage: '',
    });
    useEffect(() => {
      handleInputChange({
        target: { name: 'character', value: animalData.character },
      });
      handleInputChange({
        target: { name: 'feature', value: animalData.feature },
      });
      handleInputChange({
        target: { name: 'feeding', value: animalData.feeding },
      });
      handleInputChange({
        target: { name: 'vaccination', value: animalData.vaccination },
      });
      handleInputChange({
        target: { name: 'virusCheck', value: animalData.virusCheck },
      });
      handleInputChange({
        target: { name: 'parasitic', value: animalData.parasitic },
      });
      handleInputChange({
        target: { name: 'healthCheck', value: animalData.healthCheck },
      });
    }, []);

    const handleIconClick = (item) => {
      setSelectedItem(item);
    };

    const closeModal = () => {
      setSelectedItem(null);
    };

    useEffect(() => {
      if (animalData.files) {
        const imagePaths = {
          feedingImage: '',
          vaccinationImage: '',
          virusCheckImage: '',
          parasiticImage: '',
          healthCheckImage: '',
        };

        animalData.files.forEach((file) => {
          switch (file.type) {
            case 'FEEDING':
              imagePaths.feedingImage = file.animalFilePath;
              break;
            case 'VACCINATION':
              imagePaths.vaccinationImage = file.animalFilePath;
              break;
            case 'VIRUS_CHECK':
              imagePaths.virusCheckImage = file.animalFilePath;
              break;
            case 'PARASITIC':
              imagePaths.parasiticImage = file.animalFilePath;
              break;
            case 'HEALTH_CHECK':
              imagePaths.healthCheckImage = file.animalFilePath;
              break;
            default:
              break;
          }
        });

        setImages(imagePaths);
      }
    }, [animalData.files]);

    return (
      <div ref={ref} style={{ marginBottom: '96px' }}>
        <A.InfoItem>
          <A.InfoTitle>{animalData.name}의 성격은요</A.InfoTitle>
          {isEditMode ? (
            <textarea
              name="character"
              value={editedData.character}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.character}</A.InfoContent>
          )}
        </A.InfoItem>
        <A.InfoItem>
          <A.InfoTitle>
            {animalData.name}는 이런 분양자에게 잘 맞아요
          </A.InfoTitle>
          {isEditMode ? (
            <textarea
              name="feature"
              value={editedData.feature}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.feature}</A.InfoContent>
          )}
        </A.InfoItem>
        <A.InfoItem>
          <A.InfoTitle>
            먹고 있는 사료 및 간식
            <A.InfoIcon
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              onClick={() => handleIconClick('food')}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </A.InfoIcon>
          </A.InfoTitle>
          {isEditMode ? (
            <textarea
              name="feeding"
              value={editedData.feeding}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.feeding}</A.InfoContent>
          )}
        </A.InfoItem>
        <A.InfoItem>
          <A.InfoTitle>
            예방 접종 내역
            <A.InfoIcon
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              onClick={() => handleIconClick('vaccination')}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </A.InfoIcon>
          </A.InfoTitle>
          {isEditMode ? (
            <textarea
              type="text"
              name="vaccination"
              value={editedData.vaccination}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.vaccination}</A.InfoContent>
          )}
        </A.InfoItem>
        <A.InfoItem>
          <A.InfoTitle>
            바이러스 질환 검사 내역
            <A.InfoIcon
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              onClick={() => handleIconClick('virus')}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </A.InfoIcon>
          </A.InfoTitle>
          {isEditMode ? (
            <textarea
              type="text"
              name="virusCheck"
              value={editedData.virusCheck}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.virusCheck}</A.InfoContent>
          )}
        </A.InfoItem>
        <A.InfoItem>
          <A.InfoTitle>
            기생충 예방약 투약
            <A.InfoIcon
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              onClick={() => handleIconClick('parasite')}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </A.InfoIcon>
          </A.InfoTitle>
          {isEditMode ? (
            <textarea
              type="text"
              name="parasitic"
              value={editedData.parasitic}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.parasitic}</A.InfoContent>
          )}
        </A.InfoItem>
        <A.InfoItem>
          <A.InfoTitle>
            수의사 검진 결과
            <A.InfoIcon
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              onClick={() => handleIconClick('checkup')}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M11.3333 5.83333C11.1565 5.83333 10.987 5.90357 10.8619 6.0286C10.7369 6.15362 10.6667 6.32319 10.6667 6.5V10.5C10.6667 10.6768 10.5964 10.8464 10.4714 10.9714C10.3464 11.0964 10.1768 11.1667 10 11.1667H2C1.82319 11.1667 1.65362 11.0964 1.5286 10.9714C1.40357 10.8464 1.33333 10.6768 1.33333 10.5V2.5C1.33333 2.32319 1.40357 2.15362 1.5286 2.0286C1.65362 1.90357 1.82319 1.83333 2 1.83333H6C6.17681 1.83333 6.34638 1.7631 6.4714 1.63807C6.59643 1.51305 6.66667 1.34348 6.66667 1.16667C6.66667 0.989856 6.59643 0.820286 6.4714 0.695262C6.34638 0.570238 6.17681 0.5 6 0.5H2C1.46957 0.5 0.960859 0.710714 0.585787 1.08579C0.210714 1.46086 0 1.96957 0 2.5V10.5C0 11.0304 0.210714 11.5391 0.585787 11.9142C0.960859 12.2893 1.46957 12.5 2 12.5H10C10.5304 12.5 11.0391 12.2893 11.4142 11.9142C11.7893 11.5391 12 11.0304 12 10.5V6.5C12 6.32319 11.9298 6.15362 11.8047 6.0286C11.6797 5.90357 11.5101 5.83333 11.3333 5.83333Z"
                fill="#2D2D2D"
              />
              <path
                d="M8.66728 1.83333H9.72061L5.52728 6.02C5.46479 6.08197 5.4152 6.15571 5.38135 6.23695C5.3475 6.31819 5.33008 6.40532 5.33008 6.49333C5.33008 6.58134 5.3475 6.66848 5.38135 6.74972C5.4152 6.83096 5.46479 6.90469 5.52728 6.96667C5.58925 7.02915 5.66299 7.07875 5.74423 7.11259C5.82547 7.14644 5.9126 7.16387 6.00061 7.16387C6.08862 7.16387 6.17576 7.14644 6.25699 7.11259C6.33823 7.07875 6.41197 7.02915 6.47394 6.96667L10.6673 2.78V3.83333C10.6673 4.01014 10.7375 4.17971 10.8625 4.30474C10.9876 4.42976 11.1571 4.5 11.3339 4.5C11.5108 4.5 11.6803 4.42976 11.8053 4.30474C11.9304 4.17971 12.0006 4.01014 12.0006 3.83333V1.16667C12.0006 0.989856 11.9304 0.820286 11.8053 0.695262C11.6803 0.570238 11.5108 0.5 11.3339 0.5H8.66728C8.49047 0.5 8.3209 0.570238 8.19587 0.695262C8.07085 0.820286 8.00061 0.989856 8.00061 1.16667C8.00061 1.34348 8.07085 1.51305 8.19587 1.63807C8.3209 1.7631 8.49047 1.83333 8.66728 1.83333Z"
                fill="#2D2D2D"
              />
            </A.InfoIcon>
          </A.InfoTitle>
          {isEditMode ? (
            <textarea
              type="text"
              name="healthCheck"
              value={editedData.healthCheck}
              onChange={handleInputChange}
              style={{
                display: 'block',
                width: '100%',
                maxWidth: '970px',
                height: '112px',
                padding: '8px 10px 8px 18px',
                borderRadius: '10px',
                border: '2px solid #f1f1f1',
                resize: 'none',
                fontFamily: `'Noto Sans KR'`,
                fontSize: '16px',
                fontWeight: '350',
                lineHeight: '24px',
                background: '#fff',
                boxSizing: 'border-box',
                textAlign: 'left',
                overflow: 'auto',
                verticalAlign: 'top',
              }}
            />
          ) : (
            <A.InfoContent>{animalData.healthCheck}</A.InfoContent>
          )}
        </A.InfoItem>
        {selectedItem && (
          <A.ModalOverlay onClick={closeModal}>
            <A.ModalContent onClick={(e) => e.stopPropagation()}>
              <A.CloseButton onClick={closeModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.8964 0.396447C15.0917 0.201184 15.4083 0.201184 15.6036 0.396447C15.7988 0.591709 15.7988 0.908291 15.6036 1.10355L8.70711 8L15.6036 14.8964C15.7988 15.0917 15.7988 15.4083 15.6036 15.6036C15.4083 15.7988 15.0917 15.7988 14.8964 15.6036L8 8.70711L1.10355 15.6036C0.908291 15.7988 0.591709 15.7988 0.396446 15.6036C0.201185 15.4083 0.201185 15.0917 0.396446 14.8964L7.29289 8L0.396447 1.10355C0.201185 0.908291 0.201185 0.591709 0.396447 0.396447C0.591709 0.201184 0.908291 0.201184 1.10355 0.396447L8 7.29289L14.8964 0.396447Z"
                    fill="#C5C5C5"
                  />
                </svg>
              </A.CloseButton>
              {selectedItem === 'food' && (
                <img
                  src={images.feedingImage}
                  alt="사료 및 간식 사진"
                  style={{
                    maxWidth: '80%',
                    maxHeight: '70%',
                    objectFit: 'contain',
                  }}
                />
              )}
              {selectedItem === 'vaccination' && (
                <img
                  src={images.vaccinationImage}
                  alt="예방 접종 내역 사진"
                  style={{
                    maxWidth: '80%',
                    maxHeight: '70%',
                    objectFit: 'contain',
                  }}
                />
              )}
              {selectedItem === 'virus' && (
                <img
                  src={images.virusCheckImage}
                  alt="바이러스 질환 검사 내역 사진"
                  style={{
                    maxWidth: '80%',
                    maxHeight: '70%',
                    objectFit: 'contain',
                  }}
                />
              )}
              {selectedItem === 'parasite' && (
                <img
                  src={images.parasiticImage}
                  alt="기생충 예방약 투약 사진"
                  style={{
                    maxWidth: '80%',
                    maxHeight: '70%',
                    objectFit: 'contain',
                  }}
                />
              )}
              {selectedItem === 'checkup' && (
                <img
                  src={images.healthCheckImage}
                  alt="수의사 검진 결과 사진"
                  style={{
                    maxWidth: '80%',
                    maxHeight: '70%',
                    objectFit: 'contain',
                  }}
                />
              )}
            </A.ModalContent>
          </A.ModalOverlay>
        )}
      </div>
    );
  },
);

WaitingDogInfo.displayName = 'WaitingDogInfo';

WaitingDogInfo.propTypes = {
  animalData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    feature: PropTypes.string.isRequired,
    feeding: PropTypes.string.isRequired,
    vaccination: PropTypes.string.isRequired,
    virusCheck: PropTypes.string.isRequired,
    parasitic: PropTypes.string.isRequired,
    healthCheck: PropTypes.string.isRequired,
    files: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        animalFilePath: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  isEditMode: PropTypes.bool.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  editedData: PropTypes.shape({
    character: PropTypes.string,
    feature: PropTypes.string,
    feeding: PropTypes.string,
    vaccination: PropTypes.string,
    virusCheck: PropTypes.string,
    parasitic: PropTypes.string,
    healthCheck: PropTypes.string,
  }).isRequired,
};

export default WaitingDogInfo;

import { useState } from 'react';

import Button from '../../components/Button/Button';

import { PageWrapper, UserCard, Avatar, UserInfo, UserTitle, InfoContainer } from './styles';

function Consultation_04() {
  const [userData, setUserData] = useState<any>(undefined);

  const RANDOM_USER_URL: string = "https://randomuser.me/api/";

  const getRandomUser = async () => {
    // GET в fetch идет по умолчанию
    const response = await fetch(RANDOM_USER_URL, {
      method: "GET"
    });
    // У промисов 3 статуса может быть
    // 1 - pending - запрос отправлен, но ответ еще не пришел
    // 2 - fullfiled - ответ пришел и он положительный. В нашем примере нам придуйт данные пользователя
    // 3 - rejected("отклонено") - ответ пришел, но он отрицательный, т.е приходит ошибка

    console.log(response);

    const result = await response.json();

    if (response.ok) {
      // Тут выполняем действия по успешному ответу на запрос
      setUserData(result.results[0]);
    } else {
      // Тут обрабатываем ошибку
    }
  };

  console.log(userData)

  return (
    <PageWrapper>
      <UserCard>
        <Avatar src={userData?.picture?.large} alt="User Avatar" />
        <InfoContainer>
          <UserTitle>Full Name:</UserTitle>
          <UserInfo></UserInfo>
        </InfoContainer>
        <InfoContainer>
          <UserTitle>Email:</UserTitle>
          <UserInfo>{userData?.email}</UserInfo>
        </InfoContainer>
        <InfoContainer>
          <UserTitle>Phone:</UserTitle>
          <UserInfo></UserInfo>
        </InfoContainer>
        <Button name="Get Random User" onButtonClick={getRandomUser} />
      </UserCard>
    </PageWrapper>
  );
}

export default Consultation_04;

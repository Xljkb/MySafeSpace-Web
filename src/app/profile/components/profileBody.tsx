
"use client"

import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import Image from "next/image"
import Avatar from "/public/assets/Avatar_Default.svg"
import ProfileChart from '../components/ProfileChart';
import Progress from "/public/assets/Прогресс.svg"
import Test from "/public/assets/testpass.svg"
import { useRouter } from "next/navigation"

const ProfilePage = () => {
  const router = useRouter()
  const handleCardClick = () => {
    console.log('Карточка нажата');
    router.push("/test")
  };

  return (
    <div className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
      <main className='flex'>
        <div>
        <section className="h-[200px] w-[200px] mr-[400px]">
          <Image src={Avatar} alt="Аватар пользователя" />
        </section>
        <section className="user-info mb-[20px]">
          <p className='H2 mb-[10px] mt-[20px]'>Петросян Борис</p>
          <p className='mt-[20px] mb-[8px]'>Специалист: Иванов И. А.</p>
          <p className='mb-[8px]'>Подписка: Активная</p>
          <p className='mb-[8px]'>Зарегистрирован: 12.02.2024</p>
        </section>
        </div>

        <div className='mt-[50px]'>
            <div className='flex justify-between mb-[70px]'>
              <button className="" onClick={handleCardClick}>
                <Image className="" src={Progress} alt="vid" />
               </button>
               <button className="" onClick={handleCardClick}>
                <Image className="" src={Test} alt="vid" />
               </button>
            </div>
            <ProfileChart/>
        </div>

      </main>
    </div>
  );
}

export default ProfilePage;

import fetchRoomsData from '@/utils/fetchRoomsData'
import RoomsBriefInfo from '@/components/accommodation/infoWrapper/RoomsBriefInfo'
import BedsInfo from '@/components/accommodation/infoWrapper/BedsInfo'
import ReservationCard from '@/components/accommodation/infoWrapper/ReservationCard'
import HostProfile from './HostProfile'
import AccommodationDesc from './AccommodationDesc'

async function BriefInfo({ id }) {
  const fields = ['roomInfo']
  const roomInfo = await fetchRoomsData(id, fields)

  return (
    <div className='flex flex-row justify-between'>
      <div className='flex w-7/12 flex-col'>
        <RoomsBriefInfo id={id} />
        <HostProfile id={id} />
        <AccommodationDesc id={id} />
        <BedsInfo roomInfo={roomInfo.roomInfo} />
      </div>
      <div className='flex w-4/12 justify-end pt-8 md:inline'>
        <ReservationCard />
      </div>
    </div>
  )
}

export default BriefInfo
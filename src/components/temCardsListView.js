import TemCard from '../components/temCard'

function TemCardsListView({tems}) {

  

  return (
    <div className="temDB">
      <div className='TemTemList'>
        {tems.map((tem) => 
          <TemCard key={tem.name} tem={tem}/>
        )}
      </div>
      {console.log(tems)}
    </div>
  );
}

  export default TemCardsListView
function TemCard({tem}) {

    return (
        <div className="temCards">
            <p className='temNumber'>
                {tem.number}
            </p>
            <object
                type="image/url"
                data={`https://temtem-api.mael.tech${tem.renderStaticImage}`}>

                <img src={`https://temtem-api.mael.tech${tem.icon}`}></img>
            </object>
            <p className='temName'>
                {tem.name}
            </p>
            <p className='temTypes'>
                {tem.types}
            </p>
            <div className='temStats'>
                <p className='temHp'>
                    {tem.stats.hp}
                </p>
                <p className='temSta'>
                    {tem.stats.sta}
                </p>
                <p className='temAtk'>
                    {tem.stats.atk}
                </p>
                <p className='temDef'>
                    {tem.stats.def}
                </p>
                <p className='temSpAtk'>
                    {tem.stats.spatk}
                </p>
                <p className='temSpD'>
                    {tem.stats.spd}
                </p>
            </div>
        </div>
    );
}

export default TemCard
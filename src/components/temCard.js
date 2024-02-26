import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import CardActions from '@mui/joy/CardActions';
import Typography from '@mui/joy/Typography';

function TemCard({ tem }) {

    const count = 0

    return (
        <div className='container'>
            <Card
                sx={{
                    width: 320,
                    maxWidth: '100%',
                    boxShadow: 'lg',
                }}
            >
                {/* Name/Image */}
                <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                    <object
                        type="image/url"
                        data={`https://temtem-api.mael.tech${tem.renderStaticImage}`} alt='TemTem Static Image'>

                        <Avatar src={`https://temtem-api.mael.tech${tem.icon}`}
                            alt='TemTem Icon' sx={{ '--Avatar-size': '6rem' }}></Avatar>
                    </object>
                    <Typography level="title-lg">{tem.name}</Typography>

                    {/* Types */}
                    <Typography level="body-sm" sx={{ maxWidth: '24ch', mt: 2 }} fontWeight={'bold'}> Type(s) </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        {tem.types.map((type) =>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }} key={type}> {type} </Typography>
                        )}
                    </Box>

                    {/* Traits */}
                    <Typography level="body-sm" sx={{ maxWidth: '24ch', mt: 2 }} fontWeight={'bold'}> Traits </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        {tem.traits.map((trait) =>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }} key={trait}> {trait} </Typography>
                        )}
                    </Box>

                    {/* Stats */}
                    <Typography level="body-sm" sx={{ maxWidth: '24ch', mt: 2 }} fontWeight={'bold'}> Stats </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>HP {tem.stats.hp}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>STA {tem.stats.sta}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>SPD {tem.stats.spd}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>ATK {tem.stats.atk}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>DEF {tem.stats.def}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>SPATK {tem.stats.spatk}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>SPDEF {tem.stats.spdef}</Typography>
                    </Box>

                    {/* TV Yields */}
                    <Typography level="body-sm" sx={{ maxWidth: '24ch', mt: 2 }} fontWeight={'bold'}> TV Yields </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>HP {tem.tvYields.hp}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>STA {tem.tvYields.sta}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>SPD {tem.tvYields.spd}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>ATK {tem.tvYields.atk}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>DEF {tem.tvYields.def}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>SPATK {tem.tvYields.spatk}</Typography>
                        <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>SPDEF {tem.tvYields.spdef}</Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2
                        }}
                    >
                        {tem.evolution.evolutionTree.map(({evo}) =>
                            <Typography level="body-sm" sx={{ maxWidth: '24ch' }} key={evo.number}> {evo} </Typography>
                        )}
                    </Box>

                </CardContent>
                <CardOverflow sx={{ bgcolor: 'background.level1' }}>
                    <CardActions buttonFlex="1">
                        <Button>Wiki</Button>
                    </CardActions>
                </CardOverflow>
            </Card>
        </div>
    )

    // return (
    //     <div>
    //         <div className="temCards">
    //             <p className='temNumber'>
    //                 {tem.number}
    //             </p>
    //             <object
    //                 type="image/url"
    //                 data={`https://temtem-api.mael.tech${tem.renderStaticImage}`} alt='TemTem Static Image'>

    //                 <img src={`https://temtem-api.mael.tech${tem.icon}`} alt='TemTem Icon'></img>
    //             </object>
    //             <p className='temName'>
    //                 {tem.name}
    //             </p>
    //             <p className='temTypes'>
    //                 {tem.types}
    //             </p>
    //             <div className='temStats'>
    //                 <p className='temHp'>
    //                     {tem.stats.hp}
    //                 </p>
    //                 <p className='temSta'>
    //                     {tem.stats.sta}
    //                 </p>
    //                 <p className='temAtk'>
    //                     {tem.stats.atk}
    //                 </p>
    //                 <p className='temDef'>
    //                     {tem.stats.def}
    //                 </p>
    //                 <p className='temSpAtk'>
    //                     {tem.stats.spatk}
    //                 </p>
    //                 <p className='temSpD'>
    //                     {tem.stats.spd}
    //                 </p>
    //             </div>
    //         </div>
    //     </div>

    // );
}

export default TemCard
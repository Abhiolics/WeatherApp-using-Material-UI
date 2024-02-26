import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";



export default function Infobox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/1202765837/photo/bright-watercolor-abstract-background-texture-banner-design-template-place-for-text.webp?s=170667a&w=0&k=20&c=R5G0jQO0yBwqptV5EnjsjCALuzBaWuCswANbVPMzxes=";
    let HOT_URL ="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL ="https://plus.unsplash.com/premium_photo-1675791930245-a94ea3edcaea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return(
        <div className="InfoBox">
            {/* <h1>Weather Info {info.weather}</h1> */}
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}

        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature = {info.temp}&deg;C</div>
          <div>Humidity = {info.humidity}&deg;C</div>
          <div>Min Temp = {info.tempMin}&deg;C</div>
          <div>Max Temp = {info.tempMax}&deg;C</div>
          <div>The Weather can be described as <i>{info.weather}</i> and feels like= {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
    
    </Card>
        </div>
        </div>
    )
}
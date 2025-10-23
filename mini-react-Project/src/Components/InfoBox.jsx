import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const InfoBox = ({ info }) => {
  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";

  const RAI_URL =
    "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600";

  const img_url =
    "https://images.unsplash.com/photo-1579003593419-98f949b9398f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600";
  return (
    <div className="InfoBox">
      <h1>Weather info : {info.weather}</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? RAI_URL : info.temp > 15 ? HOT_URL : img_url
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <br />
            <div>Temprature = {info.temp}&deg;C</div>
            <br />
            <div>Humidity = {info.humidity}</div>
            <p>Min Temp : {info.tempMin}</p>
            <p>Max Temp : {info.tempMax}</p>
            <p>Weather Feels-Like : {info.feelslike}&deg;C</p>

            <h3>
              Weather seems like <i>{info.weather}</i>
            </h3>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";

const ProductsListElement = ({ bsr_category, img, link, name, price }) => {
const {t} = useTranslation()
  return (
    <Grid item>
      <Card
        sx={{
          width: "452px",
          height: "492px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: "452px",
            height: "480px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            image={img}
            alt={name}
            sx={{ height: "320px", objectFit: "contain" }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {t("productsElementCategory")}: {bsr_category}
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
            {t("productsElementPrice")}: {price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

ProductsListElement.propTypes = {
  bsr_category: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};

export default ProductsListElement;

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({
  imageLink,
  productName,
  price,
}: {
  imageLink: string;
  productName: string;
  price: number;
}) => {
  return (
    <Card className="w-[300px] p-5">
      <CardMedia
        component={"img"}
        height={100}
        image={imageLink}
        alt={"hello"}
      />
      <CardContent>
        <Typography>{productName}</Typography>
      </CardContent>
      <Typography>{price}</Typography>
      <Button endIcon={<ShoppingCartIcon />}>Buy Now </Button>
      <CardActionArea></CardActionArea>
    </Card>
  );
};

export default ProductCard;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import simpleImage from "../../assets/simpleImage.jpg";
import { useSelector, useDispatch } from "react-redux";
import { AuthStatus } from "../../redux/reducers/auth.reducer";
import { fetchApi } from "../../api/apiCall";
import { CustomModal } from "../";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CardPurchase({ name, id, image, level, description }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalSecond, setOpenModalSecond] = React.useState(false);
  const auth = useSelector((state) => state.Auth);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const onHandlePurchase = (id) => {
    if (auth.status !== AuthStatus.LOGGED_IN) {
      setOpenModal(true);
    } else {
      const data = { id_customer: auth?.user[0].id_customer, id_product: id };
      console.log(data);
      fetchApi("/purchase", { method: "POST", body: data })
        .then((result) => {
          console.log(result);
          setOpenModalSecond(true);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader title={name} />
        <CardMedia className={classes.media} image={image} title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {level}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Typography paragraph style={{ margin: "0px  5px" }}>
            Kup dziś
          </Typography>

          <IconButton
            aria-label="add to favorites"
            onClick={() => onHandlePurchase(id)}
          >
            <ShoppingCartIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Opis:</Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
      <CustomModal
        showModal={openModal}
        closeModal={() => setOpenModal(false)}
        title="Zaloguj się"
      >
        <span>Zakup możliwy tylko dla zalogowanych użytkowników</span>
      </CustomModal>{" "}
      <CustomModal
        showModal={openModalSecond}
        closeModal={() => setOpenModalSecond(false)}
        title="Gratulacje"
      >
        <span>Kupiłeś swój wymarzony trening</span>
      </CustomModal>
    </React.Fragment>
  );
}

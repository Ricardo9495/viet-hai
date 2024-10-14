import { Fab } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import { makeStyles } from "@material-ui/core";
import theme from "@/theme";

const useStyles = makeStyles({
  root: {
    height: "100%",
    position: "absolute",
    top: 0,
    // right: ({ right }: { right: boolean }) => right && 2,
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    cursor: "pointer",
  },
  arrow: {
    position: "relative",
    display: "block",
    backgroundColor: "rgba(28, 36, 91, 0.9)",
    boxShadow: "unset",
    border: "3px solid",
    borderRadius: "50%",
    borderColor: theme.palette.primary.light,
    color: theme.palette.primary.light,
    transition: "opacity 300ms, background 300ms",
    opacity: 0.7,
    "&::before": {
      position: "absolute",
      display: "block",
      border: "15px solid transparent",
      right: ({ left }: { left: boolean }) => left && -4,
      borderRightColor: ({ left }: { left: boolean }) => left && theme.palette.primary.main,
      left: ({ right }: { right: boolean })  => right && -4,
      borderLeftColor: ({ right }: { right: boolean }) => right && theme.palette.primary.main,
    },
    "&:hover": {
      background: theme.palette.primary.main,
      opacity: 1,
    },
  },
});

type Props = {
  right: boolean;
  left: boolean;
  handleClick: () => void;
};

const Arrow = (props: Props) => {
const { handleClick, right, left } = props;

  if (!right && !left) {
    throw new Error("One of `right` or `left` props must be true");
  }

  const classes = useStyles({ right: right || false })

  return (
    <div
      onClick={handleClick}
      className={classes.root}
    >
      {right ? <ArrowForwardIosIcon fontSize='large' className={classes.arrow} /> : <ArrowBackIosIcon fontSize='large' className={classes.arrow}/>}
    </div>
  );
}

export default Arrow;

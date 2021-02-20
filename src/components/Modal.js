import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const { data, open, handleClose } = props;

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Hello, {data.name}
        </DialogTitle>
        <DialogContent dividers>
          <Avatar alt="profile" src={data.profileImage} />
          <Grid item xs={18} sm container>
            <Grid item xs container direction="row" spacing={4}>
              <Grid item xs>
                <FormLabel> Email:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={18} sm container>
            <Grid item xs container direction="row" spacing={4}>
              <Grid item xs>
                <FormLabel> Username:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.username}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> Gender:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.gender}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> Phone No:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.phone}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> Cell No:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.cell}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={18} sm container>
            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> Age:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.age}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> City:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.city}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> State:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.state}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs container direction="row" spacing={8}>
              <Grid item xs>
                <FormLabel> Country:</FormLabel>
                <Typography gutterBottom variant="subtitle1">
                  {data.country}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

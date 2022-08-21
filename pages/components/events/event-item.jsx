import classes from "./event-item.module.css";
import Button from "../ui/button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img alt={title} src={`/${image}`} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <CalendarMonthIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <LocationOnIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <div>
              <span>Explore Event </span>
              <span>
                <ArrowRightAltIcon />
              </span>
            </div>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;

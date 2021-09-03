import { Visibility } from "@material-ui/icons"
import "./widgetSm.css"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Member</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Munroe</span>
                        <span className="widgetSmUserTitle">Pst. Myles Munroe</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img 
                      src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" 
                      alt="" 
                      className="widgetSmImg" 
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Munroe</span>
                        <span className="widgetSmUserTitle">Pst. Myles Munroe</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Munroe</span>
                        <span className="widgetSmUserTitle">Pst. Myles Munroe</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

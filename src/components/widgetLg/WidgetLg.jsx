import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" 
                          alt="" 
                          className="widgetLgImg" 
                        />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">3 Sept 2021</td>
                    <td className="widgetLgAmount">$426.09</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" 
                          alt="" 
                          className="widgetLgImg" 
                        />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">3 Sept 2021</td>
                    <td className="widgetLgAmount">$426.09</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" 
                          alt="" 
                          className="widgetLgImg" 
                        />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">3 Sept 2021</td>
                    <td className="widgetLgAmount">$426.09</td>
                    <td className="widgetLgStatus"><Button type="Pending">Approved</Button></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img 
                          src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PTFJYUUR3I4GLC25BTSYUP73H4.jpg&w=246&h=300" 
                          alt="" 
                          className="widgetLgImg" 
                        />
                        <span className="widgetLgName">John Doe</span>
                    </td>
                    <td className="widgetLgDate">3 Sept 2021</td>
                    <td className="widgetLgAmount">$426.09</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
